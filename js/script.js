let courses = [],
    table = document.querySelector("#table");
    
function checkEmptyInput(course, couch, desc, topics){
  let isEmpty = false;
  if (course === ""){
    alert("course cannot be empty");
    isEmpty = true;
  }
  else if (couch ===""){
    alert("couch cannot be empty");
    isEmpty = true;
  }
  else if (desc ===""){
    alert("description cannot be empty");
    isEmpty = true;
  }
  else if (topics ===""){
    alert("topics cannot be empty");
    isEmpty = true;
  }
  return isEmpty;
}

function add(){
  let course = document.querySelector("#course").value,
      couch = document.querySelector("#couch").value,
      desc = document.querySelector("#desc").value,
      topics= document.querySelector("#topics").value;

  if(!checkEmptyInput(course, couch, desc, topics)){
    courses=JSON.parse(localStorage.getItem("courses"))?JSON.parse(localStorage.getItem("courses")):[]
    courses.push({
      "course":course,
      "couch":couch,
      "desc":desc,
      "topics":topics
    });
    localStorage.setItem("courses",JSON.stringify(courses));
    read();
  }
}

function read(){
  document.querySelector("#table").innerHTML="";
  courses=JSON.parse(localStorage.getItem("courses"))?JSON.parse(localStorage.getItem("courses")):[]
  if(courses)
  {
    table.innerHTML+=`
    <tr>
      <th>№</th>
      <th>COURSE</th>
      <th>COUCH</th>
      <th>DESCRIPTION</th>
      <th class="operations"></th>
    </tr>
    `;
    for(let i=0;i<courses.length;i++)
    {
      let addDiv=document.createElement('tr');
      addDiv.innerHTML=`
        <td>${i+1}</td>
        <td>${courses[i].course}</td>
        <td>${courses[i].couch}</td>
        <td>${courses[i].desc}</td>
        <td class="operations">
          <button class="mui-btn mui-btn--darkBlackRed" onclick="update(${i})">Edit</button>
          <button class="mui-btn mui-btn--darkBlackRed" onclick="deleteItem(${i})">Delete</button>
          <button class="mui-btn mui-btn--darkBlackRed" onclick="view(${i})">View details</button>
        </td>
      `;     
      document.querySelector("#table").appendChild(addDiv);
    }
  }
}

function view(item){
  let modalEl = document.createElement('div');
  modalEl.style.maxWidth= '450px';
  modalEl.style.width = '95%';
  modalEl.style.height = '600px';
  modalEl.style.margin = '30px auto';
  modalEl.style.backgroundColor = '#fff';
  
  let div = document.createElement("div");
  div.className = "courses__details";
  modalEl.appendChild(div);

  let title = document.createElement("h3");
  title.textContent="Details";
  div.appendChild(title);

  let content = document.createElement("div");
  content.className = "info";
  div.appendChild(content);   

  let table = document.createElement("table");
 
  table.className="info__table mui-table mui-table--bordered";
  table.innerHTML=`
  <tr>
      <th>TOPICS OF THE COURSE</th>
  </tr>
  `
  content.appendChild(table);  
  courses=JSON.parse(localStorage.getItem("courses"));
  for(let i=0;i<courses.length;i++){
    if(i==item){
      table.innerHTML+=`
      <tr>
        <td>${courses[i].topics}</td>
      </tr>
      `;
    }
  }
  mui.overlay('on', modalEl);
}

function update(item){
  courses=JSON.parse(localStorage.getItem("courses"));
  table.innerHTML='';
  table.innerHTML+=`
  <tr>
      <th>№</th>
      <th>COURSE</th>
      <th>COUCH</th>
      <th>DESCRIPTION</th>
      <th>OPERATIONS</th>
    </tr>
  `;
  for(let i=0;i<courses.length;i++){
    if(i==item){
      table.innerHTML+=`
      <tr>
        <td>${i+1}</td>
        <td><input id="newCourse" placeholder="${courses[i].course}"></input></td>
        <td><input id="newCouch" placeholder="${courses[i].couch}"></input></td>
        <td><input id="newDesc" placeholder="${courses[i].desc}"></input></td>
        <td>
          <button onclick="afterClickUpdate(${i})">Update</button>
          <button onclick="read(${i})">Cancel</button>
        </td>
      </tr>
      `;
    }
    else{
      table.innerHTML+=`
      <tr>
        <td>${i+1}</td>
        <td>${courses[i].course}</td>
        <td>${courses[i].couch}</td>
        <td>${courses[i].desc}</td>
        <td>
          <button onclick="update(${i})">Edit</button>
          <button onclick="deleteItem(${i})">Delete</button>
        </td>
      </tr>
      `;
    }
  }
}

function afterClickUpdate(i){
  courses=JSON.parse(localStorage.getItem("courses"));
  courses[i].course = document.querySelector("#newCourse").value;
  courses[i].couch = document.querySelector("#newCouch").value;
  courses[i].desc = document.querySelector("#newDesc").value;
  if (courses[i].course === ""){
    alert("course cannot be empty");
    isEmpty = true;
  }
  else if (courses[i].couch ===""){
    alert("couch cannot be empty");
    isEmpty = true;
  }
  else if (courses[i].desc ===""){
    alert("desc cannot be empty");
    isEmpty = true;
  }
  else{
    localStorage.setItem("courses", JSON.stringify(courses));
    read();
  }  
}

function deleteItem(item){
  let courses = JSON.parse(localStorage.getItem("courses"));
  courses.splice(item,1);
  localStorage.setItem("courses", JSON.stringify(courses));
  read();
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

  div = document.createElement("div");
  div.className = "mui-textfield";
  form.appendChild(div);
  
  textarea = document.createElement("textarea");
  textarea.className="mui-textfield";
  textarea.id="topics";
  textarea.placeholder="Topics of the course";
  div.appendChild(textarea);

  let button = document.createElement("button");
  button.type="submit";
  button.className="form__button mui-btn mui-btn--darkViolet";
  button.textContent="Submit";
  form.appendChild(button);  
 
  button.onclick = function(){
    add();
  }
  mui.overlay('on', modalEl);
}
