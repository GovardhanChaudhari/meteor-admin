Shop = ModelUtils.createModel('shop');

Shop.fields =[
	{name:"name"}
];


Shop.create = function(data,shop){

	var p = {ownerId:Meteor.userId(),inventoryId:Inventory.findOne()._id};

	var newPrd = ObjectUtils.merge(data,p);
	console.log("creating shop" + newPrd);
	return newPrd;
}


Shop.findByOwnerId = function(ownerId){
	return Shop.findOne({ownerId:ownerId});
}


Shop.findAllByOwnerId = function(ownerId){
	return Shop.find({ownerId:ownerId});
}


Shop.getCurrentShop = function(){
	return Shop.findOne({ownerId:Meteor.userId()});
}

Shop.getInventory = function(){
	return Inventory.findOne(Shop.getCurrentShop().inventoryId);
}

Shop.getById =function(id){
	return Shop.findOne(id);
}

Shop.getInventoryByShopId = function(shopId){
	return Shop.getById(shopId).inventoryId;
}

/*Shop.name = function(){
	return "Shop";
}*/