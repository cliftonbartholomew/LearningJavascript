class Person {
  constructor() {
    this.name = "Max";
  }

  printName() {
    console.log(this.name);
  }
}

class Teacher extends Person {
  constructor() {
    super();
    this.subject = "Maths";
  }

  printSubject() {
    console.log(this.subject);
  }
}
