const expect = require('chai').expect;
const { assert } = require('chai');
const apiTemperature = require('../public/js/auxiliaryAPI')

//TODO Unit Tests to implement
describe("fahrenheitToCelsius()", function() {

    it('should correctly convert a temperature below 32°F to Celsius', function () {

        // Arrange
        const expected_result = -1.1;
        
        // Act
        const actual_result = Math.round(apiTemperature.fahrenheitToCelcius(30) * 10) / 10;
        
        // Assert
        assert.equal(actual_result, expected_result);
    });

    it('should correctly convert a temperature above 32°F to Celsius', function () {

        // Arrange
        const expected_result = 10;
        
        // Act
        const actual_result = Math.round(apiTemperature.fahrenheitToCelcius(50) * 10) / 10;
        
        // Assert
        assert.equal(actual_result, expected_result);
    });

    // Test the conversion of 32°F, which should yield 0°C.
    it('should convert 32°F to 0°C', function () {
        //Arange
        const expected_result = 0;
        
        //Act
        const actual_result = apiTemperature.fahrenheitToCelcius(32);
        
        //Assert
        assert.equal(actual_result, expected_result);
    });
});


describe("getGreetingDependOnTime()", function() {

    //Test a time just before 6:00 AM to ensure it returns "Guten Morgen".
    it('should return "Guten Morgen" for time 05:59', function() {
        //Arange
        const date = new Date('2020-01-01 05:59');
        const expected_result = 'Guten Morgen'
        
        //Act
        const result = apiTemperature.getGreetingDependOnTime(date);
        
        //Assert
        assert.equal(result, expected_result);
    });

    //Test a time at 6:00 AM to ensure it returns "Guten Morgen".
    it('should return "Guten Morgen" for time 06:00', function() {
        //Arange
        const date = new Date('2020-01-01 06:00');
        const expected_result = 'Guten Morgen'
        
        //Act
        const result = apiTemperature.getGreetingDependOnTime(date);
        
        //Assert
        assert.equal(result, expected_result);
    });

    //Test at exactly 10:00 PM to confirm it returns "Guten Abend".
    it('should return "Guten Abend" for time 22:00', function() {
        //Arange
        const date = new Date('2020-01-01 10:00');
        const expected_result = 'Guten Abend'
        
        //Act
        const result = apiTemperature.getGreetingDependOnTime(date);
        
        //Assert
        assert.equal(result, expected_result);
    });


});