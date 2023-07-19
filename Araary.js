let persons = [
    {
        sno : 1,
        name : 'jayakrishna',
        age : 22,
     },
     {
        sno : 2,
        name : 'srinivas',
        age : 25,
     },
     {
        sno : 3,
        name : 'thurupathi',
        age : 24,
     },
     {
        sno : 4,
        name : 'rajesh',
        age : 24,
     }
   ]
//delete an object from arry
   let snoToRemove = persons[0].sno
   for(let i=0; i<persons.length; i++){
    if(persons[i].sno == persons[0].sno){
        persons.splice(i , 1);
       
    }
   }
   console.log(persons)
     //    adding a key and deleting a key in arrray of objects

// console.log(persons);

// persons[0].location = "hyderabd";
// // console.log(persons)

// delete persons[0].location
// // console.log(persons)

// persons[0].gender = "male"
// // console.log(persons)

// persons[1].gender = "female";
// // console.log(persons)

// persons[3].gender = "male"
// // console.log(persons)

// delete persons[3].gender
// // console.log(persons)

// //edit the key 
// persons[0].name = "harissh jayraj";
// // console.log(persons)

// persons[1].name = "thirupathi swamy"
// // console.log(persons)

// persons[2].name = "bhargav chaitnaya";
// persons[2].age = 25
// // console.log(persons)

// persons[3].name = "rayapudi sai";
// persons[3].age = 35
// // console.log(persons)

// //inserting a new object into the array

// persons.push({
//     sno : 5,
//     name : "jayakrishna nare",
//     gender : "male"
// })
// console.log(persons)

// persons.pop();
// console.log(persons)

// persons.shift()
// console.log(persons)


// persons.unshift({
//     sno : 1,
//     name : "srinivasulu",
//     gender : "male"
// });
// console.log(persons)

// persons.unshift({
//     sno : 0,
//     name : "gopi suresh",
//     gender : "male"
// });
// console.log(persons)


// //insert an object in between two objcets


// const newData = {
//     sno : 0.1,
//     name : "rajesh",
//     age : 24

// }
// persons.splice(0, 0, newData);
// console.log(persons)

// persons.splice(4, 0, newData)
// console.log(persons)

// persons.splice(4, 2, newData)
// console.log(persons)

// adding key to the array of objects
// persons[0].exepereince = "6 onths";
// console.log(persons);

// persons[1].exepeeince = "2 years"
// console.log(persons)

// persons[2].exepeeince = "1 yrear"
// console.log(persons)

// persons[2].company = "culinda";
// console.log(persons)

   //delete the key from the object

// delete persons[1].sno;
// console.log(persons)
//

      // edit the key 

// persons[1].sno = "3";
// console.log(persons);

// persons[3].name = "rithik roshan";
// console.log(persons[3])

      //inserting an object into an array

// persons.push({
//    no : 22,
//    name : 'salman',
//    employee : true
// });
// console.log(persons);

// persons.push({
//    name : "prabhas",
//    proffession : "actor",
//    loction : "hyderbad",
//    movie : "salar"
// });
// console.log(persons);

      //adding an object in first

// const InesertArray = {
//    name : "vamsi madanabeti",
//    age : 23,
//    location : "kotha kaluba"
// }

// persons.splice(0, 0, InesertArray);
// console.log(persons);

     //add a new objet  in between two objects

// let middleArray = {
//    no : 3,
//    name : "thalari rajesh",
//    proffession : "jr.software engineer",
//    location : "hitech city hyd"
// }
// persons.splice(3 , 0, middleArray);
// console.log(persons)

      //add a new key to the all the objects 

// persons.unshift('name : jay');
// console.log(persons)


     //add a new key-value to the all the objects

// for(let i = 0; i<persons.length; i++){
//    persons[i].city = "hyderabad"
// };
// console.log(persons)


     //delete a key value from all the objects

// for(let i=0; i<persons.length; i++){
//    delete persons[i].city;
//      }
// console.log(persons)

     //add a key value to a specific obbbject

// persons[2].martialStatus = "un-married"
// console.log(persons)
      

      //delete the object from the array
    //   let snoToRemove = 3;

    //   for (let i = 0; i < persons.length; i++) {
    //     if (persons[i].sno === snoToRemove) {
    //       persons.splice(i, 1);
    //       break;       // Exit the loop after removing the object
    //     }
    //   }
      
    //   console.log(persons);


      // let iremsRemoved = 25;

      // for(let i=0; i<persons.length; i++){
      //    if(persons[i].age === iremsRemoved){
      //       persons.splice(i, 1)
      //       break;
      //    }
      // }
      // console.log(persons)
       

      //deleting the all the objects from the array

      // for(let i=0; i<persons.length; i++){
      //    for(let key in persons[i]){
      //       delete persons[i][key];
      //    }
      // }
      // console.log(persons)
     
      // deleteing the specific object from the arry 

    //   keyDelete = "sno"
    //   valueDelete = 1

    //   const newArry = persons.filter((item) => item[keyDelete] !== valueDelete);
    //   console.log(newArry)
