var obj ={};
var obj1 = new Object;

console.log(obj);
console.log(obj1);


var Book ={
    writer :"pallab",
    page :250,
    price:450,
    print:function(){
        console.log(this.writer, this.price);
    }
}

//console.log(Book);
//Book.print();

console.log('Book name:'+ Book.writer);
console.log('Price' +Book['price']);

Book['price'] =30;

console.log('Price:'+Book.price);

for(var props in Book){
   // console.log(props);
    console.log(props + '=' +Book[props]);
}