Here's a comprehensive script that will create a professional README file for your Cookies Shop project and push it to GitHub:

```bash
#!/bin/bash

# Comprehensive README Creator for Cookies Shop
# This script creates a professional README and pushes to GitHub

echo "🍪 Creating Comprehensive README for Cookies Shop..."
echo "=================================================="

# Navigate to project directory
cd /Users/nurariffzubaidi/cookies-shop

# Create the comprehensive README
cat > README.md << 'EOF'
# 🍪 Cookie Haven - Artisan Cookies Shop

[![AWS](https://img.shields.io/badge/AWS-Free%20Tier-orange)](https://aws.amazon.com/free/)
[![Terraform](https://img.shields.io/badge/Terraform-Infrastructure%20as%20Code-purple)](https://www.terraform.io/)
[![Ansible](https://img.shields.io/badge/Ansible-Automation-red)](https://www.ansible.com/)
[![Docker](https://img.shields.io/badge/Docker-Containerization-blue)](https://www.docker.com/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

> A fully responsive static website for an artisan cookies shop, deployed on AWS using modern DevOps practices including Infrastructure as Code (Terraform), configuration management (Ansible), and containerization (Docker).

## 🌐 Live Demo

**Current Deployment:** [http://18.138.249.114](http://18.138.249.114)

![Cookies Shop Demo](https://via.placeholder.com/1200x400/8B4513/FFFFFF?text=Cookie+Haven+-+Artisan+Cookies+Shop)

---

## 📋 Table of Contents
- [Project Overview](#project-overview)
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Quick Start](#quick-start)
- [Detailed Deployment Guide](#detailed-deployment-guide)
  - [1. Clone Repository](#1-clone-repository)
  - [2. Configure SSH Key](#2-configure-ssh-key)
  - [3. Deploy Infrastructure with Terraform](#3-deploy-infrastructure-with-terraform)
  - [4. Configure with Ansible](#4-configure-with-ansible)
  - [5. Verify Deployment](#5-verify-deployment)
- [Manual Deployment](#manual-deployment)
- [Screenshots](#screenshots)
- [AWS Free Tier Notice](#aws-free-tier-notice)
- [Troubleshooting](#troubleshooting)
- [Clean Up](#clean-up)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

---

## 🎯 Project Overview

This project demonstrates a complete DevOps pipeline for deploying a static website to AWS. It serves as a practical example of:

- **Infrastructure as Code (IaC)** - Using Terraform to provision AWS resources
- **Configuration Management** - Using Ansible for automated server setup
- **Containerization** - Using Docker for consistent application deployment
- **CI/CD Ready** - Structured for GitHub Actions integration
- **Cost Optimized** - All resources within AWS Free Tier limits

The website itself is a beautiful, modern cookie shop with product listings, about page, and interactive contact form.

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        DEVELOPMENT FLOW                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────────┐     ┌──────────────┐     ┌──────────────┐    │
│  │   Developer  │────▶│    GitHub    │────▶│   Terraform  │    │
│  │   (Local)    │     │  Repository  │     │    (IaC)     │    │
│  └──────────────┘     └──────────────┘     └──────┬───────┘    │
│                                                     │            │
│                                                     ▼            │
│  ┌──────────────┐     ┌──────────────┐     ┌──────────────┐    │
│  │    User      │◀────│    Docker    │◀────│   AWS EC2    │    │
│  │  (Browser)   │     │  Container   │     │  (Ubuntu)    │    │
│  └──────────────┘     │   (Nginx)    │     └──────────────┘    │
│                       └──────────────┘            ▲            │
│                                                   │            │
│                                            ┌──────┴───────┐    │
│                                            │   Ansible    │    │
│                                            │  (Config)    │    │
│                                            └──────────────┘    │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🛠️ Tech Stack

| Category | Technology | Version | Purpose |
|----------|------------|---------|---------|
| **Frontend** | HTML5 | - | Structure |
| | CSS3 | - | Styling |
| | Vanilla JavaScript | ES6 | Interactivity |
| **Containerization** | Docker | 20.10+ | Container runtime |
| | Nginx | Alpine | Web server |
| **Infrastructure** | Terraform | 1.0+ | Infrastructure as Code |
| | AWS | - | Cloud provider |
| **Configuration** | Ansible | 2.9+ | Configuration management |
| **Cloud Services** | EC2 | t2.micro | Compute |
| | Security Groups | - | Firewall |
| | Key Pairs | - | SSH access |
| **Version Control** | Git | 2.0+ | Source control |
| | GitHub | - | Repository hosting |

---

## ✨ Features

### Website Features
| Feature | Description |
|---------|-------------|
| 📱 **Responsive Design** | Works perfectly on mobile, tablet, and desktop devices |
| 🍪 **Product Gallery** | 6 signature cookies with images, descriptions, and pricing |
| 📝 **Contact Form** | Interactive form with client-side validation |
| 🎨 **Modern UI** | Clean design with hover effects and smooth animations |
| 🚀 **Fast Loading** | Optimized assets for quick page loads |
| 🔍 **SEO Friendly** | Semantic HTML structure |

### DevOps Features
| Feature | Description |
|---------|-------------|
| 🏗️ **Infrastructure as Code** | Reproducible AWS infrastructure with Terraform |
| 🤖 **Configuration Automation** | Idempotent server setup with Ansible |
| 🐳 **Containerization** | Consistent deployment with Docker |
| 🔒 **Security First** | Properly configured security groups |
| 💰 **Cost Optimized** | All resources within AWS Free Tier |
| 📦 **Modular Structure** | Well-organized project layout |

---

## 📁 Project Structure

```
Cookies-Shop/
│
├── frontend/                     # Static website files
│   ├── index.html               # Home page with product grid
│   ├── about.html               # About page with company story
│   ├── contact.html             # Contact page with form
│   ├── style.css                # Responsive CSS styling
│   └── app.js                   # JavaScript functionality
│
├── terraform/                    # Infrastructure as Code
│   ├── main.tf                  # Main Terraform configuration
│   ├── variables.tf             # Input variables
│   ├── outputs.tf               # Output values
│   └── terraform.tfvars.example # Example variable file
│
├── ansible/                      # Configuration Management
│   ├── playbook.yml             # Main Ansible playbook
│   └── inventory.ini            # Host inventory template
│
├── Dockerfile                    # Container configuration
├── .dockerignore                 # Docker ignore patterns
├── .gitignore                    # Git ignore patterns
└── README.md                     # Project documentation
```

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed and configured:

### Required Software
```bash
# Check installations
aws --version        # AWS CLI >= 2.0
terraform --version  # Terraform >= 1.0
ansible --version    # Ansible >= 2.9
git --version        # Git >= 2.0
docker --version     # Docker >= 20.10 (for local testing)
```

### AWS Account Setup
1. Create an AWS account (Free Tier)
2. Configure AWS credentials:
   ```bash
   aws configure
   # Enter your Access Key ID
   # Enter your Secret Access Key
   # Default region: ap-southeast-1
   # Default output format: json
   ```

### SSH Key Setup
```bash
# Generate SSH key pair (if not exists)
ssh-keygen -t rsa -b 4096 -C "your-email@example.com"
# Press Enter for default location
# Optional: Set passphrase or leave empty
```

---

## 🚀 Quick Start

Deploy the entire stack in 5 minutes:

```bash
# Clone the repository
git clone https://github.com/areppzubaidi/Cookies-Shop.git
cd Cookies-Shop

# Configure Terraform variables
cd terraform
cp terraform.tfvars.example terraform.tfvars
# Edit terraform.tfvars with your SSH key path

# Deploy infrastructure
terraform init
terraform apply -auto-approve

# Update Ansible inventory with EC2 IP
cd ../ansible
echo "[cookies_shop]" > inventory.ini
echo "ec2-instance ansible_host=$(cd ../terraform && terraform output -raw instance_public_ip) ansible_user=ubuntu ansible_ssh_private_key_file=~/.ssh/id_rsa" >> inventory.ini

# Deploy application
ansible-playbook -i inventory.ini playbook.yml

# Access the website
open http://$(cd ../terraform && terraform output -raw instance_public_ip)
```

---

## 📖 Detailed Deployment Guide

### 1. Clone Repository

```bash
git clone https://github.com/areppzubaidi/Cookies-Shop.git
cd Cookies-Shop
```

### 2. Configure SSH Key

Create `terraform/terraform.tfvars`:

```bash
cd terraform
cat > terraform.tfvars << 'TFVARS'
aws_region       = "ap-southeast-1"
key_name         = "cookies-shop-key"
public_key_path  = "~/.ssh/id_rsa.pub"
TFVARS
```

### 3. Deploy Infrastructure with Terraform

```bash
# Initialize Terraform
terraform init

# Preview changes
terraform plan

# Apply infrastructure
terraform apply -auto-approve
```

**Expected Output:**
```
Apply complete! Resources: 3 added.

Outputs:

instance_public_ip = "18.138.249.114"
instance_public_dns = "ec2-18-138-249-114.ap-southeast-1.compute.amazonaws.com"
```

Save the public IP address for the next step.

### 4. Configure with Ansible

Update `ansible/inventory.ini`:

```bash
cd ../ansible
cat > inventory.ini << 'INVENTORY'
[cookies_shop]
ec2-instance ansible_host=18.138.249.114 ansible_user=ubuntu ansible_ssh_private_key_file=~/.ssh/id_rsa
INVENTORY
```

Run Ansible playbook:

```bash
ansible-playbook -i inventory.ini playbook.yml
```

This playbook will:
- ✅ Update apt cache
- ✅ Install Docker and dependencies
- ✅ Pull the latest code from GitHub
- ✅ Build the Docker image
- ✅ Run the container on port 80
- ✅ Configure container to restart automatically

### 5. Verify Deployment

```bash
# Check Docker container status
ssh -i ~/.ssh/id_rsa ubuntu@18.138.249.114 "sudo docker ps"

# Test website locally on EC2
ssh -i ~/.ssh/id_rsa ubuntu@18.138.249.114 "curl -I localhost"

# Access from browser
open http://18.138.249.114
```

---

## 🔧 Manual Deployment

If you prefer manual deployment or encounter issues with Ansible:

```bash
# Copy files to EC2
scp -i ~/.ssh/id_rsa -r frontend ubuntu@18.138.249.114:/tmp/
scp -i ~/.ssh/id_rsa Dockerfile ubuntu@18.138.249.114:/tmp/

# SSH into EC2
ssh -i ~/.ssh/id_rsa ubuntu@18.138.249.114

# Inside EC2, run:
sudo apt update
sudo apt install -y docker.io
sudo systemctl start docker
sudo systemctl enable docker

sudo mkdir -p /opt/cookies-shop
sudo cp -r /tmp/frontend /opt/cookies-shop/
sudo cp /tmp/Dockerfile /opt/cookies-shop/
cd /opt/cookies-shop

sudo docker build -t cookies-shop .
sudo docker run -d -p 80:80 --name cookies-shop --restart always cookies-shop

# Verify
sudo docker ps
curl localhost
exit
```

---

## 📸 Screenshots

### Home Page
![Home Page](https://via.placeholder.com/800x400/8B4513/FFFFFF?text=Home+Page+-+Hero+Banner+and+Product+Grid)

### About Page
![About Page](https://via.placeholder.com/800x400/8B4513/FFFFFF?text=About+Page+-+Company+Story+and+Mission)

### Contact Page
![Contact Page](https://via.placeholder.com/800x400/8B4513/FFFFFF?text=Contact+Page+-+Form+and+Store+Information)

### Mobile View
![Mobile View](https://via.placeholder.com/400x600/8B4513/FFFFFF?text=Fully+Responsive+Mobile+View)

---

## 💰 AWS Free Tier Notice

This deployment uses AWS Free Tier eligible resources:

| Service | Resource | Free Tier Limit | Monthly Cost |
|---------|----------|-----------------|--------------|
| **EC2** | t2.micro | 750 hours | $0 |
| **EBS** | 8 GB | 30 GB | $0 |
| **Data Transfer** | Outbound | 15 GB | $0 |
| **Total** | - | - | **$0/month** |

**Important Notes:**
- Free Tier lasts for 12 months from account creation
- Always terminate resources when not in use
- Set up billing alerts to avoid unexpected charges
- Monitor usage via AWS Cost Explorer

---

## 🔍 Troubleshooting

### Common Issues and Solutions

| Issue | Solution |
|-------|----------|
| **SSH Connection Failed** | Wait 2-3 minutes for EC2 to boot, then try again |
| **Permission Denied (publickey)** | Verify key path in terraform.tfvars and key permissions (`chmod 600 ~/.ssh/id_rsa`) |
| **Terraform Apply Fails** | Check AWS credentials: `aws sts get-caller-identity` |
| **Docker Container Not Running** | Check logs: `sudo docker logs cookies-shop` |
| **Website Not Loading** | Verify security group allows port 80: `terraform state show aws_security_group.cookies_sg` |
| **Ansible Connection Error** | Test with: `ansible -i inventory.ini -m ping all` |

### Diagnostic Commands

```bash
# Check EC2 status
aws ec2 describe-instances --instance-ids $(terraform output -raw instance_id)

# Test SSH connectivity
ssh -v -i ~/.ssh/id_rsa ubuntu@$(terraform output -raw instance_public_ip)

# Check Docker on EC2
ssh -i ~/.ssh/id_rsa ubuntu@$(terraform output -raw instance_public_ip) "sudo docker ps -a"

# View website headers
curl -I http://$(terraform output -raw instance_public_ip)
```

---

## 🧹 Clean Up

To avoid AWS charges, destroy all resources when not in use:

```bash
cd terraform
terraform destroy -auto-approve
```

This will remove:
- ✅ EC2 instance
- ✅ Security group
- ✅ Key pair (from AWS, local file remains)

---

## 🚀 Future Enhancements

Planned improvements for the project:

- [ ] **HTTPS Support** - Add SSL/TLS with Let's Encrypt
- [ ] **CI/CD Pipeline** - GitHub Actions for automated deployment
- [ ] **Monitoring** - CloudWatch metrics and alerts
- [ ] **Load Balancing** - Auto-scaling for high availability
- [ ] **Database** - Store contact form submissions
- [ ] **CDN** - CloudFront for global content delivery
- [ ] **Domain Name** - Custom domain with Route 53
- [ ] **Testing** - Add unit and integration tests
- [ ] **Logging** - Centralized logging with ELK stack
- [ ] **Backup** - Automated EBS snapshots

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
   ```bash
   git clone https://github.com/your-username/Cookies-Shop.git
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```

4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```

5. **Open a Pull Request**

### Development Guidelines
- Follow existing code style
- Add comments for complex logic
- Update documentation as needed
- Test changes locally before submitting

---

## 📄 License

This project is licensed under the MIT License - see below:

```
MIT License

Copyright (c) 2024 Arepp Zubaidi

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 👤 Author

**Arepp Zubaidi**
- GitHub: [@areppzubaidi](https://github.com/areppzubaidi)
- Email: areppzubaidi@gmail.com
- Project: [Cookies Shop](https://github.com/areppzubaidi/Cookies-Shop)

---

## 🙏 Acknowledgments

- **Images**: Unsplash for beautiful cookie photography
- **Icons**: Font Awesome for icons (planned)
- **Nginx**: Alpine Linux for lightweight container
- **AWS**: Free Tier for learning and testing
- **Open Source Community**: For amazing tools and documentation

---

## 📊 Project Status

| Component | Status | Last Updated |
|-----------|--------|--------------|
| Website | ✅ Live | March 2026 |
| Terraform | ✅ Working | March 2026 |
| Ansible | ✅ Working | March 2026 |
| Docker | ✅ Deployed | March 2026 |
| Documentation | ✅ Complete | March 2026 |

---

## 📞 Support

For issues, questions, or suggestions:
1. Check the [Troubleshooting](#troubleshooting) section
2. Search existing [GitHub Issues](https://github.com/areppzubaidi/Cookies-Shop/issues)
3. Create a new issue with detailed information

---

**Made with 🍪 and ☕ by DevOps Engineers**

**Live Demo:** [http://18.138.249.114](http://18.138.249.114)

**Repository:** [https://github.com/areppzubaidi/Cookies-Shop](https://github.com/areppzubaidi/Cookies-Shop)

---

*Last Updated: March 2026*
EOF

echo ""
echo "✅ README.md created successfully!"
echo ""

# Add and commit the README
git add README.md
git commit -m "Add comprehensive professional README with deployment guide, architecture, and documentation"

# Push to GitHub
echo "Pushing to GitHub..."
git push -u origin main

echo ""
echo "🎉 Success! Your README has been created and pushed to GitHub!"
echo ""
echo "📂 Repository URL: https://github.com/areppzubaidi/Cookies-Shop"
echo "🌐 Live Website: http://18.138.249.114"
echo ""
echo "Next steps:"
echo "1. View your repository at the URL above"
echo "2. Share the link with others"
echo "3. Continue improving your project"
```

## Run the Script

Save this script as `create-readme.sh` and run it:

```bash
# Save the script
cat > create-readme.sh << 'SCRIPT'
[PASTE THE SCRIPT ABOVE HERE]
SCRIPT

# Make it executable
chmod +x create-readme.sh

# Run the script
./create-readme.sh
```

Or run it directly:

```bash
bash create-readme.sh
```

## Alternative: One-Liner to Create and Push README

If you just want to create the README quickly:

```bash
cd /Users/nurariffzubaidi/cookies-shop && cat > README.md << 'EOF'
[PASTE THE COMPREHENSIVE README CONTENT HERE]
EOF
git add README.md && git commit -m "Add comprehensive README" && git push -u origin main
```

This script will:
1. Create a professional, comprehensive README with all sections
2. Add it to git
3. Commit the changes
4. Push to your GitHub repository

After running, your repository at https://github.com/areppzubaidi/Cookies-Shop will have a beautiful, well-documented README!
