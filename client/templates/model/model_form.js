if (Meteor.isClient) {

  Template.model_form.events({
    'click .save':function  (evt,tmpl) {
      var currentModel = ModelUtils.currentModel();
      var p = TemplateUtils.getFormData(tmpl,ModelUtils.currentModel().fields);
      //var mongoModel = MongoUtils.createModel(currentModel.name);
      //ModelUtils.currentModel().insert(ModelUtils.currentModel().create(p,{}));
      if(currentModel.name === "model"){
        //var model = ModelUtils.createModelFromData(p);
        var modelId = ModelDb.insert(ModelDb.create(p,{}));
        var model = new Mongo.Collection(p.name);
        //ModelUtils.publishModel(model);
      }else{
        //TODO
        currentModel.insert(currentModel.create(p,{}));
      }
      
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