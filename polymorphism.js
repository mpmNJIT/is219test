class dog {
    static sound(){
        return 'woof'
    }
}

class puppy extends dog{
    static sound(){
        return 'whine'
    }
}

testresult = dog.sound() + puppy.sound();

module.exports = testresult;