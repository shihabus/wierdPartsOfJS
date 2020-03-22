function greet(parm1, param2, ...other) {
  console.log("Args", arguments);
  console.log("--------");
}
greet();
greet("Shihab");
greet("Shihab", "King");
greet("Shihab", "King", "Roman", 1122, { model: "Benz" });
