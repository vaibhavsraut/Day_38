function dayofmonth(){
    var day = parseInt(prompt("Enter the day of the month:"));
    var month = parseInt(prompt("Enter the month (1-12):"));

    if(month>=3 && month<=6){
        if(month == 3){
            if(day>=20){
                console.log(true);
            }
        }else if(month == 6){
            if(day<=20){
                console.log(true);
            }
        }else{
            console.log(true);
        }
    }else{
        console.log(false);
    }

}
dayofmonth();