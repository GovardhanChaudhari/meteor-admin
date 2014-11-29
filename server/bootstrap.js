

//var collectionList = [Shop,Inventory];

Meteor.methods({
	/*removeAllProducts:function(){
		Product.remove({});
	},

	getCurrentShop:function(){
		return Shop.findOne();
	},*/

	getListTemplateData:function(){
		console.log("template data :" + Assets.getText('templates/domain.txt'));
		var data = Assets.getText('templates/domain.txt');
		return data;
	}


});



Meteor.startup(function(){

	console.log("initing server bootstrap");
	
	//Meteor.users.remove({});
	//Meteor.roles.remove({});

	/*_.each(collectionList,function(collection){
		MongoUtils.clearData(collection);
	});*/

	
	UserUtils.createAdmin({
		email:shopOwner,
		password:"gvc123",
		profile:{name:"gvc"}
	});

	UserUtils.createUser({
		email:"b@b.com",
		password:"gvc123",
		profile:{name:"vvc"}
	});

	/*var uid = Accounts.createUser({
		email:shopOwner,
		password:"gvc123",
		profile:{name:"gvc"}
	});


	Roles.addUsersToRoles(uid,['admin'])*/


	/*MongoUtils.addData(Inventory,{
		name:"my inventory"
	});*/

	

	

	/*if(AppConfig.find().count() ===0){
		AppConfig.insert({
			siteName:"Srirang Computers"
		});
	}*/

	

/*	MongoUtils.addData(Shop,{
		name:shopName,
		inventoryId: Inventory.findOne()._id,
		ownerId: UserUtils.findByEmail("a@a.com")._id
	});
*/
	
	/*MongoUtils.addData(Domain,{
		name:'Customer',
		fields:[
			{name:'first_name'},
			{name:'last_name'},
			{name:'address'},
			{name:'phone'}
		]
	});*/
	
	/*var domains = Domain.find().fetch();
	_.each(domains,function(domain){
		console.log("Creating domain : " + domain.name);
		DomainMap[domain.name] = ModelUtils.createModel(domain);
	});*/

	//console.log("Created following domains : " + _.keys(DomainMap));

	//var gvcUtils = Meteor.npmRequire('gvc_utils');

	//console.log("redering template : " + gvcUtils.TemplateUtils.render("hi {{name}}",{name:"gvc"}));

	
	//ModelDb.remove({});
	//ModelDb.insert(ProductDef);

	//var modelDef = ModelDb.findOne({name:"product"});
	//console.log("found model def " + modelDef.name);
	//var m =  ModelUtils.createModelFromData(modelDef);
	//var m =  ModelUtils.createModelFromData(ProductDef);
	//var m =  ModelUtils.createModelFromData({name:"products"});
	//console.log("created model: " + m.name());
	//console.log("model map is "+ ModelMap);
	console.log("model map has following keys "+ Object.keys(ModelMap));
	console.log("foudn model defs: "+ ModelDb.find().count());

	/*Product = ModelMap['product'];

	if(Product.find().count() === 0){
		var data = [
			{name:"p1",price:1}
			//{name:"p2",price:2,inventoryId:Inventory.findOne()._id},
			//{name:"p3",price:3,inventoryId:Inventory.findOne()._id}				
		];	

		var timestamp = (new Date()).getTime();
		_.each(data,function(product){
			//Product.insert({sold:"false",name:product.name,price:product.price,createdAt:new Date(timestamp),inventoryId:product.inventoryId});
			Product.insert(product);
			timestamp+=1;
		});
	}*/

	console.log("publishing models");
	var models = ModelDb.find().fetch();
	_.each(models,function(model){
		//Meteor.publish(model.name);
	})

	console.log("***********************");
});
