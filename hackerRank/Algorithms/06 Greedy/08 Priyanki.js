function processData(input) {
    //Enter your code here
    var data = transformData(input);

    function diff(A) {
          return A.slice(1).map(function(n, i) { return n - A[i]; });
    }

    var sArray = data.sort(function(a, b) {return a - b; });

    var diffArray = diff(sArray);

    //console.log(diffArray);
    var roubles = 1;
    var cumWeight = 0;
    for (let i = 0; i < diffArray.length; i++){
        if((cumWeight + diffArray[i]) < 5) {
            cumWeight += diffArray[i];
        }else{
            roubles++;
            cumWeight = 0;
        }
    }
    console.log(roubles);
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

    return(res[1]);
}
