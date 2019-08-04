## Question 1:
* 1.Using notation of es5, create a constructor called `Animal()` with two properties:
  - `animalName` - i.e., 'Lussy'
  - `type` - i.e., 'Dog'
1. Add two methods to the prototype:
  - `getanimalName` - return the name of the animal
  - `createElement` - create a new DOM element with jQuery
1. Create an instance.
1. Append the instance to the DOM


function Animal(animalName,type){
	this.animalName = Lussy;
	this.type = Dog;
}
getanimalName = new Animal(){
	return (`$this.animalName`)
}
createElement = new Animal(){
	('.div1').append('<div>hello</div>')
}
cat = new Animal()
   ('.div2').append('<div>$this.animalName</div>')
    ('.div2').append('<div>$this.type</div>')


## Question 2:
* 1.Using notation of es6 create a class called `shape()` 
with three properties, all these properties are private:
  - `height` - i.e., '13CM'
  - `length` - i.e., '12CM'
  - `area` - i.e., '256CM2'

1. Add one method :
  - `getteArea` - return the area

1. Create an instance.
1. Append the instance to the DOM

class shape(height,length,area){
	constructor (){
		_height = 13 cm
		_length = 12 cm
		_area 
	}
 function getteArea(){
    return area= height*length
 }
 return area
}
a = new shape(){
   ('.div2').append('<div></div>')
}

## Question 3:
* 1. Using notation of es6 and arrow function ,
 make a function that filters an array of strings,
  the array filter depending on the length of the string,
   all the length above 4 should be excluded.

const filter = (arr) => { 
  for (a in arr){
  	if (arr[a].length < 5){
  		return arr[a];
  	}
  }
  return arr[a]
}


- `filter array(['Food','Pasta','Pizza','Eat'])` - 
return ['food','Pasta','Eat']
