// Function For Page 1 - Multiply By 250 For Vacation Days Price
function parseUserData() {
var userData = document.getElementById("form1").value;
var res = "Your Vacation Will Cost Roughly:" + " $" + userData * 250;
document.getElementById("res1").innerHTML = res + "<br>" + "Based On $250 Per Day";
}
