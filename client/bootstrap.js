Meteor.startup(function(){
	console.log("Bootstrapping client **************************");

	Session.setDefault(Current_Model,"model");
	Session.setDefault(Show_Model_Form, false);
	Session.setDefault(Editing_Model,null);
	
	if(Meteor.userId()){
		//alert("found user " + Meteor.userId());
		console.log("found user " + Meteor.userId());
		Session.set("shopOwnerId",Meteor.userId());
	};


	var handler = Meteor.subscribe("model",function onReady(){
		console.log("client bootstrap: model is ready ");	
		//console.log("is model ready *** found defs: " + ModelDb.find().count());

		var models = ModelDb.find().fetch();
		if(models.length === 0){
			//console.log("no models found: " + models.count());	
		}else{
			//console.log("pupulating model map ...");
			//console.log("found models : " + models.length);
			_.each(models,function(model){
				if(model.name === "model"){

				}else{
					new Mongo.Collection(model.name);	
				}
			});	
		}
	});

	//console.log("is model ready *** : " + handler.ready());
	console.log("**************************");
});