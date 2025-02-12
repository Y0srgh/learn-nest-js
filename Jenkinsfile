pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'y0srgh/devops-nest:latest'
        DOCKER_CREDENTIALS_ID = "docker-hub-credentials"
     }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'master', url: 'https://github.com/Y0srgh/learn-nest-js.git'
            }
        }

        stage('Build') {
            steps {
                sh 'docker build -t $DOCKER_IMAGE .'
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withDockerRegistry([credentialsId: DOCKER_CREDENTIALS_ID, url: '']) {
                    sh "docker push $DOCKER_IMAGE"
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sshagent (credentials: ['jenkins-ssh-key']) {
                    sh 'ansible-playbook -i inventory.ini deploy.yaml'
                }
            }
        }
    }
}
