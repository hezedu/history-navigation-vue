function Fn(){
  this.name = 'fn';

}

function Fn2(){
  
  this.name = 'Fn2';
  const self = this;

}
Fn2.prototype.say = function(){
  console.log(this.name)
}

Fn.prototype.fn2 = new Fn2();

const fn = new Fn();
// fn.fn2();
fn.fn2.say();