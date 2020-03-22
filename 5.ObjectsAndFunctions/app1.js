var person = new Object();

// COMPUTED MEMBER ACCESS
person["firstname"] = "Shihabudheen";

// MEMBER ACCESS/DOT OPERATOR
person.secondname = "US";

console.log(person.firstname);

var key = "lastname";
console.log(person[key]);

person.address = new Object();
person.address["street"] = "H Cross";
person["address"].city = "BTM Layout, Bangalore";

console.log("Person", person);
