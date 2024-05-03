function hideButton(element) {
    element.style.display = 'none';
  }


  function greet(name) {
    console.log(`Hello, ${name}!`);
}

// Using call()
greet.call(null, "Alice");

// Using apply()
greet.apply(null, ["Bob"])

let counter = 0;

function incrementCounter() {
    counter++;
    document.getElementById("count").innerText = counter;
}


function Counter() {
  this._count = 0;
}
Counter.prototype.getCount = function() {
  return this._count;
};
Counter.prototype.setCount = function(value) {
  if (typeof value === 'number' && value >= 0) {
      this._count = value;
  } else {
      console.error("Invalid value for count. Count must be a non-negative number.");
  }
};
Counter.prototype.increment = function() {
  this._count++;
};
Counter.prototype.decrement = function() {
  if (this._count > 0) {
      this._count--;
  } else {
      console.error("Count cannot be less than zero.");
  }
};
Counter.prototype.reset = function() {
  this._count = 0;
};


const myCounter = new Counter();
console.log(myCounter.getCount());
myCounter.increment();
console.log(myCounter.getCount()); 
myCounter.increment();
console.log(myCounter.getCount()); 
myCounter.decrement();
console.log(myCounter.getCount()); 
myCounter.setCount(-5); 
console.log(myCounter.getCount()); 
myCounter.setCount(10);
console.log(myCounter.getCount()); 
myCounter.reset();
console.log(myCounter.getCount()); 

