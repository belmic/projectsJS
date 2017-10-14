function minimumAbsoluteDifference(n, arr) {
    // This function return minimum difference between elements in array
    
    function diff(A) {
          return A.slice(1).map(function(n, i) { return n - A[i]; });
    }

    var sArray = arr.sort(function(a, b) {return a - b; });

    var diffArray = diff(sArray);

    var minDiff = Math.min.apply(Math, diffArray);

    return minDiff;


}
