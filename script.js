// STEP 4
$.ajax({
url: "https://api.adviceslip.com/advice",
type: "get",
dataType: "json",
success: function(result){
    document.getElementById("adviceP").innerHTML = result.slip.advice;
    console.log(result)
}
});