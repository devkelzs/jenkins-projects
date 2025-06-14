# Spring Boot Maven CI/CD with Jenkins (WAR Packaging)

This project demonstrates how to build and package a Spring Boot web application as a `.war` file using Maven and automate the CI/CD process with Jenkins.

---

## ✅ Features

- Spring Boot web application
- Maven-based build system
- WAR packaging
- Jenkins pipeline for:
  - GitHub code checkout
  - Maven build
  - Artifact (.war) archiving
- Webhook integration with GitHub (optional)

---

## 🧱 Project Structure

```

spring-boot-war-app/
├── pom.xml
├── Jenkinsfile
├── src/
│   └── main/
│       ├── java/
│       │   └── com/example/demo/DemoApplication.java
│       └── resources/
└── target/
└── demo-0.0.1-SNAPSHOT.war

````

---

## 🚀 Prerequisites

Make sure your EC2 instance (Ubuntu) is set up with:

- ✅ Java 17+
- ✅ Maven
- ✅ Jenkins (installed and running on port 8080)
- ✅ Git
- ✅ Internet access

---

## 🛠️ Build Instructions

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd YOUR_REPO

# Build the WAR
mvn clean package
````

Output WAR file will be in:

```bash
target/demo-0.0.1-SNAPSHOT.war
```

---

## 🔧 Jenkins Pipeline Setup

1. **Go to Jenkins Dashboard → New Item → Pipeline**
2. Configure your pipeline:

   * **Name**: `springboot-war-pipeline`
   * **Pipeline script from SCM**
   * **SCM**: Git
   * **Repo URL**: `https://github.com/YOUR_USERNAME/YOUR_REPO.git`
   * **Branch**: `main`
   * **Script Path**: `Jenkinsfile`
3. Save and run the pipeline

---

---

## 🔔 GitHub Webhook Setup (Optional)

1. Go to your GitHub repo → Settings → Webhooks → Add Webhook
2. Use:

   * **Payload URL**: `http://YOUR_EC2_PUBLIC_IP:8080/github-webhook/`
   * **Content type**: `application/json`
   * **Event**: Push event
3. In Jenkins job config:

   * Enable **"GitHub hook trigger for GITScm polling"**

---

## 🧩 Additional Notes

* If you want to deploy this WAR to Tomcat or another server, copy it from the `target/` folder.
* This project can be extended with Docker, Kubernetes, and cloud deployment (EC2, ECS, etc.)

---

## 📄 License

MIT License

---

## 🙋‍♂️ Author

* **devkelzs**

```

---

Let me know if you’d like me to:
- Add deployment steps (e.g., copy `.war` to Tomcat)
- Convert this into a Dockerized build
- Extend the pipeline with test or staging environments
```
