variable "aws_region" {
  description = "AWS region"
  default     = "ap-southeast-1"
}

variable "ami_id" {
  description = "AMI ID for Ubuntu 22.04 LTS"
  default     = "ami-0659642169bf1b4b2"  # Ubuntu 22.04 - March 2026
}

variable "instance_type" {
  description = "EC2 instance type"
  default     = "t2.micro"
}

variable "key_name" {
  description = "Name of the key pair"
  default     = "cookies-shop-key"
}

variable "public_key_path" {
  description = "Path to public SSH key"
  default     = "/Users/nurariffzubaidi/.ssh/id_rsa.pub"
}
