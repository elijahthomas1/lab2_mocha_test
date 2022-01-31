var expect = require("chai").expect;
var calculator = require("../app/calculator");

describe ("Calculator Add Pass", () => {
    it("adds 5 to 2 asserts equal 7", () => {
        var addTest = calculator.add(5,2);
        //pass
        expect(addTest).to.deep.equal(7, "pass");        
    })
})

describe ("Calculator Add Fail", () => {
    it("adds 5 to 2 asserts equal 8", () => {
        var addTest = calculator.add(5,2);
        //fail
        expect(addTest).to.deep.equal(8, "fail");          
    })
})

describe ("Calculator Sub Pass", () => {
    it("Sub 5 to 2 asserts equal 3", () => {
        var subTest = calculator.sub(5,2);
        //pass
        expect(subTest).to.deep.equal(3, "pass");       
    })
})

describe ("Calculator Sub Fail", () => {
    it("Sub 5 to 2 asserts equal 5", () => {
        var subTest = calculator.sub(5,2);
        //fail
        expect(subTest).to.deep.equal(5, "fail");         
    })
})

describe ("Calculator Multi Pass", () => {
    it("Multi 5 to 2 asserts equal 10", () => {
        var mulTest = calculator.mul(5,2);
        //pass
        expect(mulTest).to.deep.equal(10, "pass") ;  
    })
})

describe ("Calculator Multi Fail", () => {
    it("Multi 5 to 2 asserts equal 12", () => {
        var mulTest = calculator.mul(5,2);
        //fail
        expect(mulTest).to.deep.equal(12, "fail");       
    })
})

describe ("Calculator Div Pass", () => {
    it("Div 5 to 2 asserts equal 10", () => {
        var divTest = calculator.div(10,2);
        //pass
        expect(divTest).to.deep.equal(5, "pass");
    })
})

describe ("Calculator Div Fail", () => {
    it("Div 5 to 2 asserts equal 12", () => {
        var divTest = calculator.div(10,2);
        //fail
        expect(divTest).to.deep.equal(2, "fail");    
    })
})