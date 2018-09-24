class Student{
    name:string;
    age:number;
    rollNo:number;
constructor(a,b,c){
   this.name=a;
   this.age=b;
   this.rollNo=c;
}
}
let std1 :Student= new Student("Danish",23,1512187);
let std2 :Student= new Student("Faizan",22,1512182);
window.alert(std1.name);
window.alert(std2.name);