Router.configure({
	layoutTemplate:'appBody',
	notFoundTemplate:'appNotFound',
	loadingTemplate:'appLoading',

	waitOn:function(){

	}
});

/*Router.route('/',function(){
	this.render('model_list');
});*/

Router.route('/models/:_id:',function(){
	this.render('modelList',{data:ModelDb.findOne({_id:this.params._id})});
},{name:"showmodel"});


Router.route('/models',function(){
	this.render('modelList',{data:ModelDb.find()});
},{name:"models"});



/*Router.route('/Product',function(){
	this.render('model_list');
});

Router.route('/Shop',function(){
	this.render('model_list');
});

Router.route('/Inventory',function(){
	this.render('model_list');
});

Router.route('/Customer',function(){
	this.render('model_list');
});*/

/*Router.map(function(){
	this.route('model_list',{
		path:'/Product',
		data: function(){
			return Product.find();
		}
		
	});

	this.route('model_list',{
		path:'/Shop',
		data:function(){
			//TODO
			return Shop.find({ownerId:Meteor.userId})
		}
	});

	this.route('home',{
		path:'/',
		action:function(){
			Router.go('shop_list');
		}
	});

	this.route('showProduct',{
		path:'/products/:_id',
		data:function(){
			return Product.findOne(this.params._id);
		}
	})*/

//});