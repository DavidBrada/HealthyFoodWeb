let currentSlide = 1;
ShowSlide(currentSlide);

function ChangeSlide(){
    if(currentSlide == 2){
        currentSlide--;
    }
    else{
        currentSlide++;
    }
    ShowSlide(currentSlide);
}

function ShowSlide(currentSlide){

    if(currentSlide == 1){
        document.getElementById(2).style.display = "none";
    }
    else if(currentSlide == 2){
        document.getElementById(1).style.display = "none";
    }

    document.getElementById(currentSlide).style.display = "block";
}
