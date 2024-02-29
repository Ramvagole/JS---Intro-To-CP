import { add, greet, interpolate, nuller, objectFactory } from "./index.js";
let a=add(1,2);
console.log(a);

let b=greet();
console.log(b);

let c=interpolate(2,3);
let d=interpolate(5,2);
console.log(`interpolate value is ${c}`);
console.log(`interpolate vlaue is ${d}`);

let nullValue=null;
nuller(nullValue);

let e=objectFactory("Raj",26);
let f=objectFactory("Vijay",24);
console.log(e);
console.log(f);