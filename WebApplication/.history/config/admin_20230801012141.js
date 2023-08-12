const admin = require("firebase-admin");

// cấu hình Firebase Admin SDK
var serviceAccount = require("./thcntt2-ihome-firebase-adminsdk-xt8on-b6686b1ccc.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

var db= admin.firestore();
module.exports = {db};