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

Template.model_field.helpers({
	model_field_name:function(){
		console.log(this);
		return "name";
	},
	model_field_type:function(){
		return "type";
	},

	modelValue:function(){
		return this.name;		
	},

	modelType:function(){
		return this.type;
	}
});

Template.add_new_field_link.events({
	'click':function(evt,tmpl){
		var last_model_field = $("div.model_fields div.model_field:last").get(0);
		Blaze.render(Template.model_field,last_model_field);
	}
})

Template.remove_field_link.events({
	'click' : function(evt,tmpl){
		//console.log("clicked remove field link");
		Blaze.remove(tmpl.view.parentView.templateInstance().view);
	}
})