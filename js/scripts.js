var year = parseInt(prompt("Type in the year:"));

if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
	alert("It is a leap year!")
}
else{
	alert("It is not a leap year!")
}
