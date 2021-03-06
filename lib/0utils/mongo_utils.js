MongoUtils = {
	createModel:function(modelName){
		return new Mongo.Collection(modelName+ "s");
	},

	addData:function(model,data){
		if(model.find().count() === 0){
			model.insert(data);
		}	
	},

	clearData:function(model){
		model.remove({});
	}
};