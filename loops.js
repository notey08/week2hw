let i = 0; //A
while (i < 100){
    i++;
    if (i % 2 !=0){
        console.log(i);
    }
}

let y = 100; //B
while (y > 0){
    y -= 3;
    console.log(y);
}

for (i = 1; i <= 100; i+=2){ //C
    console.log(i);
}

for (i = 0; i <= 100; i+=1){ //D
 
    if((i % 3 === 0) && (i % 5 === 0)){
        // switch(i){
        // case i = "Hello World":
        console.log("HelloWorld");
    } else if(i % 3 === 0){
            // switch(i){
            // var i = "Hello": 
            console.log ("Hello");
    } else if (i % 5 === 0){
            // switch(i){
            // case i = "World":
            console.log("World");
    } else {
        console.log(i);
        }
}
 