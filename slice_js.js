var first =  (array, n) => {
    if (array == null) 
    return void 0;
  if (n == null) 
    return array[0];
  if (n < 0)
    return [];
  return array.slice(0, n);
};
console.log(first([3,5,6,7,8,9,0,1,2],6));