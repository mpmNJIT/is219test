const PetDog = () => {
    let hunger = 0;
    let thirst = 0;

    const exercise = (number) => {
        hunger += number;
        thirst += number;
    };

    const getHunger = () => hunger;
    const getThirst = () => thirst;

    return {
        exercise,
        getHunger,
        getThirst
    }
};

const Dog1 = PetDog();
Dog1.exercise(5);
Dog1Hunger = Dog1.getHunger();
const Dog2 = PetDog();
Dog2.exercise(10);
Dog2Hunger = Dog2.getHunger();

module.exports = {Dog1Hunger,
    Dog2Hunger};