const XLSX = require ("xlsx");
const workbook = XLSX.readfile ("codigo-por-cep.xlsx");
const worksheet = workbook.Sheets[workbook.SheetsNames[0]];

console.log(worksheet);