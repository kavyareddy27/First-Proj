var array = [1, 2, 3, 4, 5, 6];  
var sum = 0; 
var product = 1; 
 
for (var i = 0; i < array.length; i += 1)   
   {  
    sum += array[i];  
    product *= array[i];  
    }  
console.log('Sum : '+sum + ' Product :  ' +product);   