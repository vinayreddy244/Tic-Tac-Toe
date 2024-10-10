let currentplayer='o';
let checkgame="working";
let c=[true,true,true,true,true,true,true,true,true];


function myfun(num)
{
    if(checkgame=="working"&& c[num]==true)
        {
            if(currentplayer=="x")
            {
                document.getElementById('cell'+num).innerHTML='o';
                currentplayer='o';
                c[num]=false;
            }
            else
            {
                document.getElementById('cell'+num).innerHTML='x';
                currentplayer='x';
                c[num]=false;
            }
            checkwin();
        }
}

function reset()
{
    window.location="index.html";
}

function checkwin()
{
    let a=document.getElementById('cell0').innerHTML;
    let b=document.getElementById('cell1').innerHTML;
    let c=document.getElementById('cell2').innerHTML;

    let d=document.getElementById('cell3').innerHTML;
    let e=document.getElementById('cell4').innerHTML;
    let f=document.getElementById('cell5').innerHTML;

    let g=document.getElementById('cell6').innerHTML;
    let h=document.getElementById('cell7').innerHTML;
    let i=document.getElementById('cell8').innerHTML;



    if(currentplayer==a&&currentplayer==b&&currentplayer==c)
    {
        document.getElementById('status').innerHTML=currentplayer+" "+"wins";
        checkgame="notworking";
    }
    else if(currentplayer==d&&currentplayer==e&&currentplayer==f)
    {
        document.getElementById('status').innerHTML=currentplayer+" "+ "wins";
        checkgame="notworking";
    }
    else if(currentplayer==g&&currentplayer==h&&currentplayer==i)
    {
        document.getElementById('status').innerHTML=currentplayer+" "+ "wins";
        checkgame="notworking";
    }
    else if(currentplayer==a&&currentplayer==d&&currentplayer==g)
    {
        document.getElementById('status').innerHTML=currentplayer+" "+ "wins";
        checkgame="notworking";
    }
    else if(currentplayer==b&&currentplayer==e&&currentplayer==h)
    {
        document.getElementById('status').innerHTML=currentplayer+" "+ "wins";
        checkgame="notworking";
    }
    else if(currentplayer==c&&currentplayer==f&&currentplayer==i)
    {
        document.getElementById('status').innerHTML=currentplayer+" "+ "wins";
        checkgame="notworking";
    }
    else if(currentplayer==a&&currentplayer==e&&currentplayer==i)
    {
        document.getElementById('status').innerHTML=currentplayer+ "wins";
        checkgame="notworking";
    }
    else if(currentplayer==c&&currentplayer==e&&currentplayer==g)
    {
        document.getElementById('status').innerHTML=currentplayer+" "+ "wins";
        checkgame="notworking";
    }
    else
    {
        if (a && b && c && d && e && f && g && h && i) {
            document.getElementById('status').innerHTML = "It's a draw!";
            checkgame = "notworking";
        }
    }


}