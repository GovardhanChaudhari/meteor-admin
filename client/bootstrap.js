
//ModelMap={};



	Meteor.startup(function(){
		Session.setDefault(Current_Model,"model");
		Session.setDefault(Show_Model_Form, false);
  		Session.setDefault(Editing_Model,null);
  /*		ModelMap['Product'] = Product;
  		ModelMap['Shop'] = Shop;
  		ModelMap['Inventory'] = Inventory;*/

		//console.log("getting shop from server " + Meteor.call("getCurrentShop"));

		
		
		//alert("Bootstrapping client **************************");
		console.log("Bootstrapping client **************************");
		if(Meteor.userId()){
			//alert("found user " + Meteor.userId());
			console.log("found user " + Meteor.userId());
			Session.set("shopOwnerId",Meteor.userId());
		};

		
		
		

		//console.log("model map keys: " +Object.keys(ModelMap));

		//console.log("found current model :" + ModelUtils.currentModel());
		/*var model = ModelUtils.createModelFromData({
			name:"model",
			fields:[
				{name:"name"},
				{name:"fields"}
			]
		});

		model.insert({
			name:"Categoty",
			fields:[{name:"name"}]
		});

		var m = model.findOne();
		console.log("found model : " + m.name);

		ModelUtils.createModelFromData(m);*/

		//console.log("list template data: " + Meteor.call('getListTemplateData'));
		//console.log("Found shop at client " + shop.name);
		//alert(shop.name);

		var handler = Meteor.subscribe("model",function onReady(){
			console.log("is model ready *** : " + this.ready);	
			console.log("is model ready *** found defs: " + ModelDb.find().count());

			var models = ModelDb.find().fetch();
			if(models.length === 0){
				console.log("no models found: " + models.count());	
			}else{
				//console.log("pupulating model map ...");
				console.log("found models : " + models.length);
				_.each(models,function(model){
					//console.log("pushing model into model map: " + model.name);
					//ModelMap[model.name] = model;
					if(model.name === "model"){

					}else{
						new Mongo.Collection(model.name);	
					}
				});	
			}
		});
		//var modelDefs = new Mongo.Collection("model");
		console.log("is model ready *** : " + handler.ready());

		console.log("**************************");

	});

	

	
		
		

