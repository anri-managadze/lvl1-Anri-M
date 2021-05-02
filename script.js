let subject = ['HTML','Css','Javascript','Phyton'];
let student = [
    {
        name: 'Badri',
        lastname: 'Esebua',
        score: [65, 80, 30,25]
    },
    {
        name: 'Giorgi',
        lastname: 'Silagadze',
        score: [35, 75, 30,40]
    },
    {
        name: 'Vaxushti',
        lastname: 'Doborjginidze',
        score: [40, 60, 80,50]
    },
    {
        name: 'Gela',
        lastname: 'Giorgadze',
        score: [20, 70, 30,55]
    }
];
//calc avarage
let avg = [0,0,0,0];

//generate avarage
function genAvarage() {
    avg = [0,0,0,0];

    for (let i = 0; i < student.length; i++) {
        for (let j = 0; j < student[i].score.length; j++){
            avg[j] += student[i].score[j];
        }
    }
    for (let i = 0; i < avg.length; i++) {
        avg[i]/=student.length;
    }

    let tmp = '<tfoot>' +
        '<tr>' +
        '<td colspan="2" class="avar-backg">Avarage</td>';
    for (let i = 0; i < avg.length; i++) {
        tmp += `<th class="avar-backg">${avg[i]}</th>`;
    }
    tmp += '</tr>' +
        '</tfoot>';
    document.querySelector('#output tfoot').innerHTML = tmp;
}
genAvarage();

//head
function genHead(){

    let tmp='<th>Name</th><th>Lastname</th>';

    for(let i=0; i<subject.length; i++) {
        tmp +=` <th>${subject[i]}</th> `;
    }
    document.querySelector('#output thead tr').innerHTML = tmp;
    }
genHead();

//add row
function addRow (student){
    let tbody = document.querySelector('#output tbody ');
    let tmp =` <tr>
            <td class="stud-backg">${student.name}</td>
            <td class="stud-backg">${student.lastname}</td> `;
    for(let j = 0; j< student.score.length; j++){
        tmp += `<td class="${avg[j] > student.score[j] ? 'red' : 'green'}">${student.score[j]}</td> `;
    }
    tmp +='</tr> ';
    tbody.innerHTML+=tmp;

    return true;
}

//body
function genBody () {
    for (let i = 0; i < student.length; i++) {
        addRow(student[i]);
    }
}
genBody();

document.getElementById('add_student').addEventListener('submit',add);
function add (e) {
    e.preventDefault();
    let field = document.querySelectorAll('#add_student input');
    let newStudent={
        name: '',
        lastname: '',
        score: []
    };
    let newSubject=[''];
    for(let i=0; i< field.length; i++){
        if(field[i].name === 'firstname'){
            newStudent.name = field[i].value;
        }else if(field[i].name==='lastname') {
            newStudent.lastname= field[i].value;
        }else if(field[i].name==='subject') {
            newSubject= field[i].value;
        }else {
            newStudent.score.push(Number(field[i].value)? Number(field[i].value) : 0);
        }
    }

    student.push(newStudent);
    subject.push(newSubject);

    genHead(newSubject);
    addRow(newStudent);
    
    genAvarage();

    return true;
}




