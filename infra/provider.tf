provider "aws" {
  profile = "root"
  region  = "ap-northeast-2"
}

terraform {
  backend "s3" {
    bucket = "test-bucket-dkdk"
    key    = "network/terraform.tfstate"
    region = "ap-northeast-2"
  }
}
