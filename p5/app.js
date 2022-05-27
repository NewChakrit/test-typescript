// const person: {
//   name: string;
//   age: number;
// } = {
var person = {
    name: "Maximilian",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: [2, "author"]
};
person.role.push("admin");
// person.role[1] = 10;
person.role = [0, "admin"];
for (var _i = 0, _a = person.role; _i < _a.length; _i++) {
    var newRole = _a[_i];
    console.log(newRole);
}
// let favoriteActivities: string[];
// favoriteActivities = ["Sports"];
// console.log(person.name);
for (var _b = 0, _c = person.hobbies; _b < _c.length; _b++) {
    var hobby = _c[_b];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map); !!!ERROR!!!
}
