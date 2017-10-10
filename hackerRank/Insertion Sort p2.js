function processData(input) {
    //Enter your code here
    var data = transformData(input);
    var res = {
        index: [],
        value: []
    };
    var result;

    for(i = 0; i < data[1].length; i++){
        if (data[1][i]>data[1][i+1]){


            for(j=i+1; j =>0; j--){
                if(data[1][j-1] > data[1][i]){
                        data[1][j] = data[1][j-1];
                //result = data[1].join(" ");
                }else{
                      data[1][j] = data[1][i];
                    break;
                }

            console.log(data[1]);
            //res.index.push(i+1);
            //res.value.push(data[1][i+1]);
        }
        }else{
            console.log(data[1]);
        }
    }
    //console.log(res);
    //for (k = 0; k < res.index.length; k++){

      //  for(j=res.index[k]; j => 0; j--){
      //      if(data[1][j-1] > res.value[k]){
      //          data[1][j] = data[1][j-1];
      //          result = data[1].join(" ");
      //          console.log(result);
      //      }else{
      //          data[1][j] = res.value[k];
      //          result = data[1].join(" ");
      //          console.log(result);
      //          break;
      //      }

    //}
  //}
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
