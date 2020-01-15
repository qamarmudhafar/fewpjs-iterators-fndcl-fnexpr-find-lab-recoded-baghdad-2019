let record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
  //...
]

let superbowlWin=function(arr){
  let find=arr.find(function(w){
    return w.result==="W";
  })
  if(find===undefined){
    return "NO WINS"
  }
  else {
    return find.year;
  }
}

superbowlWin(record)