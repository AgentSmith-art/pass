var day;
switch(new Date().getDay())
{
case 0:
    day = "Sunday";
    break;
case 1:
    day = "Monday";
    break;
case 2:
    day = "Tuesday";
    break;
case 3:
    day = "Wednesday";
    break;
case 4:
    day = "Thursday";
    break;
case 5:
    day = "Friday";
    break;
case 6:
    day = "Saturday";
                                        
}

var  remainingDays = 5 - new Date().getDay();
if(new Date().getDay() === 0 || new Date().getDay() === 1)
{
    document.getElementById("day").innerHTML = " It's Weekend !";
}
else
{
document.getElementById("day").innerHTML = "Today is " + day + ", " + remainingDays + " more days to go for weekend";
}


setInterval(myTimer, 1000);


function myTimer()
{
    var d = new Date();
    var t = d.toLocaleTimeString();
    document.getElementById("time").innerHTML =  t + " 	&#9830 TIME IS'NT REAL";

}