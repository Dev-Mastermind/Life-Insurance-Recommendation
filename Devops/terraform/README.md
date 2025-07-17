# Terraform AWS Infrastructure for Life Insurance Recommendation App

This directory contains Terraform configuration files to provision AWS infrastructure for deploying the Life Insurance Recommendation App using Amazon ECS (Elastic Container Service).

---

## Files
- `main.tf`: Provisions ECS cluster, ECR repositories, and IAM roles.
- `variables.tf`: Defines input variables (e.g., AWS region).
- `outputs.tf`: Outputs useful resource information (ECS cluster name, ECR repo URLs).

---

## Prerequisites
- [Terraform](https://www.terraform.io/downloads.html) installed
- AWS account and credentials configured (via environment variables or AWS CLI)

---

## Usage
1. **Review and customize variables**
   - Edit `variables.tf` to set your preferred AWS region.
2. **Initialize Terraform**
   ```sh
   terraform init
   ```
3. **Review the execution plan**
   ```sh
   terraform plan
   ```
4. **Apply the configuration**
   ```sh
   terraform apply
   ```
5. **View outputs**
   - After apply, Terraform will display the ECS cluster name and ECR repository URLs.

---

## Next Steps
- **Push Docker images**: Use the ECR URLs to push your backend and frontend Docker images.
- **Expand infrastructure**: Add VPC, subnets, security groups, ECS task definitions, and ECS services to fully automate deployment.
- **Integrate with EC2 deployment**: Use the Devops/ec2-deployment folder to configure EC2 instances or manage ECS services if needed.

---

## References
- [Terraform AWS Provider Docs](https://registry.terraform.io/providers/hashicorp/aws/latest/docs)
- [AWS ECS Documentation](https://docs.aws.amazon.com/ecs/)
- [AWS ECR Documentation](https://docs.aws.amazon.com/AmazonECR/latest/userguide/what-is-ecr.html) 