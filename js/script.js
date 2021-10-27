let course,
    courses = [],
    courses2,
    table = document.getElementById("table");




function checkEmptyInput(){
  var isEmpty = false,
  course = document.getElementById("course").value,
  couch = document.getElementById("couch").value,
  desc = document.getElementById("desc").value;

  if (course === ""){
    alert("course cannot be empty");
    isEmpty = true;
  }
  else if (couch ===""){
    alert("couch cannot be empty");
    isEmpty = true;
  }
  else if (desc ===""){
    alert("desc cannot be empty");
    isEmpty = true;
  }
  return isEmpty;
}

function Create(){
  let course = document.getElementById("course").value,
  couch = document.getElementById("couch").value,
  desc = document.getElementById("desc").value;
  if(!checkEmptyInput()){
    courses=new Array();

    courses=JSON.parse(localStorage.getItem("courses"))?JSON.parse(localStorage.getItem("courses")):[]
  
    courses.push({
      "course":course,
      "couch":couch,
      "desc":desc
    });
  
    localStorage.setItem("courses",JSON.stringify(courses));
  
    Read();
  }
}
function Read(){

  document.getElementById("table").innerHTML="";
  let courses2=new Array();
  courses2=JSON.parse(localStorage.getItem("courses"))?JSON.parse(localStorage.getItem("courses")):[]
  if(courses2)
  {
    table.innerHTML+=`
    <tr>
      <th clase="space">№</th>
      <th clase="space">COURSE</th>
      <th clase="space">COUCH</th>
      <th clase="space">DESCRIPTION</th>
      <th clase="space">OPERATIONS</th>
    </tr>
    `;
    for(let i=0;i<courses2.length;i++)
    {
      let addDiv=document.createElement('tr');
      addDiv.innerHTML=`
        <td clase="space">${i+1}</td>
        <td clase="space">${courses2[i].course}</td>
        <td clase="space">${courses2[i].couch}</td>
        <td clase="space">${courses2[i].desc}</td>
        <td clase="space">
          <button onclick="Update(${i})">Edit</button>
          <button onclick="Delete(${i})">Delete</button>
        </td>
      `;
     
      document.getElementById("table").appendChild(addDiv);

    }
  }
}

function Update(i3){
  let courses4=JSON.parse(localStorage.getItem("courses"));
  table.innerHTML='';
  table.innerHTML+=`
  <tr>
      <th clase="space">№</th>
      <th clase="space">COURSE</th>
      <th clase="space">COUCH</th>
      <th clase="space">DESCRIPTION</th>
      <th clase="space">OPERATIONS</th>
    </tr>
  `;
  for(var i=0;i<courses4.length;i++){
    if(i==i3){
      table.innerHTML+=`
      <tr>
        <td class="space">${i+1}</td>
        <td class="space"><input id="newCourse" placeholder="${courses4[i].course}"</input></td>
        <td class="space"><input id="newCouch" placeholder="${courses4[i].couch}"</input></td>
        <td class="space"><input id="newDesc" placeholder="${courses4[i].desc}"</input></td>
        <td class="space">
          <button onclick="Update2(${i})">Update</button>
          <button onclick="Read(${i})">Cancel</button>
        </td>
      </tr>
      `;
    }
    else{
      table.innerHTML+=`
      <tr>
        <td clase="space">${i+1}</td>
        <td clase="space">${courses4[i].course}</td>
        <td clase="space">${courses4[i].couch}</td>
        <td clase="space">${courses4[i].desc}</td>
        <td clase="space">
          <button onclick="Update(${i})">Edit</button>
          <button onclick="Delete(${i})">Delete</button>
        </td>
      </tr>
      `;
    }
  }
}

function Update2(i){
  let courses5=JSON.parse(localStorage.getItem("courses"));
  courses5[i].course = document.getElementById("newCourse").value;
  courses5[i].couch = document.getElementById("newCouch").value;
  courses5[i].desc = document.getElementById("newDesc").value;
  
    localStorage.setItem("courses", JSON.stringify(courses5));
    Read();
  
}

function Delete(item){
  let courses3 = JSON.parse(localStorage.getItem("courses"));
  courses3.splice(item,1);
  localStorage.setItem("courses", JSON.stringify(courses3));
  Read();
}


function activateModal() {
  let modalEl = document.createElement('div');
  modalEl.style.maxWidth= '450px';
  modalEl.style.width = '95%';
  modalEl.style.height = '600px';
  modalEl.style.margin = '30px auto';
  modalEl.style.backgroundColor = '#fff';
  
  let form = document.createElement("form");
  form.className = "mui-form container";
  form.id = "form";
  modalEl.appendChild(form);

  let div = document.createElement("div");
  div.className = "mui-textfield";
  form.appendChild(div);

  let input = document.createElement("input");
  input.type = "text";
  input.id="course";
  input.placeholder="Course";
  div.appendChild(input);  

  div = document.createElement("div");
  div.className = "mui-textfield";
  form.appendChild(div);
  
  input = document.createElement("input");
  input.type = "text";
  input.id="couch";
  input.placeholder="Couch";
  div.appendChild(input);

  div = document.createElement("div");
  div.className = "mui-textfield";
  form.appendChild(div);
  
  textarea = document.createElement("textarea");
  textarea.className="mui-textfield";
  textarea.id="desc";
  textarea.placeholder="Description";
  div.appendChild(textarea);

  let button = document.createElement("button");
  button.type="submit";
  button.className="mui-btn mui-btn--darkViolet";
  button.textContent="Submit";
  form.appendChild(button);  
 
  button.onclick = function(){
      Create();
  }
  mui.overlay('on', modalEl);
}
