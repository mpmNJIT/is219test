var catresult = require('../inheritance');

test("Expects output to be 'This feline is Big, and the species is Lion'", () =>{
    expect(catresult).toBe('This feline is Big, and the species is Lion');
});