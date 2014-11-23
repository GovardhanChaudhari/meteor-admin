ModelUtils = {
	createModel:function(model){
		/*if(Domain.find({name:model.name}).count() === 0){
			return DomainMap[model.name] = MongoUtils.createDomain(domain.name);
		}*/

		var modelName = StringUtils.capitalize(model);
		//console.log("creating model: " + modelName);
		var newModel = MongoUtils.createModel(model);
		ModelUtils.addGenericMethods(newModel,model);
		ModelMap[modelName] = newModel;
		Models.push({name:modelName});

		RouteUtils.addListRoute(modelName);

		return newModel;
	},

	currentModel:function(){
		return ModelMap[Session.get(Current_Model)];
	},

	addGenericMethods:function(model,modelName){
		model.getModelList = function(){
			return model.find();
		},

		model.blank = function(){
			var p = {};
			_.each(model.fields(),function(field){
				p[field.name] = '';
			});
			return p;
		},

		model.name = function(){
			return StrungUtils.capitalize(modelName);
		},

		model.create = function(data){
			var newModel = ObjectUtils.merge(data,{});
			//console.log("creating product" + newPrd);
			return newModel;
		}
	},

	getModelFields:function(){
		return ModelUtils.currentModel().fields;
	}
}