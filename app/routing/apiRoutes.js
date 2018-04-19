// Two routes //
// require the data file to be accessed by these get and post requests.
var friendsData = require("app/data/friends.js");

// module.exports = function(app) {
//     app.get("/api/friends", function(req, res) {
//         res.send(friendsData);
//     });

//     app.post("/api/friends", function(req,res) {
//             var bestMatch = {
//                 name: "",
//                 img: "",
//                 friendDiff = 1000
//             }
//             // variable bestfriend is equal to the parsed data from the friendsAPI
//             var bestFriend = req.body;
//             var userScore = newFriend.scores;
//             var totalDiff = 0;

//             for (var i = 0; i < friendsData.length; i++) {
//                 console.log(friendsData[i]);
//                 totalDiff = 0;
                
//                 for ( var j = 0; j < friendsData[i].scores[j]; j++) {
//                     totalDiff += Math.abs(parseInt(userScore[j]) - parseInt(friendsData[i].scores));

//                     if (totalDiff <= bestMatch.friendDiff) {
//                         bestMatch.name = friendsData[i].name;
//                         bestMatch.img = friendsData[i].img;
//                         bestMatch.friendDiff = totalDiff;
//                     }
//                 }
//             }
//             friendsData.push(newFriend);
//             res.json(bestMatch);
//     });
// }

// module.exports = function(app) {
//     app.get("/api/friends", function(req, res) {
//         res.send(friendsData);
//     });

//     app.post("/api/friends", function(req, res) {
//         // if statement finding the length of the friends api
//         if (friendsData.length < 2) {
//             // match these two together.
//         }
//         else {
//             // for loop through the length of the friends api (friendsData)
//                 // console.log(friendsData[i]); this is console logging all of the data for each of the friend objects in the api
//                 // make the difference variable equal to 0 

//                 // another for loop to loop through the scores of each of the friends in the friends api
//                     // finding the difference of each of the friends scores in the api and the current users score
//                     // if statement denoting the friend object in the friends api that has the lowest difference
//                         // making that friend object the best match and logging all of that information to the modal.

//         }
//     }
// }