class Table {
    header = [];
    tableId='';
    constructor(id, header) {
        this.tableId=id;
        this.header=header;
        this.genHead();
        return this;
    }
    addRow(data) {
        let tmp =  ` <tr>`;
        for (let j = 0; j < data.length; j++) {
            tmp += `<td>${data[j]}</td> `;
        }
        console.log(data,tmp);
        tmp += '</tr> ' ;
        document.querySelector(`#${this.tableId} tbody` ).innerHTML += tmp;
        return this;
    }

    clearBody(){
        document.querySelector(`#${this.tableId} tbody`).innerHTML = '';
    }
    genHead() {
        let tmp='';
        for (let i = 0; i < this.header.length; i++) {
            tmp += ` <th>${this.header[i]}</th> `;
        }
        document.querySelector(`#${this.tableId} thead tr`).innerHTML = tmp;
        return this;
    }
}
class studList extends Table {
    subject;
    student;
    avg=[];
    constructor(students,subjects) {
        let header=['Name','Lastname'];
        super('output',[...header,...subjects]);
        this.student=students;
        this.subject=subjects;
        this.eventList();
        this.addBody();
    }

    eventList(){
        document.getElementById('add_subject').addEventListener('submit', function (e) {
            e.preventDefault();
            let name = document.querySelector('#add_subject input[name="name"]').value;
            let scores = document.querySelector('#add_subject input[name="scores"]').value;
            studentsListInstance.addSubject(name, scores);
        });
        document.getElementById('add_student').addEventListener('submit',this.addStudent.bind(this));
    }


    addBody() {
        this.genHead();
        this.genAvarage();
        this.genFooter();
        for (let i = 0; i < this.student.length; i++) {
            this.addRow([student[i].name, student[i].lastname, ...student[i].score]);
        }
    }
    genFooter(){
        let tmp = '<tfoot>' +
            '<tr>' +
            '<td colspan="2" class="avar-backg">Avarage</td>';
        for (let i = 0; i < this.avg.length; i++) {
            tmp += `<td class="avar-backg">${this.avg[i]}</td>`;
        }
        tmp += '</tr>' +
            '</tfoot>';
        document.querySelector('#output tfoot').innerHTML = tmp;
    }

//generate avarage
    genAvarage () {

        for (let i = 0; i < this.student.length; i++) {
            for (let j = 0; j < this.student[i].score.length; j++) {
                this.avg[j] =this.avg[j] ? this.avg[j] + this.student[i].score[j] : this.student[i].score[j];
            }
        }
        for (let i = 0; i < this.avg.length; i++) {
            this.avg[i] /= this.student.length;
        }

    }

//body

    addStudent (e) {
            e.preventDefault();
            let field = document.querySelectorAll('#add_student input');
            let newStudent = {
                name: '',
                lastname: '',
                score: []
            };
            for (let i = 0; i < field.length; i++) {
                if (field[i].name === 'firstname') {
                    newStudent.name = field[i].value;
                } else if (field[i].name === 'lastname') {
                    newStudent.lastname = field[i].value;
                } else {
                    newStudent.score.push(parseInt(field[i].value) ? parseInt(field[i].value) : 0);
                }
            }
            this.student.push(newStudent);
            this.addRow(newStudent);

            console.log(newStudent)
            this.genAvarage();
            return true;
        }
    addSubject (name, scores){
        this.subject.push(name);
        this.header.push(name);

        let tmp = scores.split(',');

        for(let i = 0; i< tmp.length; i++ ){
            if(this.student[i]){
                this.student[i].score.push(Number(tmp[i]));
            }
        }
        this.clearBody();
        this.addBody();
    }
}
let subject=['HTML','Css','Javascript','Phyton'];
let student=[
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
let studentsListInstance = new studList(student, subject);



