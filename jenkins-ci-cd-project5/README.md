# Jenkins CI/CD Pipeline for Python Flask App on Kubernetes

This project demonstrates a full CI/CD pipeline to build, test, containerize, and deploy a Python Flask application to a Kubernetes cluster using Jenkins.

---

## Project Overview

- **App:** Python Flask web app
- **Testing:** Unit tests using `pytest`
- **Containerization:** Docker
- **CI/CD Tool:** Jenkins
- **Deployment:** Kubernetes (kind or any K8s cluster)
- **Docker Registry:** Docker Hub
- **Git Branch:** `main`

---

## Prerequisites

- EC2 instance with:
  - Jenkins installed and running
  - Docker installed and configured
  - Kubernetes cluster setup (e.g., kind)
  - `kubectl` configured to communicate with your cluster
- Docker Hub account and credentials
- GitHub repository with your Flask app and Jenkinsfile

---

## Project Structure

```

jenkins-ci-cd-project5/
├── app.py                # Flask application code
├── requirements.txt      # Python dependencies
├── tests/                # Pytest unit tests
├── Dockerfile            # Docker build instructions
├── k8s-deployment.yaml   # Kubernetes deployment manifest
├── Jenkinsfile           # Jenkins pipeline definition
└── README.md             # This file

````

---

## Jenkins Pipeline Steps

1. **Checkout**: Clone the `main` branch of the GitHub repository.
2. **Test**: Install dependencies and run pytest unit tests.
3. **Build Docker Image**: Build the Docker image for the Flask app.
4. **Push Docker Image**: Push the Docker image to Docker Hub.
5. **Deploy to Kubernetes**: Apply the Kubernetes deployment manifest to update the app.

---

## How to Run

### 1. Configure Jenkins

- Create a new pipeline job.
- Use **Pipeline script from SCM**.
- Set Git repository URL: `https://github.com/YOUR_USERNAME/jenkins-ci-cd-project5.git`
- Set branch to build: `main`
- Set Script Path: `jenkins-ci-cd-project5/Jenkinsfile`
- Add Docker Hub credentials in Jenkins (ID: `dockerhub-creds`).

### 2. Run the Pipeline

- Click **Build Now** in Jenkins.
- Monitor the console logs for build, test, push, and deployment progress.

### 3. Access the Application

- Forward port from the Kubernetes service to localhost:

  ```bash
  kubectl port-forward svc/flask-service 5000:5000
  ````

* Open in browser: [http://localhost:5000](http://localhost:5000) or curl http://localhost:5000 *

---

## Notes

* Ensure your Docker Hub credentials are correctly stored in Jenkins.
* Kubernetes cluster must be running and `kubectl` configured.
* You can automate GitHub webhooks to trigger builds automatically.

---

## Troubleshooting

* **ImagePullBackOff / ErrImagePull**
  Verify Docker image name and tag, and confirm image exists on Docker Hub.

* **Tests failing**
  Check your test cases and dependencies.

* **Port forwarding issues**
  Confirm service `flask-service` exists and pod is running.

---

## License

This project is open-source and available under the MIT License.

---

## Author

** devkelzs ** 

