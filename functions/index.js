const functions = require("firebase-functions");
// const request = require("request-promise");
const cors = require("cors")({origin: true});


exports.getImagekitKeys = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    
    res.send({
      data: {
        urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
        publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
      },
    });
  });
});


exports.getEmailJSKeys = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    
    res.send({
      data: {
        publicKey: process.env.EMAILJS_PUBLIC_KEY,
        serviceID: process.env.EMAILJS_SERVICE_ID,
        templateID: process.env.EMAILJS_TEMPLATE_ID,
      },
    });
  });
});

// firebase deploy --only functions
// only 6 env variable free