///////////////////////////////////// problem 1 (fizzBuzz) /////////////////////////////////////
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


///////////////////////////////////// problem 2 (isPalindrome) /////////////////////////////////////

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


///////////////////////////////////// problem 3 (who is Online?) /////////////////////////////////////
/*
const friends = [{
    username: 'David',
    status: 'online',
    lastActivity: 10
  }, {
    username: 'Lucy', 
    status: 'offline',
    lastActivity: 22
  }, {
    username: 'Bob', 
    status: 'online',
    lastActivity: 104
  }]

  const whosOnline = (friends) => {
    let status = {};
    let online = [];
    let offline = [];
    let away = [];
    friends.forEach((item, i) => {
      if (item.status == "online" && item.lastActivity <= 10) {
        online.push(item.username);
        status.online = online;
      } else if (item.status == "offline") {
        offline.push(item.username);
        status.offline = offline;
      } else {
        away.push(item.username);
        status.away = away;
      }
    });
   return status;
  }
*/
///////////////////////////////////// problem 4 (makeNewString *slice) /////////////////////////////////////
/* 
  problem 4:
  Write a JavaScript program to create a new string from a given string taking 
  the first 3 characters and the last 3 characters of a string and adding them together. 
  The string length must be 3 or more, if not, the original string is returned. */

const makeNewString = (str) => {
  if(str.length <= 3) {
  return str;
 } else {
  return(str.slice(0 , 3) + str.slice(-3))
 }
} // 50%


///////////////////////////////////// problem 5 /////////////////////////////////////
