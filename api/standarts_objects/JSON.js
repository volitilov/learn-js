JSON 
// является синтаксисом для сериализации объектов, массивов, чисел, 
// строк логических значений и значения null. Он основывается на 
// синтаксисе JavaScript, однако всё же отличается от него: 
// не каждый код на JavaScript является JSON, и не каждый JSON 
// является кодом на JavaScript.

// Это один из наиболее удобных форматов данных при взаимодействии 
// с JavaScript. Если нужно с сервера взять объект с данными и 
// передать его клиенту, то в качестве промежуточного формата – 
// для передачи по сети, почти всегда используют именно его.

// более подробно можно ознакомиться по ссылке 
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/JSON

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


// Методы :::::::::::::::::::::::::::::::::

JSON.parse(str) 
// превратит строку с данными в формате JSON в 
// JavaScript-объект/массив/значение

JSON.stringify()
// Возвращает строку JSON, соответствующую указанному значению, 
// возможно с включением только определённых свойств или с заменой 
// значений свойств определяемым пользователем способом.