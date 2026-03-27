
# 🍪 Cookie Haven - Artisan Cookies Shop

[![AWS](https://img.shields.io/badge/AWS-Free%20Tier-orange)](https://aws.amazon.com/free/)
[![Terraform](https://img.shields.io/badge/Terraform-Infrastructure%20as%20Code-purple)](https://www.terraform.io/)
[![Ansible](https://img.shields.io/badge/Ansible-Automation-red)](https://www.ansible.com/)
[![Docker](https://img.shields.io/badge/Docker-Containerization-blue)](https://www.docker.com/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

> A fully responsive static website for an artisan cookies shop, deployed on AWS using modern DevOps practices including Infrastructure as Code (Terraform), configuration management (Ansible), and containerization (Docker).

## 🌐 Live Demo

**Current Deployment:** [http://18.138.249.114](http://18.138.249.114)

---

## 📸 Screenshots


### 🏠 Home Page

<img width="1924" height="977" alt="Screenshot 2026-03-27 at 8 13 59 AM" src="https://github.com/user-attachments/assets/b3b74432-e300-4df5-aade-427dc6c89565" />

### 📖 About Page
<img width="1914" height="976" alt="Screenshot 2026-03-27 at 8 19 02 AM" src="https://github.com/user-attachments/assets/c1e10a6f-e27f-4764-a856-833e5768447e" />


### 📞 Contact Page
<img width="1916" height="975" alt="Screenshot 2026-03-27 at 8 19 14 AM" src="https://github.com/user-attachments/assets/c7790989-02f8-40c7-80fa-f3a5310f346b" />


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
- [Manual Deployment](#manual-deployment)
- [AWS Free Tier Notice](#aws-free-tier-notice)
- [Troubleshooting](#troubleshooting)
- [Clean Up](#clean-up)
- [Future Enhancements](#future-enhancements)
- [Author](#author)
- [License](#license)

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
│                        DEPLOYMENT FLOW                           │
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

| Category | Technology | Purpose |
|----------|------------|---------|
| **Frontend** | HTML5, CSS3, JavaScript | Website structure, styling, interactivity |
| **Containerization** | Docker, Nginx Alpine | Container runtime and web server |
| **Infrastructure** | Terraform, AWS | Infrastructure as Code, cloud provider |
| **Configuration** | Ansible | Automated server configuration |
| **Cloud Services** | EC2, Security Groups | Compute and firewall |

---

## ✨ Features

### Website Features
- 📱 **Fully Responsive** - Works on mobile, tablet, and desktop
- 🍪 **Product Gallery** - 6 signature cookies with descriptions
- 📝 **Contact Form** - Interactive with client-side validation
- 🎨 **Modern UI** - Clean design with hover effects
- 🚀 **Fast Loading** - Optimized static assets

### DevOps Features
- 🏗️ **Infrastructure as Code** - Reproducible AWS infrastructure
- 🤖 **Configuration Automation** - Idempotent server setup
- 🐳 **Containerization** - Consistent deployment everywhere
- 🔒 **Security First** - Properly configured security groups
- 💰 **Cost Optimized** - All resources within AWS Free Tier

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

Before you begin, ensure you have:

### Required Software
- **AWS CLI** (configured with credentials)
- **Terraform** (>= 1.0)
- **Ansible** (>= 2.9)
- **Git** (>= 2.0)
- **SSH Key Pair** (for EC2 access)

### AWS Configuration
```bash
# Configure AWS credentials
aws configure
# Enter your Access Key ID
# Enter your Secret Access Key
# Default region: ap-southeast-1
# Default output format: json
```

---

## 🚀 Quick Start

Deploy the entire stack in minutes:

```bash
# Clone the repository
git clone https://github.com/areppzubaidi/Cookies-Shop.git
cd Cookies-Shop

# Deploy infrastructure
cd terraform
terraform init
terraform apply -auto-approve

# Save the EC2 IP from output
EC2_IP=$(terraform output -raw instance_public_ip)

# Update Ansible inventory
cd ../ansible
echo "[cookies_shop]" > inventory.ini
echo "ec2-instance ansible_host=$EC2_IP ansible_user=ubuntu ansible_ssh_private_key_file=~/.ssh/id_rsa" >> inventory.ini

# Deploy application
ansible-playbook -i inventory.ini playbook.yml

# Access the website
open http://$EC2_IP
```

---

## 📖 Detailed Deployment Guide

### Step 1: Clone and Configure

```bash
git clone https://github.com/areppzubaidi/Cookies-Shop.git
cd Cookies-Shop

# Create Terraform variables
cd terraform
cat > terraform.tfvars << 'EOF'
aws_region       = "ap-southeast-1"
key_name         = "cookies-shop-key"
public_key_path  = "~/.ssh/id_rsa.pub"
EOF
```

### Step 2: Deploy AWS Infrastructure

```bash
terraform init
terraform plan
terraform apply -auto-approve
```

**Expected Output:**
```
Apply complete! Resources: 3 added.

Outputs:
instance_public_ip = "18.138.249.114"
instance_public_dns = "ec2-18-138-249-114.ap-southeast-1.compute.amazonaws.com"
```

### Step 3: Configure and Deploy with Ansible

```bash
cd ../ansible
cat > inventory.ini << 'EOF'
[cookies_shop]
ec2-instance ansible_host=18.138.249.114 ansible_user=ubuntu ansible_ssh_private_key_file=~/.ssh/id_rsa
EOF

ansible-playbook -i inventory.ini playbook.yml
```

### Step 4: Verify Deployment

```bash
# Check container status
ssh -i ~/.ssh/id_rsa ubuntu@18.138.249.114 "sudo docker ps"

# Test website
curl http://18.138.249.114
```

---

## 🔧 Manual Deployment

If Ansible encounters issues, deploy manually:

```bash
# Copy files
scp -i ~/.ssh/id_rsa -r frontend ubuntu@18.138.249.114:/tmp/
scp -i ~/.ssh/id_rsa Dockerfile ubuntu@18.138.249.114:/tmp/

# SSH and deploy
ssh -i ~/.ssh/id_rsa ubuntu@18.138.249.114 << 'EOF'
sudo apt update
sudo apt install -y docker.io
sudo systemctl start docker

sudo mkdir -p /opt/cookies-shop
sudo cp -r /tmp/frontend /opt/cookies-shop/
sudo cp /tmp/Dockerfile /opt/cookies-shop/
cd /opt/cookies-shop

sudo docker build -t cookies-shop .
sudo docker run -d -p 80:80 --name cookies-shop --restart always cookies-shop
sudo docker ps
EOF
```

---

## 💰 AWS Free Tier Notice

| Service | Resource | Free Tier Limit |
|---------|----------|-----------------|
| EC2 | t2.micro | 750 hours/month |
| EBS | 8 GB | 30 GB/month |
| Data Transfer | Outbound | 15 GB/month |

**Total Estimated Cost: $0/month** (within Free Tier limits)

⚠️ **Important:** Destroy resources when not in use to stay within Free Tier limits.

---

## 🔍 Troubleshooting

| Issue | Solution |
|-------|----------|
| **SSH Connection Failed** | Wait 2-3 minutes for EC2 to boot, then retry |
| **Permission Denied** | Check key permissions: `chmod 600 ~/.ssh/id_rsa` |
| **Terraform Apply Fails** | Verify AWS credentials: `aws sts get-caller-identity` |
| **Docker Container Not Running** | Check logs: `sudo docker logs cookies-shop` |
| **Website Not Loading** | Verify security group allows port 80 |

---

## 🧹 Clean Up

To avoid charges, destroy resources when not needed:

```bash
cd terraform
terraform destroy -auto-approve
```

---

## 🚀 Future Enhancements

- [ ] HTTPS with Let's Encrypt
- [ ] CI/CD with GitHub Actions
- [ ] CloudFront CDN integration
- [ ] Custom domain with Route 53
- [ ] Monitoring with CloudWatch
- [ ] Database for contact form submissions

---

## 👤 Author

**Arepp Zubaidi**
- GitHub: [@areppzubaidi](https://github.com/areppzubaidi)
- Email: areppzubaidi@gmail.com

---

## 📄 License

MIT License - See LICENSE file for details

---

## 🙏 Acknowledgments

- AWS Free Tier for cloud infrastructure
- Docker for containerization
- Terraform and Ansible for automation
- Unsplash for cookie images

---

**Made with 🍪 and ☕ by DevOps Engineers**

**Live Demo:** [http://18.138.249.114](http://18.138.249.114)

**Repository:** [https://github.com/areppzubaidi/Cookies-Shop](https://github.com/areppzubaidi/Cookies-Shop)

---

*Last Updated: March 2026*
```

## How to Use This README:

### Option 1: Direct GitHub Edit (Easiest)
1. Go to your repository: https://github.com/areppzubaidi/Cookies-Shop
2. Click on `README.md`
3. Click the pencil icon (Edit)
4. Copy the entire content above and paste it
5. Click "Commit changes"

### Option 2: Command Line
```bash
cd /Users/nurariffzubaidi/cookies-shop

# Save the README content to a file
cat > README.md << 'EOF'
[PASTE THE ENTIRE README CONTENT HERE]
EOF

# Add, commit, and push
git add README.md
git commit -m "Add professional README with proper formatting"
git push origin main
```

### To Add Your Actual Screenshots:

1. **Take screenshots** of your live website at `http://18.138.249.114`
2. **Save them** as:
   - `homepage.png`
   - `products.png`
   - `about.png`
   - `contact.png`
   - `mobile.png`

3. **Upload to GitHub:**
   - Go to your repository
   - Create a `screenshots` folder
   - Drag and drop your images
   - Or edit README.md and drag images directly into the placeholder areas

The README now has:
- ✅ Properly formatted code blocks
- ✅ Clean table structures
- ✅ Clear section hierarchy
- ✅ Working badges
- ✅ Complete documentation
- ✅ Drag-and-drop screenshot placeholders

Your README will look professional and well-structured on GitHub! 🎉
