let recipie = [
    {
        "name": "Veggie Delight",
        "imageSrc": "https://source.unsplash.com/random?veggies",
        "time": "30 min",
        "type": "veg",
        "isLiked": true,
        "rating": 4.2
    },
    {
        "name": "Chicken Grill",
        "imageSrc": "https://source.unsplash.com/random?chicken",
        "time": "45 min",
        "type": "non-veg",
        "isLiked": true,
        "rating": 4.5
    },
    {
        "name": "Cheese Pizza",
        "imageSrc": "https://source.unsplash.com/random?pizza",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.1
    },
    {
        "name": "Steak",
        "imageSrc": "https://source.unsplash.com/random?steak",
        "time": "60 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.7
    },
    {
        "name": "Grilled Salmon",
        "imageSrc": "https://source.unsplash.com/random?salmon",
        "time": "50 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Tomato Pasta",
        "imageSrc": "https://source.unsplash.com/random?pasta",
        "time": "35 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.0
    },
    {
        "name": "Vegan Salad",
        "imageSrc": "https://source.unsplash.com/random?salad",
        "time": "20 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.9
    },
    {
        "name": "Fried Chicken",
        "imageSrc": "https://source.unsplash.com/random?friedChicken",
        "time": "55 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Mushroom Risotto",
        "imageSrc": "https://source.unsplash.com/random?risotto",
        "time": "45 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Burger",
        "imageSrc": "https://source.unsplash.com/random?burger",
        "time": "30 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Paneer Tikka",
        "imageSrc": "https://source.unsplash.com/random?paneerTikka",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.4
    },
    {
        "name": "BBQ Ribs",
        "imageSrc": "https://source.unsplash.com/random?ribs",
        "time": "70 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Caesar Salad",
        "imageSrc": "https://source.unsplash.com/random?caesarSalad",
        "time": "25 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.8
    },
    {
        "name": "Fish Tacos",
        "imageSrc": "https://source.unsplash.com/random?fishTacos",
        "time": "35 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Chocolate Cake",
        "imageSrc": "https://source.unsplash.com/random?chocolateCake",
        "time": "90 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.9
    }
]


let likeHeart = document.getElementsByClassName("toggleLike");
let cardBody = document.getElementById("rightSection");



function displayCards ( recipie, cardBody){

    cardBody.innerHTML ="";

    for(let i=0;i<recipie.length;i++){

        let a =recipie[i];
    
        let card = document.createElement("div");
        card.className ="mycard";
        card.innerHTML=`<div class="imagediv">
        <img class="image" src=${a.imageSrc} >
    </div>
        <p class="type">${a.type}</p>
        <div class="nameRating">
            <h3 class="name">${a.name}</h3>
            <div class="ratingSection" >
                <span class="material-symbols-outlined">
                    grade
                    </span>
                    <p class="rating">${a.rating}</p>
            </div>
            
        </div>
        <div class="timeLikeSection" >
            <div class="time">${a.time}</div>
            <div >
            <i  class="fa-solid fa-heart toggleLike" style="color:lightgrey" ></i>
                    <span class="material-symbols-outlined">
                        mode_comment
                        </span>
            </div>
    
        </div>`
    
    
        cardBody.appendChild(card);
    
    }


    //adding like functionality

    for(let j=0;j<likeHeart.length;j++){
        
    likeHeart[j].addEventListener("click",likeButtonFunctionality)
    
    }  
      
    function likeButtonFunctionality (event){
      
            
    
      event.target.classList.toggle("likeButtonColor");
        
    
    
    
    }
    

}


displayCards(recipie, cardBody);







//search functionality

let input = document.querySelector("#searchBar>input");
let searchButton = input.nextElementSibling;
searchButton.addEventListener("click",searchFunctionality);




function searchFunctionality(){

let inputValue = input.value.toLowerCase();

let filterData = recipie.filter((ele) =>{
    return ele.name.toLowerCase().includes(inputValue);
})

displayCards(filterData, cardBody);




}


// checbox rating functionality

//above 4

let checkbox = document.getElementById("above");


checkbox.addEventListener('change', function() {
if (this. checked) {
    let filterData = recipie.filter((ele) =>{
        return ele.rating >= 4 ;
    })
    
    displayCards(filterData, cardBody);
} 
}
)

//below 4

let checkboxBelow = document.getElementById("below");
console.log()

checkboxBelow.addEventListener('change', function() {
if (this.checked) {
    let filterData = recipie.filter((ele) =>{
        return ele.rating < 4 ;
    })
    
    displayCards(filterData, cardBody);
} 
}
)



// togle between veg  && non veg 

let allButton = document.getElementById("card-1");


allButton.addEventListener("click",displayAll);

function displayAll(){
   
    displayCards(recipie, cardBody);
}

let vegButton = allButton.nextElementSibling;

vegButton.addEventListener("click",displayVeg);

function displayVeg(){

    
    let vegItems = recipie.filter((ele) =>
        ele.type === 'veg' 
    )
    
    
    displayCards(vegItems, cardBody);
    
}

let nonVegButton = vegButton.nextElementSibling;
console.log(nonVegButton);

nonVegButton.addEventListener("click",displayNonVeg);

function displayNonVeg(){
    

    let NonvegItems = recipie.filter((ele) =>
         ele.type === "non-veg" 
    )
    
   
    displayCards(NonvegItems, cardBody);
}


// toggle navBar

let toggleButton = document.getElementById("mobile-navbar-btn");
let sideBar = document.getElementById("side-bar");
let toggleMenu = document.getElementById("mobile-nav-icon");



toggleButton.addEventListener("click",() =>{
    

    sideBar.classList.toggle("showSide-bar");
    if(toggleMenu.innerText== "menu"){

    sideBar.appendChild(toggleButton);
    toggleMenu.innerText= "close";
    }
    else{
        
        toggleMenu.style.display="block";
    }

    
    
    
})









