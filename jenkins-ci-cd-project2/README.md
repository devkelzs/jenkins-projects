# Automated Website Deployment Pipeline

This project sets up an automated deployment pipeline for a static HTML/CSS website using **Jenkins**, **GitHub**, and **Nginx** on an Ubuntu 22.04 server. It’s designed for beginners to learn the basics of CI/CD pipelines by automating the deployment of a static website to a web server whenever code is pushed to a GitHub repository.

---

## 📸 Project Screenshot

<!-- Add your image below -->
![Project Screenshot](path-to-your-image.png)

---

## 🔍 Project Overview

- **Purpose**: Automate deployment of a static website (e.g., personal portfolio or small business site) to an Nginx web server.
- **Tools Used**:
  - **Jenkins** – CI/CD server for managing the pipeline
  - **GitHub** – Hosts website source code (`index.html`, `styles.css`, and `Jenkinsfile`)
  - **Nginx** – Web server to serve the deployed site
  - **Ubuntu 22.04** – Server OS (local or cloud, e.g., AWS EC2)

> 💡 **Real-World Use Case**: Ideal for small teams or individual developers deploying updates automatically on code commits.

---

## 📁 Repository Structure

jenkins-ci-cd-project2/
├── index.html # Static HTML content
├── styles.css # Website styles
└── Jenkinsfile # Jenkins pipeline definition


---

## ✅ Prerequisites

- Ubuntu 22.04 server (local or cloud) with `sudo` access
- Open ports: 80 (HTTP) and 8080 (Jenkins)
- GitHub account and repository
- Basic command-line and Git knowledge
- Internet access

---

## ⚙️ Setup Instructions

### 1. Install Jenkins

<details>
<summary>Show Commands</summary>

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install openjdk-11-jdk -y
java -version

curl -fsSL https://pkg.jenkins.io/debian/jenkins.io-2023.key | sudo tee /usr/share/keyrings/jenkins-keyring.asc > /dev/null
echo deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] https://pkg.jenkins.io/debian binary/ | sudo tee /etc/apt/sources.list.d/jenkins.list > /dev/null
sudo apt update
sudo apt install jenkins -y
sudo systemctl start jenkins
sudo systemctl enable jenkins
````
Access Jenkins at http://<your-server-ip>:8080

Retrieve admin password:

sudo cat /var/lib/jenkins/secrets/initialAdminPassword
Install Git Plugin and Pipeline Plugin via the plugin manager

. Create Static Website
Add index.html and styles.css to jenkins-ci-cd-project2/ in your repo

Sample content included in the original README or use your own

3. Install & Configure Nginx
<details> <summary>Show Steps</summary>
Install Nginx:

bash
Copy
Edit
sudo apt install nginx -y
sudo systemctl start nginx
sudo systemctl enable nginx
Create directory:

bash
Copy
Edit
sudo mkdir -p /var/www/html/my-static
sudo chown -R www-data:www-data /var/www/html/my-static
sudo chmod -R 755 /var/www/html/my-static
Configure Nginx:

nginx
Copy
Edit
server {
    listen 80;
    server_name _;

    root /var/www/html/my-static;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
Save it to /etc/nginx/sites-available/my-static and enable:

bash
Copy
Edit
sudo ln -s /etc/nginx/sites-available/my-static /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl restart nginx
</details>

4. Set Up Jenkins Pipeline
Add GitHub credentials in Jenkins (Username + PAT)

Create a new pipeline job

Use SCM > Git, point to your repository, and set script path:
jenkins-ci-cd-project2/Jenkinsfile

Grant Jenkins sudo access for deployment commands:

bash
Copy
Edit
sudo visudo
Add:

perl
Copy
Edit
jenkins ALL=(ALL) NOPASSWD: /bin/rm, /bin/cp, /bin/chown, /bin/chmod
5. Add GitHub Webhook
GitHub > Repo Settings > Webhooks > Add Webhook:

URL: http://<server-ip>:8080/github-webhook/

Content type: application/json

Event: Just the push event

Jenkins > Pipeline job > Enable GitHub hook trigger for GITScm polling

6. Test the Setup
Commit a change to index.html

Check if Jenkins triggers and deploys the update

Visit http://<server-ip> to verify

