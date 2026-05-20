pipeline {
    agent any

    environment{
        CONTAINER_NAME = "nestjs-app"
        IMAGE_NAME = "nesths-image"
        EMAIL = "venncateshwarul33@gmail.com" // change
        PORT = "3000"
    }

    stages {
        stages('Clone Repo'){
            steps{
               git branch: 'main', url: 'https://github.com/venncateshwarul456/cicd-automation.git' //change 
            }
        }
        
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Stop & Remove Previous Container') {
            steps{
                sh ""
                    docker stop $CONTAINER_NAME | | true
                    docker rm $CONTAINER_NAME | | true
                ""
            }
        }
        stage('Docker Container Run') {
            steps {
                sh ""
                    docker run -d -p ${PORT}:${PORT} --name $CONTAINER_NAME $IMAGE_NAME
                ""
            }
        }

        stage('Send Email Notification') {
            steps {
                emailtext(
                    subject: "NestJS App Deployed Successfully on EC2!",
                    body: "Your Nest JS app is Deployed! http://13.127.231.29:${Port}/", //change
                    to: "${EMAIL}"
                )
            }
        }
}