function Savetolocalstorage(event){
    event.preventDefault();
    var name=event.target.username.value;
    var email=event.target.emailid.value;
    var phoneno=event.target.phoneno.value;
    const obj={
        name,
        email,
        phoneno
    }
    localStorage.setItem('userdetails',JSON.stringify(obj));
    showuserOnscreen(obj)
}
function showuserOnscreen(obj){
    const parentElem=document.getElementById('listof');
    const childreElem=document.createElement('li');
    childreElem.textContent=obj.name+'-'+obj.email+'-'+obj.phoneno;

    const deletebtn=document.createElement('input')
    deletebtn.type='button'
    deletebtn.value='Deleteexpense'

    deletebtn.onclick =() =>
    {
       localStorage.removeItem(obj)
       parentElem.removeChild(childreElem)
    }


    childreElem.appendChild(deletebtn);
    parentElem.appendChild(childreElem);


}