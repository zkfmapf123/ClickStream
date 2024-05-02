provider "aws" {
  profile = "leedonggyu"
  region  = "ap-northeast-2"
}

terraform {
  backend "s3" {
    bucket  = "test-bucket-dkdk"
    key     = "s3/terraform.tfstate"
    region  = "ap-northeast-2"
    profile = "leedonggyu"
  }
}
