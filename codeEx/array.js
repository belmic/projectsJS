//Examples of array functions and commands
//1. Converting array from string to numbers

stringArray.map(Number);

//2. Sorting array of numbers from 1-100
numArray.sort(function(a, b)
{
    return a - b;
});
//From 100 - 1
numArray.sort(function(a, b)
{
    return b - a;
});

