# Analyze Binary Search
A Javascript Binary Search algorithm and analyze its performance using Big O Notation.

* How the algorithm works
* Space and time complexity
	* Space complexity O(1):
		* Explanation:
	* Time complexity: O(logN)
		* Explanation:
* Binary Search vs Linear Search
	* Space complexity
	* Time complexity

## How the algorithm works
1. Create a function that receive two arguments: an array with sorted numbers (`arr`) and the number that we want to find (`num`)
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
### Space complexity O(1)
Independent of the number of items in the arr, the number of varibles is always the same.

`i` is define in the loop, therefore, in the end of with loop is cleared.

#### Explanation:
|Number of items in `arr`|Number of variables created|
|-|-|
|1|3|
|5|3|
|10|3|
|50|3|
|100|3|
|500|3|
|1000|3|
|5000|3|
|10000|3|
|50000|3|
|100000|3|

![image](https://user-images.githubusercontent.com/62359670/123965756-ac1b3a80-d9ac-11eb-9bee-c6e580b4c189.png)

### Time complexity O(logN)
As the `arr` gets bigger, but for low values, the number of loops grows quickly, but after a certain point, even adding thousands of items, the number of loops increases very little or not at all.
#### Explanation:

|Number of items in `arr`|Number of times that loop occurred*|
|-|-|
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
|100000|15|

*Trying to find the last number of the array

![image](https://user-images.githubusercontent.com/62359670/123954046-d6b2c680-d99f-11eb-885b-dab25f6283f6.png)

## Binary Search vs Linear Search
### Space complexity
|Binary Search|Linear Search|
|-|-|
|O(1)|O(1)|

### Time complexity
|Binary Search|Linear Search|
|-|-|
|O(logN)|O(N)|

|Number of items in `arr`|nº of loops in Binary Search|nº of loops in Linear Search|
|-|-|-|
|1|0|0|
|5|1|4|
|10|2|9|
|50|4|49|
|100|5|99|
|500|7|499|
|1000|8|999|
|5000|11|4999|
|10000|12|9999|
|50000|14|49999|
|100000|15|999999|

















