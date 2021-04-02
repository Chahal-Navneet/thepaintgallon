"use strict";

showClock();

setInterval("showClock()",1000);


/* function for  displaying the countdown clock */
function showClock() {
	
	var thisDay = new Date();
	var localDate = thisDay.toLocaleDateString();
	var localtime = thisDay.toLocaleTimeString();
	
/* calculate days */
	var saleDate = sale(thisDay);
	saleDate.setHours(21, 0, 0);	
	var days = (saleDate - thisDay)/(1000*60*60*24);
	var hrs = (days - Math.floor(days))*24;
	var mins = (hrs - Math.floor(hrs))*60;
	var secs = (mins - Math.floor(mins))*60;
	document.getElementById("dLeft").textContent = Math.floor(days);
	document.getElementById("hLeft").textContent = Math.floor(hrs);
	document.getElementById("mLeft").textContent = Math.floor(mins);
	document.getElementById("sLeft").textContent = Math.floor(secs);
}

function sale(currentDate) {
   var cYear = currentDate.getFullYear();
   var sDate = new Date("January 20, 2021");
   sDate.setFullYear(cYear);
   if ((sDate - currentDate) < 0) sDate.setFullYear(cYear + 1);
   return sDate;
}
