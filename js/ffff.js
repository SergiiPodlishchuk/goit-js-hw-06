// // // Дано: массив объектов
// // // Написать два решения (через for и forEach), которые будут выводить в консоль только те объекты, в которых есть поле name
// const peopleData = [
//   { name: "Denis", age: 22, height: 167 },
//   { name: "Ihor", city: "Kharkiv" },
//   { age: 22, height: 199 },
//   { city: "Lviv", phone: "+38050505050" },
// ];

// // const arrayName = array.forEach((obj) => {
// //   if (obj.name) {
// //     console.log(obj);
// //   } else {
// //   }
// // });

// const newPeopleData = peopleData.map(({ name, city }) => ({ name, city }));

// console.log(newPeopleData);

// // Создать новый масссив cleanPeopleData,
// // в который положить трансформированный массив
// // newPeopleData. в нем не должно быть полей со
// // значением undefined и должно появиться новое поле index.
// // то есть, {name: "Denis", city: undefined}
// // должен превратиться в {name: “Denis”, index: 0}

// const cleanPeopleData = newPeopleData.map((obj, index) => {
//   if (obj.name === undefined) {
//   }
//   obj.index = index;
//   return obj;
// });

// console.log(cleanPeopleData);

// // const cleanPeopleData1 = newPeopleData.map((obj, index) => {
// //   if (obj.name === undefined) {
// //     delete obj.name;
// //   }
// //   if (obj.city === undefined) {
// //     delete obj.city;
// //   }
// //   obj.index = index;
// //   return obj;
// // });

// // console.log(cleanPeopleData1);

// // const cleanPeople2 = newPeopleData.map((i, index) => {
// //   const existedEntries = Object.entries(i).filter(([key, value]) => value);
// //   return { ...Object.fromEntries(existedEntries), index };
// // });

// // console.log(cleanPeople2);

// // ================================
// // Отфильтровать червяков и оставить только тех, у которых возраст меньше 20
// // Затем добавить оставшимся зубы (claws: true)
// // Или teeth: true

// const worms = [
//   { name: "Артем", length: 15, age: 5 },
//   { name: "Илья", length: 10, age: 2 },
//   { name: "Анатолий", length: 200, age: 67 },
// ];
// // Щас будем практиковаться с червяками)

// const filterWorms = worms.filter((worm) => {
//   if (worm.age < 20) {
//     return worm;
//   }
// });

// filterWorms.forEach((worm) => (worm.claws = true));
// console.log(filterWorms);

// const find = worms.find((obj) => {
//   obj.name = "Анатолий";
//   return obj;
// });

// console.log(find);

// // использовать some, чтобы узнать, есть ли хотя бы один пятнадцатилетний  червяук
// // червяк
// // Изменить червяков с помощью map таким образом, чтобы worms.every(…) возвращало true

// const some = worms.some((worm) => worm.age === 15);
// console.log(some);

// const changeWorms = worms
//   .map((worm) => ({ ...worm, age: 15 }))
//   .every((worm) => worm.age === 15);

// console.log(changeWorms);

// // const worm15 = worms.some((i) => i.age === 15);
// // const worms15 = worms
// //   .map((i) => ({ ...i, age: 15 }))
// //   .every((i) => i.age === 15);
// // console.log(worms15);

// // const checkWormAge = worms.some(worm => worm.age === 15);
// // const checkWormLength = worms
// //   .map(worm => worm.length += 10)
// //   .every(worm => worm.length > 10);

// something.map().reduce().filter().find();

const arrr = ["Apple", "Cherry", "Lime", "Potatos"];

const reduce1 = arrr.reduce((acc, el) => {
  return acc + " " + el;
});

console.log(reduce1);

const reduce2 = arrr.reduce((acc, el) => [...acc, el], []);

console.log(reduce2);

const reduce3 = arrr.reduce((acc, el) => {
  acc.push(el);
  return acc;
}, []);

console.log(reduce3);

// sort((a, b) => a.localeCompare(b, "en")

const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

// Трансформировать (!) массив твитов, оставляя
// только лайки. отсортировать лайки по возрастанию

const like = tweets
  .map((tweet) => tweet.likes)
  .sort((a, b) => a - b)
  .reduce((acc, el) => acc + el);

console.log(like);

// [...new Set(arr)]; // оставить только уникальные значения

const reduce = tweets.reduce((acc, el) => acc + el.likes, 0);

const worms = [
  { name: "Petya", role: "Father", age: 32, sex: "male", money: 10000 },
  { name: "Masha", role: "Mother", age: 25, sex: "female", money: 7000 },
  { name: "Artem", role: "Son", age: 2, sex: "male", money: 0 },
  { name: "Tolik", role: "Son", age: 4, sex: "male", money: 5 },
];

// Оставляю вам семью червяков, с которой потом будем работать))
