TemplateUtils = {

	getTemplateName:function(type){
		type = type || 'string';
		return Template_Map[type];
	},

	__getDomainValue:function(domain,session,session_property,domain_field){
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
		return TemplateUtils.__getDomainValue(ModelUtils.currentModel(),Session,Editing_Model,fieldName);
	}
};