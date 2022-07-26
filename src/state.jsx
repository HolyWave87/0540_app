

const user = {
	name: "Иван",
	lastname: "Иванов",
	email: "ivan@ya.ru",
	id: "1",
	about: "Тут я рассказываю о себе, своих увлечениях и тд.",
	avatar:
		"https://th.bing.com/th?q=User+Profile&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=ru-RU&cc=RU&setlang=en&adlt=moderate&t=1&mw=247",
};

const users = {
	0: { name: "Сергей", lastname: "Миронов" },
	1: { name: "Владислава", lastname: "Кабанова" },
	2: { name: "Андрей", lastname: "Бородин" },
	3: { name: "Юлия", lastname: "Смирнова" },
	4: { name: "Ксения", lastname: "Иванова" },
	5: { name: "Кузьма", lastname: "Чижиков" },
	6: { name: "Марина", lastname: "Петрова" },
};


export function getUser() {
  return user;
}
export function getUsers() {
  return users;
}
