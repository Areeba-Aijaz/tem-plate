var card = document.getElementById("card");

function openRegister(){
    card.style.transform = "rotateY(-180deg)";

}
function openLogin(){
    card.style.transform = "rotateY(0deg)";
    
}
// [12:42 PM, 7/19/2022] SMIT Miss Ayesha  💻: Example 1:
// Input: light = [2,1,3,5,4]
// Output: 3
// Explanation: All bulbs turned on, are blue at the moment 1, 2 and 4.
// [12:42 PM, 7/19/2022] SMIT Miss Ayesha  💻: Example 2:
// Input: light = [3,2,4,1,5]
// Output: 2
// Explanation: All bulbs turned on, are blue at the moment 3, and 4 (index-0).
// [12:42 PM, 7/19/2022] SMIT Miss Ayesha  💻: Example 4:
// Input: light = [2,1,4,3,6,5]
// Output: 3
// [12:42 PM, 7/19/2022] SMIT Miss Ayesha  💻: Example 3:
// Input: light = [4,1,2,3]
// Output: 1
// Explanation: All bulbs turned on, are blue at the moment 3 (index-0).
// Bulb 4th changes to blue at the moment 3.
// [12:42 PM, 7/19/2022] SMIT Miss Ayesha  💻: Example 5:
// Input: light = [1,2,3,4,5,6]
// Output: 6
// [12:42 PM, 7/19/2022] SMIT Miss Ayesha  💻: image belong to example 1 only