function getStudentAverage(students) {
    // Tu código aquí 👈
    class Student {
      constructor({
        name,
        grades,
      }) {
        this.name = name;
        this.grades = [grades];
        this.average = 0
      }
      classAverage(grades) {
        let average = 0;
        console.log(typeof grades);
      }  
    };
  
    let groupAverage = students.forEach(function (name, grades) {
      const student = new Student(name, grades);
      console.log(student.classAverage(grades));
      return student.classAverage();
    })
  
    console.log(groupAverage);
    return groupAverage;
  }

   getStudentAverage([
  {
    name: "Pedro",
    grades: [90, 87, 88, 90],
  },
  {
    name: "Jose",
    grades: [99, 71, 88, 96],
  },
  {
    name: "Maria",
    grades: [92, 81, 80, 96],
  },
])
