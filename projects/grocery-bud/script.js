const groceryList = document.querySelector('.grocery-list');
const groceryContainer = document.querySelector('.grocery-container');

const groceryInput = document.querySelector('#grocery');

const submitBtn = document.querySelector('.submit-btn');
const clearBtn = document.querySelector('.clear-btn');

// let a = 10;

// a = 20;

function deleteItem(item){
    // console.log(item);
    item.style.display = 'none';
}

let isEiditing = false;
let editingtitle = null;

function editItem(item){
    // console.log(item);
    // console.log();
    let title = item.querySelector('.title');
    groceryInput.value = title.innerText;
    isEiditing = true;
    editingtitle = title;
}


let count = 0;
submitBtn.addEventListener('click', function(){
    console.log(groceryInput.value);
    groceryContainer.style.visibility = 'visible';

    if(isEiditing){
        editingtitle.innerText = groceryInput.value;
    }else{
        groceryList.innerHTML = groceryList.innerHTML + `<article id="${'item'+count}" class="grocery-item"><p class="title">${groceryInput.value}</p>
            <div class="btn-container">
            <!-- edit btn -->
            <button type="button" class="edit-btn" onclick="editItem(${'item'+count})">
                Edit
            </button>
            <!-- delete btn -->
            <button type="button" class="delete-btn" onclick="deleteItem(${'item'+count})">
                Delete
            </button>
            </div>
        </article>`;
        groceryInput.value = '';
        count++;
    }
});

if(groceryList.innerHTML == ''){
    clearBtn.style.display = 'none';
}


clearBtn.addEventListener('click', function(){
    groceryList.innerHTML = '';
    clearBtn.style.display = 'none';
})


{/* <article data-id="1721896919462" class="grocery-item"><p class="title">mango</p>
            <div class="btn-container">
              <!-- edit btn -->
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <!-- delete btn -->
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          </article> */}