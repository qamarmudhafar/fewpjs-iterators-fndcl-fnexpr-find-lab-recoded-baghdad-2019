const testVar = {}

function testFunc() {
  return "hi";
}

function superbowlWin(record){
  let winResult=record.find(obj=> obj.result==="W");
  if (winResult!==undefined) return winResult.year;
  else return undefined;
   
}