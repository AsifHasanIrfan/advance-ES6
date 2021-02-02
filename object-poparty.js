const students = [
    {id: '21', name: 'Omar Sunny'},
    {id: '31', name: 'Maannnaa'},
    {id: '41', name: 'Moyouri'},
    {id: '51', name: 'DeepJol'},
    {id: '61', name: 'Sakib Khan'},
];
//     const studentName = [];
// for (let i = 0; i < students.length; i++) {
//     const element = students[i];
//     const names = element.name;
//     studentName.push(names);
// }
// console.log(studentName);

const names = students.map(s => s.name);
const ids = students.map(id => id.id);
const sId = students.filter(id => id.id > 40);
// console.log(ids);
// console.log(names);
console.log(sId);
