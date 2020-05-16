class Student {
    constructor(name){
        this.name = name;
        this.university = 'UNSW';
    }
    greeting() {
        console.log(`Hello,i'm ${this.name} from ${this.university}`)
    }
}

const jane = new Student('Joey')
jane.greeting();