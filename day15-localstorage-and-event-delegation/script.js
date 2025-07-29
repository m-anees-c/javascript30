const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
// retrieve from localstoage or create default []
const items = JSON.parse(localStorage.getItem("items")) || [];

// function to add item
function addItem(e){
    e.preventDefault();
    const text = this.querySelector('[name=item]').value;
    const item = {
        text,
        done : false
    }
    items.push(item);
    // add to localstorage
    localStorage.setItem("items",JSON.stringify(items));
    populateList(items,itemsList);
    this.reset();
}

// function to populate list
function populateList(plates = [], platesList){
    platesList.innerHTML = plates.map((plate,index) => {
    return `<li>
    <input type="checkbox" id="${index}" data-index="${index}" ${plate.done ? "checked" : ""}>
    <label for="${index}">${plate.text}</label>
    </li>`;
    }).join('');
}

// function to toggle checkboxes
function toggleDone(e){
    if (!e.target.matches('input')) return;
    const list = e.target;
    let index = list.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem("items",JSON.stringify(items));
    populateList(items,itemsList);
}

addItems.addEventListener("submit",addItem);
itemsList.addEventListener("click",toggleDone);
populateList(items,itemsList);
