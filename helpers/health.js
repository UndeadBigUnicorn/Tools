//Set up a HealthChecker:
const health = require('@cloudnative/health-connect');
let healthcheck = new health.HealthChecker();

//Register a readinessCheck promise:
const readyPromise = new Promise(function (resolve, _reject) {
    setTimeout(function () {
      console.log('READY!');
      resolve();
    }, 10);
  });
let readyCheck = new health.ReadinessCheck("readyCheck", readyPromise);
healthcheck.registerReadinessCheck(readyCheck);

//Register a livenessCheck promise:
const livePromise = new Promise(function (resolve, _reject) {
    setTimeout(function () {
      console.log('ALIVE!');
      resolve();
    }, 10);
  });
let liveCheck = new health.LivenessCheck("liveCheck", livePromise);
healthcheck.registerLivenessCheck(liveCheck);

//Register a shutdownCheck promise:
const shutdownPromise = new Promise(function (resolve, _reject) {
    setTimeout(function () {
      console.log('DONE!');
      resolve();
    }, 10);
  });
let shutdownCheck = new health.ShutdownCheck("shutdownCheck", shutdownPromise);
healthcheck.registerShutdownCheck(shutdownCheck);

//Check the applications status:
healthcheck.getStatus()
.then((result) => console.log('STATUS: ' + JSON.stringify(result)));

module.exports.health = health;
module.exports.healthcheck = healthcheck;