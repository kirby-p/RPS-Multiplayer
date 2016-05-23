// Initialize Firebase
var config = {
apiKey: "AIzaSyDQgAuTb9u8gK5R4AuEsWK-YPvwr5l4KQY",
authDomain: "rps-multiplayer-13c5f.firebaseapp.com",
databaseURL: "https://rps-multiplayer-13c5f.firebaseio.com",
storageBucket: "",
};
firebase.initializeApp(config);


var gameData = firebase.database();


// if(gameData.ref("players/1") == true){
// 	var playerNumber = 2;
// 	console.log("there is a player 1");
// }
// else if(gameData.ref("players/2") == true){
// 	var playerNumber = 1;
// 	console.log("there is a player 2");

// }
// else{
// 	var playerNumber = 1;
// 	console.log("there are no players present");

// }

// console.log(playerNumber);

// gameData.ref("players/1").remove();

// console.log(gameData);

// var playerData = gameData.child("players");

// if(playerData.child("1")){
// 	playerNumber = "2";
// }
// else if(playerData.child("2")){
// 	playerNumber = "1";
// }

// console.log(playerData.child("1"));
// console.log(playerNumber);


// playerData.remove();

$("#enterName").on("click", function(){
	var playerName = $("#playerName").val().trim();

	gameData.ref('players').on('value', function(snapshot) {

		if(DataSnapshot.hasChild() == null || DataSnapshot.hasChild(2)){
			var playerNumber = 1;
			gameData.ref("players/1").set({
				name: playerName,
				wins: 0,
				losses: 0
			});
			$("#waiting1").empty();
			$("#player1").html(playerName);
		}
		else if(DataSnapshot.hasChild(1	)){
			var playerNumber = 2;
			gameData.ref("players/2").set({
				name: playerName,
				wins: 0,
				losses: 0
			});
			$("#waiting2").empty();
			$("#player2").html(playerName);
		}
		else{
			alert("Please wait your turn to play Rock, Paper, Scissors");
		}
		console.log("You are player " + playerNumber);
	});

	// console.log("Are you still player " + playerNumber + " ?");

	return false;
});

