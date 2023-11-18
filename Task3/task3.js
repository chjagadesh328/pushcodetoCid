

//Make it Solid border down the  title header

var header=document.getElementById('main-header');
header.style.borderBottom='solid 3px #000';


// loop through list items group and make it bold and make font color in green !
var main=document.getElementsByClassName('list-group-item');
for(let i=0;i<main.length;i++)
{
  main[i].style.fontWeight='bold';
  main[i].style.color='green';

}