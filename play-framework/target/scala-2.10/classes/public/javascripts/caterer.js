function changeRowCount()
{
	var newLength=document.getElementById("numInput").value;
		
	if(newLength < 0){
		return;
	}
	
	var table=document.getElementById("menuTable");
	
	var currLength=table.getElementsByTagName("tr").length;

	if(newLength == currLength - 2){
		return;
	}
	else if(newLength < currLength - 2){
		while(newLength < currLength - 2){
			table.deleteRow(currLength - 2);
			currLength--;
		}
		return;
	}
	else if(newLength > currLength - 2){
		
		while(newLength > currLength - 2){
			var row=table.insertRow(currLength - 1);
			row.style.verticalAlign="top";
			var cell1=row.insertCell(0);
			var cell2=row.insertCell(1);
			var cell3=row.insertCell(2);
		
			cell1.innerHTML="<td><input type=\"text\" placeholder=\"Dish Name\"></td>";
			cell2.innerHTML="<td><input type=\"checkbox\"> Vegetarian <br><input type=\"checkbox\"> Vegan Friendly</td>";
			cell3.innerHTML="<td><input type=\"checkbox\"> Dairy<br><input type=\"checkbox\"> Gluten<br><input type=\"checkbox\"> Shell Fish<br><input type=\"checkbox\"> Nuts</td>";
			currLength++;
	
		}
	}
}
