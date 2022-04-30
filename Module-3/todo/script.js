let inputTag=document.querySelector('input');
let ulTag=document.querySelector('ul');

inputTag.addEventListener('keydown',function(e)
{
    let key=e.key;
    // The e object contains a value named key from which we are accessing the key pressed
    if(key=='Enter')
    {
        let data=inputTag.value;
        inputTag.value="";
        let liTag=document.createElement('li');
        liTag.innerText=data;
        ulTag.appendChild(liTag);
    }
})