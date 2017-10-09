/*
var arr = [-4, 3,-9, 0, 4, 1];

function positive (nmb){
  return nmb > 0;
}

function negative (nmb){
  return nmb < 0;
}

function zero (nmb) {
  return nmb == 0;
}

var positive = arr.filter(positive);
var negative = arr.filter(negative);
var zero = arr.filter(zero);

var result = [positive.length/arr.length, negative.length/arr.length, zero.length/arr.length];


console.log(result);
*/

//MIN MAX of array
/*
    var arr = [1,2,3,4,5]

    var max = Math.max.apply(null,arr);
    var min = Math.min.apply(null,arr);
    var sum = eval( arr.join('+') );

    console.log(sum-max,sum-min);

var n = 4;
var ar = [1,2,3,3]

function birthdayCakeCandles(n, ar) {
    // Complete this function
    var max = Math.max.apply(null,ar);

    function lookMax(value){
        return value === max;
    }

    var res = ar.filter(lookMax);
    var response = res.length;

    return res;
}

console.log(birthdayCakeCandles(n,ar));
*/
/*
function count_crat(str, crat)
{
	var count = 0;
	if ( (str !=0) && (crat !=0) && (str >= crat) )
	{
		for(n=crat; n<=str; n++) {
			if(n%crat == 0) {
				count++;
			}
		}
	}
	return count;
};

var str = 40; // обрабатываемое число
var crat = 4; // число, с которым должна быть кратность

// подсчет, сколько раз делится число на кратность
strcount = count_crat(str, crat);

// определение кратности
if ( (str/strcount) == crat ){
	alert(str + ' кратно ' + crat);
} else
	alert(str + ' не кратно ' + crat);

  else if (true) {

  }

  //Tower breakers
  */

  var c = [1,2,3];
  var b = [1,1,1];

  var d =[];
  
  var d = c - b;

  console.log(d);
