ModelUtils = {
	createModel:function(modelName){
		/*if(Domain.find({name:model.name}).count() === 0){
			return DomainMap[model.name] = MongoUtils.createDomain(domain.name);
		}*/

		var capModelName = StringUtils.capitalize(modelName);
		//console.log("creating model: " + modelName);
		var newModel = MongoUtils.createModel(modelName);

		//ModelUtils.addGenericMethods(newModel,modelName);
		//console.log("created mongo collection: " + newModel.name());

		
		//Models.push({name:capModelName});

		console.log("adding route for model: " + modelName);
		RouteUtils.addListRoute(modelName);

		return newModel;
	},

	createModelFromData:function(model){
		var m =  ModelUtils.createModel(model.name);
		//m.fields = model.fields;
		//console.log("pushing model in model map :" + model.name);
		
		//ModelMap[model.name] = m;
		
		//console.log("after push model map is " + Object.keys(ModelMap));
		return m;
	},

	currentModel:function(){
		//return ModelMap[Session.get(Current_Model)];
		var currentModel =  ModelDb.findOne(Session.get(Current_Model_Id));

		if(currentModel){

		}else{
			currentModel = ModelDb.findOne({name:"model"});
		}

		if(currentModel === ModelDb ){
			var mongoModel = Mongo.Collection.get("model");
			ModelUtils.addGenericMethods(mongoModel);
			currentModel =  ObjectUtils.merge(currentModel,mongoModel);
			return currentModel;
			//return ModelDb;
		}else{
			var mongoModel = Mongo.Collection.get(currentModel.name);
			ModelUtils.addGenericMethods(mongoModel);
			currentModel =  ObjectUtils.merge(currentModel,mongoModel);
			return currentModel;
		}
	},

	addGenericMethods:function(model,modelName){
		model.getModelList = function(){
			return model.find();
		},

		model.blank = function(){
			var p = {};
			_.each(model.fields,function(field){
				p[field.name] = '';
				p[field.type] = '';
			});
			return p;
		},

		/*model.name = function(){
			return StringUtils.capitalize(modelName);
		},*/

		model.create = function(data){
			var newModel = ObjectUtils.merge(data,{});
			//console.log("creating product" + newPrd);
			return newModel;
		}
	},

	getModelFields:function(){
		return ModelUtils.currentModel().fields;
	},

	getEditingModelFields:function(){
		if(Session.get(Add_Model)){
			return [{name:"",type:"string"}];
		}else{
			return ModelUtils.currentModel().findOne(Session.get(Editing_Model)).fields;	
		}
		
	},

	publishModel:function(model){
		Meteor.publish(model.name,function(){
			console.log("publishing model : " + model.name);
			return model.find();
		});
	}
}