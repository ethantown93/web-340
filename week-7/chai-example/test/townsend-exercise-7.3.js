/*
============================================
; Title:  townsend-exercise-7.3
; Author: Professor Krasso
; Date:   27 February 2019
; Modified By: Ethan Townsend
; Description:  Unit Testing
;===========================================
*/

var fruits = require('../fruits');
var chai = require('chai');
var assert = chai.assert;

describe('fruits', function( ) {
    it('should return an array of fruits', function(){
        var f = fruits('Apple,Orange,Mango');
        assert(Array.isArray(f));
    });
});