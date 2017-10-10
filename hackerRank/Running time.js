function processData(input) {
    //Enter your code here
    var data = transformData(input);
    var unSorted = {
         index: 0,
         value: 0
            };
    var shifts = 0;

    for(i = 0; i < data.length-1; i++){
        if (data[i]>data[i+1]){

            unSorted.index = i+1;
            unSorted.value = data[i+1];

            for(j = unSorted.index; j =>0; j--){ //2 1 0
                if(data[j-1] > unSorted.value){
                        data[j] = data[j-1];
                        shifts++;
                }else{
                      data[j] = unSorted.value;
                    break;
                }
              }
        }else{
      }
    }
      console.log(shifts);
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

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
