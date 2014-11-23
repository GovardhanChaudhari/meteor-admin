if (Meteor.isClient) {
	Template.modelList.helpers({
    showModelForm : function () {
      return Session.get(Show_Model_Form);        
    },

    models: function(){
      //return Products.find({muser:Meteor.userId(),name:Session.get('nameFilter')});
      //return Products.find({muser:Meteor.userId(),name: new RegExp(Session.get("nameFilter"))});
      console.log("current shop: " + Shop.findByOwnerId(Meteor.userId()).name);
      //var p = ModelUtils.currentModel().getProductsByInventoryId(Shop.getCurrentShop().inventoryId);
      var p = ModelUtils.currentModel().getModelList();
      //Session.set('products',p);
      console.log("found products " + p.count());
      return p;
    },

  
    fields:function(){
      //console.log("found fields : " + ModelUtils.getModelFields());
      return ModelUtils.getModelFields();
    },
    
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

}