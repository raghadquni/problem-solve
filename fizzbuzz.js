const fizzBuzz = (n) => {
    for(i = 1 ; i <= n ; i++) {

    if(i % 3 == 0 && i % 5 == 0) {
        console.log("fizzBuzz");
    } else if(i % 3 === 0) {
        console.log("fizz");
    } else if(i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
};


function isPalindrome(i)
  {
    const str = i.toLowerCase();
    let len = str.length - 1; // leangth of i
    for( let j = 0 ; j < len/2 ;j++)
    {
      let x = i[j] ; //forward character
      let y = i[len-j]; //backward character
      if( x != y) //if forward not match backward.
      {
        return false;
      }
    }
    return true;
     
  }