/**SIT725 Programming Practice 1
 * Maxie Cletus Tepaiayan 
 */


//ensures that DOM is fully loaded before attempting to access elements 
document.addEventListener("DOMContentLoaded", function(){
    //eventLister is added to replace onclick attribute in html code
    document.getElementById("btn").addEventListener("click", changeText)
    //fuction to be executed from fuction call
    function changeText(){
    var textArray = ["Applied", "Software", "Engineering", "SIT725",""]
    var number = getRandomNumberBetween(0, textArray.length-1)//function call with two arguments 
    console.log("index", number)
    document.getElementById("heading").innerHTML=textArray[number];

}
function getRandomNumberBetween(min, max){ //function with two parameters 
    return Math.floor(Math.random()*(max-min)+min);

}

});