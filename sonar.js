import sonar from 'sonarqube-scanner';

const scanner = sonar();

scanner(
  {
    serverUrl: 'https://sonarcloud.io', // or your SonarQube server URL
    token: process.env.SONAR_TOKEN,
    options: {
      'sonar.projectKey': 'Volenday_sample-for-sonar-test',
      'sonar.organization': 'volenday', // Only for SonarCloud
      'sonar.sources': '.', // Analyze the current directory
      'sonar.exclusions': 'node_modules/**,.next/**,public/**,.github/**', // Exclude unnecessary directories
      'sonar.javascript.lcov.reportPaths': 'coverage/lcov.info', // If using test coverage
      'sonar.sourceEncoding': 'UTF-8',
    },
  },
  () => process.exit()
);
