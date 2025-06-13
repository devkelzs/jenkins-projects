Here's a complete `README.md` for your Node.js CI/CD project using Jenkins, GitHub, Mocha, and PM2:

---

```markdown
# Node.js CI/CD Pipeline with Jenkins

This project demonstrates a simple Continuous Integration and Continuous Deployment (CI/CD) pipeline for a Node.js application using **Jenkins**, **GitHub**, **npm**, **Mocha**, and **PM2**.

## 📦 Tech Stack

- **Node.js**: Backend runtime
- **Express.js**: Web framework
- **Mocha**: Testing framework
- **Jenkins**: CI/CD automation server
- **PM2**: Process manager for Node.js
- **GitHub**: Source code repository

---

## 🚀 Project Structure

```

node-ci-app/
│
├── app.js              # Express app logic
├── server.js           # Entry point for app
├── test/               # Unit tests
│   └── test.js
├── package.json        # Project metadata and scripts
├── Jenkinsfile         # CI/CD pipeline config
└── README.md

````

---

## 🔧 Installation

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/node-ci-app.git
cd node-ci-app
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the App Locally

```bash
node server.js
```

Open your browser at `http://localhost:3000`.

---

## 🧪 Running Tests

Tests are written using Mocha and Supertest.

```bash
npm test
```

Sample test output:

```
  GET /
    ✓ should return Hello World!
```

---

## 🛠️ Jenkins CI/CD Pipeline

### Jenkinsfile Stages:

1. **Checkout**: Clone GitHub repository.
2. **Install**: Install dependencies with `npm install`.
3. **Test**: Run unit tests using Mocha.
4. **Deploy**: Use PM2 to restart the app.

### Example Jenkinsfile

```groovy
pipeline {
    agent any

    tools {
        nodejs "NodeJS 18"
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/your-username/node-ci-app.git'
            }
        }
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                sh 'pm2 delete server || true'
                sh 'pm2 start server.js --name node-ci-app'
            }
        }
    }
}
```

> ⚠️ Make sure PM2 is installed on the Jenkins host:

```bash
npm install -g pm2
```

---

## 🔁 GitHub Webhook Integration

To enable automatic builds:

1. In your GitHub repo: **Settings → Webhooks → Add Webhook**
2. Payload URL: `http://<jenkins-server>:8080/github-webhook/`
3. Content Type: `application/json`
4. Trigger: **Just the push event**

Make sure Jenkins is publicly accessible or use a tunneling tool like `ngrok` or `localtunnel` during development.

---

## 🌐 Deployment

The app runs on **localhost:3000** by default.

To start manually with PM2:

```bash
pm2 start server.js --name node-ci-app
```

To stop the app:

```bash
pm2 delete node-ci-app
```

---

## 📌 Real-World Use Case

Ideal for:

* Small teams building internal tools.
* Microservices deployed via simple automation.
* Early-stage startup APIs with fast iteration cycles.

---

## 📃 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 🙌 Contributions

Feel free to fork, improve and create a pull request! Open issues for bugs or feature requests.

---

## 👨‍💻 Author

Created by [Your Name](https://github.com/your-username)

```

---

Let me know if you'd like to include a badge section (for build status, license, etc.) or deploy this project using Docker or Kubernetes.
```
