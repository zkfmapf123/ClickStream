## Terraform Settings
setting:
	@cd infra && terraform init && terraform apply --auto-approve && rm -rf *.zip

## Shopping Insight 배포
upload-fe:
	@cd shopping-insight && npm run login && npm run push

## Lambda Build
lambda-build:
	@cd functions/getClickEvents && env GOOS=linux GOARCH=arm64 CGO_ENABLED=0 go build -tags lambda.norpc -ldflags="-s -w" -o bootstrap main.go
	@cd functions/consumeClickEvents && env GOOS=linux GOARCH=arm64 CGO_ENABLED=0 go build -tags lambda.norpc -ldflags="-s -w" -o bootstrap main.go
	
deploy: upload-fe
	@make setting