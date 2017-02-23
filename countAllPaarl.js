var countAllPaarl = function(regNumbers){
var allPaarl = regNumbers.split(",");
var onlyPaarl = [];

for (var i = 0; i < allPaarl.length; i++){
  if (allPaarl[i].startsWith('CJ')){
    onlyPaarl.push(allPaarl[i]);
    }
  }
return onlyPaarl.length;
};
