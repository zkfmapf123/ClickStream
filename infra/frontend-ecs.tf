module "ecs" {
  source = "zkfmapf123/ecs-fargate/lee"
  prefix = "shopping-insight"

  vpc_attr = {
    vpc_id         = module.vpc.vpc.vpc_id
    alb_subnet_ids = values(module.vpc.vpc.webserver_subnets)
  }

  lb_attr = {
    internal             = false
    deregistration_delay = 60
  }

  lb_health = {
    path                = "/"
    protocol            = "HTTP"
    interval            = 30
    timeout             = 5
    unhealthy_threshold = 2
    healthy_threshold   = 2
  }

  is_create_cluster = {
    is_enable           = true
    exists_cluster_name = ""
  }

  is_create_ecr = {
    is_enable       = false
    exists_ecr_name = ""
  }

  ecs_attr = {
    port          = 80
    cpu           = 256
    memory        = 512
    desired_count = 1
    subnet_ids    = values(module.vpc.vpc.was_subnets)
    is_public     = false
  }

  task_def = [{
    name      = "shopping-insight"
    image     = "zkfmapf123/shoppings:latest"
    cpu       = 256
    memory    = 512
    essential = true,

    environment = [
      {
        name  = "PORT",
        value = "3000"
      }
    ],
    portMappings = [
      {
        containerPort = 80
        hostPort      = 80
        protocol      = "tcp"
      },
    ],
    logConfiguration = {
      logDriver = "awslogs"
      options = {
        awslogs-group         = "shopping-insight"
        awslogs-create-group  = "true"
        awslogs-region        = "ap-northeast-2"
        awslogs-stream-prefix = "ecs"
      }
    }
  }]
}
