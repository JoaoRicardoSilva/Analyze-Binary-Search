# Analyze Binary Search
A Javascript Binary Search algorithm and analyze its performance using Big O Notation.

## How the algorithm works
1. Create a function that receive two arguments: and array with sorted numbers (`arr`) and the number that we want to find (`num`)
2. Define the start and the final index of arr
3. Loop while `ini <= f`
    * This condition will prevent an infinite loop if for some reason `ini` become bigger than `f`
    * Create `i` that will be always a number in the middle of `ini` and `f`
    * Then we have 3 options:
        * `num === arr[i]`
            * Stop the function and return the index
        * `num < arr[i]`
            * We need to analyse only the numbers on the left of `arr[i]`, therefore `ini` will be the same and `f` will be the immediate index below `i`
        * `num > arr[i]`
            * We need to analyse only the numbers on the right of `arr[i]`, therefore `f` will be the same and `ini` will be the immediate index above `i`

## Space and time complexity
### Space complexity O(1):
#### Explanation:
...Under construction...
### Time complexity: O logN)
#### Explanation:

|Number of items in `arr`|Number of times that loop occurred*|
|------------------------|----------------------------------|
|1|0|
|5|1|
|10|2|
|50|4|
|100|5|
|500|7|
|1000|8|
|5000|11|
|10000|12|
|50000|14|
|10000|15|

*Trying to find the last number of the array

![image](https://user-images.githubusercontent.com/62359670/123954046-d6b2c680-d99f-11eb-885b-dab25f6283f6.png)
