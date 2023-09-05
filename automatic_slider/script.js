let index = 1;
let val=1;

    

let start = setInterval(() => {
    runslider(index);
    puch(val);
    
    function puch(n){
        runslider(index+=n);
    }
    function runslider(n){
        let i;
        let slider = document.getElementsByClassName("slider");
        if(n>slider.length){
            index=1;
        }
        if(n<1){
            index=slider.length;
        }

        for(i=0; i<slider.length;i++){
            slider[i].style.display="none";
        }
        slider[index-1].style.display="block";
    }





}, 5000);