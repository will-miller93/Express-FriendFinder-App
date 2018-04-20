// dependencies
var path = require("path");
console.log("im here");
// require the data file to be accessed by these get and post requests
var friends = require("../data/friends.js").default;
console.log("im still here");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
        console.log("yep this works");
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
        for (var i = 0; i < friends.length; i++) {
            console.log(friends[i]);
            // set initial value equal to zero.
            var difference = 0;
            // another for loop to loop through each of the scores arrays for the friendsData api
            for (var j = 0; j < userScores.length; j++) {
                diff += Math.abs(friends[i].scores[j] - userScores[j]);
            }
            if ( diff < totalDifference ) {
                // make the total difference equal to the diff as it loops through so the result at the end of the loop
                // is the true lowest difference
                totalDifference = diff;
                bestFriendName = friends[i].name;
                console.log(friends[i].name);
                bestFriendImg = friends[i].photo;
            }
        }
        // adds the current user to the friendsData api
        friends.push(userInput);

        // sends the response.
        res.json({bestFriendName: bestFriendName, bestFriendImg: bestFriendImg});
    });
};