module.exports = function check(str, bracketsConfig) {
  let arr = [];
  for(let i = 0; i < bracketsConfig.length; i++)
  {
    arr[i] = bracketsConfig[i].join('');
  }

  
  for(let j = 0; j < arr.length;j++)
  {
    while(str.indexOf(arr[j]) != -1)
    {
      str = str.replace(arr[j], '');
    }
  }

  if (str.trim() == '')
  {
      return true;
  }
  return false;
}
