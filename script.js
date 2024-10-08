function myfun(c)
{
    document.getElementById(c).innerHTML="x";

}

function reset()
{
    let c=document.getElementsByClassName('cell');
    for(let i=0;i<=8;i++)
    {
        c[i].innerHTML="";
    }
}