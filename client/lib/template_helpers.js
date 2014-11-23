
Template.registerHelper("modelName",function(){
	return Session.get(Current_Model);
});

/*Template.registerHelper("fields",function(){
	return ModelUtils.currentModel().fields;
});*/



/*Template.registerHelper("modelValue",function(fieldName){
	return TemplateUtils.getDomainValue(ModelUtils.currentModel(),Session,Editing_Model,fieldName);
});*/