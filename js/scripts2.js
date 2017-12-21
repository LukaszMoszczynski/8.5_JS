var test = ['HTML', 5, 'World', 9.99, ['Lorem', 'Ipsum', 2]];
var foo = test[2];
console.log(foo);

var variable = "variable value";
var object = {
	attribute: "attribute value",
	secondAttribute: 124+97,
	thirdAttribute: variable
};

console.log(object);

foo = "lorem" + ['1', 2, 3.4];
console.log(foo);
foo = ["1", 2, 3.4] + "lorem";
console.log(foo);
foo = 9 + ["1", 2, 3.4];
console.log(foo);
foo = ["1", 2, 3.4] + 9;
console.log(foo);
foo = ["1", 2, 3.4] + [1, "2", 3.4];
console.log(foo);

foo = ["1", 2, 3.4] + {bar: "lorem"};
console.log(foo);
foo = {bar: "lorem"} + [1, "2", 3.4];
console.log(foo);

foo = ["1", 2, 3.4] + undefined;
console.log(foo);
foo = undefined + [1, "2", 3.4];
console.log(foo);

var points = 1;

console.log( 'The current value of points is: ', points );
console.log( 'The current calue of points is: ', points++ );
console.log( 'The current value of points is: ', points );

console.log( 'The current value of points is: ', points );
console.log( 'The current calue of points is: ', ++points );
console.log( 'The current value of points is: ', points );

var x = 15,
	foo;

foo = x % 2;
console.log(foo);
foo = x % 3;
console.log(foo);
foo = x % 5;
console.log(foo);