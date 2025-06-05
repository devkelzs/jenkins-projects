# 📦 Jenkins CI Pipeline Project 1
This project demonstrates a simple Continuous Integration (CI) pipeline using Jenkins and a Jenkinsfile. It runs a basic Python script (hello.py) as part of the CI workflow.

## 🧱 Project Structure

jenkins-ci-pipeline-project1/
├── Jenkinsfile      # Defines the CI pipeline
└── hello.py         # A basic Python script to be executed


## 📜 Jenkinsfile Overview
The Jenkinsfile defines a basic CI pipeline with the following stage:

Build: Executes the Python script using python3.

pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'python3 jenkins-ci-pipeline-project1/hello.py'
            }
        }
    }

    post {
        success {
            echo '✅ Job succeeded!'
        }
        failure {
            echo '❌ Job failed.'
        }
    }
}

### 🔍 Breakdown:

agent any: Run the pipeline on any available agent/node.

stage('Build'): This stage runs the Python script.

sh 'python3 jenkins-ci-pipeline-project1/hello.py': Executes the script using Python.

post: Shows a message depending on success or failure.

## 🛠️ Setting Up Jenkins to Run This Project
### Step 1: Make Sure Your Repo is Pushed
Push the entire folder structure (including jenkins-ci-pipeline-project1) to GitHub.
Here’s your repo:
```📦 https://github.com/devkelzs/jenkins-projects```

### Step 2: Create a Jenkins Pipeline Job
Open Jenkins.

Click New Item.

Name it something like: ```CI-Pipeline-Project-01.```

Choose Pipeline, then click OK.

### Step 3: Configure the Pipeline Job
In the job settings:

Scroll to the Pipeline section.

Change Definition to: Pipeline script from SCM

Set SCM to: Git

Set Repository URL to:

```https://github.com/devkelzs/jenkins-projects.git```

Set Script Path to:

```jenkins-ci-pipeline-project1/Jenkinsfile```

📝 This tells Jenkins to look inside that subfolder and find the Jenkinsfile.

Click Save.

### Step 4: Build the Project
Click Build Now.

Go to Build #1 → Console Output.

You should see something like:

+ python3 jenkins-ci-pipeline-project1/hello.py
Hello from Jenkins!
✅ Job succeeded!

