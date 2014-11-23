if (Meteor.isClient) {

	Template.field_value.helpers({
	  value:function(){
	    return Template.parentData(1)[this.name];
	  }
	});


	Template.table_row.helpers({
	  fields:function(){
	    return ModelUtils.getModelFields();
	  },

	  domainValue:function(){
	    return this.domainInstance;
	  }

	})

	Template.table_row.events({
	  'dblclick' : function (evt,tmpl) {
	    Session.set(Editing_Model, tmpl.data._id);
	    Session.set(Show_Model_Form,true)
	  },

	  'click .remove':function  (evt,tmpl) {
	    ModelUtils.currentModel().remove({_id:tmpl.data._id});
	  }
	});

}