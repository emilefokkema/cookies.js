require.config({
	baseUrl:"../src/"
});

require(["trackState"],function(){
	var input = document.getElementById("state");
	var saveButton = document.getElementById("save");
	trackState.config({
		cookieKey:"testState",
		serialize:function(){return input.value;},
		deserialize:function(s){input.value = s;}
	});
	trackState.read();
});