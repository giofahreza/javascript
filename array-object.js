const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('raw array:', arr);

arr.push(20);
console.log('array after push:', arr);

arr.pop();
console.log('array after pop:', arr);

arr.unshift(0);
console.log('array after unshift:', arr);

arr.shift();
console.log('array after shift:', arr);

arr.splice(2, 2);
console.log('array after splice:', arr);

arr.reverse();
console.log('array after reverse:', arr);

arr.sort((a, b) => a - b);
console.log('array after sort:', arr);

arr.sort((a, b) => b - a);
console.log('array after sort:', arr);

const kalimat = "saya sedang belajar javascript";
const arrKalimat = kalimat.split(' ');
console.log('array kalimat:', arrKalimat);


// --------------------------------------------

// example js object and modular function

var student = {
  name: 'John Doe',
  age: 12,
  address: 'Jakarta',
  hobbies: ['swimming', 'reading', 'coding'],
  isMarried: false,
  school: [{
      name: 'SDN 1 Jakarta',
      yearIn: 2000,
      yearOut: 2006
    },{
      name: 'SMPN 1 Jakarta',
      yearIn: 2006,
      yearOut: 2009
    },{
      name: 'SMAN 1 Jakarta',
      yearIn: 2009,
      yearOut: 2012
    }]
};

student.hobbies.push('playing');
student.hobbies[0] = 'running';
student.school[2].name = 'SMAN 10 Jakarta';

console.log(student);


// --------------------------------------------

// function js untuk menghilangkan angka ganjil
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // raw array

newNumbers = numberRemove(numbers);
console.log(newNumbers); // Result > [2, 4, 6, 8, 10];

// --------------------------------------------

// function js sistem data siswa
// 1. Tampilkan semua nama siswa
// 2. Hitung nilai rata-rata
// 3. Cari siswa dengan nilai tertinggi

const students = [
  { name: "Alice", age: 20, score: 85 },
  { name: "Bob", age: 22, score: 70 },
  { name: "Charlie", age: 21, score: 95 }
];

showStudents(students); // Result > Alice, Bob, Charlie
averageScore(students); // Result > 83.33
highestScore(students); // Result > Charlie