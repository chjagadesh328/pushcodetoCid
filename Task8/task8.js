var form=document.getElementById('addForm');
var itemList= document.getElementById('items');

//form submit event
form.addEventListener( 'submit', addItem);


//Delete Event
itemList.addEventListener('click' ,removeItem );

//<-------------submit Event --> function addItem()
function addItem(e){
 e.preventDefault();
//console.log(1);
//GET INPUT VALUE -------
var newInputItem= document.getElementById('item').value;


//create new li Element
var li=document.createElement('li');
//add Class
li.className='list-group-item';
//create a Text Node and append it to input li element 
li.appendChild(document.createTextNode(newInputItem));

//create del button element 
var deleteBtn =document.createElement('button');
///Add class to del btn
deleteBtn.className='btn btn-danger btn-sm float-right delete';

//Append text Node
deleteBtn.appendChild(document.createTextNode( "X"));
//Append button to li
li.appendChild(deleteBtn);

//Append li to list 
itemList.appendChild(li); 
}

//----------------Function removeItem() -->> Function ------------------------------
function removeItem(e){
if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure')){
        var li=e.target.parentElement;
        itemList.removeChild(li);
    }
}
}