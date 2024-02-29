const humberger = document.querySelector('.hamburger');
const  mobile = document.getElementById('mobile')
let isvisiable = false;
function display(){
    mobile.style.display = "block";
    if (isvisiable==false){
        mobile.style.display = 'block';
        isvisiable= true;
        
    }else{
    mobile.style.display = "none";
    isvisiable= false;
    }
    
}


humberger.addEventListener('click',display);