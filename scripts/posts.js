var likeCounter=0;

function editContent(){
    //alert("ss");
    var el=document.getElementById('head');


    el.style.border= "2px solid pink";
    el.contentEditable = true;

    var el1=document.getElementById('para');


    el1.style.border= "2px solid pink";
    el1.contentEditable = true;

    var edBtn= document.getElementById('editbutton');
    edBtn.style.display="none";

    var svBtn = document.getElementById('savebutton');
    svBtn.style.display="block";

}

function saveContent(){
    var edBtn= document.getElementById('editbutton');
    edBtn.style.display="block";

    var svBtn = document.getElementById('savebutton');
    svBtn.style.display="none";

    var el=document.getElementById('head');


    el.style.border= "none";
    el.contentEditable = false;

    var el1=document.getElementById('para');


    el1.style.border= "none";
    el1.contentEditable = false;
}

function likeCount() {
    likeCounter=likeCounter+1;


    var updateTxt='<div class="likebtn"><button class="pink" onClick="javascript:likeCount()">'+
           ' Liked <i class="fa fa-thumbs-up" aria-hidden="true"></i> </button> </div><p></p>' +
        likeCounter + " person likes this!</p>";

    document.getElementById('likeDiv').innerHTML=updateTxt;


}

function addComment(){
    document.getElementById('comments').style.display="block";
    var cmt=document.getElementById('cmts').value;
    var newCmt='<p class="cmtList">' + cmt + '</p>';
    document.getElementById('comments').innerHTML+=newCmt;


}