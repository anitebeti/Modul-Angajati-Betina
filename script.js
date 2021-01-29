

var vechime = document.getElementById('vechime');
var nume = document.getElementById('nume');
var salariu = document.getElementById('salariu');
var functie = document.getElementById('functie');
var echipa = document.getElementById('echipa');
var tel = document.getElementById('tel');
var email = document.getElementById('email');
var impozit = document.getElementById('impozit');




var buton = document.querySelector('button');

var columnDefs = [
    { headerName: "Nume angajat", field: 'numeAG', filter: 'agTextColumnFilter'},
    { headerName: "Ani vechime", field: 'vechimeAG', filter: 'agNumberColumnFilter'  },
    { headerName: "Salariu", field: 'salariuAG', filter: 'agNumberColumnFilter' },
    { headerName: "Functie ocupata", field: 'functieAG', filter: 'agTextColumnFilter' }, 
    { headerName: "Echipa", field:'echipaAG', filter: 'agTextColumnFilter' },
    { headerName: "Numar de telefon", field:'telAG', filter: 'agTextColumnFilter' },
    { headerName: "E-mail", field:'mailAG', filter: 'agTextColumnFilter' },
    { headerName: "Scutit de impozit",field:'impozitAG', filter: true }
];




var rowData = [];


var gridOptions = {
   
    columnDefs: columnDefs,  
    rowData: rowData   
}  





var eGridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(eGridDiv, gridOptions);




var functieEveniment = function(event) {

    if ((nume.value === '') || (nume.value.trim().length === 0)) {
        console.error('Numele angajatului nu a fost completat');
        nume.placeholder = 'Camp obligatoriu!';
        nume.style.backgroundColor = '#ff9999';
        return;
    }


    if ((vechime.value === '') || (vechime.value.trim().length === 0)) {
        console.error('Vechimea angajatului nu a fost completata');
        vechime.placeholder = 'Camp obligatoriu!';
        vechime.style.backgroundColor = '#ff9999';
        return;
    }
    if ((salariu.value === '') || (salariu.value.trim().length === 0)) {
        console.error('Salariul angajatului nu a fost completat');
        salariu.placeholder = 'Camp obligatoriu!';
        salariu.style.backgroundColor = '#ff9999';
        return;
    }
    if ((functie.value === '') || (functie.value.trim().length === 0)) {
        console.error('Functia angajatului nu a fost completata');
        functie.placeholder = 'Camp obligatoriu!';
        functie.style.backgroundColor = '#ff9999';
        return;
    }
    if ((echipa.value === '') || (echipa.value.trim().length === 0)) {
        console.error('Echipa in care lucreaza nu a fost completata');
        echipa.placeholder = 'Camp obligatoriu!';
        echipa.style.backgroundColor = '#ff9999';
        return;
    }
    if ((tel.value === '') || (tel.value.trim().length === 0)) {
        console.error('Numarul de telefon nu a fost completat');
        tel.placeholder = 'Camp obligatoriu!';
        tel.style.backgroundColor = '#ff9999';
        return;
    }
    if ((email.value === '') || (email.value.trim().length === 0)) {
        console.error('E-mail-ul nu a fost completat');
        email.placeholder = 'Camp obligatoriu!';
        email.style.backgroundColor = '#ff9999';
        return;
    }


    var tabel = document.getElementById('tabel');

    var rand = tabel.insertRow(1);
    var numeTbl = rand.insertCell(0);
    var vechimeTbl = rand.insertCell(1);
    var salariuTbl = rand.insertCell(2);
    var functieTbl = rand.insertCell(3);
    var echipaTbl = rand.insertCell(4);
    var telTbl = rand.insertCell(5);
    var mailTbl = rand.insertCell(6);
    var impozitTbl = rand.insertCell(7);

    numeTbl.innerHTML = nume.value;
    vechimeTbl.innerHTML = vechime.value;
    salariuTbl.innerHTML = salariu.value;
    functieTbl.innerHTML = functie.value;
    echipaTbl.innerHTML = echipa.value;
    telTbl.innerHTML = tel.value;
    mailTbl.innerHTML = email.value;
    

    if (impozit.checked === true) {
        impozit.value = 'Da';
        impozitTbl.innerHTML = impozit.value;   
    } else {
        impozit.value = 'Nu';
        impozitTbl.innerHTML = impozit.value;
    }



    rowData.push(
        { numeAG: nume.value,
        vechimeAG: vechime.value,
        salariuAG: salariu.value,
        functieAG: functie.value,
        echipaAG: echipa.value,
        telAG: tel.value,
        mailAG: email.value,
        impozitAG: impozit.value
        });


    gridOptions.api.setRowData(gridOptions.rowData); 
    

    vechime.value = '';
    nume.value = '';
    salariu.value = '';
    functie.value = '';
    echipa.value = '';
    tel.value = '';
    email.value = '';

    impozit.checked = false;

    nume.placeholder = 'Nume Prenume';
    nume.style.backgroundColor = 'white';
    vechime.placeholder = '';
    vechime.style.backgroundColor = 'white';
    salariu.placeholder = 'Salariu brut';
    salariu.style.backgroundColor = 'white';
    echipa.placeholder = 'Departament';
    echipa.style.backgroundColor = 'white';
    tel.placeholder = '+40 123 456 789';
    tel.style.backgroundColor = 'white';
    functie.placeholder = '';
    functie.style.backgroundColor = 'white';
    email.placeholder = '';
    email.style.backgroundColor = 'white';
}

buton.addEventListener('click', functieEveniment);






   






