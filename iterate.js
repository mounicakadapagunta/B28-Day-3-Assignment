var json = [{
    "id" : "1", 
    "msg": "hi",
    "tid":"2013-05-05 23:35",
    "fromWho": "test1@email.se"
},
{
    "id":"2", 
    "msg" :"there",
    "tid":"2013-05-05 23:45",
    "fromWho": "test2@email.se"
}];

//for loop
for(var i = 0; i < json.length; i++) {
    var obj = json[i];
    console.log(obj.msg);
}


//for each loop
json.forEach((item) => {
    console.log('ID: ' + item.id);
    console.log('MSG: ' + item.msg);
    console.log('TID: ' + item.tid);
    console.log('FROMWHO: ' + item.fromWho);
})


//for in loop
for (var data in json) {
    console.log(json)
 }


//foreach
 for (var element of json) {
    console.log(element.tid);
  }