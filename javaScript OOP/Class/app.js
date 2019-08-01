

function Person(name, email){

    this.name =name;
    this.email= email;
    this.print=function(){
        console.log('Name :'+ this.name);
    }

  //  console.log('This is constructor..');
}
var p1 = new Person('Hora Krishna Roy','pallab@gmail.com');
var p2 =new Person('Akhy Moni','akhymoni@gmail.com');

var people =[p1,p2];

//console.log(p1);
//console.log(p1.name);
//console.log(people);

//people.forEach(function(Person){
  //  console.log('Email :' + Person.email);
    //Person.print();
//});

for(var props in p1){
    console.log('Property =' +props);
}