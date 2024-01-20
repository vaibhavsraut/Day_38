function minmax(){
    let arr=[];
    for(let i=0;i<5;i++){
        arr.push(Math.floor(Math.random() * 900)+100);
    }
    let minimum = arr[0];
    let maximum = arr[0];

    for(let i=1;i<arr.length;i++){
        if(arr[i]<minimum){
            minimum=arr[i];
        }
    }
    for(let i=1;i<arr.length;i++){
        if(arr[i]>maximum){
            maximum=arr[i];
        }
    }

    console.log("Random Values: ", arr);
    console.log("Minimum: ", minimum);
    console.log("Maximum: ", maximum);

}
minmax();