var Student = /** @class */ (function () {
    function Student(a, b, c) {
        this.name = a;
        this.age = b;
        this.rollNo = c;
    }
    return Student;
}());
var std1 = new Student("Danish", 23, 1512187);
var std2 = new Student("Faizan", 22, 1512182);
window.alert(std1.name);
window.alert(std2.name);
