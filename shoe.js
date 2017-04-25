
var outputs = document.querySelector('#outputs');
var outputs2 = document.querySelector("#outputs2")
var myTemplatedropdown = document.querySelector(".myTemplatedropdown").innerHTML;
var myfirstTemplate = Handlebars.compile(myTemplatedropdown);
var branddropdown = document.querySelector(".brand");
var color = document.querySelector(".color");
var size = document.querySelector(".size");
var mysecTemplate = document.querySelector(".mysecTemplate").innerHTML;
var mytableTemplate = Handlebars.compile(mysecTemplate);
var addbutton = document.querySelector("#addbutton");
var brandOptions = document.getElementById("brandOptions");

 var shoesData = [
   {name:'Nike', color:'red',size: 5 ,in_stock:57},
  {name:'adidas',color:'black', size:7,in_stock:56},
  {name:"reebok",color:"white", size:9,in_stock:34},
  {name:'gucci',color:'black',size:10,in_stock:23},
  {name:'jordan',color:'red',size:11,in_stock:30},
  {name:'adidas sport',color:'blue',size:12,in_stock:34}

 ]
 var value = myfirstTemplate({shoes: shoesData});
 outputs.innerHTML = value;

addbutton.addEventListener("click" ,function(){
  var shoesstoration  = [];

  for (var i = 0; i < shoesData.length; i++) {
    var shoesList   = shoesData[i];
    console.log(shoesList);
  }

 var value2 = mytableTemplate({table:shoesData});

console.log(value2);
 outputs2.innerHTML = value2;
});
