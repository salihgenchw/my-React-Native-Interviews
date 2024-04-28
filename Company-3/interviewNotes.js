/* 1- let ve var arasındaki farklar nelerdir?
- let ve var, JavaScript'te değişken tanımlamak için kullanılan anahtar kelimelerdir.
- var, eski JavaScript sürümlerinde kullanılan bir değişken tanımlama anahtar kelimesidir.
- let ise, ECMAScript 6 ile gelen ve blok kapsamı olan bir değişken tanımlama anahtar kelimesidir.
- var, fonksiyon kapsamı olan bir değişken tanımlar ve hoisting özelliğine sahiptir.
- let ise, blok kapsamı olan bir değişken tanımlar ve hoisting özelliğine sahip değildir.
*/
//
// // Örnek: let ve var anahtar kelimelerinin farkı
var x = 10;
let y = 20;

if (true) {
  var x = 30;
  let y = 40;

  console.log(x); // Output: 30
  console.log(y); // Output: 40
}

console.log(x); // Output: 30

console.log(y); // Output: 20

// --------------------------------------------------------------------------------------------------------------------

/* 2- React Native threads nedir?
- React Native, iki farklı thread kullanır:
    1. UI Thread: Kullanıcı arayüzü ile ilgili işlemleri gerçekleştirir.
    2. JS Thread: JavaScript kodlarını çalıştırır.
- Bu iki thread arasında iletişim, React Native Bridge aracılığıyla gerçekleşir.
- UI Thread, JS Thread'den gelen mesajları alır ve ekrana yansıtır.
- JS Thread, UI Thread'i engellememek için asenkron işlemler yapar.
*/

// --------------------------------------------------------------------------------------------------------------------

/* 3- spread operatörü (spread operator) nedir?

- Spread operatörü (spread operator), bir dizi veya nesnenin elemanlarını ayrıştırarak başka bir diziye veya nesneye eklemek için kullanılır.
- Dizi için üç nokta (…) ve nesne için üç nokta ve süslü parantezler ({…}) kullanılır.
*/

// Örnek: Spread operatörünün kullanımı

// Dizi
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];
console.log(newNumbers); // [1, 2, 3, 4, 5]

// Nesne
const person = { name: "John", age: 30 };
const newPerson = { ...person, city: "New York" };
console.log(newPerson); // { name: 'John', age: 30, city: 'New York' }

// --------------------------------------------------------------------------------------------------------------------

/* 4- HTML'de data attribute'ları nedir ve ne işe yarar?

- Data attribute'ları, HTML öğelerine özel veri değerleri eklemek için kullanılan özelliklerdir.
- Data attribute'ları, "data-" ön eki ile başlar ve ardından özel bir isim alır.
- Bu özellikler, JavaScript tarafından kolayca erişilebilir ve kullanılabilir.
*/

// Örnek: Data attribute'larının kullanımı

// HTML
<div id="person" data-name="John" data-age="30"></div>;
// JavaScript
const personDiv = document.getElementById("person");
const name = personDiv.dataset.name;
const age = personDiv.dataset.age;
console.log(name); // John
console.log(age); // 30

// --------------------------------------------------------------------------------------------------------------------

/* 5- Clousure Scope nedir?

- Clousure Scope, bir iç fonksiyonun dış fonksiyonun değişkenlerine erişebilmesi durumudur.
- Bir iç fonksiyon, dış fonksiyonun değişkenlerini kendi kapsamında saklayabilir ve kullanabilir.
- Bu sayede, dış fonksiyonun değişkenleri, iç fonksiyon tarafından kullanılabilir ve korunabilir.
*/

// Örnek: Clousure Scope kullanımı

function outerFunction() {
  const outerVariable = "I am from outer function";

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

const innerFunc = outerFunction();
innerFunc(); // Output: I am from outer function

// --------------------------------------------------------------------------------------------------------------------

/* 6- immediate function nedir?

- Immediate function, tanımlandığı anda çalışan ve bir kez çalışan bir JavaScript fonksiyonudur.
- Immediate function, genellikle bir kez çalıştırılacak kod blokları için kullanılır.
- Immediate function, parantez içine alınarak tanımlanır ve hemen çalıştırılı
*/

// Örnek: Immediate function kullanımı

(function () {
  console.log("I am an immediate function");
})(); // Output: I am an immediate function

// --------------------------------------------------------------------------------------------------------------------

/* 7- Arrow fonksiyon nedir ne işe yarar?

- Arrow fonksiyon, kısa ve ok (=>) işareti ile tanımlanan bir JavaScript fonksiyonudur.
- Arrow fonksiyon, function anahtar kelimesi yerine => işaretini kullanır.
- Arrow fonksiyon, kendi kapsamına sahip olduğu için this bağlamını değiştirmez.
*/

// Örnek: Arrow fonksiyon kullanımı

const numbers = [1, 2, 3];

numbers.forEach((number) => console.log(number));

// --------------------------------------------------------------------------------------------------------------------

/* 8- Window ile document arasındaki farklar nelerdir?

- Window, bir tarayıcı penceresini temsil eden global bir JavaScript nesnesidir.
- Document, bir HTML belgesini temsil eden bir JavaScript nesnesidir.
- Window, tarayıcı penceresi ile ilgili işlemleri gerçekleştirir.
- Document, HTML belgesi ile ilgili işlemleri gerçekleştirir.
*/

// ********************************************************************************************************************
