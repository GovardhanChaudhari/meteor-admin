if (Meteor.isClient) {

  Template.model_form.events({
    'click .save':function  (evt,tmpl) {
      var p = TemplateUtils.getFormData(tmpl,ModelUtils.currentModel().fields);
      ModelUtils.currentModel().insert(ModelUtils.currentModel().create(p,Shop.getCurrentShop()));
      FormUtils.clearAllFormStates(Session);
    },

    'click .update':function(evt,tmpl){
      var data = TemplateUtils.getFormData(tmpl,ModelUtils.currentModel().fields)
      ModelUtils.currentModel().update(Session.get(Editing_Model), {$set:data});
      FormUtils.clearAllFormStates(Session);
    },

    'click .cancel':function  (evt,tmpl) {
      FormUtils.clearAllFormStates(Session);
    }
  });

  Template.model_form.helpers({
    editingModel : function() {
      return Session.get(Editing_Model);
    },

    fields: function(){
      //console.log("found fileds");
      return ModelUtils.getModelFields();
    },

    field:function(){
      return {name:"price"};
    }

  });

}