let canvas=document.getElementById("canvas");
var ctx = canvas.getContext("2d");

canvas.width=400;
canvas.height=500;
ctx.fillStyle = "rgb(0,0,0)";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.strokeStyle="#EEEEEE"
function im1(){//structure
    ctx.lineWidth="10"
    //ctx.beginPath();
    
    ctx.moveTo(50,450);
    
    ctx.lineTo(250,450);
    
    ctx.stroke();
    ctx.lineWidth="6"
    ctx.moveTo(80,450);
    ctx.lineTo(80,100);
    ctx.stroke();
    ctx.lineTo(200,100);
    ctx.stroke();
    ctx.lineTo(200,130);
    ctx.stroke();
    

}

function im2(){//face
    
    ctx.lineWidth="3"
    ctx.moveTo(235,165);
    ctx.arc(200,165,35,0,Math.PI*2,false);
    ctx.stroke();
    im1();
    

}
function im3(){//line
    
    ctx.moveTo(200,200);
    ctx.lineTo(200,325);
    ctx.stroke();
    im2();
    
}

function im4(){//leftleg
    
    ctx.moveTo(200,325);
    ctx.lineTo(160,385);
    ctx.stroke();
    im3();
    
}
function im5(){//rightleg
    
    ctx.moveTo(200,325);
    ctx.lineTo(240,385);
    ctx.stroke();
    im4();
    
}

function im6(){//lefthand
    
    ctx.moveTo(200,252);
    ctx.lineTo(150,252);
    ctx.stroke();
    im5();
    
}

function im7(){
    
    ctx.moveTo(200,252);
    ctx.lineTo(250,252);
    ctx.stroke();
    im6();
    

}

function im8(){//eyes
    im7();
    ctx.lineWidth="1"
    //ctx.moveTo(200,155);
    //ctx.lineTo(185,155);
    ctx.moveTo(188,155);
    ctx.lineTo(193,160);
    ctx.stroke();
    ctx.moveTo(188,155);
    ctx.lineTo(183,150);
    ctx.stroke();
    ctx.moveTo(188,155);
    ctx.lineTo(193,150);
    ctx.stroke();
    ctx.moveTo(188,155);
    ctx.lineTo(183,160);
    ctx.stroke();

    //righteye
    ctx.moveTo(218,155);
    ctx.lineTo(223,160);
    ctx.stroke();
    ctx.moveTo(218,155);
    ctx.lineTo(213,150);
    ctx.stroke();
    ctx.moveTo(218,155);
    ctx.lineTo(223,150);
    ctx.stroke();
    ctx.moveTo(218,155);
    ctx.lineTo(213,160);
    ctx.stroke();
    
    //mouth
    ctx.lineWidth="0.5"
    ctx.moveTo(180,177);
    ctx.lineTo(220,177);
    ctx.stroke();

    //tongue
    
    ctx.lineWidth="1"
    ctx.moveTo(220,177);
    ctx.lineTo(215,185);
    
    ctx.stroke();
    ctx.moveTo(215,185);
    ctx.lineTo(210,177);
    ctx.stroke();
    
    

}



//words
var words=[
    "abruptly",
    "absurd",
    "abyss",
    "affix",
    "askew",
    "avenue",
    "awkward",
    "axiom",
    "azure",
    "bagpipes",
    "bandwagon",
    "banjo",
    "bayou",
    "beekeeper",
    "blitz",
    "blizzard",
    "boggle",
    "bookworm",
    "boxcar",
    "boxful",
    "buckaroo",
    "buffalo",
    "buffoon",
    "cobweb",
    "cockiness",
    "croquet",
    "crypt",
    "curacao",
    "cycle",
    "daiquiri",
    "dirndl",
    "disavow",
    "dizzying",
    "duplex",
    "dwarves",
    "embezzle",
    "equip",
    "espionage",
    "euouae",
    "exodus",
    "faking",
    "fishhook",
    "fixable",
    "fjord",
    "flapjack",
    "flopping",
    "fluffiness",
    "flyby"]

function randomwordind(){
    let ranwordind=Math.floor(Math.random()*(words.length))
    
    return ranwordind;
}
gamebox=document.getElementById("gamebox");
word_spaceul=document.createElement('ul');
gamebox.appendChild(word_spaceul);
let keys=document.querySelectorAll(".keys")//gets all the keys as an array
let rsnd=randomwordind()
let no_of_wrngclicks=0;
let no_of_crtclicks=0;
let userName=document.getElementById("username");
let remlives=document.querySelector(".lives");
let restart=document.querySelector(".playagain");
let restart2=document.querySelector(".playagain2");
let lay1=document.querySelector(".sec1")//useername screen
let lay2=document.querySelector(".sec2")//game screen
let lay3=document.querySelector(".sec3");//gameover
let gmover=document.querySelector("#gmover");
let finalScore=document.querySelector("#finalscore");
let gameover1=0;
let result=0;
let t0,t1;
let scoreval;
let bestscore=document.querySelector(".bestscore")
lay2.parentNode.removeChild(lay2)
//lay1.parentNode.removeChild(lay2)//Removes the game screen..username only will be there
lay3.parentNode.removeChild(lay3)
let layout=document.querySelector(".body")
let high_Scores=JSON.parse(localStorage.getItem("high_Scores")) || [];
restart.addEventListener("click",function (){
    window.location.reload();
})
restart2.addEventListener("click",function (){
    window.location.reload();
})
function time(ms){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,ms);
    })
}
function basicdisp(){
    for(let i=0;i<(words[rsnd].length);i++){
        letter_list=document.createElement("li")
        letter_list.setAttribute("class","indivletters")
        letter_list.textContent="_"
        word_spaceul.appendChild(letter_list);
        
    }
    im1();
    
    activatekeys();
    t0=performance.now();
}
let letters=document.getElementsByClassName("indivletters")


function activatekeys(){
    let pkeys=[]
    
    if(gameover1==1){
        document.addEventListener("keydown", (e)=>{
           
            for(let b=0;b<pkeys.length;b++){
                if(pkeys[b]===e.key){
                    return;
                }   
            }
            
            let key_selected=e.key.toUpperCase();
            pkeys.push(e.key)
            
            for(let i=0;i<26;i++){
                if(keys[i].getAttribute("data-key")===key_selected){
                    onclickevent(i);
                }
            }

    
    })
    }
    for(let i=0;i<keys.length;i++){
        keys[i].addEventListener("click",function kpo(){
            onclickevent(i);
            keys[i].removeEventListener("click",kpo)
        })
    }

}
function onclickevent(i){
    checkclick(i);
}
function checkclick(i){
    let key_pressed=keys[i].getAttribute("data-key");
    
    
   
    if(words[rsnd].includes(key_pressed.toLowerCase())){
        indexarr=[]
        for(let a=0;a<words[rsnd].length;a++){
            if(words[rsnd][a]==key_pressed.toLowerCase()){
                indexarr.push(a);
            }
        }
        correctclick(i,indexarr,key_pressed);
    }
    else{
        wrongclick(i);
    }
}
function correctclick(i,indexarr,key_pressed){
    
   
    keys[i].style.background="#6FD132";
    for(let x=0;x<indexarr.length;x++){
        letters[indexarr[x]].innerHTML=key_pressed;
        no_of_crtclicks++;
    }
    if(no_of_crtclicks==letters.length){
        t1=performance.now();
        result=1;
        appendscreen(result);
    }
    

}
function wrongclick(i){
    no_of_wrngclicks++
    let remaining_lives=7-no_of_wrngclicks;
    remlives.innerHTML=`Remaining Lives: ${remaining_lives}`
    canva_update(no_of_wrngclicks);
    keys[i].style.background="#DE2A33"
    keys[i].removeEventListener("click",function (){
        onclickevent(i);
    })
    checkgamelost(no_of_wrngclicks);
}
async function checkgamelost(no_of_wrngclicks){
    if(no_of_wrngclicks==7){
        
        await time(1300);
        appendscreen(result);
    }

    
}
async function canva_update(no_of_wrngclicks){
    switch(no_of_wrngclicks){
        case 1:
            im2()
            break;
        case 2:
            im3()
            break;
        case 3:
            im4()
            break;
        case 4:
            im5()
            break;
        case 5:
            im6()
            break;
        case 6:
            im7()
            break;        
        case 7:
            im8()
            
            break;       
        }
}

function readybtn(){
    gameover1=1;

    
    lay1.parentNode.removeChild(lay1);
    layout.appendChild(lay2);
    basicdisp();
}
function appendscreen(result){
    lay2.parentNode.removeChild(lay2);
    layout.appendChild(lay3)
    if(result==1){
        gmover.textContent="You WON";
        savehighscore();

    }
    if(result==0){
        gmover.textContent="You LOST"
        finalScore.textContent="0"
        disbestscore();
    }
}

function scoreupdate(){
    scoreval=10000-(no_of_wrngclicks)*100-(Math.floor((t1-t0)/1000)*30);
    finalScore.textContent=scoreval;
    return scoreval;
}
function savehighscore(){
    let data={
        Username:userName.value,
        Points: scoreupdate()
    }
    high_Scores.push(data);
    high_Scores.sort((a,b)=> b.Points-a.Points);
    high_Scores.splice(1);
    localStorage.setItem("high_Scores",JSON.stringify(high_Scores));
    disbestscore();

}
function disbestscore(){
    bestscore.textContent=`BEST SCORE : ${high_Scores.map(function(a) {return a.Points;})}`
}





