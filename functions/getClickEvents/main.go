package main

import (
	"context"
	"encoding/json"
	"fmt"
	"os"
	"strconv"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
	"github.com/aws/aws-sdk-go-v2/aws"
	"github.com/aws/aws-sdk-go-v2/config"
	"github.com/aws/aws-sdk-go-v2/service/sqs"
	"github.com/aws/aws-sdk-go-v2/service/sqs/types"
)

type BodyDataParams struct {
	ClickEvent     string `json:"clickEvent"`
	UserId         string `json:"userId"`
	UserAgent      string `json:"userAgent"`
	Language       string `json:"language"`
	EventCreatedAt int    `json:"eventCreatedAt"`
}

var (
	QUEUE_NAME = os.Getenv("QUEUE_NAME")
)

func handler(ctx context.Context, request events.ALBTargetGroupRequest) (events.ALBTargetGroupResponse, error) {
	msg := "OK! Put Data"

	var data map[string]BodyDataParams
	if err := json.Unmarshal([]byte(request.Body), &data); err != nil {
		fmt.Println("JSON 구문 분석 오류:", err)
		msg = "Fail!"
	}

	if data["body"].UserId != "" {
		enqueue(QUEUE_NAME, data["body"])
	}

	// 요청을 처리하고 응답을 생성합니다.
	response := events.ALBTargetGroupResponse{
		StatusCode:        200,
		StatusDescription: "200 OK",
		Headers:           map[string]string{"Content-Type": "text/plain"},
		Body:              msg,
		IsBase64Encoded:   false,
	}

	return response, nil
}

func enqueue(qName string, event BodyDataParams) {
	fmt.Println(qName, event)

	cfg, err := config.LoadDefaultConfig(context.TODO())
	if err != nil {
		panic(err)
	}

	q := sqs.NewFromConfig(cfg)

	_, err = q.SendMessage(context.TODO(), &sqs.SendMessageInput{
		QueueUrl:    &qName,
		MessageBody: aws.String(fmt.Sprintf("clickStream-%s", event.UserId)),
		MessageAttributes: map[string]types.MessageAttributeValue{
			"ClickEvent": {
				DataType:    aws.String("String"),
				StringValue: aws.String(event.ClickEvent),
			},
			"UserId": {
				DataType:    aws.String("String"),
				StringValue: aws.String(event.UserId),
			},
			"UserAgent": {
				DataType:    aws.String("String"),
				StringValue: aws.String(event.UserAgent),
			},
			"Language": {
				DataType:    aws.String("String"),
				StringValue: aws.String(event.Language),
			},
			"EventCreatedAt": {
				DataType:    aws.String("String"),
				StringValue: aws.String(strconv.Itoa(event.EventCreatedAt)),
			},
		},
	})

	if err != nil {
		panic(err)
	}
}

func main() {
	// Lambda 핸들러를 등록합니다.
	lambda.Start(handler)
}
