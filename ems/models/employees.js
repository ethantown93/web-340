/*
============================================
; Title:  employees.js
; Author: Ethan Townsend
; Date:   4 April 2019
; Description: File for the employee database model
;===========================================
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let EmployeeSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type:String, required: true}
});

module.exports = mongoose.model('Employees', EmployeeSchema);