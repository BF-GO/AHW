const firstNumber = 5;
const secondNumber = 20;

let result = null;

if (firstNumber === 10 && secondNumber === 20) {
	result = firstNumber + secondNumber;
	console.log(result);
} else {
	result = secondNumber - firstNumber;
	console.log(result);
}

const alex = 'admin';

if (alex === 'user') {
	console.log('Alex is user');
} else if (alex === 'vip') {
	console.log('Alex is vip user');
} else {
	console.log('Alex is admin');
}

const padre = 'padre';
padre === 'admin'
	? console.log('Padre is admin')
	: console.log('Padre in not admin');

const age = 24;

if (age >= 18) {
	console.log('Вы совершеннолетний');
} else {
	console.log('Вам ешё нет 18');
}

const ages = 17;

ages === 24
	? console.log('Вы совершеннолетний')
	: console.log('Вам ешё нет 18');

const day = 'Thursday';

switch (day) {
	case 'Monday':
		console.log('Сегодня понедельник. Начало недели!');
		break;
	case 'Tuesday':
		console.log('Сегодня вторник. Продолжаем работать!');
		break;
	case 'Wednesday':
		console.log('Сегодня среда. Половина недели пройдена!');
		break;
	case 'Thursday':
		console.log('Сегодня четверг. Почти конец недели!');
		break;
	case 'Friday':
		console.log('Сегодня пятница. Последний рабочий день!');
		break;
	case 'Saturday':
		console.log('Сегодня суббота. Время отдыхать!');
		break;
	case 'Sunday':
		console.log('Сегодня воскресенье. Завтра снова на работу!');
		break;
	default:
		console.log('Неизвестный день недели.');
}
