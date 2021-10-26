var rIndex, table = document.getElementById("table");

function checkEmptyInput(){
  var isEmpty = false,
  course = document.getElementById("course").value,
  couch = document.getElementById("couch").value,
  desc = document.getElementById("desc").value;

  if (course === ""){
    alert("Course cannot be empty");
    isEmpty = true;
  }
  else if (couch ===""){
    alert("Couch cannot be empty");
    isEmpty = true;
  }
  else if (desc ===""){
    alert("descrition cannot be empty");
    isEmpty = true;
  }
  return isEmpty;
}

function addHTMLTableRow(){
  // get the table by id
  // create a new row and cells
  // get value from input text
  // set the values into row cell's
  if(!checkEmptyInput()){
    var newRow = table.insertRow(table.length),
    cell1 = newRow.insertCell(0),
    cell2 = newRow.insertCell(1),
    cell3 = newRow.insertCell(2),
    course = document.getElementById("course").value, 
    couch = document.getElementById("couch").value, 
    desc = document.getElementById("desc").value;
    
    cell1.innerHTML = course;
    cell2.innerHTML = couch;
    cell3.innerHTML = desc;
    //call the function to set the event to the new row
    selectedRowToInput();
  }
}

//display selected row data into input text
function selectedRowToInput(){
  
  for (var i = 1; i < table.rows.length; i++){
    table.rows[i].onclick = function(){
      //get the selected row index
      rIndex = this.rowIndex;
      document.getElementById("course").value = this.cells[0].innerHTML;
      document.getElementById("couch").value = this.cells[1].innerHTML;
      document.getElementById("desc").value = this.cells[2].innerHTML;
    }
  }
}
selectedRowToInput();

function editHtmlTableSelectedRow(){
  var course = document.getElementById("course").value,
      couch = document.getElementById("couch").value,
      desc = document.getElementById("desc").value;

      if(!checkEmptyInput()){
        table.rows[rIndex].cells[0].innerHTML = course;
        table.rows[rIndex].cells[1].innerHTML = couch;
        table.rows[rIndex].cells[2].innerHTML = desc;
      }
}

function removeSelectedRow(){
  table.deleteRow(rIndex);

  //clear input text
  document.getElementById("course").value = "";
  document.getElementById("couch").value = "";
  document.getElementById("desc").value = "";
}



function saveData(){
  let course=document.getElementById("course").value,
       couch=document.getElementById("couch").value,
       desc=document.getElementById("desc").value,

       couchRecords=new Array();

       couchRecords=JSON.parse(localStorage.getItem("records"))?JSON.parse(localStorage.getItem("records")):[]

  couchRecords.push({
  "course":course,
  "couch":couch,
  "desc":desc
  })

  localStorage.setItem("records",JSON.stringify(couchRecords));

  showData();
}

function showData()
{
  document.getElementById("table2").innerHTML="";
  let couchRecords=new Array();
  couchRecords=JSON.parse(localStorage.getItem("records"))?JSON.parse(localStorage.getItem("records")):[]
  if(couchRecords)
  {
    for(let i=0;i<couchRecords.length;i++)
    {
      let addDiv=document.createElement('tr');
      addDiv.innerHTML='<td>'+couchRecords[i].course+'</td><td>'+couchRecords[i].couch+'</td><td>'+couchRecords[i].desc+'</td>';
      document.getElementById("table2").appendChild(addDiv);

    }
  }
  }