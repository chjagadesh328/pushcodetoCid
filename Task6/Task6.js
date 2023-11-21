
// //Make the 2nd item have green background color - Using query selector

// var ele2=document.querySelector('.list-group-item:nth-child(2)');
// console.log(items);
// ele2.style.backgroundColor='green';

// //Make the 3rd item invisible
// var ele3 = document.querySelector('.list-group-item:nth-child(3)')
// //ele3.style.visibility='hidden';

//QuerySelectorALL
//Using QuerySelectorALL change the font color to green for 2nd item in the item list
const item2=document.querySelectorAll('.list-group-item:nth-child(2)');
console.log(item2);
item2[0].style.color='green';

//Choose all the odd elements and make their background green using QuerySelectorALL
const odd=document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor='#4FD1A6';
}