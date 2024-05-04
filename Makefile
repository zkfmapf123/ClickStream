## Terraform Settings
setting:
	@cd infra && terraform init && terraform apply


## Shopping Insight 배포
upload-fe:
	@cd shopping-insight && npm run login && npm run push

deploy: upload-fe
	@make setting