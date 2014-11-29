Template.my_dynamic_template.helpers({
	getTemplateName:function(){
		return TemplateUtils.getTemplateName(this.field.type);
	}
})