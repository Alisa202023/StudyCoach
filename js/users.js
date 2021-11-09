const USERS = {
    'Couches':[
        ['Ivanov Ivan', 'ivanov@gmail.com', '+375334567890', 'Belarus', 'Vitebsk'],
        ['Petrova Marina', 'petrova@gmail.com', '+37534445566', 'Belarus', 'Minsk'],
        ['Adamenko Julia', 'adamenko@gmail.com', '+375293334455', 'Belarus', 'Gomel']
    ],
    'Students':[
        ['Filimonov Andrey', 'filimonov@gmail.com', '+37534445666', 'Belarus', 'Brest'],
        ['Potapova Anastasia', 'potapova@gmail.com', '+37534449566', 'Belarus', 'Grodno']
    ]
}
document.querySelector('.content').innerHTML = `
<table class="table mui-table mui-table--bordered">
    <tr>
        <th>FIO</th>
        <th>EMAIL</th>
        <th>PHONE</th>
    </tr>
</table>`;
for(key in USERS){    
    let row = document.createElement('tr');
    row.innerHTML = `<td colspan=3>${key}</td>`;
    document.querySelector('.mui-table').appendChild(row);
    row.className="title";
    for(let i=0; i<USERS[key].length; i++){
        row = document.createElement('tr');
        row.innerHTML = `
        <td>${USERS[key][i][0]}</td>
        <td>${USERS[key][i][1]}</td>
        <td>${USERS[key][i][2]}</td>
        `;
        document.querySelector('.mui-table').appendChild(row);
    }
}

const rows = document.querySelector("table")?.rows;
let index;

Array.from(rows).forEach(row => {
    row.onclick = function() {
        index = this.rowIndex;
        activateModal();        
    }
});

function activateModal() {
    const modalEl = document.createElement('div');
    modalEl.style.maxWidth= '450px';
    modalEl.style.width = '95%';
    modalEl.style.height = '600px';
    modalEl.style.margin = '30px auto';
    modalEl.style.backgroundColor = '#fff';

    const div = document.createElement("div");
    div.className = "users__details";
    modalEl.appendChild(div);

    const title = document.createElement("h3");
    title.textContent="Details";
    div.appendChild(title);

    const content = document.createElement("div");
    content.className = "info";
    div.appendChild(content);   

    const table = document.createElement("table");
    table.className="info__table mui-table mui-table--bordered";
    table.innerHTML=`
    <tr>
        <th>Country</th>
        <th>City</th>
    </tr>
    `
    content.appendChild(table);   
    
    const tr = document.createElement("tr");

    switch(index){
        case 2:{
            tr.innerHTML=`
                <td>${USERS['Couches'][0][3]}</td>
                <td>${USERS['Couches'][0][4]}</td>
            `;
            table.appendChild(tr);
        }break;
        case 3:{
            tr.innerHTML=`
                <td>${USERS['Couches'][1][3]}</td>
                <td>${USERS['Couches'][1][4]}</td>
            `;
            table.appendChild(tr);  
        }break;
        case 4:{
            tr.innerHTML=`
                <td>${USERS['Couches'][2][3]}</td>
                <td>${USERS['Couches'][2][4]}</td>
            `;
            table.appendChild(tr);
        }break;
        case 6:{
            tr.innerHTML=`
                <td>${USERS['Students'][0][3]}</td>
                <td>${USERS['Students'][0][4]}</td>
            `;
            table.appendChild(tr);
        }break;
        case 7:{
            tr.innerHTML=`
                <td>${USERS['Students'][1][3]}</td>
                <td>${USERS['Students'][1][4]}</td>
            `;
            table.appendChild(tr);
        }
        break;
    }

    mui.overlay('on', modalEl);
  }
  

