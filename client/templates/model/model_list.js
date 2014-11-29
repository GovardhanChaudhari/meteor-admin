if (Meteor.isClient) {
	Template.modelList.helpers({
    showModelForm : function () {
      return Session.get(Show_Model_Form);        
    },

    models: function(){
      //return Products.find({muser:Meteor.userId(),name:Session.get('nameFilter')});
      //return Products.find({muser:Meteor.userId(),name: new RegExp(Session.get("nameFilter"))});
      //console.log("current shop: " + Shop.findByOwnerId(Meteor.userId()).name);
      //var p = ModelUtils.currentModel().getProductsByInventoryId(Shop.getCurrentShop().inventoryId);
      console.log("listing models for : " + ModelUtils.currentModel().name);
      var p = ModelUtils.currentModel().getModelList();
      //Session.set('products',p);
      console.log("found models: " + p.count());
      if(p){
        return p;  
      }else{
        ModelDb.find();
      }
      
    },

  
    fields:function(){
      //console.log("found fields : " + ModelUtils.getModelFields());
      //return ModelUtils.getModelFields();
      //return ModelDb.findOne(Session.get(Current_Model_Id)).fields;
      return ModelUtils.currentModel().fields;
    },
    
    currentModel:function(){
      var currentModel = ModelUtils.currentModel();
      if(currentModel){
        return currentModel;
      }else{
        return ModelDb;
      }

    }

  });

  Template.modelList.events({
  'click .addModel':function  (evt,tmpl) {
    Session.set(Show_Model_Form,true);
    Session.set(Add_Model,true);
  },

  'click .removeAll':function(evt,tmpl){
      Meteor.call("removeAllProducts");
   }

});

  Template.modelList.rendered = function(){
    console.log("model_list rendered");
    console.log("found model defs: " + ModelDb.find().count());
  }

}