let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = ""
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == "DEL"){
    
             let str = string.toString();
             string = str.substring(0, str.length - 1);
       document.querySelector('input').value = string;
        }
        
        else{
        console.log(e.target)
        console.log(string.length);
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
        }
        
    })
})

