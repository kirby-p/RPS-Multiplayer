  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDQgAuTb9u8gK5R4AuEsWK-YPvwr5l4KQY",
    authDomain: "rps-multiplayer-13c5f.firebaseapp.com",
    databaseURL: "https://rps-multiplayer-13c5f.firebaseio.com",
    storageBucket: "",
  };
  firebase.initializeApp(config);


//   var gameData = firebase.database();

// console.log(gameData);

// function writeUserData(name, email) {
//   gameData.ref('players/').set({
//     username: Kirby,
//     email: email
//   });
// }



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

// $("#enterName").on("click", function(){
// 	var player1Name = $("#playerName").val().trim();
// 	$("#waiting1").empty();
// 	$("#player1").html(player1Name);

// 	// gameData.ref("players").set({
// 	// 	name: playerName,
// 	// 	wins: 0,
// 	// 	losses: 0
// 	// })
// 	return false;
// });

