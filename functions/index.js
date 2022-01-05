const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

exports.gameEnd = functions.firestore.document("Games/{gameID}").onUpdate((change, context) => {
    let before = change.before.data();
    let after = change.after.data();
    console.log(JSON.stringify(before));
    console.log(JSON.stringify(after));
    return null;
});

// exports.lastWrite = functions.firestore.document("/{path=**}").onWrite((change, context) => {
//     if (context.params["path=**"] === "Stats") {
//         return null;
//     }
//     return admin.firestore().doc("Stats/Bot").set({
//         "LastChange": admin.firestore.Timestamp.fromDate(new Date()),
//         "LastChangeUnix": Date.now()
//     }, {merge: true});
// });
