var isFromBellville = function(regNumber){
  var isRegBellville = regNumber.startsWith('CY');
  return isRegBellville;
}

// isFromBellville('CY 523519')
// isFromBellville('CA 678519')
