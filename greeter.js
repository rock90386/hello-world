function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Jane first", lastName: "User last" };
document.body.innerHTML = greeter(user);
