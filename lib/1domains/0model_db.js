


/*ModelDb = MongoUtils.createModel("model");
if(Meteor.isServer){
	ModelDb.remove({});	
}

ModelDb.fields=[
	{name:"name"},
	{name:"fields"}
];

Models.push

RouteUtils.addListRoute('model');*/


	console.log("initing model def");

	ModelDef = {
		name:"model",
		fields:[
			{name:"name"},
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
				fields:[{name:""}]
			};
		};

		ModelDb.create = function(data){
			console.log("creating model def using data : " + ObjectUtils.printDetails(data));
			var newModel = ObjectUtils.merge(data,{});
			//console.log("creating product" + newPrd);
			ModelUtils.createModelFromData(data);
			//RouteUtils.addListRoute(data.name);
			return newModel;
		}



		//ModelDb.remove({});
	

	

	console.log("******************************");	


