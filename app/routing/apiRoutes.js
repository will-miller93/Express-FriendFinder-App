// Two routes //
// require the data file to be accessed by these get and post requests.
var friendsData = require("../data/friends.js");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    })

//     app.post("/api/friends", function (app, res) {
//         var diffArr = [];
//         var userScore = req.body.scores;
//         var bestMatch;
//         var lowestDiff;
//         var DiffIndex;
//         for (var i = 0; i < friendsData.length; i++){
//             var diff = 0;
//             for (var j = 0; j < friendsData.length[i].scores.length; j++) {
//                 diff += Math.abs(friendsData[i].scores[j] - userScore[i]);
//                 diffArr.push(diff); 
//                 console.log(diffArr);
//                 // finding the smallest number in this array.
//                 Array.min =  function(diffArr) {
//                     return Math.min.apply(Math, diffArr);
//                 }
//                 lowestDiff = Array.min(diffArr);
//                 // looping through the array holding all of the differences
//                 for (var x = 0; x < diffArr.length; x++) {
//                     if (diffArr[x] === lowestDiff){
//                         // compare the friendsData[i].length to the diffArr[x]
//                         // when you find the matching indexes.
//                         // push to the friendsData API
//                         // res.send(bestMatch) to the modal.
                            
//                     }           
//                 }
//             }
//         }
//     })

    app.post("/api/friends", function(req, res) {
        var friendMatch = {
            name: "",
            img: "",
            friendDiff: 1000
        }
        
        var newFriend = req.body;
        var userScore = newFriend.scores;
        var totalDiff = 0;

        for (var i = 0; i < friendsData; i++) {
            console.log(friendsData[i]);
            totalDiff = 0;
            for (var j = 0; j < friendsData[i].scores[j]; j++) {
                totalDiff += Math.abs(parseInt(userScore[j]) - parseInt(friendsData[i].scores[j]));

                if ( totalDiff <= friendMatch.friendDiff) {
                    friendMatch.name = friendsData[i].name;
                    friendMatch.img = friendsData[i].img;
                    friendMatch.friendDiff = totalDiff;
                }
            }
        }
        friendsData.push(newFriend);
        res.json(friendMatch);
    });
};

// difference = sum of the differences of each index of the arrays