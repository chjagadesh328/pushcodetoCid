
//And try editing it with getelementsbyclassname 
 var main=document.getElementsByClassName('list-group-item');
main[3].style.backgroundColor='green';
for(let i=0;i<main.length;i++)
{
  main[i].style.fontWeight='bold';
}
//if we try by .getElementsByClassName('list-group-item'); t will not be able to apply
//for the list element 5 which is added without class name


//then by getelementbytagname
var li=document.getElementsByTagName('li');

for(let i=0;i<li.length;i++)
{
  li[i].style.fontWeight='bold';
}
li[4].style.backgroundColor='red';
li[4].style.padding='30px';
li[4].style.color='white';
li[4].style.fontFamily='courier';



