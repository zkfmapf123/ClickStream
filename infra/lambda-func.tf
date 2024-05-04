resource "aws_iam_role" "lambda_role" {
  name = "lambda-click-stream-role"

  assume_role_policy = jsonencode({
    "Version" : "2012-10-17",
    "Statement" : [
      {
        "Effect" : "Allow",
        "Principal" : {
          "Service" : "lambda.amazonaws.com"
        },
        "Action" : "sts:AssumeRole"
      }
    ]
  })
}

resource "aws_iam_policy" "lambda_policy" {

  policy = jsonencode({
    "Version" : "2012-10-17",
    "Statement" : [
      {
        "Effect" : "Allow",
        "Action" : [
          "logs:CreateLogGroup",
          "logs:CreateLogStream",
          "logs:PutLogEvents",
        ],
        "Resource" : [
          "*"
        ]
      },
      {
        "Effect" : "Allow",
        "Action" : [
          "elasticloadbalancing:RegisterTargets",
          "elasticloadbalancing:DeregisterTargets",
          "elasticloadbalancing:Describe*"
        ],
        "Resource" : ["*"]
      },
      {
        "Effect" : "Allow",
        "Action" : [
          "sqs:ReceiveMessage",
          "sqs:DeleteMessage"
        ],
        "Resource" : ["*"]
      },
    ]
  })
}

resource "aws_iam_role_policy_attachment" "lambda_policy_attachment" {
  role       = aws_iam_role.lambda_role.name
  policy_arn = aws_iam_policy.lambda_policy.arn
}

data "archive_file" "clickStream" {
  type        = "zip"
  source_file = "../functions/getClickEvents/bootstrap"
  output_path = "clickStream.zip"
}

module "getClickEvents" {
  source  = "zkfmapf123/lambda/lee"
  version = "1.0.1"

  lambda_source_code = base64encode(data.archive_file.clickStream.output_path)

  lambda_config = {
    iam_name = aws_iam_role.lambda_role.name
    filename = "clickStream.zip"
    handler  = "bootstrap"
    name     = "getClickEvents"
  }

  lambda_hardware = {
    timeout     = "10"
    memory_size = "128"
    runtime     = "provided.al2023"
  }

  env_vars = {

  }

  tags = {

  }

  depends_on = [aws_iam_role.lambda_role]
}

data "archive_file" "consumeStream" {
  type        = "zip"
  source_file = "../functions/consumeClickEvents/bootstrap"
  output_path = "consumeStream.zip"
}

module "consumeClickEvents" {
  source  = "zkfmapf123/lambda/lee"
  version = "1.0.1"

  lambda_source_code = base64encode(data.archive_file.consumeStream.output_path)

  lambda_config = {
    iam_name = aws_iam_role.lambda_role.name
    filename = "consumeStream.zip"
    handler  = "bootstrap"
    name     = "consumeClickEvents"
  }

  lambda_hardware = {
    timeout     = "10"
    memory_size = "128"
    runtime     = "provided.al2023"
  }

  env_vars = {

  }

  tags = {

  }

  depends_on = [aws_iam_role.lambda_role]
}

output "function" {
  value = [
    module.getClickEvents, module.consumeClickEvents
  ]
}
