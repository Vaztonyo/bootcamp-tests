function findItemsOver20(list, limit){
  var itemOver20 = [];
  var price1 = 0;

  list.forEach(function(item){
    if (item.price > limit){
      itemOver20.push(item);
    }
  });
  console.log(itemOver20);
   return itemOver20;
};

var itemList = [
    {name : 'apples', price : 10},
    {name : 'pears', price : 37},
    {name : 'bananas', price : 27},
    {name : 'apples', price : 3},
];

findItemsOver20(itemList, 20);
