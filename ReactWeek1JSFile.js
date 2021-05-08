class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}

const student1 = new Student("Larry", "ldog@gmail.com", "Georgia")
const student2 = new Student("Joe", "jdog@gmail.com", "Scranton")
const bootcamp = new Bootcamp("React", 5)

class Bootcamp {
    constructor(name, level, students = []){
        this.name = name;
        this.level = level;
        this.students = students;
    }

    registerStudent(newStudent) {
        const test = this.students.filter(student => student.email === newStudent.email);
        if (test.length === 0) {
        this.students.push(newStudent)
        } else {
        console.log("Already registered");
        }
        
    }
}