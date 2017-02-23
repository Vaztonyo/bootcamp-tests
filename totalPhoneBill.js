var totalPhoneBill = function(phone){
  var splitString = phone.split(",");
  var costOfCall = 2.75;
  var costOfSms = 0.65;
  var call = [];
  var sms = [];

  for (var i = 0; i < splitString.length; i++){
    if (splitString[i] === "call"){
    call.push(splitString[i]);
    }
    else if (splitString[i] === "sms"){
      sms.push(splitString[i]);
    }
  }
return call.length * costOfCall + sms.length * costOfSms;
};
