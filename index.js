
const condition = ('qwe' || null) && (12 || undefined);
if (condition) {
   console.log('condition = ', condition) 
}

const condition1 = 0/0;
// if (condition1 === NaN) 
if(Number.isNaN(condition1)){
   console.log('condition = ', condition) 
}






