if(Meteor.isClient){
	Template.nav.helpers({
		/*appConfig : function(){
			return AppConfig.findOne();
		}*/

		/*currentShop:function(){
			return Shops.getShopByOwnerId(Meteor.userId());
		}*/

		currentShop : function(){
			return Shop.getCurrentShop();
		},

		models: function(){
			return Models;
		}

	});

	Template.model.events({
		'click' : function(evt,tmpl){
			var model = tmpl.find(".model").text;
			console.log("clicked model " + model);
			Session.set(Current_Model,model);
		}
	});
}

