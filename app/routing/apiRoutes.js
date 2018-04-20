// dependencies
var path = require("path");

// require the data file to be accessed by these get and post requests
var friendsData = require("../data/friends.js");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function (req, res) {
        // capture user input.
        var userInput = req.body;
        var userScores = userInput.scores;

        // find bestFriend
        var bestFriendName = '';
        var bestFriendImg = '';
        // make totalDifference equal to a very large number so the actual differences cannot equal it.
        // makes initial comparison easier.
        var totalDifference = 10000;

        // examine all existing friends in the friendsData API
        for (var i = 0; i < friendsData.length; i++) {
            // set initial value equal to zero.
            var difference = 0;
            // another for loop to loop through each of the scores arrays for the friendsData api
            for (var j = 0; j < userScores.length; j++) {
                diff += Math.abs(friendsData[i].scores[j] - userScores[j]);
            }
            if ( diff < totalDifference ) {
                // make the total difference equal to the diff as it loops through so the result at the end of the loop
                // is the true lowest difference
                totalDifference = diff;
                bestFriendName = friendsData[i].name;
                bestFriendImg = friendsData[i].img;
            }
        }
        // adds the current user to the friendsData api
        friendsData.push(userInput);

        // sends the response.
        res.json({bestFriendName: bestFriendName, bestFriendImg: bestFriendImg});
    });
};