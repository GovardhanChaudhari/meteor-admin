Template.model_fields.helpers({
	fields:function(){
		/* here this keyword referes to current template context */
		console.log(this);
		var fieldsArray = ModelUtils.getEditingModelFields();
		return fieldsArray;
		
	}
});

Template.model_fields.rendered = function(){
	//console.log("template model_fields rendered");
}

Template.field_name.helpers({
	model_field_name:function(){
		console.log(this);
		return "name";
	},

	modelValue:function(){
		return this.name;		
	}
});

Template.add_new_field.events({
	'click':function(evt,tmpl){
		var last_model_field = $("div.model_fields div.model_field:last").get(0);
		Blaze.render(Template.field_name,last_model_field);
	}
})

Template.field_remove_button.events({
	'click' : function(evt,tmpl){
		console.log("clicked field remove button");
		Blaze.remove(tmpl.view.parentView.templateInstance().view);
	}
})