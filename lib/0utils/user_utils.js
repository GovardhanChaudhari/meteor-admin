UserUtils = {
	createUser: function(data){
		if (Meteor.users.find({emails:{$elemMatch:{address:data.email}}}).count() === 0){
			var id = Accounts.createUser(data);
			Roles.addUsersToRoles(id,['webuser']);	
			return id;
		}
	},
	createAdmin:function(data){
		var id = this.createUser(data);
		if(id){
			Roles.addUsersToRoles(id,['admin']);	
			return id;
		}
	},

	findByEmail:function(email){
		return Meteor.users.findOne({emails:{$elemMatch:{address:email}}});
	}

};