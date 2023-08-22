//your JS code here. If required.
 let colorOptions = document.getElementById("colorSelect");
        const button = document.querySelector('input[type="button"]');
       
        button.addEventListener("click", ()=>{
            colorOptions.removeChild(colorOptions.options[colorOptions.selectedIndex]);
        })