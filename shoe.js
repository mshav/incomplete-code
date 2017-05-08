var outputs = document.querySelector('#outputs');
var outputs2 = document.querySelector("#outputs2")
var branddropdown = document.querySelector(".brandOptions");
var colorOptions = document.querySelector(".colorOptions");
var sizeInp = document.querySelector(".sizeOptions");
var mysecTemplate = document.querySelector(".mysecTemplate").innerHTML;
var mytableTemplate = Handlebars.compile(mysecTemplate);
var searchbutton = document.querySelector("#addbutton");
var brandOptions = document.querySelector(".name");
// var entercolor  = document.querySelector(".entercolor");
// var entersize = document.querySelector(".entersize");
var enterbutton = document.querySelector("#enterbutton");
var stock = document.querySelector(".stock");




searchbutton.addEventListener("click", function() {
  function colorFilter(input) {
    return input.color == colorOptions.value;
  }

  function brandFilter(input) {
    return input.name == branddropdown.value;
  }

  function sizeFilter(input) {
    return input.size == sizeInp.value;
  }

  var newObjList = shoesData.filter(colorFilter);
  var newObjList = newObjList.filter(brandFilter);
  var newObjList = newObjList.filter(sizeFilter);
  var value = mytableTemplate({
    table: newObjList
  })
  if (newObjList.length > 0) {
    outputs2.innerHTML = value;
  } else if (newObjList.length < 1) {
    outputs2.innerHTML = "We dont have stock for " + colorOptions.value + " " + branddropdown.value + " " + sizeInp.value;
  }
});
enterbutton.addEventListener("click", function() {
  var entercolor = document.querySelector(".entercolor");
  var entersize = document.querySelector(".entersize");
  var stock = document.querySelector(".stock");
  var enterbrand = document.querySelector(".enterbrand");



  var shoesupdated = {};

  function propandvalue(Propname, Propvalue) {
    shoesupdated[Propname] = Propvalue;
  }

  propandvalue("name", enterbrand.value);
  propandvalue("size", entersize.value);
  propandvalue("color", entercolor.value);
  propandvalue("in_stock", stock.value);

  enterbrand.value ="";
  entersize.value = "";
  entercolor.value = "";
  stock.value  = "";

  shoesData.push(shoesupdated);
  uniquebrands()
  uniquesizes()
  uniquecolor()


});
var shoesData = [

  {
    name: "adidas",
    color: "black",
    size: 5,
    in_stock: 45
  },
  {
    name: "nike",
    color: "white",
    size: 10,
    in_stock: 45
  },
  {
    name: "reebok",
    color: "purple",
    size: 7,
    in_stock: 36
  },
  {
    name: "reebok",
    color: "yellow",
    size: 9,
    in_stock: 34
  },
  {
    name: 'gucci',
    color: 'brown',
    size: 10,
    in_stock: 23
  },
  {
    name: 'jordan',
    color: 'red',
    size: 11,
    in_stock: 30
  },
  {
    name: 'adidas sport',
    color: 'blue',
    size: 12,
    in_stock: 34
  }


]

var myTemplatedropdown = document.querySelector(".myTemplatedropdown").innerHTML;
var myfirstTemplate = Handlebars.compile(myTemplatedropdown);

function uniquebrands() {
  //create an Map
  var brandMap = {};
  //create an empty array
  var brandShoes = [];
  //loop through your stock
  for (var i = 0; i < shoesData.length; i++) {
    var shoe = shoesData[i]
    //check if the current brand is available on the Map
    if (brandMap[shoe.name] === undefined) {
      //if it is not push it to the map
      brandMap[shoe.name] = shoe.name;
      //push the brand name to the empty array
      brandShoes.push(shoe.name);
    }
  }
  var sortedBrands = brandShoes.sort();
  console.log(sortedBrands);
  var value = myfirstTemplate({
    shoes: sortedBrands
  });
  branddropdown.innerHTML = value;
}
uniquebrands()

function uniquesizes() {
  //create an Map
  var sizeMap = {};
  //create an empty array
  var sizeShoes = [];
  //loop through your stock
  for (var i = 0; i < shoesData.length; i++) {
    var shoe = shoesData[i];
    //check if the current brand is available on the Map
    if (sizeMap[shoe.size] === undefined) {
      //if it is not push it to the map
      sizeMap[shoe.size] = shoe.size;
      //push the brand name to the empty array
      sizeShoes.push(shoe.size);
    }
  }
  //sort the size on in asceding order
  var sortedSize = sizeShoes.sort(function(a, b) {
    return a - b
  });
  console.log(sortedSize);
  //send the sorted data to the handlebars
  var value = myfirstTemplate({
    shoes: sortedSize
  });
  sizeInp.innerHTML = value;
}
uniquesizes()

function uniquecolor() {

  var colorMap = {};

  var colorShoes = [];

  for (var i = 0; i < shoesData.length; i++) {
    var shoe = shoesData[i];
    if (colorMap[shoe.color] === undefined) {
      colorMap[shoe.color] = shoe.color;
      colorShoes.push(shoe.color);

    }
  }
  var sortedcolor = colorShoes.sort();
  // console.log(sortedcolor);
  var value = myfirstTemplate({
    shoes: sortedcolor
  });
  colorOptions.innerHTML = value;
}
uniquecolor()
