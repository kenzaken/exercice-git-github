pipeline{
    agent {
        docker {
            image 'mcr.microsoft.com/playwright:v1.50.0-noble'
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