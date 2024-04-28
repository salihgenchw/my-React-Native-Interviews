/* 1- react native depresentation="modal" özelliği nedir ne işe yarar?
- Depresentation="modal" özelliği, bir bileşenin modal olarak görüntülenmesini sağlar.
- Modal, kullanıcının bir işlem yapmadan önce başka bir işlem yapmasını engelleyen bir pencere türüdür.
- Modal pencere, ekranın ortasında görüntülenir ve kullanıcı modal pencere dışındaki alanlara tıkladığında kapatılır.
*/

// Örnek: Modal bileşenini kullanarak bir modal pencere oluşturma
import React, { useState } from "react";
import { Button, Modal, Text, View } from "react-native";

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <Button title="Open Modal" onPress={() => setModalVisible(true)} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View>
          <Text>Modal Content</Text>
          <Button title="Close Modal" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};

export default App;

// --------------------------------------------------------------------------------------------------------------------

/* 2- createRef hooku nedir ne işe yarar?
 - createRef hooku, bir bileşenin referansını oluşturmak için kullanılır.
 - Bu sayede, DOM öğelerine veya bileşenlere erişim sağlanabilir.
*/

// Örnek: createRef hookunu kullanarak bir DOM öğesine erişim sağlama

import React, { createRef, useEffect } from "react";
import { View } from "react-native";

const App = () => {
    const divRef = createRef();
    
    useEffect(() => {
        divRef.current.style.backgroundColor = "red";
    }, []);
    
    return <View ref={divRef} style={{ width: 100, height: 100 }} />;
    }

export default App;

// --------------------------------------------------------------------------------------------------------------------

/* 3- React Native threads nedir?
- React Native, iki farklı thread kullanır:
    1. UI Thread: Kullanıcı arayüzü ile ilgili işlemleri gerçekleştirir.
    2. JS Thread: JavaScript kodlarını çalıştırır.
- Bu iki thread arasında iletişim, React Native Bridge aracılığıyla gerçekleşir.
- UI Thread, JS Thread'den gelen mesajları alır ve ekrana yansıtır.
- JS Thread, UI Thread'i engellememek için asenkron işlemler yapar.
*/ 

// --------------------------------------------------------------------------------------------------------------------

/* 4- useRef hooku nedir ne işe yarar?
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

// --------------------------------------------------------------------------------------------------------------------

/* 5- useMemo ve useCallback hooku arasındaki fark nedir?
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
    
    const increment = useCallback(() => {
        setCount(count + 1);
    }, [count]);
    
    return (
        <div>
        <p>{doubleCount}</p>
        <button onClick={increment}>Increment</button>
        </div>
    );
    }

export default App;

// --------------------------------------------------------------------------------------------------------------------

/* 6- map() ve forEach() metodları arasındaki fark nedir?
- map() ve forEach() metodları, bir dizi üzerinde döngü oluşturmak için kullanılır.
- map() metodunun forEach() metodundan farkı, map() metodunun yeni bir dizi döndürmesidir.
- map() metodunu kullanarak, her eleman üzerinde işlem yapabilir ve yeni bir dizi oluşturabiliriz.
- forEach() metodunu kullanarak ise, her eleman üzerinde işlem yapabilir ancak yeni bir dizi oluşturamayız.
*/

// Örnek: map() ve forEach() metodlarının kullanım farkı

const numbers = [1, 2, 3, 4, 5];

// map() metodunu kullanarak her elemanın karesini almak
const squaredNumbers = numbers.map((number) => number * number);
console.log(squaredNumbers); // [1, 4, 9, 16, 25]

// forEach() metodunu kullanarak her elemanı ekrana yazdırmak
numbers.forEach((number) => console.log(number));

// --------------------------------------------------------------------------------------------------------------------

/* 7- spread operatörü (spread operator) nedir?

- Spread operatörü (spread operator), bir dizi veya nesnenin elemanlarını ayrıştırarak başka bir diziye veya nesneye eklemek için kullanılır.
- Dizi için üç nokta (…) ve nesne için üç nokta ve süslü parantezler ({…}) kullanılır.
*/

// Örnek: Spread operatörünün kullanımı

// Dizi
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];
console.log(newNumbers); // [1, 2, 3, 4, 5]

// Nesne
const person = { name: 'John', age: 30 };
const newPerson = { ...person, city: 'New York' };
console.log(newPerson); // { name: 'John', age: 30, city: 'New York' }

// --------------------------------------------------------------------------------------------------------------------

/* 8- Zustand nedir ve ne işe yarar?
- Zustand, React uygulamalarında global state yönetimi için kullanılan bir kütüphanedir.
- Zustand, React Context API ve hooks kullanılarak geliştirilmiştir.
- Zustand, global state yönetmek için kullanılan store'ları sağlar.
*/

// Örnek: Zustand kütüphanesini kullanarak global state yönetimi

import create from 'zustand';

const useStore = create((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
}));

const App = () => {
    const count = useStore((state) => state.count);
    const increment = useStore((state) => state.increment);
    const decrement = useStore((state) => state.decrement);
    
    return (
        <div>
        <p>{count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        </div>
    );
    }

export default App;

// --------------------------------------------------------------------------------------------------------------------

/* 9- react çalışma mantığı hakkında kısa bilgi verir misiniz?
- React, kullanıcı arayüzü oluşturmak için kullanılan bir JavaScript kütüphanesidir.
- React, bileşen tabanlı bir yapıya sahiptir ve her bileşen kendi iç durumunu yönetir.
- React, Virtual DOM (Sanal DOM) yapısı kullanarak performansı artırır.
- React, JSX (JavaScript XML) söz dizimini kullanarak HTML ve JavaScript'i bir arada yazmayı sağlar.
- React, props ve state kullanarak bileşenler arasında veri iletişimi sağlar.
*/

// ********************************************************************************************************************









