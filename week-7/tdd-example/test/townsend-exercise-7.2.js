/*
============================================
; Title:  townsend-exercise-7.4
; Author: Professor Krasso
; Date:   27 February 2019
; Modified By: Ethan Townsend
; Description:  Unit Testing
;===========================================
*/

const assert = require('assert');

describe('String#split', function(){
    it('should return an array of fruits', function() {
        assert(Array.isArray('Apple,Orange,Mango'.split(',')));
    });
});

//Run the test

 //       npm test

//Passed function

function getFruits(str) {

    return str.split(',');

   }

   module.exports = getFruits;