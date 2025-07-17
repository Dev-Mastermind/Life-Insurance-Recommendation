# Terraform configuration for Life Insurance Recommendation App on AWS ECS

provider "aws" {
  region = var.aws_region
}

# Create an ECS Cluster
resource "aws_ecs_cluster" "main" {
  name = "life-insurance-cluster"
}

# Create ECR repositories for backend and frontend
resource "aws_ecr_repository" "backend" {
  name = "backend-repo"
}

resource "aws_ecr_repository" "frontend" {
  name = "frontend-repo"
}

# Example IAM role for ECS tasks (expand as needed)
resource "aws_iam_role" "ecs_task_execution" {
  name = "ecsTaskExecutionRole"
  assume_role_policy = data.aws_iam_policy_document.ecs_task_assume_role_policy.json
}

data "aws_iam_policy_document" "ecs_task_assume_role_policy" {
  statement {
    actions = ["sts:AssumeRole"]
    principals {
      type        = "Service"
      identifiers = ["ecs-tasks.amazonaws.com"]
    }
  }
}

resource "aws_iam_role_policy_attachment" "ecs_task_execution_policy" {
  role       = aws_iam_role.ecs_task_execution.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy"
}

# You will need to add VPC, subnets, security groups, and ECS service/task definitions for a full deployment.
# See the README or deploy.md for more detailed steps. 