const messageConfig = {
  frontContent: "Happy Birthday, Odin One-Eye!",
  insideContent: "From Asgard to Nifelheim, you're the best all-father ever.\n\nLove,",
  closing: {
      "Thor": "Admiration, respect, and love",
      "Loki": "Your son"
  },
  signatories: [
      "Thor",
      "Loki"
  ]
};
// ----------------------------------------------
// this is the code before ally any solution. 
// const printCard = function () {
//   console.log(this.frontContent);
//   console.log(this.insideContent);
//   // By check the console log of this, you will see 'this' are in different context. 
//   console.log(this)
   
//   this.signatories.forEach(function (signatory) {
//      console.log(this)
//     const message = `${this.closing[signatory]}, ${signatory}`;
   
//     console.log(message);
//   });
// }
// -----------------------------------------------------------
  // Solution 1: add 'this ' as 2nd arguement. 
const printCardThis = function () {
  console.log(this.frontContent);
  console.log(this.insideContent);
  this.signatories.forEach(function (signatory) {
     console.log(this)
    const message = `${this.closing[signatory]}, ${signatory}`;
   
    console.log("this way",message);
  }, this); // After you add ' this' as the 2nd argument, both 'this 'will have object context. 
}
// -----------------------------------------------------------
// solution 2: using 'bind'. 
const printCardBind = function () {
  console.log(this.frontContent);
  console.log(this.insideContent);
  const contextBoundForEachExpr = function (signatory) {
    const message = `${this.closing[signatory]}, ${signatory}`;
    console.log("bind way",message);
  }.bind(this);

  this.signatories.forEach(contextBoundForEachExpr);

};

// -----------------------------------------------------------
// solution 3: using 'closure'. 
const printCardClosure = function () {
  console.log(this.frontContent);
  console.log(this.insideContent);
  const outerContext = this; 
  this.signatories.forEach(function (signatory) {
    const message = `${outerContext.closing[signatory]}, ${signatory}`;
   
    console.log("closure way: ",message);
  });
};

// printCard.call(messageConfig);
printCardThis.call(messageConfig);
printCardBind.call(messageConfig);
// printCardClosure.call(messageConfig);
