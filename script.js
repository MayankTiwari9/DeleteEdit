var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');


//Form submit events
form.addEventListener('submit', addItem);

//Delete events
itemList.addEventListener('click', removeItem);

//filter events
filter.addEventListener('keyup', filterItems);
//Add item
function addItem(e){
    e.preventDefault();

    //get Input value
    var newItem = document.getElementById('item').value;
    var newDesc = document.getElementById('description').value;

    //Create new li elements
    var li = document.createElement('li');
    //Add class
    li.className = 'list-group-item';
    // add text node with input value
    li.appendChild(document.createTextNode(newItem + ' ' + newDesc));

    //Create delete button element
    var deleteBtn = document.createElement('button');

    //Add classesto delete button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    //Append text Node
    deleteBtn.appendChild(document.createTextNode('X'));

    var editbtn = document.createElement('button');
    editbtn.className = 'btn btn-primary btn-sm float-right edit';
    editbtn.appendChild(document.createTextNode('Edit'));

    //Append btn to li
    li.appendChild(deleteBtn);
    li.appendChild(editbtn);

    itemList.appendChild(li);

    document.getElementById('item').value = '';
    document.getElementById('description').value = '';
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

//Filter Items

function filterItems(e){
    //convert text to lowercase
    var text = e.target.value.toLowerCase();
    //get li's
    var items = itemList.getElementsByTagName('li');
    //Convert to an array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    })
}