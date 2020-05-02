// репета

"use strict";

// const storage = {
//   _items: [{ label: "item-1" }, { label: "item-2" }],
//   get items() {
//     return this._items;
//   },
//   add(item) {
//     // this._items.push(item);
//     this._items = [...this._items, item];
//   },
// };
// console.log(storage.items);
// storage.add({ label: "item-3" });
// console.log(storage.items);
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const products = [
  { id: "id-1", label: "Apples", price: 100, quantity: 50 },
  { id: "id-2", label: "Bananas", price: 120, quantity: 70 },
  { id: "id-3", label: "Lemons", price: 70, quantity: 30 },
];
const users = [
  { id: "id-1", name: "Mango", isActive: true },
  { id: "id-2", name: "Poly", isActive: false },
  { id: "id-3", name: "Ajax", isActive: true },
  { id: "id-4", name: "Chelsey", isActive: false },
];
const log = (array) => console.table(array);

{
  // map

  //   const dobuled = numbers.map((number) => {
  //     console.log(number);
  //   });

  //   const doubled = numbers.map((number) => {
  //     return number * 2;
  //   });

  //   log(doubled);
  //   //   второй пример

  //   const labels = products.map((product) => {
  //     return product.label;
  //   });

  //   log(labels);

  //   функция из примера
  //   const getLabels = (products) => {
  //     return products.map((product) => {
  //       return product.label;
  //     });
  //   };
  //   // та же функция только в одну строчку
  //   const getLabels1 = (products) => products.map((product) => product.label);

  //   const labels = getLabels(products);
  //   log(labels);

  //   const updatedProducts = products.map((product) => {
  //     return {
  //       ...product,
  //       price: product.price * 1.1,
  //     };
  //   });

  //   log(updatedProducts);
  // создаем функцию по примеру
  //   const updateProductPrice = (products, value) => {
  //     return products.map((product) => {
  //       return {
  //         ...product,
  //         price: product.price * value,
  //       };
  //     });
  //   };
  //   та же функция но укороченная
  //   const updateProductPrice1 = (products, value) =>
  //     products.map((product) => ({
  //       ...product,
  //       price: product.price * value,
  //     }));
  //
  // map под капотом
  //   const map = (array, callback) => {
  //     const resultArray = [];

  //     for (let i = 0; i < array.length; i++) {
  //       const element = array[i];
  //       const res = callback(element);
  //       resultArray.push(res);
  //     }
  //     return resultArray;
  //   };
  // функция создает новый массив с обновленным значение quantity которое ищется по id
  const updateProductQuantity = (products, productId, amount) => {
    return products.map((product) => {
      return product.id === productId
        ? { ...product, quantity: product.quantity + amount }
        : product;
    });
  };

  const updated = updateProductQuantity(products, "id-3", 200);
  log(updated);
}
{
  // filter

  const filtered = numbers.filter((number) => {
    return number > 3;
  });
  log(filtered);

  const cheapProducts = products.filter((product) => {
    return product.price < 100;
  });
  log(cheapProducts);

  const availableProducts = products.filter((product) => {
    return product.quantity > 40;
  });
  log(availableProducts);

  const activeUsers = users.filter((user) => {
    return user.isActive;
  });
  log(activeUsers);

  const inactiveUsers = users.filter((user) => {
    return !user.isActive;
  });
  log(inactiveUsers);
}
{
  // find
  const user = users.find((user) => {
    return user.id === "id-1";
  });
  log(user);
}
{
  // every проверяет все ли элементы true, если хоть один false вернет false
  const isAllUsersActive = users.every((user) => {
    return user.isActive;
  });
  log(isAllUsersActive);
  // some проверяет чтобы хотябы один был true
  const isSomeUsersActive = users.some((user) => {
    return user.isActive;
  });
  log(isSomeUsersActive);
}

const storage = {
  currentId: 1,
  _items: [
    { id: 0, label: "item-1" },
    { id: 1, label: "item-2" },
  ],
  get items() {
    return this._items;
  },
  add(item) {
    // this._items.push(item);
    this._items = [...this._items, { id: ++this.currentId, ...item }];
  },
  update(id, label) {
    //   const item = this._items.find(item => item.id === id);

    //   if (item) {
    //       item.label = label;
    //   }
    this._items = this._items.map((item) => {
      return item.id === id ? { ...item, label } : item;
    });
  },
  delete(id) {
    this._items = this._items.filter((item) => item.id !== id);
  },
};
console.log(storage.items);
storage.add({ label: "item-3" });
storage.update(1, "updated label");
storage.delete(0);
console.log(storage.items);

// *
// * reduce
//

const numbers1 = [1, 2, 3, 4, 5];

const total = numbers1.reduce((accumulator, number) => {
  return accumulator + number;
}, 0);

// [1,2,3,4,5]

// accumulator = 0
// number = 1
// return 1

// accumulator = 1
// number = 2
// return 3

// accumulator = 3
// number = 3
// return 6

// accumulator = 6
// number = 4
// return 10

// accumulator = 10
// number = 5
// return 15

console.log(total);

const salary = {
  mango: 100,
  poly: 50,
  ajax: 150,
};

const totalSalary = Object.values(salary).reduce((acc, value) => {
  return acc + value;
}, 0);

console.log(totalSalary);

const totalQuantity = products.reduce((acc, product) => {
  return acc + product.quantity;
}, 0);
console.log(totalQuantity);

const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

const tags = tweets.reduce((acc, tweet) => {
  acc.push(...tweet.tags);

  return acc;
}, []);
console.log(tags);
