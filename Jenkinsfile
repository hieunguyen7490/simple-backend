pipeline {
    agent any
    tools {
        nodejs 'Node18'
    }
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/hieunguyen7490/simple-backend.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Install PM2') {
            steps {
                sh 'npm install -g pm2'
            }
        }
        stage('Check PM2 Version') {
            steps {
                sh 'pm2 -v'
            }
        }
        stage('Deploy') {
            steps {
                sh 'pm2 restart backend || pm2 start server.js --name backend'
            }
        }
    }
}
