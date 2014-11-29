TemplateUtils = {
	
	templateMap:{
		'boolean':"checkbox_component",
		'string':"text_component",
		'text':"text_area_component",
		'array' : "model_fields"
	},

	getFormData:function(template,fields){
		var data = {};
		_.each(fields,function(field){
			if(field[Field_Type] === Data_Type_Array){
				console.log("found field type as " + Data_Type_Array);
				var modelFields = ModelUtils.getEditingModelFields();
				console.log(modelFields);
				var fieldsData=[];
				_.each(modelFields,function(modelField){
					fieldsData.push({name:template.find("#field_"+modelField.name).value});
				});
				data[field.name] = fieldsData;
			}else{
				data[field.name] = template.find("#"+field.name).value;	
			}
			
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