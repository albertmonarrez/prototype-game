// 'use strict'
import utils from '../src/utils.js';

// const utils = require('../src/utils.js');

const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;
console.log('lol');
describe('A failing test', function () {
    it('should fail', function () {
        expect(true).to.equal(false);
    });
});

describe('Attempting to import', function () {
    it('should fail', function () {
        console.log('hello');
        assert.equal(1, 1);
        utils.calculateCenter(1);
    });
});