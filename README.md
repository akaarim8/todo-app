# todo-app
To-Do List Application
Overview
This To-Do List application is a simple yet powerful tool to manage your daily tasks. Built with Node.js and Express, it offers an intuitive RESTful API to create, list, and delete tasks swiftly. The front-end is crafted using basic HTML, CSS, and JavaScript to provide a user-friendly interface for interacting with the to-do list.

Features
Create Tasks: Easily add new tasks to your to-do list.
View Tasks: Retrieve a list of all tasks.
Delete Tasks: Remove completed tasks from the list.
Getting Started
Prerequisites
Ensure you have the following installed before you proceed:

Node.js and npm
Docker
Kubernetes cluster with kubectl configured
Setting Up the Application
Clone the Repository
 git clone https://github.com/akaarim8/todo-app.git
 cd todo-app
Install Dependencies
 npm install
Run the Application Locally
 node app.js
The application is now running on http://localhost:3000.
Dockerizing the Application
Build the Docker Image
 docker build -t akaarim8/todo-app:v2 .
Push the Docker Image to DockerHub First, log in to DockerHub:
 docker login
Then push the image:
 docker push akaarim8/todo-app:v2
Deploying the Application on Kubernetes
Create a Deployment Update todo-deployment.yaml with the image path akaarim8/todo-app:v2. Deploy the application:
 kubectl apply -f todo-deployment.yaml
Expose the Application
 kubectl apply -f todo-service.yaml
Find the exposed NodePort or use the LoadBalancer IP/hostname to access the application.
