function sameFrequency(num1, num2){
  obj1 = {};
  obj2 = {};

  num1 = num1.toString();
  num2 = num2.toString();
  if (num1.length !== num2.length) {
      return false;
  }

  for (let i of num1) {
    obj1[i] = (obj1[i] || 0) + 1;
  }
  
  for (let i of num2) {
    obj2[i] = (obj2[i] || 0) + 1;
  }

  for(let key in obj1){
        if(obj1.hasOwnProperty(key)){
            if(obj1[key] !== obj2[key]){
                return false;
            }
        }
    }
    for(let key in obj2){
        if(obj2.hasOwnProperty(key)){
            if(obj2[key] !== obj1[key]){
                return false;
            }
        }
    }
    return true;

}

