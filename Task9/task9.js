var filter=document.getElementById('filter');
var itemList= document.getElementById('items');
filter.addEventListener('keyup', filterItems);



var form=document.getElementById('addForm');

//form submit event
form.addEventListener( 'submit', addItem);


//Delete Event
itemList.addEventListener('click' ,removeItem );

//<-------------submit Event --> function addItem()
function addItem(e){
 e.preventDefault();

    const val1 = e.target.item.value;
    const val2 = e.target.description.value;
    const ele1 = document.createElement("li");
    ele1.textContent = val1;
    const ele2 = document.createElement("li");
    ele2.textContent = val2;
    ele1.style.listStyleType = "none";
    ele1.style.border = "1px solid #d4d4d4";
    ele1.style.padding = "15px";
    ele2.style.display = "inline-block";
    ele2.style.marginLeft = "5px";
    ele1.append(ele2);
    const edit = document.createElement("button");
    edit.textContent = "Edit";
    edit.style.float = "right";
    ele1.append(edit);
    const del = document.createElement("button");
    del.textContent = "X";
    del.classList.add("btn-danger", "btn-sm", "float-right", "delete");
    ele1.append(del);
    items.append(ele1);
  };


// //console.log(1);
// //GET INPUT VALUE -------
// var newInputItem= document.getElementById('item').value;


// //create new li Element
// var li=document.createElement('li');
// //add Class
// li.className='list-group-item';
// //create a Text Node and append it to input li element 
// li.appendChild(document.createTextNode(newInputItem));

// //create del button element 
// var deleteBtn =document.createElement('button');
// ///Add class to del btn
// deleteBtn.className='btn btn-danger btn-sm float-right delete';

// //Append text Node
// deleteBtn.appendChild(document.createTextNode( "X"));
// //Append button to li
// li.appendChild(deleteBtn);

// //Append li to list 
// itemList.appendChild(li); 
// }

//----------------Function removeItem() -->> Function ------------------------------
function removeItem(e){
if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure')){
        var li=e.target.parentElement;
        itemList.removeChild(li);
    }
}
}


function filterItems(e){
    //convert to lower text
    var text=e.target.value.toLowerCase();
     //get list
     var items =itemList.getElementsByTagName('li');
    //convert html collection to array node list
    Array.from(items).forEach(function(item){
        var itemName=item.firstChild.textContent;
        //compare the item name to the search box text
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display='block';
        }else {
            item.style.display='none';
        }
    });
}