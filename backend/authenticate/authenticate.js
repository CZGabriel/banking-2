// Let's try firebase for firAdmin the backend as well (see https://dev.to/bbarbour/creating-a-mern-stack-app-that-uses-firebase-authentication-part-one-31a7 and https://firebase.google.com/docs/firAdmin/setup)
require('dotenv').config();
const firAdmin = require('firebase-admin');

const serviceAccount = {
  "type": "service_account",
  "project_id": "hiphen-3de95",
  "private_key_id": "b059b73a6f3dd919734c0771516959e4d05e764c",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQD2mkD2eRFFOQol\nJCTAHIzlg1OVZ9GqZgxYqz8jshAgTEO2juDCav4oLLIJc2EcDTj3d4BD2M9FXqxp\nGbCt2Ap2u9GU0cEUuH/c589cdR32wuYTL4rfufXPR/uU3gokxK+xd2PuolS4IxTn\nrRmVukvMYI4K9L69yjmPpXSnXBD6oaxOyD5nv+Icb9MM1PjRQyhQhvc28jvzHCEV\nDXVYAZCHyhT+SPKOQxjj8ee4IW0fupPS+KynhcF0/foyrTM0BevXGGs3IGLh8sZw\ny5wUDOvNfkdZwQMyQ5vFcnjITgZq9f3uqnqCRpyxmi74eSBBdOUuuw8A253gVz9t\ni4VpMuZ5AgMBAAECggEABXMQsvGndkxloz76ee1Xlr3Rc8iEy1twc+gq38bQUOpm\nh6r+IAW9wpUERS2xzG0lYGCZasZohCusqzDoZNsUlh2d6sg82FCgcLkFrdEfvaN+\ncpeXHc0N98vrLRXACyJ2kHknMe+P6DbMQDdkzJh+ktBiay8P5QFKRtic7JLeBC/R\n0+XCrY0grngG7fCkrUh4mtPZGKFI6qh4c7k0FHTSvedhC3gzAYcUelhdU0kRDzUh\nXtjqSvHD3lYkPLeQVp8x5gRm5NayUT8DvLhRfr6EjrUYdmbxrm4vWnr783lhyEei\nd5uRha2Ul6+aJcIg6qNuh3cr2qwyzz2gzHgDHv9FZQKBgQD/53OJWUOnHR3AUkff\n3WRvS2tG8DSiO/Z3sZmSMPn/aGLoOtZhoKiweUIswG0eCQQHbTXpKQtMXOXwd0AM\ntKcsaan0NdqByAnkPjML+CnDAT9m8751WbescxhjPEbpJljoPIHj7ukvwPGInLGM\nIg0qgzITNao2rtX6fpR9A2qXZQKBgQD2sej/8ypNimXYOa00L/z4KSHjisWikFKs\nUKTXgH1j1Kd7c1++tuERmBlF7DCDihtsXN8+BF4eo1a7fpDkLYWh6hYNyYgjfJMF\n3NrmcpacaBTGxJiGRGWdc0JG9c6XsYP8EPyYTLqqXO/qZL7uLnUAShojudxWi0S4\nY1qfwELThQKBgQDi6Fii/fql8IRT5uGCV+3ZXZd25EDXZbHqehkA7tqNpQKmhp1X\nHbzWFf8ebVWT30yqRSUbZGB3Spw8t5Ccc4cUM3EWcLYag8R5lMlwoJBvL+kHIbPM\nnEvn5npGa8k4rN8Ctbw63rn3tO62QrKP3hWsj35UWC5gpHBp19lUbDYUnQKBgQCg\ntoCrlffeMiZtOg3rbMPpy6onObXNVSZ22ca6GhwWGGjP1PbwIOX5d1QnqFpmp2d8\nLfjFx0SlwxVy6l5sOHfRZtXdP4iwTazeaeY1sTsLRAcdAuC2wAJPE9J+tg5T5rKs\nWUil037cE9W8pst4Ec3pVV04HxI7U1l+okNcxX0DnQKBgQDxwAvywg9g+qKxGsBo\no1O9rW10FL4MMSLqSaGOxzFwZMArFhc7Y4AlX4K3oWiOAJtwnrfaHZc9CKQ6BNRI\nszmMJaGod73J8dTzkqlFHnPW7t7qJkgZi1mhEQsxlHDPoBxQvGZKAjdnc6YxyFDf\n/9ydIAABgFnql9japW0ywm8Iuw==\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-km01v@hiphen-3de95.iam.gserviceaccount.com",
  "client_id": "107575197066423494265",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-km01v%40hiphen-3de95.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
};

firAdmin.initializeApp({
        credential: firAdmin.credential.cert(serviceAccount)
    });


function verifyToken(req, res, next) {
    try {
      const idToken = req.headers.authorization;
      firAdmin.auth().verifyIdToken(idToken)
        .then(function() {next()})
    } catch (err) {
      res.status(401).send('Invalid token');
    }
  }

  module.exports = {verifyToken};
