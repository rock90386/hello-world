var faker = require("faker");

var appRouter = function (app) {



  app.get("/", function (req, res) {
    res.status(200).send({ message: 'Welcome to our restful API' });
  });

  app.get("/student", function (req, res) {
    var data = ({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      id: faker.internet.id()
    });
    res.status(200).send(data);
  });

 app.get("/students/:num", function (req, res) {
   var students = [];
   var num = req.params.num;

   if (isFinite(num) && num  > 0 ) {
     for (i = 0; i <= num-1; i++) {
       students.push({
           firstName: faker.name.firstName(),
           lastName: faker.name.lastName(),
           username: faker.internet.userName(),
           email: faker.internet.email(),
           id: faker.random.uuid()
        });
     }

     res.status(200).send(students);
    
   } else {
     res.status(400).send({ message: 'invalid number supplied' });
   }

 });
}

module.exports = appRouter;