const MathMachine = () =>{
    let x = 47;
    let y = 84;
    let z = 27;

    const MathMaking = (number) => {
        a = number * z;
        b = a / y;
        c = number + x;
        d = b + c;
    };

    const getResult = () => d;
    return {
        MathMaking,
        getResult
    }
};

const MathTest1 = MathMachine();
MathTest1.MathMaking(2);
Result1 = MathTest1.getResult();

module.exports = Result1;