var DogHunger = require('../encapsulation');

test('Gets Hunger stat from dog 1 and 2, expects dog1 to be 5 and dog2 to be 10', () => {
    expect(DogHunger).toStrictEqual({"Dog1Hunger": 5, "Dog2Hunger": 10});
});