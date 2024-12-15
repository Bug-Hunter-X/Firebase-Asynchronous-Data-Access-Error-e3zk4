# Firebase Asynchronous Data Access Error

This repository demonstrates a common error encountered when working with Firebase's asynchronous nature.  The code attempts to access a property from a Firebase document snapshot before the data has fully loaded, resulting in an undefined or null error. The solution shows how to properly handle asynchronous operations using promises or async/await.

## Bug Description
The `bug.js` file showcases the problem. It retrieves data from Firebase but attempts to use the data before it's fully received. This leads to an error since the data might still be undefined. 

## Solution
The `bugSolution.js` file provides a corrected approach. It uses `.then()` to ensure the code waits for the data to be fetched successfully before trying to access properties.