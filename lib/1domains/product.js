ProductDef = { 
	name:'product',
	fields:[
		{name:"name"},
		{name:'price'},
		{name:"sold",type:"boolean"},
		{name:"description",type:"text"},
		{name:"company"}
	]
}

	
		console.log("in product.js");
		
		/*if(Meteor.isServer){
			ModelDb.remove({});
			ModelDb.insert(ProductDef);	
		}*/

		
		
		//Product =  ModelMap['product'];
		console.log("found model defs : " + ModelDb.find().count());
			/*var m = ModelDb.findOne({name:"product"});
			//console.log("found model definition : " + m.name);
		
		

			ModelUtils.createModelFromData(m);	

			console.log("model map for product : " + ModelMap['product']);

			Product = ModelMap['product'];

			var specialMethods = {
				getModelList : function(){
					//return Product.getProductsByInventoryId(Shop.getCurrentShop().inventoryId);
					return Product.find({});
				}
			}

			ObjectUtils.merge(Product,specialMethods);	*/
		
		
		console.log("model map has following keys: " + Object.keys(ModelMap));
		
		//ModelUtils.createModelFromData(ProductDef);
		//ModelUtils.createModel('product');
		
	

	

	/*filteredProducts : function(name){
		return Product.find({name:name});
	},*/

	/*getProductsByInventoryId : function(inventoryId){
		return Product.find({inventoryId:inventoryId});
	},*/

	/*getProductsByShopId : function(shopId){
		return Product.getProductsByInventoryId(Shop.getById(shopId));
	},*/

/*	Product.create = function(data,shop){

		var p = {muser:Meteor.userId(),inventoryId:shop.inventoryId};

		var newPrd = ObjectUtils.merge(data,p);
		console.log("creating product" + newPrd);
		return newPrd;
	}*/

/*Product.blank = function(){
	var p = {};
	_.each(Product.fields(),function(field){
		p[field.name] = '';
	});
	return p;
}*/

/*Product.name = function(){
	return "Product";
}*/
console.log("*************************");