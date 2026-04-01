pipeline{
    agent {
        docker {
            image 'mcr.microsoft.com/playwright:v1.57.0-noble'
            args '-u root --entrypoint='
        }
    }
    stages{
        stage('install dependence'){
            steps{
               sh 'npm install'
            }
        }
        stage('lancement de test'){
            steps{
                sh 'npx playwright test --project=chromium'
            }
        }
    }
}