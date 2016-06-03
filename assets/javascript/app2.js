	var gameData = new Firebase("https://rps-5636.firebaseio.com/");
	var playersData = gameData.child("Players");

$("#enterName").on("click", function(){
	var playerName = $("#playerName").val().trim();

	gameData.once("value", function(snapshot){
		if(snapshot.child("Players/1").exists() && snapshot.child("Players/2").exists()){
			console.log("Please wait your turn.");
		}
		else {
			if(snapshot.child("Players").exists() == false){
				var playerNumber = 1;			
				console.log("You\'re the first player!");
			}
			else if(snapshot.child("Players/1").exists()){		
				var playerNumber = 2;
				console.log("Player 1 is waiting.");
			}	
			else if(snapshot.child("Players/2").exists()){
				var playerNumber = 1;
				console.log("Player 2 is waiting.");
			}	

			playersData.child(playerNumber).set({
				name: playerName,
				wins: 0,
				losses: 0
			});
		}
	});
	
	return false;
});
