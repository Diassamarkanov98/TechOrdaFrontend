const BTN_LEFT = document.querySelector("#btn-left");
const BTN_RIGHT = document.querySelector("#btn-right");
const CAROUSEL = document.querySelector("#carousel");
const ITEM_LEFT = document.querySelector("#item-left");
const ITEM_RIGHT = document.querySelector("#item-right");

let k = 8;
let temp = [];
let count = 0 ; 
let ranNums;

import pets from './pets.js';


 const createCardTemplate = () => {
    const card = document.createElement("div");
    card.classList.add("slider_card");
    return card;
  }

  const moveLeft = () => {
      
      if(count == 2){
        count = 0;
        random();
    }
    countNodes++;
    CAROUSEL.classList.add("transition-left");
    BTN_LEFT.removeEventListener("click", moveLeft);
    BTN_RIGHT.removeEventListener("click", moveRight);

    count++;
  }; 
  
  const moveRight = () => {
    if(count == 2){
        count = 0;
        random();
    }
    countNodes++;
    CAROUSEL.classList.add("transition-right");
    BTN_LEFT.removeEventListener("click", moveLeft);
    BTN_RIGHT.removeEventListener("click", moveRight);
    
    count++; 
  };
  
  BTN_LEFT.addEventListener("click", moveLeft );
  BTN_RIGHT.addEventListener("click", moveRight );
  
  CAROUSEL.addEventListener("animationend", (animationEvent) => {
    let changedItem;
    if (animationEvent.animationName === "move-left") {
      CAROUSEL.classList.remove("transition-left");
      changedItem = ITEM_LEFT;
      document.querySelector("#item-active").innerHTML = ITEM_LEFT.innerHTML;
    } else {
      CAROUSEL.classList.remove("transition-right");
      changedItem = ITEM_RIGHT;
      document.querySelector("#item-active").innerHTML = ITEM_RIGHT.innerHTML;
    }

    
    changedItem.innerHTML = "";
    
    for (let i = 0; i < 3; i++) {
      const card = createCardTemplate();
      let card_img = document.createElement("IMG");
      let text = document.createElement("span");
      let btn= document.createElement('button');
      btn.classList.add('btn_learn_more');
      btn.innerHTML = 'Learn more';
      text.innerHTML = ranNums[i].name;
      card_img.src = ranNums[i].img;
      // card_img.classList.add('card_img');
      changedItem.appendChild(card);
      card.appendChild(card_img);
      card.appendChild(text);
      card.appendChild(btn);
      ranNums.splice(i,1);
    }

    BTN_LEFT.addEventListener("click", moveLeft );
    BTN_RIGHT.addEventListener("click", moveRight );
  })

function random() {
 
    let nums = [...pets];
    ranNums = [];
    let i = nums.length,
    j = 0;
    while (i--) {
    j = Math.floor(Math.random() * (i));
    ranNums.push(nums[j]);
    nums.splice(j,1);
    } 
}

random();
let countNodes = 0;
CAROUSEL.addEventListener('click', (e) => {

    let cards; 
    if(countNodes < 2){
        cards = e.target.parentNode.childNodes[3].textContent;
    }
    else{
        cards = e.target.parentNode.childNodes[1].textContent;
    }
    pets.forEach((item) => {
        if( cards == item.name){
            modal.style.display = "block";
            document.querySelector('body').classList.add('scroll_hide');
            let modal_img = document.createElement("IMG");
            let modal_title = document.createElement("h3");
            let modal_subtitle = document.createElement("h4");
            let modal_text = document.createElement("h5");
            let modal_list_ul = document.createElement("ul");
            let modal_div = document.createElement("div");
            modal_img.src = item.img;
            document.querySelector('#container_popup').innerHTML = "";
            document.querySelector('#container_popup').appendChild(modal_img);
            document.querySelector('#container_popup').appendChild(modal_div);
            modal_div.classList.add('modal_text');
            modal_div.appendChild(modal_title);
            modal_div.appendChild(modal_subtitle);
            modal_div.appendChild(modal_text);
            modal_div.appendChild(modal_list_ul);
            for(let i = 0; i < 4; i++){
              modal_list_ul.appendChild(document.createElement("li"));
              modal_list_ul.childNodes[i].classList.add('modal_list_li');
            }
            let modal_list_li = modal_list_ul.childNodes;
            modal_title.innerHTML = item.name;
            modal_subtitle.innerHTML = `${item.type} - ${item.breed}`;
            modal_img.classList.add('modal_img');
            modal_text.innerHTML = item.description;
            modal_list_li[0].insertAdjacentHTML("afterbegin",  `Age: <span class="li_info">
            ${item.age} </span>`);
            modal_list_li[1].insertAdjacentHTML("afterbegin",  `Inoculations: <span class="li_info">
            ${item.inoculations} </span>`);
            modal_list_li[2].insertAdjacentHTML("afterbegin",  `Diseases: <span class="li_info">
            ${item.diseases} </span>`);
            modal_list_li[3].insertAdjacentHTML("afterbegin",  `Parasites: <span class="li_info">
            ${item.parasites} </span>`);
            modal_list_ul.classList.add('modal_list_ul');
        }
    });

})