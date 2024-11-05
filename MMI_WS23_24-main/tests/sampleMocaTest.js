const { assert } = require('chai');

const expect = require('chai').expect;

//Sample JUnit test
function sum(arr) {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        res += arr[i];
    }
    return res;
}

describe('#sum()', function () {

    //  if needed logic before each test run
    beforeEach(function () {

    })

    // test a functionality
    it('should add numbers', function () {

        // Arrange
        const array = [1, 2, 3, 4, 5]
        
        // Act
        const summe = sum(array);
        
        //Assert
        assert.equal(summe,15);
    })


    it('should return 0 for an empty array', function () {
        // Arrange
        const array = []
        
        // Act
        const result = sum(array);
        
        //Assert
        // expect(result).to.equal(0);
        assert.equal(result,0);
    });

    it('should correctly sum an array with decimal numbers', function () {
        
        // Arrange
        const array = [0, 1.25, 1.25, 2.5, 5]

        // Act
        const result = sum(array);
        
        //Assert
        // expect(result).to.equal(0);
        assert.equal(result,10);
        
    });
});