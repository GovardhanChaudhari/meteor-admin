ObjectUtils = {
	merge:function(src,dest){
		return _.extend(src,dest);
	},

	printDetails:function(object){
		var output = "";
		for (var property in object) {
 		  output += property + ": " + object[property] + ",";
		}
		return output;
	}
}