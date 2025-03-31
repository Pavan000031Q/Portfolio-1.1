const desc = ["Developer","Ui/Ux Designer","Freelancer","entrepreneur"];

let textIndex = 0;
let charIndex = 0;
const typingSpeed = 100; 
const pauseBetweenTexts = 2000; 

function type() {
    if (charIndex < desc[textIndex].length) {
        $("#desc").append(desc[textIndex].charAt(charIndex));
        charIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(deleteText, pauseBetweenTexts);
    }
}

function deleteText() {
    if (charIndex > 0) {
        $("#desc").html(desc[textIndex].substring(0,charIndex-1));
        charIndex--;
        setTimeout(deleteText, typingSpeed);
    } else {
        textIndex = (textIndex + 1); 
        if(textIndex==4){
            textIndex=0;
        }
        charIndex = 0;
        setTimeout(type, typingSpeed);
    }
}

window.onload = type;

$(".float-btn").on("click",function(){
    if($(".float-btn").is("#menu")){

        $(".float-btn").attr("id","opend")
        $(".side-menu").css({"padding":"20px","margin":"0px"})
        $(".float-btn").html(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
            </svg>`)
        $(".side-menu > div").show();
        $(".side-menu > div").css({"animation":" menu-width-come 0.5s forwards 0s 1 "})
        $(".side-menu").css({"animation":" menu-width-come 0.5s forwards 0s 1 "})
        $(".side-menu").css({"display":"flex"})
    }else{

        $(".float-btn").attr("id","menu")
        $(".side-menu").css({"padding":"0px","margin":"0px"})
        $(".side-menu").css({"animation":" menu-width-go 0.5s forwards 0s 1 "})
        setTimeout(function(){
            $(".side-menu > div").css({"opacity": "0"}); 
        }, 250);
        
        setTimeout(function(){
            $(".side-menu > div").hide(); 
            $(".side-menu").hide();
        }, 500); 

        $(".float-btn").html(
        `<svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
      </svg>`
        )

    }
});

