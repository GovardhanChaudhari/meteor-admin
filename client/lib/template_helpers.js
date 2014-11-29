
Template.registerHelper("modelName",function(){
	return ModelUtils.currentModel().name;
});

Template.registerHelper("capitalize",function(str){
	return StringUtils.capitalize(str);
});

/*Template.registerHelper("fields",function(){
	return ModelUtils.currentModel().fields;
});*/



/*Template.registerHelper("modelValue",function(fieldName){
	return TemplateUtils.getDomainValue(ModelUtils.currentModel(),Session,Editing_Model,fieldName);
});*/