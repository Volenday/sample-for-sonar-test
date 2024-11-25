// jest.mock('sonarqube-scanner', () => ({
//     scan: jest.fn(),
//   }));
  
//   describe('SonarQube Scanner', () => {
//     let originalExit;
//     let mockScan;
  
//     beforeEach(() => {
//       // Mock process.exit
//       originalExit = process.exit;
//       process.exit = jest.fn(); // Mock the exit function
  
//       // Reset the mock scan function
//       mockScan = require('sonarqube-scanner').scan;
//     });
  
//     afterEach(() => {
//       // Restore the original process.exit
//       process.exit = originalExit;
//       jest.resetAllMocks(); // Reset all mocks to avoid state leakage
//     });
  
//     it('should call the SonarQube scanner with the correct configuration', () => {
//       jest.isolateModules(() => {
//         require('../sonar.js');
//       });
  
//       expect(mockScan).toHaveBeenCalledWith(
//         {
//           serverUrl: 'https://sonarcloud.io',
//           token: process.env.SONAR_TOKEN,
//           options: {
//             'sonar.projectKey': 'Volenday_sample-for-sonar-test',
//             'sonar.organization': 'volenday',
//             'sonar.exclusions': 'node_modules/**,.next/**,public/**,.github/**',
//             'sonar.sourceEncoding': 'UTF-8',
//           },
//         },
//         expect.any(Function)
//       );
//     });
  
//     it('should exit with code 0 when the scan is successful', () => {
//       mockScan.mockImplementation((options, callback) => {
//         callback(null); // Simulate success
//       });
  
//       jest.isolateModules(() => {
//         require('../sonar.js');
//       });
  
//       expect(mockScan).toHaveBeenCalled();
//       expect(process.exit).toHaveBeenCalledWith(0); // Ensure process.exit(0) was called
//     });
  
//     it('should exit with code 1 when the scan fails', () => {
//       mockScan.mockImplementation((options, callback) => {
//         callback(new Error('Scan failed')); // Simulate failure
//       });
  
//       jest.isolateModules(() => {
//         require('../sonar.js');
//       });
  
//       expect(mockScan).toHaveBeenCalled();
//       expect(process.exit).toHaveBeenCalledWith(1); // Ensure process.exit(1) was called
//     });
//   });
  