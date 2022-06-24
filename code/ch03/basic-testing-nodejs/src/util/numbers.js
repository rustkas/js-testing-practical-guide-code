function transformToNumber(value) {
  const result = Number(value);
  if(isNaN(result)) {
	throw Error(NaN);  
  }
  return result;
}

exports.transformToNumber = transformToNumber;
