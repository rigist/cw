// В этой Ката вам нужно разработать простой класс маршрутизации для веб-фреймворка.

// Маршрутизатор должен принимать привязки для данного URL-адреса, метода http и действия.

// Затем, когда приходит запрос с привязанным URL-адресом и методом, он должен возвращать результат действия.

// Пример использования:

// let router = new Router();
// router.bind("/hello", "GET", function () {
//   return "hello world";
// });

// router.runRequest("/hello", "GET"); // returns 'hello world';
// При запросе несуществующего маршрута маршрутизатор должен вернуть:

// 'Error 404: Not Found'

//---------------------------------
class Router {
  constructor() {
    this.obj = {};
  }

  bind(adress, method, result) {
    let key = adress + method;

    this.obj[key] = result;

    console.log(this.obj);
  }

  runRequest(adress, method) {
    if (this.obj.hasOwnProperty(adress + method)) {
      return this.obj[adress + method]();
    }
    return "Error 404: Not Found";
  }
}

let router = new Router();

router.bind("/hello", "GET", function () {
  return "hello world";
});

router.bind("/about", "GET", function () {
  return "ABOUT";
});

console.log(router.runRequest("/hello", "GET")); // returns 'hello world';

console.log(router.runRequest("/about", "GET"));

console.log(router.runRequest("/ttt", "GET"));

// let router = new Router();
// router.bind("/hello", "GET", function () {
//   return "hello world";
// });

// router.runRequest("/hello", "GET"); // returns 'hello world';

// //'Error 404: Not Found'
