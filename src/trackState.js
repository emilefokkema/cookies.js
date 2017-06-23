define(["docCookies","hash"], function(docCookies, hash){
	var cookieKey = "trackedstate";
	var serialize = function(){return "somestate";};
	var deserialize = function(s){console.log("deserialized from state "+s);};
	
	var config = function(s){
		cookieKey = s.cookieKey || cookieKey;
		serialize = s.serialize || serialize;
		deserialize = s.deserialize || deserialize;
	};
	var read = function(){
		var hashState = hash.get();
		if(hashState){
			deserialize(hashState);
			docCookies.setItem(cookieKey, hashState, Infinity);
		}else{
			var cookieState = docCookies.getItem(cookieKey);
			if(cookieState){
				deserialize(cookieState);
				hash.set(cookieState);
			}
		}
	};
	var write = function(){
		var state = serialize();
		docCookies.setItem(cookieKey, state, Infinity);
		hash.set(state);
	};
	var trackState = {
		read:read,
		write:write,
		config:config
	};

	window.trackState = trackState;
});