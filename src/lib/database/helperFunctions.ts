import { IBroker } from "./models";

interface ObjType {
  [name: string]: number
}

export const areasCounter = (brokers:(IBroker[] | undefined)) => {

    let myArr = new Array<string>();
    
    if(brokers) {

      for (const property in brokers) {
          myArr.push(brokers[property]["עיר מגורים"])
        } 
            
      
      // Function to count name occurrences in the array
    }

    function countNames(array:string[]) {
      // Create an object to store name counts
      let nameCounts:ObjType = {};
    
      // Iterate through the array of names
      array.forEach(name => {
        // Update the name count in the nameCounts object
        nameCounts[name]= (nameCounts[name] || 0) + 1;
      });
      console.log(nameCounts)
      return nameCounts;
    }
    // Call the function with your array
    return Object.entries(countNames(myArr))    
    
}


export const areasArray = (brokers:IBroker[]) => {

    let myArr = new Array<string>();
    
    for (const property in brokers) {
        myArr.push(brokers[property]["עיר מגורים"])
      } 
          
    
    // Function to count name occurrences in the array
    function countNames(array:string[]) {
      // Create an object to store name counts
      let nameCounts = new Array();
    
      // Iterate through the array of names
      array.forEach(name => {
        // Update the name count in the nameCounts object
        if(nameCounts.includes(name)) return
        else {
            nameCounts.push(name)
        }
      });
    
      return nameCounts;
    }
    
    // Call the function with your array
    return countNames(myArr)
}
