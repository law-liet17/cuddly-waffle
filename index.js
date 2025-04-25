var n = document.querySelector(".toggle");
var isOriginal = true; // flag to track background state

n.addEventListener("click", function() {
    if (isOriginal) {
        document.body.style.backgroundImage = "url('nit2.jpg')";
    } else {
        document.body.style.backgroundImage = "url('day.jpg')";
    }
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";
    
    isOriginal = !isOriginal; // flip the flag
});

