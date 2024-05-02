variable "prefix" {
  default = "dk"
}

resource "aws_s3_bucket" "click_stream_bucket" {
  bucket = "${var.prefix}-click-stream-bucket"
}

resource "aws_s3_bucket_policy" "click_stream_bucket_policy" {
  bucket = aws_s3_bucket.click_stream_bucket.bucket

  policy = jsonencode({
    "Version" : "2012-10-17",
    "Statement" : [
      {
        "Effect" : "Allow",
        "Principal" : "*",
        "Action" : "s3:*",
        "Resource" : [
          "${aws_s3_bucket.click_stream_bucket.arn}",
          "${aws_s3_bucket.click_stream_bucket.arn}/*"
        ]
      }
    ]
  })
}

output "out" {
  value = aws_s3_bucket.click_stream_bucket
}
