# resource "aws_security_group" "alb_lambda_sg" {

#   name        = "alb-lambda-sg"
#   description = "alb-lambda-sg"
#   vpc_id      = module.vpc.vpc.vpc_id

#   ingress {
#     from_port   = 0
#     to_port     = 0
#     protocol    = "-1"
#     cidr_blocks = ["0.0.0.0/0"]
#   }

#   egress {
#     from_port   = 0
#     to_port     = 0
#     protocol    = "-1"
#     cidr_blocks = ["0.0.0.0/0"]
#   }

#   tags = {
#     Name = "alb-lambda-sg"
#   }

#   depends_on = [module.vpc, module.ecs]
# }

# resource "aws_lb" "lambda_alb" {
#   name               = "lambda-alb"
#   internal           = false
#   load_balancer_type = "application"
#   security_groups    = [aws_security_group.alb_lambda_sg.id]
#   subnets            = values(module.vpc.vpc.was_subnets)

#   depends_on = [module.vpc, module.ecs]
# }

# resource "aws_lb_target_group" "lambda_alb" {
#   name        = "lambda-to-tg"
#   port        = 80
#   protocol    = "HTTP"
#   vpc_id      = module.vpc.vpc.vpc_id
#   target_type = "lambda"
#   health_check {
#     enabled             = false
#     healthy_threshold   = 5
#     interval            = 35
#     unhealthy_threshold = 2
#   }

#   depends_on = [module.vpc, module.ecs]

# }

# resource "aws_lb_listener" "lambda_alb_listener" {
#   load_balancer_arn = aws_lb.lambda_alb.arn
#   port              = "80"
#   protocol          = "HTTP"

#   default_action {
#     type             = "forward"
#     target_group_arn = aws_lb_target_group.lambda_alb.arn
#   }

#   depends_on = [module.vpc, module.ecs]
# }
