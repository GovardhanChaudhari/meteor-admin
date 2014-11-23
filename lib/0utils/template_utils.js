TemplateUtils = {
	
	templateMap:{
		'boolean':"checkbox_component",
		'string':"text_component",
		'text':"text_area_component"
	},

	getFormData:function(template,fields){
		var data = {};
		_.each(fields,function(field){
			data[field.name] = template.find("#"+field.name).value;
		});
		return data;
	},

	getTemplateName:function(type){
		type = type || 'string';
		return this.templateMap[type];
	},

	getDomainValue:function(domain,session,session_property,domain_field){
		var domainVal;
		if(session.get(Add_Model)){
			return '';
		}else{
			domainVal = domain.findOne(session.get(session_property))[domain_field];
			//alert("found domain value : " + domainVal);
			return domainVal;
		}
	},

	modelValue:function(fieldName){
		return TemplateUtils.getDomainValue(ModelUtils.currentModel(),Session,Editing_Model,fieldName);
	}

	


};