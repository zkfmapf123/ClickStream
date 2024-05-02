vpc:
	@cd network && terraform init && terraform apply 

s3:
	@cd s3-buckets && terraform init && terraform apply 