FormUtils = {
	clearAllFormStates:function(session){
		session.set(Show_Model_Form,false);
    	session.set(Editing_Model,null);
    	session.set(Add_Model,false);
	},
	clearFormSate:function(session,property,value){
		value = value || null;
		session.set(property,value);
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
					fieldsData.push({
						name:template.find("#field_"+modelField.name).value,
						type:template.find("#field_"+modelField.type).value,
					});
				});
				data[field.name] = fieldsData;
			}else{
				data[field.name] = template.find("#"+field.name).value;	
			}
			
		});
		return data;
	}

}