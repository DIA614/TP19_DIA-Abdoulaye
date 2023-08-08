const AA = document.querySelector(".AA");
const RR = document.querySelector(".RR");
const TT = document.querySelector(".TT");
const one = document.querySelector(".one");
const too = document.querySelector(".too");
const thre = document.querySelector(".thre");
const quatre = document.querySelector(".quatre");
const five = document.querySelector(".five");
const un = document.querySelector(".un");
const deux = document.querySelector(".deux");
const trois = document.querySelector(".trois");
const cinq = document.querySelector(".cinq");
const six = document.querySelector(".six");
const sept = document.querySelector(".sept")
const huit = document.querySelector(".huit");
const neuf = document.querySelector(".neuf");
const dix = document.querySelector(".dix")


one.addEventListener("click", () =>{
    RR.style.display = "flex";   
    AA.style.display = "none";
    TT.style.display = "none";
})

thre.addEventListener("click", () =>{
    AA.style.display = "none";
    TT.style.display = "flex";
   
    // console.log("fghjklkgg")
    RR.style.display = "none";
 })
 too.addEventListener("click", () =>{
    TT.style.display = "none";
    AA.style.display = "flex";
    RR.style.display = "none";
 })



    quatre.addEventListener("click" ,() =>{
        TT.style.display = "none";
        AA.style.display = "none";
        RR.style.display = "flex";
})
five.addEventListener("click" ,() =>{
    AA.style.display ="flex";
    TT.style.display ="none";
    RR.style.display ="none";
})
    un.addEventListener("click" ,() =>{
        TT.style.display = "none";
        AA.style.display = "none";
        RR.style.display = "flex";   
    })
    deux.addEventListener("click" ,() =>{
        AA.style.display = "none";
        RR.style.display = "none";
        TT.style.display = "flex";
    })
    trois.addEventListener("click" ,() =>{
        AA.style.display = "flex";
        RR.style.display = "none";
        TT.style.display = "none";
    })
    cinq.addEventListener("click" ,() =>{
        TT.style.display = "none";
        AA.style.display = "none";
        RR.style.display = "flex";   
    })
    six.addEventListener("click" ,() =>{
        AA.style.display = "none";
        RR.style.display = "none";
        TT.style.display = "flex";
    })
    sept.addEventListener("click" ,() =>{
        AA.style.display = "flex";
        RR.style.display = "none";
        TT.style.display = "none";
    })
    huit.addEventListener("click" ,() => {
        TT.style.display = "none";
        RR.style.display = "flex";
        AA.style.display = "none";
    })
    neuf.addEventListener("click" ,() =>{
        TT.style.display ="flex";
        AA.style.display ="none";
        RR.style.display ="none";
    })
    dix.addEventListener("click" ,()  =>{
        AA.style.display ="flex";
        RR.style.display ="none";
        TT.style.display ="none";
    })

    // partie validation
    function w3docs ()
    {
        var name = document.forms["RegForm"]["First Name"]; 
        if (name.value == "")                                  
    { 
        alert("Mettez votre nom."); 
        name.focus(); 
        return false; 
    }    

    }
         
    
     
 
   