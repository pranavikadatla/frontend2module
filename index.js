const array=[
    {
        "name": "Veggie Delight",
        "imageSrc": "https://source.unsplash.com/random?veggies",
        "time": "30 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Chicken Grill",
        "imageSrc": "https://source.unsplash.com/random?chicken",
        "time": "45 min",
        "type": "non-veg",
        "isLiked": false,
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
const section=document.getElementById("section");
const searchedName=document.getElementById("searchId");
const showAllBtn=document.getElementById("showAllBtn");
const vegBtn=document.getElementById("vegBtn");
const nonVegBtn=document.getElementById("nonVegBtn");
const above4=document.getElementById("above4");
const below4=document.getElementById("below4");
function createCard(element){
    const cardDiv=document.createElement("div");
    cardDiv.classList.add("card");
    const image=document.createElement("img");
    image.src=element.imageSrc;
    cardDiv.appendChild(image);
    const para=document.createElement("p");
    para.textContent=`${element.type}`;
    cardDiv.appendChild(para);
    const div1=document.createElement("div");
    cardDiv.appendChild(div1);
    const h2=document.createElement("h2");
    h2.textContent=`${element.name}`;
    div1.appendChild(h2);
    const div2=document.createElement("div");
    div2.innerText=`⭐${element.rating}`;
    div1.appendChild(div2);
    const div3=document.createElement("div");
    cardDiv.appendChild(div3);
    const h3=document.createElement("h3");
    h3.innerText=`${element.time}`;
    div3.appendChild(h3);
    const div4=document.createElement("div");
    div3.appendChild(div4);
    const span1=document.createElement("span");
    span1.addEventListener("click",()=>{
       element.isLiked=! element.isLiked;
       span1.innerText=element.isLiked?"❤️":"🖤";
    });
    span1.innerText=element.isLiked?"❤️":"🖤";
    div4.appendChild(span1);
    const span2=document.createElement("span");
    div4.appendChild(span2);

    section.appendChild(cardDiv);
}
function filterCards(searchedElement){
    section.innerHTML="";
    const filteredElements=array.filter((element)=>
        element.name.toLowerCase().includes(searchedElement.toLowerCase())
    );
    console.log("filteredElements",filteredElements);
     filteredElements.forEach(element=>{
        createCard(element);
     })
}
function toggleCards(type){
    section.innerHTML="";
    let toggleElements;
    if(type==="all"){
        toggleElements=array;
    }else{
        toggleElements=array.filter((element)=>element.type===type);
    }
    
    console.log("toggleElements",toggleElements);
    toggleElements.forEach(element=>{
        createCard(element);
     })
}
function filterCards(){
    section.innerHTML="";
    let ratingElements;
    if(above4.checked){
        ratingElements=array.filter((element)=>element.rating>=4);
    }else if(below4.checked){
        ratingElements=array.filter((element)=>element.rating<4);
    }else{
        ratingElements=array;
    }
    console.log("ratingElements",ratingElements);
    ratingElements.forEach(element=>{
        createCard(element);
     })

}
above4.addEventListener("change", filterCards);
below4.addEventListener("change",filterCards);
showAllBtn.addEventListener("click", () => toggleCards("all"));
vegBtn.addEventListener("click", () => toggleCards("veg"));
nonVegBtn.addEventListener("click", () => toggleCards("non-veg"));
searchedName.addEventListener("input",(event)=>{
    const searchedElement=event.target.value.trim();
    
    filterCards(searchedElement);
})
array.forEach(element=>{
   createCard(element);
})

