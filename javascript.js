function isLeapYear(){
    let year = parseInt(prompt("Enter the year:"));

    if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){
        console.log("Leap Year");
    }else {
        console.log("Not Leap Year");
    }

}
isLeapYear();