// более подробно можно ознакомиться по ссылке 
// https://learn.javascript.ru/function-basics
// https://learn.javascript.ru/function-declaration-expression
// https://learn.javascript.ru/named-function-expression

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

"Function Declaration"
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// создаются интерпретатором до выполнения кода
// Поэтому их можно вызвать до объявления

function имя(параметры, через, запятую) {
  код функции
}



"Function Expression" (функциональное выражение)
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
var f = function(параметры) {
	// тело функции
};



"Named Function Expression" (именованное функциональное выражение)
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
var f = function name(...) { /* тело функции */ };

// Имя функционального выражения (name) имеет особый смысл. Оно 
// доступно только изнутри самой функции. Это ограничение видимости 
// входит в стандарт JavaScript и поддерживается всеми браузерами, 
// кроме IE8-

// Как правило, имя NFE используется для единственной цели – позволить 
// изнутри функции вызвать саму себя
// Внутреннее имя позволяет функции надёжно обращаться к самой себе, 
// где бы она ни находилась





// объявление функции
function name(arg1, arg2) {
	// args полученные аргументы

	arg1 = arg1 || false;
	// используется если аргумент не указан

	var ex = 'value';
	// локальная переменная которая доступна только
	// внутри функции, не изменяет глобальную

	ex2 += 2;
	// работа с глобальной переменной

	// возврат результатов выполнения функции
	return args;

	// можно возвращать другую функцию
	return function() {
		return ex2++;
	};

	// можно вернуть объект
	return {
		// получить значение
		get: function() {
			return value;
		},

		// поставить значение
		set: function(value) {
			value = newValue;
		}
	};

}

name(arg1, arg2);
// вызов функции с переданными аргументами

name.age = 43
// Функция в JavaScript является объектом, поэтому можно присваивать 
// свойства прямо к ней


// Блоки if/else, switch, for, while, do..while не влияют на область 
// видимости переменных

// В случае, когда функция не вернула значение или return был без 
// аргументов, считается что она вернула undefined





function Name(name) {
	this.name = name;
}

var name = new Name("test");
// такая функция называется конструктором – она предназначена для 
// «конструирования» объектов.
// функция, запущенная через new, делает следующее:

// Создаётся новый пустой объект.

// Ключевое слово this получает ссылку на этот объект.

// Функция выполняется. Как правило, она модифицирует this 
// (т.е. этот новый объект), добавляет методы, свойства.

// Возвращается this
