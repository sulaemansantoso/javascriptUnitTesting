
log = console.log;
expect = require('chai').expect;
should = require('chai').should();
_ = require('lodash');


const {smaller, legitstring} = require('./index')

describe('mocha basic', ()=>{

    it('test1', ()=>{
       smaller(2,3).should.be.true;
    });
    it('test2',()=>{
        expect(true).to.be.true;
    });

});

describe('legit string basic', ()=>{

    it('test1', ()=>{
       legitstring('something').should.be.true;
    });
    it('test2',()=>{
        expect(legitstring('1')).to.be.false;
    });

});