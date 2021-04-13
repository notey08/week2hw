var isHotOutside = true;
var isWeekDay  = true;
var hasMoneyInPocket = true;

var costOfMilk = 3;
var moneyInWallet = 20;
var thirstLevel = 9;

var shouldBuyIcecream = isHotOutside && hasMoneyInPocket;   
var willGoSwimming = isHotOutside && !isWeekDay;
var isAGoodDay = isHotOutside && !isWeekDay && moneyInWallet;
var willBuyMilk = isHotOutside && thirstLevel >= 3 && moneyInWallet >= (2*costOfMilk);

if (shouldBuyIcecream == true){
    console.log("true")
} else {
    console.log("false")
}

if (willGoSwimming == true){
    console.log("true")
} else {
    console.log("false")
}

if (isAGoodDay == true){
    console.log("true")
} else {
    console.log("false")
}

if (willBuyMilk == true){
    console.log("true")
} else {
    console.log("false")
}


/*if (isHotOutside == true && hasMoneyInPocket == true) {
    shouldBuyIcecream ==true;
    console.log("Its very hot, buy some ice cream.")
} 

if (isHotOutside =true && isWeekDay == false){
    willGoSwimming == true;
    console.log("Its hot outside so swimming")
}

if (isHotOutside == true && isWeekDay ==false && moneyInWallet == true){
    isAGoodDay == true;
}

if (isHotOutside == true && thirstLevel >= 3 && moneyInWallet >= (2*costOfMilk)){
    willBuyMilk == true;
}
*/
