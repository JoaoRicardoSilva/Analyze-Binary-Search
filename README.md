# Analyze Binary Search
A Javascript Binary Search algorithm and analyze its performance using Big O Notation.

## How the algorithm works
1. Find the value of the item in the middle
2. If:
   * value === num*
      * We found it!
   * value < num
      * Consider that the array is now only the first half!
         * If you pass here more than once consider that the array is now only the first half of the part of the array that you already considered!
      * Start over again from point one with the "new" array!
   * value > num
      * Consider that the array is now only the second half!
         * If you pass here more than once consider that the array is now only the second half of the part of the array that you already considered!
      * Start over again from point one with the "new" array!

#### Notes:
* num  = number that we want to find
* We need to work only with the "original" array to conserve the right index

## Space and time complexity
### Space complexity O(1):
#### Explanation:

   	const biSearch = (num, arr) => { -> 2
    let i = Math.floor((arr.length - 1) / 2); -> 1
    let half = i; -> 1
		
		  const recursive = (index) => {
          if (num === arr[index]) {
          } else if (num < arr[index]) {
              half = Math.ceil(half / 2);
              i = i - half;
              recursive(i);
          } else if (num > arr[index]) {
              half = Math.ceil(half / 2);
              i = i + half;
              // console.log(`> half: ${half} i: ${i}`);
              recursive(i);
          } else {
              console.log("Something is wrong!");
          }
      };
      recursive(i);
			
		};
		biSearch(numTest, arrTest);

S = 3 = 1
### Time complexity: O(n)
#### Explanation:
    let i = Math.floor((arr.length - 1) / 2); -> 1
    let half = i;  -> 1

    const recursive = (index) => { -> 1
        if (num === arr[index]) { -> 1
            console.log(`Found in index ${index}`); -> 1
        } else if (num < arr[index]) { -> 1
            half = Math.ceil(half / 2); -> 1
            i = i - half; -> 1
            recursive(i); -> n
        } else if (num > arr[index]) { -> 1
            half = Math.ceil(half / 2); -> 1
            i = i + half; -> 1
            recursive(i); -> n
        } else { -> 1
            console.log("Something is wrong!"); -> 1
        }
    };
    recursive(i); -> 1
		
T = 12 + 2 * n = n
