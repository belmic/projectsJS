function processData(input) {

   var data = transformData(input);
   var res;
   var n = 0;

    for(i = 0; i < data[0]; i++){

         n += 2;

        if(Array.isArray(data[n])){

            res = eval( data[n].join("^") );
        }else{
            res = 1;
        }

        if (res>0) {
            console.log('First');
        }else{
            console.log('Second');
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
