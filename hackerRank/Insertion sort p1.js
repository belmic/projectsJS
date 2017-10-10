/*
Given a sorted list with an unsorted number  in the rightmost cell, can you write some simple code to insert  into the array so that it remains sorted?

Print the array every time a value is shifted in the array until the array is fully sorted. The goal of this challenge is to follow the correct order of insertion sort.

Guideline: You can copy the value of  to a variable and consider its cell "empty". Since this leaves an extra cell empty on the right, you can shift everything over until  can be inserted. This will create a duplicate of each value, but when you reach the right spot, you can replace it with .
*/
//INPUT
/*
5
2 4 6 8 3
*/
function processData(input) {
    //Enter your code here

    var data = transformData(input);
    var res = {
        index: 0,
        value: 0
    };
    var result;

    for(i = 0; i < data[1].length; i++){
        if (data[1][i]>data[1][i+1]){
            res.index = i+1;
            res.value = data[1][i+1];
        }else{

        }
    }

    for(j=res.index; j => 0; j--){
        if(data[1][j-1] > res.value){
            data[1][j] = data[1][j-1];
            result = data[1].join(" ");
            console.log(result);
        }else{
            data[1][j] = res.value;
            result = data[1].join(" ");
            console.log(result);
            break;
        }

    }
}
function transformData(_data){
    // function transform data to multi-dimensial array;

    var str = _data.split('\n');
    var strInArray = [];
    var res = [];

    for (i = 0; i<str.length; i++){

        if(str[i].includes(" ")){

            strInArray = str[i].split(" ");

            res[i] = strInArray.map(Number);

           }else{

            res[i] = parseInt(str[i]);
           }
    }

    return(res);

}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
