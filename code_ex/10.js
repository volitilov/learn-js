// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

/*function Test(name) {
	this.name = name;
	this.age = 75;
}

Test.prototype.text = function() {
	document.write(this.name + ' hi');
}

function Test2() {
	Test.apply(this, arguments);
}

Test2.prototype = Object.create(Test.prototype);
Test2.prototype.constructor = Test2;

var test = new Test2('Bob');
// test.text();

if (test instanceof Test) {
	document.write('lol');
} else {
	document.write('error');
}*/

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

/*function Test() {
	let mas = [];

	for(let i = 0; i <= 10; i++) {
		mas.push(i);
		document.write(mas[i] + ' ');
	}
}

let test = Test();
test();*/

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// let [firstname, lastname] = ['Bob', 'Dikens'];
// let [firstname, lastname] = 'Alex Dan'.split(' ');
// let [, lastname] = 'Bob Dikens'.split(' ');
// let [firstname, ...lastname] = 'Bob Dikens small'.split(' ');
// let [firstname, lastname] = [];
// let [firstname=null, lastname=null] = [];

/*function defaults() {
	document.write(Date.now() + ' visitor ');
}
// let [firstname=null, lastname=defaults()] = [];
let [firstname=null, lastname=defaults()] = ['Bob', 'Dikens'];

document.write(firstname + ' ');
document.write(lastname);*/

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

/*let options = {
	tittle: 'menu',
	height: 100,
	width: 200
}

let {tittle, height, width} = options;

document.write(tittle);*/

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

/*let options = {
	tittle: 'menu',
	height: 100,
	width: 200
}

function test({tittle, height, width}) {
	return tittle + ' ' + height + ' ' + width;
}

document.write(test(options));*/


// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

/*let name = 'Bob';
let lastname = 'lastname';
let isDamin = true;

let user = {
	name,
	[lastname]: 'Dikens',
	isDamin
}

document.write(JSON.stringify(user));
*/
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

/*let name = 'Bob', lastname = 'Dikens';
let methodName = 'getNames';

let user = {
	name,
	lastname,
	get fullname() {
		return name + ' ' + lastname;
	},
	[methodName]() {
		return name;
	}
};

document.write(user.fullname + '<br>');
document.write(user.getNames());*/


// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

/*let methodName = 'TEST';

class Test {
	constructor(firstname, lastname) {
		this.firstname = firstname;
		this.lastname = lastname;
	}

	get fullName() {
		return this.firstname + ' ' + this.lastname;
	}

	set fullName(newValue) {
		[this.firstname, this.lastname] = newValue.split(' ');
	}

	[methodName]() {
		return 'Hello world';
	}
}

var test = new Test('Bob', 'Dikens');
document.write(test.fullName + '<br>');

test.fullName = 'Sam Godric';
document.write(test.fullName + '<br>');

document.write(test.TEST());*/

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

/*class Test {
	constructor(firstname, lastname) {
		this.firstname = firstname;
		this.lastname = lastname;
	}

	static fullName() {
		return new Test('Bob', 'Dikens');
	}
}

let user = Test.fullName();
document.write(user.firstname + ' ' + user.lastname + '<br>');

user2 = new Test('Sam', 'Dolinks');
document.write(user2.firstname + ' ' + user2.lastname + '<br>'); */

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

/*class Test1 {
	constructor(firstname, lastname) {
		this.firstname = firstname;
		this.lastname = lastname;
	}

	hi() {
		return 'Hi ' + this.firstname + ' ' + this.lastname;
	}
}

class Test2 extends Test1 {};

document.write(new Test2('Bob', 'Dikens').hi());*/


// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

/*let set = new Set();

let x = {name: 'name1'};
let xx = {name: 'name2'};

set.add(x);
set.add(xx);
set.add(xx);

let test = set.delete(x);
if (test = true) set.add(x);

set.forEach(user => document.write(user.name + '<br>'));

document.write('Set size: ' + set.size);*/

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// Создаётся объект promise
/*let promise = new Promise((resolve, reject) => {

	setTimeout(() => {
		// переведёт промис в состояние fulfilled с результатом "result"
		resolve('result');
	}, 1000);

});

// promise.then навешивает обработчики на успешный результат или ошибку
promise
	.then(
		result => {
			// первая функция-обработчик - запустится при вызове resolve
			document.write('Fulfilled: ' + result); // result - аргумент resolve
		},
		error => {
			// вторая функция - запустится при вызове reject
			document.write('Rejected: ' + error); // error - аргумент reject
		}
	);*/

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function* Generate(start, end) {
	for (let i = start; i <= end; i++) yield i;
}

function* Generate2() {
	yield* Generate(48, 57);
	yield* Generate(65, 90);
	yield* Generate(96, 112);
}

let str = '';

for (let code of Generate2()) {
	str += String.fromCharCode(code);
}

document.write(str);

