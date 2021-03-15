module.exports = function check(str, bracketsConfig) {

  let arr = [];
  for(let i = 0; i < bracketsConfig.length; i++)
  {
    arr[i] = bracketsConfig[i].join('');
  }

  let count = 0;
  while(count != arr.length)
  {
    count = 0;
    for(let j = 0; j < arr.length; )
    {
      if(str.indexOf(arr[j]) != -1)
      {
        count = 0;
        str = str.replace(arr[j], '');
      }
      else
      {
        j++; count++;
      }
    }
  }

  if (str.trim() == '')
  {
      return true;
  }
  return false;
}
