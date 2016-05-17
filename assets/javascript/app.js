var gameData = new Firebase("https://rps-multiplayer-5636.firebaseio.com/");

var playerData = gameData.child("players");

playerData.remove();

$("#enterName").on("click", function(){
	var playerName = $("#playerName").val().trim();
	$("#waiting1").empty();
	$("#player1").html(playerName);



	playerData.child("1").set({
		name: playerName,
		wins: 0,
		losses: 0
	})
	return false;
});

