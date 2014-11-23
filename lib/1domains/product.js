Product = ModelUtils.createModel('product');


Product.fields =[
		{name:"name"},
		{name:'price'},
		{name:"sold",type:"boolean"},
		{name:"description",type:"text"},
		{name:"company"}
	];


Product.getModelList = function(){
	return Product.getProductsByInventoryId(Shop.getCurrentShop().inventoryId);
}

Product.filteredProducts = function(name){
	return Product.find({name:name});
}

Product.getProductsByInventoryId = function(inventoryId){
	return Product.find({inventoryId:inventoryId});
}

Product.getProductsByShopId = function(shopId){
	return Product.getProductsByInventoryId(Shop.getById(shopId));
}

Product.create = function(data,shop){

	var p = {muser:Meteor.userId(),inventoryId:shop.inventoryId};

	var newPrd = ObjectUtils.merge(data,p);
	console.log("creating product" + newPrd);
	return newPrd;
}

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