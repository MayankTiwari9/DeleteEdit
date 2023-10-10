var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

//Form submit events
form.addEventListener('submit', addItem);

//Delete events
itemList.addEventListener('click', removeItem);

//Add item
function addItem(e){
    e.preventDefault();

    //get Input value
    var newItem = document.getElementById('item');

    //Create new li elements
    var li = document.createElement('li');
    //Add class
    li.className = 'list-group-item';
    // add text node with input value
    li.appendChild(document.createTextNode(newItem.value));

    //Create delete button element
    var deleteBtn = document.createElement('button');

    //Add classesto delete button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    //Append text Node
    deleteBtn.appendChild(document.createTextNode('X'));

    var editbtn = document.createElement('button');
    editbtn.className = 'btn btn-primary btn-sm float-right edit';
    editbtn.appendChild(document.createTextNode('Edit'));

    li.appendChild(editbtn);
    //Append btn to li
    li.appendChild(deleteBtn);

    itemList.appendChild(li);
}

//Remove Item
function removeItem(e){
     if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure!')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
     }
}