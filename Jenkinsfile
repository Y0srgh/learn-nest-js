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
                sh 'docker build -t y0srgh/devops-nest:latest .'
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
                    sh 'ssh -o StrictHostKeyChecking=no vagrant@192.168.56.11 "ansible-playbook -i ansible/inventory ansible/deploy.yml"'                    
                }
            }
        }
    }
}
