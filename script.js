function firstNonRepeatedChar(str) {
 // Write your code here
	// Create a Map to store character frequencies
    const charCount = new Map();
    
    // First pass: Count frequency of each character
    for (let char of str) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }
    
    // Second pass: Find first character with count of 1
    for (let char of str) {
        if (charCount.get(char) === 1) {
            return char;
        }
    }
    
    // If no non-repeating character is found, return null
    return null;
	
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
