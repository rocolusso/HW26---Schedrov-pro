'use strict';

/*

Сделайте функцию, каждый вызов который будет генерировать случайные числа от 1 до 100,
но так, чтобы они не повторялись, пока не будут перебраны все числа из этого промежутка.
Решите задачу через замыкания - в замыкании должен хранится массив чисел,
которые уже были сгенерированы функцией.

 */



const randomGenerator = () => {

    const arr = [];

    const numAdd = () => {

        const random = Math.floor(Math.random() * 100 + 1);
         if (!arr.includes(random)){
           arr.push(random);
         }

         return arr;
    }

    for (let i = 0; arr.length < 100 ; i++ ){

        numAdd();
    }
    return arr;
    // return arr.sort((a, b) => a - b); /// С сортировкой
}

console.log(randomGenerator());
