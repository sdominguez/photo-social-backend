pipeline {
    agent any

    stages {
        stage('Clonar repositorio') {
            steps {
                git branch: 'master', url: 'https://github.com/sdominguez/photo-social-backend.git'
            }
        }

        stage('Construir e iniciar servicios') {
            steps {
                sh '''
                docker compose down || true
                docker compose up -d --build
                '''
            }
        }

        stage('Esperar backend') {
            steps {
                sh 'sleep 10' 
            }
        }

        stage('Verificar estado') {
            steps {
                sh 'docker ps'
            }
        }
    }
}
