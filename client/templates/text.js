Template.form_text.helpers({
	modelValue:function(){
		return  TemplateUtils.modelValue(this.field.name);
	}

});

Template.form_checkbox.events({
	'change [type=checkbox]':function(event){
		var checked = $(event.target).is(':checked');
		var target = $(event.target);
		target[0].value = ""+checked;
		//console.log("is checked: " + checked + " " + target[0].id);
	}
});

Template.form_checkbox.helpers({
	modelValue:function(){
		return TemplateUtils.modelValue(this.field.name);		
	}
});

Template.form_text_area.helpers({
	modelValue:function(){
		return TemplateUtils.modelValue(this.field.name);		
	}
});

Template.text_component.rendered = function(){
	console.log("redering text component with view : " + this.view.name);
	//console.log()
}

Template.modelList.created = function(){
	console.log("created template: "+ this.view.name);
}

/*Template.field_value.helpers({
	value:function(){
		this.domainInstance[this.field.name];	
	}
})*/