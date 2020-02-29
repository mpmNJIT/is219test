class Feline {
    constructor(size) {
        this.felinesize = size;

    }
    say_size() {
        return 'This feline is ' + this.felinesize;
    }
}

class Species extends Feline {
    constructor(size, spec) {
        super(size);
        this.species = spec;
    }

    say_species() {
        return this.say_size() + ', and the species is ' + this.species;
    }
}

mycat = new Species("Big", "Lion");
catresult = mycat.say_species();

module.exports = catresult;