function hideDiv(element_id) {
    //alert(element_id);
    var thisdiv = document.getElementById(element_id);
    var modal = document.getElementById("delete");
    modal.style.display = "block";


    // Get the button that opens the modal
    var ysbtn = document.getElementById("ys");
    var nobtn = document.getElementById("no");



    ysbtn.onclick = function () {
        thisdiv.style.display = "none";
        modal.style.display = "none";
    }

// When the user clicks on <span> (x), close the modal
    nobtn.onclick = function () {
        modal.style.display = "none";
    }


}

function showPost(){
    window.location.href="./post.html";
}