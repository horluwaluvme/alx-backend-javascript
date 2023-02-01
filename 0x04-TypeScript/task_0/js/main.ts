interface Student {

  firstName: string;

  lastName: string;

  age: number;

  location: string;

}

const student1: Student = {

  firstName: 'Yinka',

  lastName: 'Pretty',

  age: 40,

  location: 'Paris'

};

const student2: Student = {

  firstName: 'Ahmad',

  lastName: 'Sharzard',

  age: 26,

  location: 'Saint Lo'

};

const studentsList: Array<Student> = [
  student1,
  student2,
];

const table = document.createElement('table');


studentsList.forEach(student => {

  const row = document.createElement('tr');

  const firstNameCell = document.createElement('td');

  firstNameCell.innerHTML = student.firstName;

  const locationCell = document.createElement('td');

  locationCell.innerHTML = student.location;

  row.appendChild(firstNameCell);

  row.appendChild(locationCell);

  table.appendChild(row);

});

document.body.appendChild(table);
