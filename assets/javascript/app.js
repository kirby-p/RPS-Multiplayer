// Initialize Firebase
var config = {
apiKey: "AIzaSyDQgAuTb9u8gK5R4AuEsWK-YPvwr5l4KQY",
authDomain: "rps-multiplayer-13c5f.firebaseapp.com",
databaseURL: "https://rps-multiplayer-13c5f.firebaseio.com",
storageBucket: "",
};
firebase.initializeApp(config);


var gameData = firebase.database();

gameData.ref('players').on('value', function(snapshot) {
	if(snapshot.val() == null || snapshot.val() == 2){
		playerNumber = 1;
	}
	else if(snapshot.val() == 1){
		playerNumber = 2;
	}
	console.log("You are player " + playerNumber);
});

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

console.log(playerNumber);

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
	var player1Name = $("#playerName").val().trim();
	$("#waiting1").empty();
	$("#player1").html(player1Name);

	gameData.ref("players/1").set({
		name: player1Name,
		wins: 0,
		losses: 0
	})
	gameData.ref("players/2").set({
		name: player1Name,
		wins: 0,
		losses: 0
	})
	return false;
});

