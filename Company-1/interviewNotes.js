//ARRAY METHODLARI

/* 1- reduce methodu nedir? Kullanımı ve örnek bir uygulaması yazınız.
- Bir dizi üzerinde döngü yapmak ve bu dizinin her öğesini bir araya getirerek tek bir değer döndürmek için kullanılır.
- Bu method, bir işlevi belirli bir dizi elemanına uygular ve sonuç olarak tek bir değer üretir. 
- Özetle, dizi elemanlarını birleştirerek veya bir işlem uygulayarak tek bir sonuç elde etmek için kullanılır.
*/

// Örnek: Dizi elemanlarını toplamak için reduce methodunu kullanma
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15

--------------------------------------------------------------------------------------------------------------------

/* 2- map ve filter methodları arasındaki farklar nelerdir?
- map() methodu, bir dizi üzerinde döngü yaparak her elemana aynı işlemi uygular ve yeni bir dizi döndürür.
- filter() methodu ise, bir dizi üzerinde döngü yaparak belirli bir koşulu sağlayan elemanları seçer ve yeni bir dizi döndürür.
*/

// Örnek: map() ve filter() methodlarını kullanarak bir dizi elemanlarını işleme tabi tutma
const numbers = [1, 2, 3, 4, 5];

// map() methodu
const doubledNumbers = numbers.map((number) => {
  return number * 2;
});

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// filter() methodu
const evenNumbers = numbers.filter((number) => {
  return number % 2 === 0;
});

console.log(evenNumbers); // Output: [2, 4]

--------------------------------------------------------------------------------------------------------------------

/* 3- find() methodu nedir ne işe yarar?
- find() methodu, belirli bir koşulu sağlayan ilk elemanı döndürür.
- Eğer koşulu sağlayan eleman yoksa undefined döner.
*/

// Örnek: find() methodunu kullanarak bir dizi içinde belirli bir elemanı bulma
const numbers = [1, 2, 3, 4, 5];

const foundNumber = numbers.find((number) => {
  return number > 3;
});

console.log(foundNumber); // Output: 4

--------------------------------------------------------------------------------------------------------------------

/* 4- with() methodu nedir ne işe yarar?
- with() methodu, belirli bir nesne üzerinde işlem yapmak için kullanılır.
- Bu method, bir nesne içindeki özelliklere ve metotlara doğrudan erişim sağlar.
- with() methodu modern JavaScript'te kullanılmamaktadır ve güvenlik riskleri nedeniyle önerilmemektedir.
*/

// Örnek: with() methodunu kullanarak bir nesne üzerinde işlem yapma
const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

with (person) {
    console.log(name); // Output: John
    console.log(age); // Output: 30
    console.log(city); // Output: New York
    }

--------------------------------------------------------------------------------------------------------------------

/* 5- some() methodu nedir ne işe yarar?
- some() methodu, belirli bir koşulu sağlayan en az bir elemanın olup olmadığını kontrol eder.
- Eğer koşulu sağlayan eleman varsa true, yoksa false döner.
*/

// Örnek: some() methodunu kullanarak bir dizi içinde belirli bir koşulu sağlayan elemanın olup olmadığını kontrol etme
const numbers = [1, 2, 3, 4, 5];

const hasEvenNumber = numbers.some((number) => {
    return number % 2 === 0;
    }
);

console.log(hasEvenNumber); // Output: true

--------------------------------------------------------------------------------------------------------------------

/* 6- useCallbak hooku nedir ne işe yarar?
- useCallback hooku, bir fonksiyonu ve bağımlılıklarını önbelleğe almak için kullanılır.
- Bu sayede, her render işlemi sırasında aynı fonksiyonun tekrar oluşturulmasını önler ve performansı artırır.
*/

// Örnek: useCallback hookunu kullanarak bir fonksiyonu önbelleğe alma
import React, { useState, useCallback } from 'react';

const App = () => {
    const [count, setCount] = useState(0);
    
    const handleClick = useCallback(() => {
        setCount(count + 1);
    }, [count]);
    
    return (
        <div>
        <p>{count}</p>
        <button onClick={handleClick}>Increment</button>
        </div>
    );
    }

export default App;

--------------------------------------------------------------------------------------------------------------------

/* 7- useMemo hooku nedir ne işe yarar?
- useMemo hooku, bir değeri önbelleğe almak ve gerektiğinde yeniden hesaplamak için kullanılır.
- Bu sayede, tekrar hesaplanması gerekmeyen değerlerin tekrar oluşturulmasını önler ve performansı artırır.
*/

// Örnek: useMemo hookunu kullanarak bir değeri önbelleğe alma
import React, { useState, useMemo } from 'react';

const App = () => {
    const [count, setCount] = useState(0);
    
    const doubleCount = useMemo(() => {
        return count * 2;
    }, [count]);
    
    return (
        <div>
        <p>{doubleCount}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
    }

export default App;

--------------------------------------------------------------------------------------------------------------------

/* 8- useRef hooku nedir ne işe yarar?
- useRef hooku, bir DOM öğesine veya bir değere referans oluşturmak için kullanılır.
- Bu sayede, DOM öğelerine erişim sağlanabilir veya bir değeri saklayabiliriz.
*/

// Örnek: useRef hookunu kullanarak bir input alanına odaklanma
import React, { useRef } from 'react';

const App = () => {
    const inputRef = useRef();
    
    const handleClick = () => {
        inputRef.current.focus();
    };
    
    return (
        <div>
        <input ref={inputRef} type="text" />
        <button onClick={handleClick}>Focus</button>
        </div>
    );
    }

export default App;

--------------------------------------------------------------------------------------------------------------------

/* 9- useMome ve useCallback hooku arasındaki fark nedir?
- useMemo hooku, bir değeri önbelleğe almak ve gerektiğinde yeniden hesaplamak için kullanılır.
- useCallback hooku ise, bir fonksiyonu ve bağımlılıklarını önbelleğe almak için kullanılır.
*/

// Örnek: useMemo ve useCallback hooklarının kullanım farkı
import React, { useState, useMemo, useCallback } from 'react';

const App = () => {
    const [count, setCount] = useState(0);
    
    const doubleCount = useMemo(() => {
        return count * 2;
    }, [count]);
    
    const handleClick = useCallback(() => {
        setCount(count + 1);
    }, [count]);
    
    return (
        <div>
        <p>{doubleCount}</p>
        <button onClick={handleClick}>Increment</button>
        </div>
    );
    }

export default App;

**********************************************************************************


