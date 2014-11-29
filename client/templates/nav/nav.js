if(Meteor.isClient){
	Template.nav.helpers({
		models: function(){
			var models = ModelDb.find().fetch(); 
			return models;
		}
	});

	Template.model.events({
		'click' : function(evt,tmpl){
			console.log("clicked model def id : " + tmpl.data._id);
			Session.set(Current_Model_Id,tmpl.data._id);
		}
	});

	Template.nav.created = function(){
		/*console.log("Nav template created");
		console.log("found model defs : " + ModelDb.find().count());
		console.log("*********************")*/
	};

	Template.nav.rendered = function(){
		/*console.log("rendered nav");
		console.log("found model defs : " + ModelDb.find().fetch());*/
	};
}

