let arrEmployees = [];

document.getElementById('createPerson').addEventListener('click', function () {
    document.getElementById('mainMenu').style.display = '';

    let FirstName = document.getElementById('FirstName').value;
    let Patronymic = document.getElementById('Patronymic').value;
    let LastName = document.getElementById('LastName').value;
    let Old = document.getElementById('Old').value;
    let Children = document.getElementById('Children').value;
    let Position = document.getElementById('Position').value;
    let Experience = document.getElementById('Experience').value;
    let Organization = document.getElementById('Organization').value;
    let type = checkCheckBox();

    switch (type) { 
        case "":
            alert('Введите данные');
            break;

            default:
    arrEmployees[arrEmployees.length] = new OneExtendsClass(FirstName, Patronymic, LastName, Old, Children, Position, Experience, Organization);
            printInfo(arrEmployees);
            display('information');
            alert('Добавлен новый сотрудник');
            break;
    }
})

function editEmployee(i) {
    display('create_person');

    document.getElementById('FirstName').value = arrEmployees[i].FirstName;
    document.getElementById('Patronymic').value = arrEmployees[i].Patronymic;
    document.getElementById('LastName').value = arrEmployees[i].LastName;
    document.getElementById('Old').value = arrEmployees[i].Old;
    document.getElementById('Children').value = arrEmployees[i].Children;
    document.getElementById('Position').value = arrEmployees[i].Position;
    document.getElementById('Experience').value = arrEmployees[i].Experience;
    document.getElementById('Organization').value = arrEmployees[i].Organization;

    deleteEmployee(i, arrEmployees);
    document.getElementById('mainMenu').style.display = 'none';
}

function deleteEmployee(i, arrEmployees) {
    arrEmployees.splice(i, 1);
    printInfo(arrEmployees);
}

// function loadEmployee() {
//     if (localStorage.getItem('arrEmployees')) {
//         form.innerHTML = localStorage.getItem('arrEmployees');
//         deleteEmployee();
//     }
// }

function printDefaultInfo(i) {
    let form = document.getElementById('all_info').getElementsByTagName('form');
    form[0].innerHTML = '<br>';
    form[0].innerHTML += `<div class="deatailedInfo">
        <div class="details">
        
                <div class="text_name strong">Имя -- ${arrEmployees[i].FirstName}</div>
                <div class="text_name strong">Отчество -- ${arrEmployees[i].Patronymic}</div>
                <div class="text_name strong">Фамилия -- ${arrEmployees[i].LastName}</div>
                <div class="text_name strong">Возраст -- ${arrEmployees[i].Old}</div>
                <div class="text_name strong">Дети -- ${arrEmployees[i].Children}</div>
                <div class="text_name strong">Опыт -- ${arrEmployees[i].Experience}</div>
                <div class="text_name strong">Организация -- ${arrEmployees[i].Organization}</div>
    
            </div>
        </div>
        <input type="button" class="buttons" id="mainMenu2" value="Главное меню">`;

    document.getElementById('mainMenu2').addEventListener('click', function () {
        display('information');
    });
}

function printInfo(arrEmployees) {
    let form = document.getElementById('information').getElementsByTagName('form');
    form[0].innerHTML = '<br>';
    for (let i = 0; i < arrEmployees.length; i++) {
        // каждое i - информация о сотруднике
        form[0].innerHTML += `<div class="text_description">
        <br>
        <input type="button" class="Button" id="details${i}" value="Дополнительно">
        <br>
        <div class="elem strong">${arrEmployees[i].FirstName}</div>
        <div class="elem strong">${arrEmployees[i].Patronymic}</div>
        <div class="elem strong">${arrEmployees[i].LastName}</div>
        <br>
        <input type="button" class="Button" id="edit${i}" value="Редактировать">
        <input type="button" class="Button" id="remove${i}" value="Удалить">
       </div>`
    }

    form[0].innerHTML += '<br>' +
        '<input type="button" id="newEmployeeButton" class="buttons" value="Добавить нового сотрудника">';

    for (let i = 0; i < arrEmployees.length; i++) {
        let edit = `edit${i}`;
        let remove = `remove${i}`;
        let details = `details${i}`;
        
        
        document.getElementById(details).addEventListener('click', function () {
            printDefaultInfo(i, arrEmployees);
            display('all_info');
        })
    
        document.getElementById(edit).addEventListener('click', function () {
            editEmployee(i);
        })

        document.getElementById(remove).addEventListener('click', function () {
            if (confirm(`Подтвердите удаление информации об '${arrEmployees[i].FirstName} ${arrEmployees[i].Patronymic}' ?`)) {
                deleteEmployee(i, arrEmployees);
            } else {

            }
        })
    }

    document.getElementById('newEmployeeButton').addEventListener('click', function () {
        display('create_person');
        document.getElementById('createPerson').style.display = "";
    })
}

function display(visibleId) {
    switch (visibleId) {
        case 'all_info':
            document.getElementById('information').style.display = 'none';
            document.getElementById('all_info').style.display = 'flex';
            document.getElementById('create_person').style.display = 'none';
            break;
        case 'information':
            document.getElementById('information').style.display = 'flex';
            document.getElementById('all_info').style.display = 'none';
            document.getElementById('create_person').style.display = 'none';
            break;
        case 'create_person':
            document.getElementById('information').style.display = 'none';
            document.getElementById('all_info').style.display = 'none';
            document.getElementById('create_person').style.display = 'flex';
            break;
    }
}
class BaseClass {
    constructor(FirstName, Patronymic, LastName, Old, Children, Position, Experience, Organization) {
   
        this.FirstName = FirstName;
        this.Patronymic = Patronymic;
        this.LastName = LastName;
        this.Old = Old;
        this.Children = Children;
        this.Position = Position;
        this.Experience = Experience;
        this.Organization = Organization;
    }

   
    get FirstName() {
        return this._FirstName;
    }
    set FirstName(value) {
        if (value.length == '') {
            alert('Введите Имя')
        } else {
            this._FirstName = value
        }

    }
    
    get Patronymic() {
        return this._Patronymic;
    }
    set Patronymic(value) {
        if (value.length == '') {
            alert('Введите Отчество')
        } else {
            this._Patronymic = value
        }

    }
    
    get LastName() {
        return this._LastName;
    }
    set LastName(value) {
        if (value.length == '') {
            alert('Введите Фамилию')
        } else {
            this._LastName = value
        }

    }

    get Old() {
        return this._Old;
    }
    set Old(value) {
        if (value.length == '') {
            alert('Введите возраст');
        } else {
            this._Old = value
        }
    }

    get Children() {
        return this._Children;
    }
    set Children(value) {
        if (value.length == '') {
            alert('Введите информацию о детях');
        } else {
            this._Children = value
        }
    }

    get experience() {
        return this._experience;
    }
    set experience(value) {
        if (value.length =='') {
            alert('Введите информацию об опыте');
        } else {
            this._experience = value
        }
    }

    get Organization() {
        return this._Organization;
    }
    set Organization(value) {
        if (value.length == '') {
            alert('Введите данные об организации');
        } else {
            this._Organization = value
        }
    }

}

class OneExtendsClass extends BaseClass {
    constructor(FirstName, Patronymic, LastName, Old, Children, Position, Experience, Organization, type1, type2) {
        super(FirstName, Patronymic, LastName, Old, Children, Position, Experience, Organization);
        this.type1 = type1;
        this.type2 = type2;
     
    } 
}

class TwoExtendsClass extends BaseClass {
    constructor(FirstName, Patronymic, LastName, Old, Children, Position, Experience, Organization, type3, type4) {
        super(FirstName, Patronymic, LastName, Old, Children, Position, Experience, Organization);
        this.type3 = type3;
        this.type4 = type4;
        
    }
}

function checkCheckBox() {
    let radio = document.getElementsByName('radioOneExt');
    for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            return (radio[i].value);
        } else if (radio[i].unchecked){ 
            alert('Введите данные');
        } 

        
    }
}

display('information');
printInfo(arrEmployees);

document.getElementById('mainMenu').addEventListener('click', function () {
    display('information');
});





 