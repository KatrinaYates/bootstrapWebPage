
meme = false;
function myFunction() {
    if (meme == false) {
        $("#motto").css("display","none");
        $("#mottoPic").css("display","block");
        meme = true;
    } else {
        $("#mottoPic").css("display","none");
        $("#motto").css("display","block");
        meme = false;
    }
}

 