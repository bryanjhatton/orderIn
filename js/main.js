function toggleUsers(button)
{
	var users = document.getElementById("userSettings");

	if(button.value == "on"){
		users.innerHTML="";
		button.value="off";
		button.innerHTML="+";
	}

	else{
		//This part should fetch all users from the database.
		users.innerHTML=
			"<div class=\"row\" style=\"line-height:30px;\">\
				<div class=\"span6 offset1\">\
					<h5>Michael Nguyen</h5>\
				</div>\
				<div class=\"span1 offset3\">\
					<p><a class=\"btn btn-warning\" onclick=\"loadDetails('userDetails')\">Edit</a></p>\
				</div>\
			</div>\
			<div class=\"row\" style=\"line-height:30px;\">\
				<div class=\"row\" id=\"userDetails\">\
				</div>\
			</div>";
		button.value="on";
		button.innerHTML="-";

	}
}

function loadDetails(id)
{
	//Load user detail from database
	var userDetail = document.getElementById(id);

	userDetail.innerHTML=
	"<div class=\"row\" style=\"line-height:30px\">\
	 	<div class=\"span4 offset3\">\
			<p>Name: </p>\
			<p>Permission Level: </p>\
			<p>Email: </p>\
		</div>\
		<div class=\"span2 offset1\">\
			<input type=\"text\" value=\"Michael Nguyen\" readonly>\
			<select>\
			<option value=0>Owner</option>\
			<option value=1>Admin</option>\
			<option value=2>User</option>\
			</select>\
			<input type=\"text\" placeholder=\"Email\">\
		</div>\
	</div>\
	<div class=\"row\" style=\"line-height:30px\">\
		<div class=\"span2 offset8\">\
			<a class=\"btn btn-success\" onclick=\"saveUserDetails(this)\">Save</a>\
			<a class=\"btn btn-danger\" onclick=\"closeUserDetails(this)\">Cancel</a>\
		</div>\
	</div>";
}

function saveUserDetails(user)
{
	var row = user.parentNode.parentNode.parentNode;
	//Do the saving stuff.
	row.innerHTML="";
}

function closeUserDetails(user)
{
	var row = user.parentNode.parentNode.parentNode;
	row.innerHTML="";
}

function toggleCategories(button)
{
	var categories = document.getElementById("categorySettings");

	if(button.value == "on"){
		categories.innerHTML="";
		button.value = "off";
		button.innerHTML = "+";
	}

	else{
		//This part should fetch all categories from the database.
		categories.innerHTML=
			"<div class=\"row\" style=\"line-height:30px;\">\
				<div class=\"span6 offset1\" id=\"categoryList\">\
					<h5>Daily</h5>\
					<h5>Indian</h5>\
					<h5>Vegetarian</h5>\
					<input type=\"text\" placeholder=\"New Category\" id=\"newCategory\">\
				</div>\
				<div class=\"span2 offset3\">\
					<a class=\"btn btn-danger\" onclick=\"deleteCategory('categoryRow')\">Delete</a><br>\
					<a class=\"btn btn-danger\" onclick=\"deleteCategory('categoryRow')\">Delete</a><br>\
					<a class=\"btn btn-danger\" onclick=\"deleteCategory('categoryRow')\">Delete</a><br>\
					<a class=\"btn btn-success\" onclick=\"addCategory(this)\">Add New</a>\
				</div>\
			</div>";
		button.value = "on";
		button.innerHTML = "-";
	}
}

function deleteCategory(row)
{
	//Get num dishes that correspond to this category.
	var answer=confirm("The category you are about to delete has X dishes associated with it, would you like to continue?");

	if(answer==true){
		//Delete category and turn all dishes associated with it to inactive.
	}
	else{

	}
}

function addCategory(row)
{
	var category = document.getElementById("newCategory");
	var categories = category.parentNode;
	var name = category.value;

	if(name.length < 1){
		window.alert("Dude, categories need a name!");
		return;
	}

	category.parentNode.removeChild(category);
	var ndiv = document.createElement('h5');
	ndiv.innerHTML = name;
	categories.appendChild(ndiv);

	var input = document.createElement('input');
	input.setAttribute('type', 'text');
	input.setAttribute('placeholder', 'New Category');
	input.setAttribute('id', 'newCategory');
	categories.appendChild(input);

	var buttonList = row.parentNode;
	row.parentNode.removeChild(row);

	var breakElem = document.createElement('br');

	var deleteButton = document.createElement('a');
	deleteButton.setAttribute('class', 'btn btn-danger');
	deleteButton.setAttribute('onclick', 'deleteCategory(\'categoryRow\')');
	deleteButton.innerHTML = "Delete";
	buttonList.appendChild(deleteButton);
	buttonList.appendChild(breakElem);

	var addButton = document.createElement('a');
	addButton.setAttribute('class', 'btn btn-success');
	addButton.setAttribute('onclick', 'addCategory(this)');
	addButton.innerHTML = "Add New";
	buttonList.appendChild(addButton);
}

function toggleAllergies(button)
{
	var flags = document.getElementById("allergySettings");

	if(button.value == "on"){
		flags.innerHTML="";
		button.value = "off";
		button.innerHTML = "+";
	}

	else{
		//This part should fetch all users from the database.
		flags.innerHTML=
			"<div class=\"row\" style=\"line-height:30px;\">\
				<div class=\"span6 offset1\" id=\"categoryList\">\
					<h5>Nuts</h5>\
					<h5>Dairy</h5>\
					<h5>Shellfish</h5>\
					<input type=\"text\" placeholder=\"New Allergy\" id=\"newAllergy\">\
				</div>\
				<div class=\"span2 offset3\">\
					<a class=\"btn btn-danger\" onclick=\"deleteAllergy('allergyRow')\">Delete</a><br>\
					<a class=\"btn btn-danger\" onclick=\"deleteAllergy('allergyRow')\">Delete</a><br>\
					<a class=\"btn btn-danger\" onclick=\"deleteAllergy('allergyRow')\">Delete</a><br>\
					<a class=\"btn btn-success\" onclick=\"addAllergy(this)\">Add New</a>\
				</div>\
			</div>";
		button.value = "on";
		button.innerHTML = "-";
	}
}

function deleteAllergy(row)
{
	//Get num dishes that correspond to this category.
	var answer=confirm("Are you sure you want to delete this allergy?");

	if(answer==true){
		//Delete flag and turn all dishes associated with it to inactive.
	}
	else{

	}
}

function addAllergy(row)
{
	var allergy = document.getElementById("newAllergy");
	var allergies = allergy.parentNode;
	var name = allergy.value;

	if(name.length < 1){
		window.alert("Dude, allergies need a name!");
		return;
	}

	allergy.parentNode.removeChild(allergy);
	var ndiv = document.createElement('h5');
	ndiv.innerHTML = name;
	allergies.appendChild(ndiv);

	var input = document.createElement('input');
	input.setAttribute('type', 'text');
	input.setAttribute('placeholder', 'New Allergy');
	input.setAttribute('id', 'newAllergy');
	allergies.appendChild(input);

	var buttonList = row.parentNode;
	row.parentNode.removeChild(row);

	var breakElem = document.createElement('br');

	var deleteButton = document.createElement('a');
	deleteButton.setAttribute('class', 'btn btn-danger');
	deleteButton.setAttribute('onclick', 'deleteAllergy(\'allergyRow\')');
	deleteButton.innerHTML = "Delete";
	buttonList.appendChild(deleteButton);
	buttonList.appendChild(breakElem);

	var addButton = document.createElement('a');
	addButton.setAttribute('class', 'btn btn-success');
	addButton.setAttribute('onclick', 'addAllergy(this)');
	addButton.innerHTML = "Add New";
	buttonList.appendChild(addButton);
}