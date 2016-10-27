function student(name,age) {
    this.name=name;
    this.age=age
};
student.prototype={
    add:function () {
       return this.age+1;
    }
}

var s1=new student("ll",12);
var s2=new student("aa",10);
console.log(s1.add());
console.log(s2.add());