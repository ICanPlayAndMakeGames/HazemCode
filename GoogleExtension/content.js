let alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

console.log("Starting Code finder")

function MakeCode() {
   let text = 'PL$';
    let extra = '';
    let count = 0
    while (count < 7) {
       
       let Random1 =  Math.floor(Math.random()*26);
       let Random2 =  Math.floor(Math.random()*3);
       // print(Random1)
       let Random3 = alpha[Random1];
     //   console.log(Random1)
        if (Random2 == 2) {
          Random3 = Random3.toUpperCase();
       // print(Random1)
            } 
    extra = extra + Random3;
        count++
    }    
    return 'PL$'+extra+'$';
} 

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


console.log("whyyyy")
    
let This = 1
let Running = true


window.addEventListener('keydown',(event) =>{

if (Running == false){
    console.log("Finished")
    return
}

    
    //console.log(event)
if (event.key == "d"){
    Running = false

    }
})

function Do(){
    if (Running == true){
    let code = MakeCode();

    document.getElementsByName("code")[0].value = code
    document.querySelectorAll('input[type=submit]')[0].click()
   setTimeout(Do,10525)
    }
    return
}
Do()