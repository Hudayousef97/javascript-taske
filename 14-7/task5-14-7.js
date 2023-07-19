function makeStrings(arr){
    return arr.map(ele =>{ 
        if (ele.age >= 18){
            return `${ele.name} can go to The Matrix`;
        }
        else{
            return ` ${ele.name} is under age!!!` ;
        }
        
  })
        
  }
  console.log(makeStrings([
        {
           name: "Angelina Jolie",
           age: 80
       },
       {
           name: "Eric Jones",
           age: 2
       },
       {
           name: "Paris Hilton",
           age: 5
       },
       {
           name: "Kayne West",
           age: 16
       },
       {
           name: "Bob Ziroll",
           age: 100
       }
     ])); 