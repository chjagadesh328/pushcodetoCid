
//-------TRAVERSING THE DOM --------//
const ItemList =document.querySelector('#items');

// parentNode
// console.log(ItemList.parentNode.parentNode);
// ItemList.parentNode.style.backgroundColor='#5ea4a3';

// parentElement - parentElement and ParentNode are both gives the same o/p and also behaves similar and they can be used interchangable 
//    console.log(ItemList.parentElement);
//    ItemList.parentElement.style.backgroundColor='#5ea4a3';


// lastelementchild
// console.log(ItemList.lastElementChild);
// ItemList.lastElementChild.textContent='Hello 4';
// // lastchild
// console.log(ItemList.lastChild); //gives text


// // firstelementchild
// console.log(ItemList.firstElementChild);
// ItemList.firstElementChild.textContent='Hello 1';
// // firstchild
// console.log(ItemList.firstChild);//gives text


// nextsibling
// console.log(ItemList.nextSibling); //gives text
// // nextelementsibling
// console.log(ItemList.nextElementSibling); // if we add <span> after </ul> then it gives o/p as <span></span>

// // previoussibling
// console.log(ItemList.previousSibling);//gives text
// // previouselementsibling
// console.log(ItemList.previousElementSibling);
// ItemList.previousElementSibling.style.color='red';
// ItemList.previousElementSibling.style.fontFamily="Impact,Charcoal,sans-serif";

// createelement
var newDiv=document.createElement('div');
//add class
newDiv.className='newDiv';
//add id to div
newDiv.id='newDiv1';
// setAttribute
newDiv.setAttribute('title','Hello Div');
//console.log(newDiv);

// createtesxtnode
const newDivText=document.createTextNode('Hello new Div');
console.log(newDivText);
// appendchild  - to add text to new created div element
newDiv.appendChild(newDivText);
console.log(newDiv);

//-----TO INSERT INTO DOM----- //
const container=document.querySelector('header .col-md-6');
const h1=document.querySelector('header-title h1');
container.insertBefore(newDiv,h1);
