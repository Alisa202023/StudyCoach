const table = document.querySelector("#table"),
      getItem = JSON.parse(localStorage.getItem("courses"));
let courses = [];        
    
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
  const course = document.querySelector("#course").value,
        couch = document.querySelector("#couch").value,
        desc = document.querySelector("#desc").value,
        topics= document.querySelector("#topics").value;

  if(!checkEmptyInput(course, couch, desc, topics)){
    courses=getItem?getItem:[]
    courses.push({
      "course":course,
      "couch":couch,
      "desc":desc,
      "topics":topics
    });
    localStorage.setItem("courses",JSON.stringify(courses));
    let tr = document.createElement('tr');
    table.appendChild(tr);
  }
}

function read(){
  table.innerHTML="";
  courses=getItem?JSON.parse(localStorage.getItem("courses")):[]
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
      const tr = document.createElement('tr');
      tr.innerHTML=`
        <td>${i+1}</td>
        <td>${courses[i].course}</td>
        <td>${courses[i].couch}</td>
        <td>${courses[i].desc}</td>
        <td class="operations">
          <button class="mui-btn" onclick="update(${i})">Edit</button>
          <button class="mui-btn" onclick="deleteItem(${i})">Delete</button>
          <button class="mui-btn" onclick="view(${i})">View details</button>
        </td>
      `;     
      table.appendChild(tr);
    }
  }
}

function view(item){
  const modalEl = document.createElement('div'),
        div = document.createElement("div"),
        title = document.createElement("h3"),
        content = document.createElement("div"),
        tableEl = document.createElement("table");

  modalEl.style.maxWidth= '450px';
  modalEl.style.width = '95%';
  modalEl.style.height = '600px';
  modalEl.style.margin = '30px auto';
  modalEl.style.backgroundColor = '#fff';
 
  div.className = "courses__details";
  modalEl.appendChild(div);
  
  title.textContent="Details";
  div.appendChild(title);

  content.className = "info";
  div.appendChild(content);   

  tableEl.className="info__table mui-table mui-table--bordered";
  tableEl.innerHTML=`
  <tr>
      <th>TOPICS OF THE COURSE</th>
  </tr>
  `
  content.appendChild(tableEl);  
  courses=getItem;

  courses.forEach((element, i, courses) => { 
    if(i==item){
      tableEl.innerHTML+=`
      <tr>
        <td>${courses[i].topics}</td>
      </tr>
      `;
    }
  })

  mui.overlay('on', modalEl);
}

function update(item){
  const modalEl = document.createElement('div');
  modalEl.style.maxWidth= '450px';
  modalEl.style.width = '95%';
  modalEl.style.height = '600px';
  modalEl.style.margin = '30px auto';
  modalEl.style.backgroundColor = '#fff';
 
  const form = document.createElement("form");
  form.className = "activate__form mui-form container";
  form.id = "form";
  modalEl.appendChild(form);

  div = document.createElement("div");
  div.className = "mui-textfield";
  form.appendChild(div);

  courses=getItem;

  courses.forEach((element, i, courses) => { 
    if(i==item){
      input = document.createElement("input");
      input.type = "text";
      input.id="newCourse";
      input.value = courses[i].course;
      div.appendChild(input);  

      div = document.createElement("div");
      div.className = "mui-textfield";
      form.appendChild(div);
      
      input = document.createElement("input");
      input.type = "text";
      input.id="newCouch";
      input.value = courses[i].couch;
      div.appendChild(input);

      div = document.createElement("div");
      div.className = "mui-textfield";
      form.appendChild(div);
      
      textarea = document.createElement("textarea");
      textarea.className="mui-textfield";
      textarea.id="newDesc";
      textarea.value = courses[i].desc;
      div.appendChild(textarea);

      div = document.createElement("div");
      div.className = "mui-textfield";
      form.appendChild(div);
      
      textarea = document.createElement("textarea");
      textarea.className="mui-textfield";
      textarea.id="newTopics";
      textarea.value = courses[i].topics;
      div.appendChild(textarea);

      const button = document.createElement("button");
      button.type="submit";
      button.className="form__button mui-btn";
      button.textContent="Update";
      form.appendChild(button);  

      button.onclick = function(){
        afterClickUpdate(i);
      }
    }
  })
  mui.overlay('on', modalEl);
}

function afterClickUpdate(i){
  courses=JSON.parse(localStorage.getItem("courses"));
  courses[i].course = document.querySelector("#newCourse").value;
  courses[i].couch = document.querySelector("#newCouch").value;
  courses[i].desc = document.querySelector("#newDesc").value;
  courses[i].topics = document.querySelector("#newTopics").value;
  if (courses[i].course === ""){
    alert("course cannot be empty");
    isEmpty = true;
  }
  else if (courses[i].couch ===""){
    alert("couch cannot be empty");
    isEmpty = true;
  }
  else if (courses[i].desc ===""){
    alert("description cannot be empty");
    isEmpty = true;
  }
  else if (courses[i].topics ===""){
    alert("topics cannot be empty");
    isEmpty = true;
  }
  else{
    localStorage.setItem("courses", JSON.stringify(courses));
  }  
}

function deleteItem(item){
  const courses = JSON.parse(localStorage.getItem("courses"));
  courses.splice(item,1);
  localStorage.setItem("courses", JSON.stringify(courses));

  read();
}

function activateModal() {
  const modalEl = document.createElement('div');
  modalEl.style.maxWidth= '450px';
  modalEl.style.width = '95%';
  modalEl.style.height = '600px';
  modalEl.style.margin = '30px auto';
  modalEl.style.backgroundColor = '#fff';
 
  const form = document.createElement("form");
  form.className = "activate__form mui-form container";
  form.id = "form";
  modalEl.appendChild(form);

  div = document.createElement("div");
  div.className = "mui-textfield";
  form.appendChild(div);

  input = document.createElement("input");
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

  const button = document.createElement("button");
  button.type="submit";
  button.className="form__button mui-btn mui-btn--darkViolet";
  button.textContent="Submit";
  form.appendChild(button);  
 
  button.onclick = function(){
    add();
  }
  mui.overlay('on', modalEl);
}
