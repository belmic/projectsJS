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
