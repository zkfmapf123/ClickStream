package main

import (
	"context"
	"encoding/json"
	"fmt"
	"os"

	"github.com/aws/aws-lambda-go/lambda"
	"github.com/aws/aws-sdk-go-v2/config"
)

var (
	QUEUE_NAME = os.Getenv("QUEUE_NAME")
)

func HandleRequest(ctx context.Context, event json.RawMessage) (string, error) {

	fmt.Println("rawMessage >> ", event)
	fmt.Println("SqsEvent >> ", string(event))

	_, err := config.LoadDefaultConfig(context.TODO())
	if err != nil {
		panic(err)
	}

	// S3에 Zip으로 묶어서 Put하면 됨...

	return fmt.Sprintln("Hello consumeClickEvents"), nil
}

func main() {
	lambda.Start(HandleRequest)
}
