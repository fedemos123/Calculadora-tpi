'use strict';

var expect = require("chai").expect;
var calcu = require("../app/calcu");

describe("Suma - Test", function() {

  describe("Testeando", function() {

    it("Testeando suma", function() {
      expect(calcu.suma(1,1)).to.equal(1+1);
    });

  });
});
