// более подробно можно ознакомиться по ссылке 
// https://learn.javascript.ru/while-for

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

while (условие) {
	// код, тело цикла
}


do {
	// тело цикла
} while (условие)
// Цикл, описанный, таким образом, сначала выполняет тело, а затем 
// проверяет условие


for (начало; условие; шаг) {
	// ... тело цикла ...
}
// Любая часть for может быть пропущена. При этом сами точки с 
// запятой ; обязательно должны присутствовать, иначе будет ошибка 
// синтаксиса



while (условие) {
	if (условие) break;
	if (условие) continue
}
// break: прерывает весь цикл

// continue: прерывает не весь цикл, а только текущее выполнение его 
// тела, как будто оно закончилось



outer: while (условие) {
	while (условие) {

		if (условие) break outer;
		// завершить оба цикла
	}
}
// выйти одновременно из нескольких уровней цикла