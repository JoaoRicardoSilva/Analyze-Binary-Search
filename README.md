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

#### Notes:
* num  = number that we want to find
* We need to work only with the "original" array to conserve the right index

## Space and time complexity
### Space complexity O(1):
#### Explanation:
...Under construction...
### Time complexity: O(n)
#### Explanation:
...Under construction...
