Here’s a clean, professional `README.md` tailored for your **Node.js + Jenkins + Docker + Kubernetes (Minikube) CI/CD pipeline** project:

---

```markdown
# 🚀 Node.js CI/CD Pipeline with Jenkins, Docker, and Kubernetes on EC2

This project demonstrates a full CI/CD pipeline that automates the build, test, and deployment of a simple Node.js web app to a Kubernetes cluster (Minikube), using Jenkins running on an AWS EC2 instance.

---

## 🧱 Tech Stack

- **Node.js** – Web application
- **Docker** – Containerization
- **Docker Hub** – Image registry
- **Jenkins** – CI/CD automation server
- **GitHub** – Source code hosting & webhook trigger
- **Kubernetes (Minikube)** – Deployment platform
- **EC2 (Ubuntu 22.04)** – Jenkins host

---

## 📦 App Overview

A basic Express web server that responds:

```

Hello from Kubernetes!

````

Available at:  
`http://<ec2-public-ip>:30030`

---

## 📁 Project Structure

```bash
.
├── app.js                # Express server
├── package.json          # Node.js dependencies
├── Dockerfile            # Build instructions
├── deployment.yaml       # Kubernetes deployment & service
└── Jenkinsfile           # Jenkins pipeline config
````

---

## ⚙️ CI/CD Pipeline Workflow

1. GitHub Push triggers Jenkins via webhook
2. Jenkins pulls the code
3. Docker image is built and pushed to Docker Hub
4. Jenkins deploys the app to Minikube using `kubectl`

---

## 🚀 Getting Started

### 1. Launch EC2 Instance

* Ubuntu 22.04, t2.medium
* Open ports: `22`, `80`, `443`, `8080`, `30000–32767`

### 2. Install Software on EC2

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y docker.io nodejs npm openjdk-17-jdk
curl -LO https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl && chmod +x kubectl && sudo mv kubectl /usr/local/bin/
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64 && sudo install minikube-linux-amd64 /usr/local/bin/minikube
```

### 3. Start Jenkins

```bash
sudo apt install -y jenkins
sudo systemctl enable jenkins
sudo systemctl start jenkins
```

### 4. Access Jenkins

Visit: `http://<ec2-public-ip>:8080`
Initial admin password:

```bash
sudo cat /var/lib/jenkins/secrets/initialAdminPassword
```

---

## 🔧 Jenkins Configuration

### ✅ Plugins to Install

* Git
* Docker Pipeline
* Kubernetes CLI Plugin
* GitHub Integration
* Pipeline

### 🔐 Add Docker Hub Credentials

Jenkins → Manage Jenkins → Credentials → Global → Add

* ID: `docker-hub-credentials`

---

## 📂 Jenkinsfile Overview

```groovy
pipeline {
  agent any
  environment {
    DOCKER_IMAGE = 'kellynkwain/nodejs-k8s-app:latest'
    DOCKER_CREDENTIALS_ID = 'docker-hub-credentials'
  }
  triggers {
    githubPush()
  }
  stages {
    stage('Clone Repo') {
      steps {
        git 'https://github.com/kellynkwain/nodejs-k8s-app.git'
      }
    }
    stage('Build Docker Image') {
      steps {
        script {
          docker.build("${DOCKER_IMAGE}")
        }
      }
    }
    stage('Push to Docker Hub') {
      steps {
        withDockerRegistry(credentialsId: "${DOCKER_CREDENTIALS_ID}", url: '') {
          docker.image("${DOCKER_IMAGE}").push()
        }
      }
    }
    stage('Deploy to Kubernetes') {
      steps {
        sh 'kubectl apply -f deployment.yaml'
      }
    }
  }
}
```

---

## 🔁 GitHub Webhook Setup

1. Go to your repo → **Settings → Webhooks**
2. Add: `http://<ec2-public-ip>:8080/github-webhook/`
3. Content type: `application/json`
4. Events: **Just the push event**

---

## 📡 Kubernetes Access

After deployment:

```bash
kubectl get svc
```

Open the app:

```bash
http://<ec2-ip>:30030
```

---

## 🧼 Cleanup

To delete everything:

```bash
kubectl delete deployment nodejs-deployment
kubectl delete svc nodejs-service
```

---

## 🧑‍💻 Author

**[@kellynkwain](https://github.com/kellynkwain)**
Open for contributions, PRs, or forks!

---

## 📜 License

MIT – Free to use and modify.

```

---

Let me know if you'd like:
- A badge section at the top (build passing, license, etc.)
- Deployment instructions in script form
- Screenshots or architecture diagram added

Want me to commit this directly to your repo with a PR message?
```
