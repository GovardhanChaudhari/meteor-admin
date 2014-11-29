console.log("initing model def");

ModelDef = {
	name:"model",
	fields:[
		{name:"name",type:Data_Type_String},
		{name:"fields",type:Data_Type_Array}
	]
};

ModelDef.getModelList=function(){
	return ModelDb.find();
};

ModelDb = ModelUtils.createModelFromData(ModelDef);	

if(Meteor.isServer){

	ModelDb.remove({});
	ModelDb.insert(ModelDef);	

	Meteor.publish("model",function(){
		this.ready();
		return ModelDb.find();
	});
}


ModelDb.blank = function(){
	return { name:"",
		fields:[{name:"",type:Data_Type_String}]
	};
};

ModelDb.create = function(data){
	console.log("creating model def using data : " + ObjectUtils.printDetails(data));
	var newModel = ObjectUtils.merge(data,{});
	ModelUtils.createModelFromData(data);
	return newModel;
}

console.log("******************************");