export function transformToNumber(value) {
  //console.log(`typeof = ${typeof value}, value = ${value}`);
  const result = Number(value);
  if(isNaN(result)) {
	throw Error(NaN);  
  }
  return result;
}

