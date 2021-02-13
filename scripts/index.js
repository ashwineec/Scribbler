function showSignUp() {

// Get the modal
    var modal = document.getElementById("signUp");

// Get the button that opens the modal
    var btn = document.getElementById("sign_up");

// Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
    btn.onclick = function () {
        modal.style.display = "block";
    }

// When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

// When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}



function showSignIn() {

// Get the modal
    var modal = document.getElementById("signIn");

// Get the button that opens the modal
    var btn = document.getElementById("sign_in");

// Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close_signin")[0];

// When the user clicks on the button, open the modal
    btn.onclick = function () {
        modal.style.display = "block";
    }

// When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

// When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}


function showCreatePost() {

// Get the modal
    var modal = document.getElementById("createPost");

// Get the button that opens the modal
    var btn = document.getElementById("create_post");

// Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close_createpost")[0];

// When the user clicks on the button, open the modal
    btn.onclick = function () {
        modal.style.display = "block";
    }

// When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

// When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}



function changeToSignUp() {

    var modal = document.getElementById("signIn");
    modal.style.display = "none";

    var modal1 = document.getElementById("signUp");
    modal1.style.display = "block";
}


function showAllPosts(){
    window.location.href="./html/postslist.html";
}