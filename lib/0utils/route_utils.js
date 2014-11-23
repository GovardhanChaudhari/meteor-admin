RouteUtils = {
	addListRoute:function(modelName){
		Router.route('/'+modelName,function(){
			this.render('model_list');
		})
	}
}