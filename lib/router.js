Router.configure({
	layoutTemplate:'appBody',
	notFoundTemplate:'appNotFound',
	loadingTemplate:'appLoading',

	waitOn:function(){

	}
});

Router.route('/',function(){
	this.render('home_page');
});

Router.route('/models/:_id:',function(){
	this.render('modelList',{data:ModelDb.findOne({_id:this.params._id})});
},{name:"showmodel"});


Router.route('/models',function(){
	this.render('modelList',{data:ModelDb.find()});
},{name:"models"});
