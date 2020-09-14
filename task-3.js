const findBestEmployee = function (employees) {
    'use strict';
    // Write code under this line
    const keys = Object.keys(employees);
    const value = [];
    let bestEmployee = '';
    if (keys.length !== 0) {
    for (const key of keys) {
    value.push(employees[key]);
    bestEmployee = keys[value.indexOf(Math.max(...value))];
    }
    }
    return bestEmployee;
  };
  
  // Объекты и ожидаемый результат
  const developers = {
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }; 
  //console.log(findBestEmployee(developers)); 
  // 'lorence'
  
  const supports = {
    poly: 12,
    mango: 17,
    ajax: 4,
  }; 
  //console.log(findBestEmployee(supports)); 
  // 'mango'
  
  const sellers = {
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }
  //console.log(findBestEmployee(sellers)); 
  // 'lux' 



//let result = 0;
//let name = '';
//const usersKeys = Object.keys(users);
//for (key of usersKeys) {
//if(users[key] > result) {
//result = users[key];
//name = key;
//}
 // return name;
//}
//};