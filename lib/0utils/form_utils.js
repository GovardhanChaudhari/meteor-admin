FormUtils = {
	clearAllFormStates:function(session){
		session.set(Show_Model_Form,false);
    	session.set(Editing_Model,null);
    	session.set(Add_Model,false);
	},
	clearFormSate:function(session,property,value){
		value = value || null;
		session.set(property,value);
	}

}