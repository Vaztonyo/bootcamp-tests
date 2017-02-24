function findItemsOver(list, limit){
  var itemOver25 = [];
  var price1 = 0;

  list.forEach(function(item){
    if (item.price > limit){
      itemOver25.push(item)
    }
  });
   return itemOver25;
};

var itemList = [
    {name : 'apples', price : 10},
    {name : 'pears', price : 37},
    {name : 'bananas', price : 27},
    {name : 'apples', price : 3},
];
