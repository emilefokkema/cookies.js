define([],function(){
	return {
		get:function(){
			var s = window.location.hash;
			if(s){
				return s.substr(1);
			}
			return "";
		},
		set:function(s){
			window.location.hash = s;
		}
	};
})