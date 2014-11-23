
//ModelMap={};

if(Meteor.isClient){

	Meteor.startup(function(){
		Session.setDefault(Current_Model,"Product");
		Session.setDefault(Show_Model_Form, false);
  		Session.setDefault(Editing_Model,null);
  /*		ModelMap['Product'] = Product;
  		ModelMap['Shop'] = Shop;
  		ModelMap['Inventory'] = Inventory;*/

		console.log("getting shop from server " + Meteor.call("getCurrentShop"));

		Meteor.wrapAsync(function(){
			alert("checking isClient");
			console.log("checking isClient");
		});
		
		//alert("Bootstrapping client **************************");
		console.log("Bootstrapping client **************************");
		if(Meteor.userId()){
			//alert("found user " + Meteor.userId());
			console.log("found user " + Meteor.userId());
			Session.set("shopOwnerId",Meteor.userId());
		};


		//console.log("list template data: " + Meteor.call('getListTemplateData'));
		//console.log("Found shop at client " + shop.name);
		//alert(shop.name);

	});

	

	
		
		

}