if(Meteor.isClient){
	Template.nav.helpers({
		/*appConfig : function(){
			return AppConfig.findOne();
		}*/

		/*currentShop:function(){
			return Shops.getShopByOwnerId(Meteor.userId());
		}*/

		currentShop : function(){
			//return Shop.getCurrentShop();
			return "Enter current site name";
		},

		models: function(){
			var models = ModelDb.find().fetch(); 
			/*_.each(models,function(model){
				ModelMap[model.name] = ModelUtils.createModelFromData(model);
			});*/
			return models;
		}

	});

	Template.model.events({
		'click' : function(evt,tmpl){
			//var model = tmpl.find(".model").text.toLowerCase();
			//console.log("clicked model " + model);
			//ModelMap[model] = Mon
			console.log("clicked model def id : " + tmpl.data._id);
			Session.set(Current_Model_Id,tmpl.data._id);
			//RouteUtils.addListRoute(model);
		}
	});

	Template.nav.created = function(){
		console.log("Nav template created");
		console.log("found model defs : " + ModelDb.find().count());
		console.log("*********************")
	};

	Template.nav.rendered = function(){
		console.log("rendered nav");
		console.log("found model defs : " + ModelDb.find().fetch());
	};

	/*Template.models_link.helpers({
		link:function(){
			var model = ModelDb.findOne({name:this.model.name});
			return {displayName:StringUtils.capitalize(this.mode.name)};
		}
	});*/
}

