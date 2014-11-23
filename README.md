meteor-admin
============

Inspired by Rails Admin or Node's Drywall.

What it does ?

	- Automatic UI generation
		- List view
		- Add/Update form
		
	- Basic CRUD operations

How to do it?
	- Define a model
		- Create a file in lib/1domains/<your_model_name>.js
		- Define your model in above file.
			- eg.
				Customer = ModelUtils.createModel('customer');
				Customer.fields =  [
					{name:"first_name"},
					{name:"last_name"},
					{name:"age"}
				]
	- You will see the link of your model name at the top of navigation bar
	