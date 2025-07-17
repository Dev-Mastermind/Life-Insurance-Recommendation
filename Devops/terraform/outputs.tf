output "ecs_cluster_name" {
  value = aws_ecs_cluster.main.name
}

output "backend_ecr_repo_url" {
  value = aws_ecr_repository.backend.repository_url
}

output "frontend_ecr_repo_url" {
  value = aws_ecr_repository.frontend.repository_url
} 