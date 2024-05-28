//---------------------------------------------------------------------------------
//Разминка
// Определите интерфейс для пользователя
// interface User {
//   id: number;
//   name: string;
//   // Добавьте свойство email типа string
// 	email: string;
// }

// // Определите интерфейс для активности пользователя
// interface Activity {
//   userId: number;
//   activity: string;
//   // Добавьте свойство timestamp типа Date
// 	timestamp: Date;
// }

// // Реализуйте функцию fetchData используя Generic. Функция должна возвращать Promise.
// async function fetchData(url: string) {
//   // Реализуйте получение данных с использованием fetch и возвращение их в формате json
// 	fetch(url)
// 	.then((response) => response.json())
// 	.catch((e) => e)
// }

// // Используйте Utility Types для создания Partial и Readonly версий User и Activity
// type PartialUser = Partial<User>;
// type ReadonlyActivity = Readonly<Activity>;

// //Типизируйте функцию. userId - число
// function getUserActivities(userId: number) {
//   return fetchData(`/api/activities/${userId}`);
// }
// // Используйте ReturnType для создания типа возвращаемого значения функции getUserActivities
// type ActivitiesReturnType = ReturnType<typeof getUserActivities>;

// // Используйте extends в условных типах для создания типа Permissions
// type AdminPermissions = { canBanUser: boolean };
// type BasicPermissions = { canEditProfile: boolean };
// // Заполните тип. Должен выявляться на основне некоторого дженерика и опредять, какой из пермишенов выдавать: Admin или Basic.
// type Permission<T> = T extends AdminPermissions ? AdminPermissions : BasicPermissions;


// ///ЧАСТЬ 2.

// // Определите Type Alias для Union типа String или Number
// type StringOrNumber = string | number;

// // Реализуйте функцию logMessage, которая принимает StringOrNumber и не возвращает значение (void)
// function logMessage(message: StringOrNumber): void {
//   // Реализуйте вывод сообщения в консоль
// 	console.log(message);
// }

// // Реализуйте функцию throwError, которая никогда не возвращает управление (never)
// function throwError(errorMsg: string): never {
//   // Бросьте исключение с errorMsg
// 	throw errorMsg;
// }

// // Реализуйте Type Guard для проверки, является ли значение строкой
// function isString(value: StringOrNumber): value is string {
//   // Верните результат проверки типа
// 	return typeof value === 'string';
// }

// // Реализуйте функцию assertIsNumber, которая использует asserts для утверждения типа number
// function assertIsNumber(value: any): asserts value is number {
//   // Бросьте исключение, если значение не является числом
// 	if (typeof value !== 'number') {
// 		throwError('Это не число!')
// 	}
// }

// // Завершите функцию processValue, используя isString и assertIsNumber
// function processValue(value: StringOrNumber) {
//   // Реализуйте логику проверки и обработки значения
// 	if (isString(value)) {
// 		console.log(`${value} - это строка!!!`)
// 	} else {
// 		assertIsNumber(value);
// 		console.log(`${value} - это число!!!`)
// 	}
// }

// // Type Alias и Union
// type StringOrNumber = string | number;


// //сделайте  Type Guard для определения, является ли значение строкой
// function isString(value) {
// }

// // создайте asserts function на число.
// function assertIsNumber(value: any): asserts {
  
// }

// // Использование Type Guard и Asserts
// function processValue(value: StringOrNumber) {
//   if (isString(value)) {
//     console.log(`String value: ${value.toUpperCase()}`);
//   } else {
//     assertIsNumber(value);
//     console.log(`Number value: ${value.toFixed(2)}`);
//   }
// }

//---------------------------------------------------------------------------------



//---------------------------------------------------------------------------------
// Задание 2: Расширенное использование Generics
// Цель: Создать универсальную функцию обработки данных, которая может работать с различными типами данных.

// Определите Generic интерфейс Response с одним параметром типа T. Второй параметр status: number
// interface Response<T> {
// 	data: T;
// 	status: number;
// }

// // Реализуйте и типизируйте функцию, которая возвращает объект Response для переданных данных
// function createResponse<T>(data: T, status: number): Response<T> {
//   // Реализуйте создание и возврат объекта Response
// 	return {
// 		data: data,
// 		status: status,
// 	}
// }

// // Используйте функцию createResponse для создания ответа с массивом чисел
// const numericResponse = createResponse<number[]>([1, 2, 3], 200);

// // Используйте функцию createResponse для создания ответа с объектом пользователя (User)
// const userResponse = createResponse<User>({
// 	id: 1,
// 	name: '-_-',
// 	email: "email",
// }, 200);
//------------------------	---------------------------------------------------------

  
//---------------------------------------------------------------------------------
// Задание 3: Расширенное использование Generics
// Цель: Разработать несколько функций для обработки и различения типов данных.

// Определите тип данных для описания автомобиля 
// type Car = {
//   company: string;
//   model: string;
//   year: number;
// };

// // Определите тип данных для описания велосипеда
// type Bike = {
//   company: string;
//   type: 'road' | 'mountain';
// };

// // Создайте Type Guard для проверки, является ли объект автомобилем
// function isCar(vehicle: Car | Bike): vehicle is Car{
// 	return typeof (vehicle as Car).model === 'string' && typeof (vehicle as Car).year === 'number';
// }

// // Используйте Type Guard в функции, которая печатает информацию о транспорте.
// // Небольшая подсказка о том, какие параметры в себя может принимать isCar дана ниже.
// function printVehicleInfo(vehicle: Car | Bike) {
//   if (isCar(vehicle)) {
//     console.log(`Car: ${vehicle.company} ${vehicle.model} ${vehicle.year}`);
//   } else {
//     console.log(`Bike: ${vehicle.company} ${vehicle.type}`);
//   }
// }
//---------------------------------------------------------------------------------
  


//---------------------------------------------------------------------------------  
// Задание 4: Использование Utility Types для работы с интерфейсами
// Цель: Модифицировать интерфейсы для специфических нужд без изменения оригинальных интерфейсов.

// Определите интерфейс Employee
// interface Employee {
//   id: number;
//   name: string;
//   department: string;
//   email: string;
// }

// // Используйте Utility Type для создания типа, который делает все свойства Employee опциональными
// type PartialEmployee = Partial<Employee>;// Заполните тип

// // Используйте Utility Type для создания типа, который делает все свойства Employee доступными только для чтения
// type ReadonlyEmployee = Readonly<Employee>;// Заполните тип

// // Создайте функцию, которая принимает PartialEmployee и выводит информацию о сотруднике
// function printEmployeeInfo(employee: PartialEmployee) {
//   // Реализуйте логику функции, обрабатывая случай отсутствующих свойств
// 	const printedId = employee.id ? `Id: ${employee.id}\n` : '';
// 	const printedName = employee.name ? `Имя: ${employee.name}\n` : '';
// 	const printedDepartament = employee.department ? `Департамент: ${employee.department}\n` : '';
// 	const printedEmail = employee.email ? `Email: ${employee.email}` : '';

// 	console.log(printedId + printedName + printedDepartament + printedEmail);
// }
//---------------------------------------------------------------------------------




//---------------------------------------------------------------------------------  
//Задание 5: Работа с Indexed Access Types и Mapped Types
//Цель: Создать утилиты для работы с объектами и их ключами.

// Определите интерфейс для пользователя
// interface User {
//   id: number;
//   name: string;
//   email: string;
//   age: number;
// }

// // Используйте Indexed Access Types для получения типа поля name из User
// type UserNameType = User["name"];

// // Создайте Mapped Type, который преобразует все поля интерфейса User в boolean. Можно воспользовать конструкцией Key in keyof 
// type UserFieldsToBoolean = {
// 	[Property in keyof User]: boolean;
// }

// // Реализуйте функцию, которая принимает ключи интерфейса User и возвращает их типы
// function getUserFieldType(key: string) {
//   // Верните тип ключа
//   return typeof key;
// }

// // Используйте эту функцию для получения типа поля 'age' и 'name'
// const ageType = getUserFieldType('age');
// const nameType = getUserFieldType('name');
//---------------------------------------------------------------------------------






//---------------------------------------------------------------------------------
// Задание 6: Расширение и ограничение Generics
// Цель: Создать универсальные функции с ограничениями типов.

// Создайте базовый интерфейс для сущностей с идентификатором
// interface Identifiable {
//   id: number;
// }

// Типизируйте функцию, которая принимает массив объектов с ограничением на Generics, 
// где каждый объект должен соответствовать интерфейсу Identifiable. Не забывайте, что find может вернуть undefined
// function findById(items: Identifiable[], id: number ) {
// 	if (items.length && Object.keys(items[0]).length) {
// 		return items.find(item =>
// 			item.id === id
// 		);
// 	}
// }

// Используйте эту функцию для поиска пользователя по id в массиве пользователей
// const users: User[] = [
//   { id: 1, name: "Alice", email: "alice@example.com", age: 25 },
//   { id: 2, name: "Bob", email: "bob@example.com", age: 30 }
// ];
// const user = findById(users, 1);
//---------------------------------------------------------------------------------






//---------------------------------------------------------------------------------
// Задание 7: Работа с обобщённой функцией поиска в массиве
// Цель: Создать функцию, которая может искать элементы в массиве по разным критериям,
// включая составные типы и условия с использованием нескольких параметров в Generics.
// interface User {
//   id: number;
//   name: string;
//   age: number;
// }

// interface Product {
//   id: number;
//   name: string;
//   price: number;
// }

// interface Book {
//   isbn: string;
//   title: string;
//   author: string;
// }

// Разберитесь с типизацией функции и поймите как она работает.
// Как можно улучшить функцию findInArray, чтобы она обрабатывала случаи, когда ключ или значение отсутствуют?
// Можно ли использовать эту функцию для поиска по нескольким ключам одновременно? Если да, как бы вы это реализовали?
// function findInArray<T, K extends keyof T>(items: T[], key: K, value: T[K]): T | undefined {
//   return items.find(item => item[key] === value);
// }

// Фукнция поиска по нескольким ключам
// function findInArrayBySeveralKeys<T, K extends keyof T>(items: T[], keys: K[], values: T[K][]): T | undefined {
//   return items.find(item => 
// 		keys.map((key) => (
// 			item[key] === values[keys.indexOf(key)]
// 		)).every((elem) => elem === true)
// 	);
// }

// // Данные для тестирования функции
// const users: User[] = [
//   { id: 1, name: "Alice", age: 25 },
//   { id: 2, name: "Bob", age: 30 },
// 	{	id: 3, name: "Alice", age: 23}
// ];

// console.log(findInArrayBySeveralKeys(users, ["name", "age"], ["Alice", 23]))

// const products: Product[] = [
//   { id: 1, name: "Laptop", price: 1000 },
//   { id: 2, name: "Smartphone", price: 500 }
// ];

// const books: Book[] = [
//   { isbn: "12345", title: "The TypeScript Handbook", author: "Someone" },
//   { isbn: "67890", title: "Learning TypeScript", author: "Another One" }
// ];

// // 1. Найдите пользователя по имени "Alice".
// const foundUser = findInArrayBySeveralKeys(users, ["name"], ["Alice"]);
// // 2. Найдите продукт с ценой 500.
// const foundProduct = findInArrayBySeveralKeys(products, ["price"], [500]);
// // 3. Найдите книгу по автору "Another One".
// const foundBook = findInArrayBySeveralKeys(books, ["author"], ["Another One"]);
//---------------------------------------------------------------------------------






//---------------------------------------------------------------------------------
// Задание 8: Реализация обобщённой функции для сопоставления и преобразования элементов массива
// Цель: Создать функцию mapAndFilter, которая будет принимать массив объектов, 
// функцию для их преобразования и функцию для фильтрации результатов. 
// Функция должна использовать два параметра Generic: один для типа элементов входного массива,
// а другой для типа элементов выходного массива.

// Описание задачи: Функция mapAndFilter должна выполнить следующие функции:
// Применить функцию преобразования ко всем элементам входного массива.
// Фильтровать преобразованные элементы с помощью предоставленной функции фильтрации.
// Возвращать новый массив с результатами, которые прошли фильтрацию.
// interface Person {
//   name: string;
//   age: number;
// }

// interface Adult {
//   fullName: string;
//   age: number;
// }

// // Напишите функцию mapAndFilter здесь. Используйте два параметра Generic: T для типа входных данных и U для типа выходных данных.
// function mapAndFilter<T, U>(items: T[], transform: (items: T) => U, filter: (nextItems: U) => boolean): U[] {
// 	let newItems;
//   newItems = items.map(transform);
// 	newItems = newItems.filter(filter);

// 	return newItems;
// }

// // Пример данных
// const people: Person[] = [
//   { name: "Alice", age: 24 },
//   { name: "Bob", age: 17 },
//   { name: "Charlie", age: 32 }
// ];

// // Пример использования функции mapAndFilter
// const adults: Adult[] = mapAndFilter(
//   people,
//   (person) => ({ fullName: person.name, age: person.age }),
//   (adult) => adult.age >= 18
// );

// // Выведите результаты для проверки
// console.log(adults);


//Вопросы после реализации:
// Как изменится функция, если необходимо добавить возможность изменения критерия сортировки?
// Ответ: необходимо добавить новую фукнцию в аргумент mapAndFilter - sortType
// теперь mapAndFilter будет выглядеть так:
// function mapAndFilter<T, U>(items: T[], transform: (items: T) => U, filter: (nextItem: U) => boolean, sortType: (a: any, b: any) => 1 | 0 | -1): U[] {
// 	let newItems;
//   newItems = items.map(item => (
// 		transform(item)
// 	))
	
// 	newItems = newItems.filter((item) => (
// 		filter(item)
// 	))

//   newItems = newItems.sort((a, b) => sortType(a, b))

// 	return newItems;
// }

// пример использования sortType:
// const adults: Adult[] = mapAndFilter(
//   people,
//   (person) => ({ fullName: person.name, age: person.age }),
//   (adult) => adult.age >= 10,
//   (a, b) => a.age > b.age ? 1 : a.age < b.age ? -1 : 0
// );

// Могут ли типы T и U быть полностью разными или должны иметь общие характеристики? Объясните ваш ответ.
// Ответ: это должны быть массивы объектов с содержимым, описанным в передаваемых фукнциях. В остальном всё зависит от передаваемых функций.


//---------------------------------------------------------------------------------
