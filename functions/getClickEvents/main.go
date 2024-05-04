package main

import (
	"context"
	"fmt"

	"github.com/aws/aws-lambda-go/lambda"
)

type MyEvent struct {
}

func HandleRequest(ctx context.Context, name MyEvent) (string, error) {
	fmt.Println(name)

	return fmt.Sprintln("Hello getClickEvents"), nil
}

func main() {
	lambda.Start(HandleRequest)
}
