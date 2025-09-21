var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  on: {
    slideChange: function () {
      
      
  swiper.slides[swiper.realIndex].children[0].addEventListener("click", (e) => {
    console.log(imgText.value);
  
    if (imgText.value === "") {
      e.stopPropagation();
      // imgText.remove();
      // curruntElement.children[1].remove()
      const curruntElement = swiper.slides[swiper.realIndex];
      console.log(curruntElement.children[1].remove())
    }
  });
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

const img = document.getElementById("img");
const imgText = document.createElement("textarea");
const imgElement = document.querySelector(".swiper-slide");

let isDaraging = false;
let initalY, initalX;
imgText.setAttribute("name", "img-text");
imgText.setAttribute("class", "img-text");
imgText.setAttribute("row", "10");


imgText.addEventListener("mousedown", (e) => {
  isDaraging = true;

  initalX = e.clientX - imgText.offsetLeft;
  initalY = e.clientY - imgText.offsetTop;
  imgText.style.cursor = "grabbing";
});

imgText.addEventListener("mousemove", (e) => {
  if (!isDaraging) return;
  let updatedX = e.clientX - initalX;
  let updatedY = e.clientY - initalY;

  console.log(updatedX);
  console.log(updatedY);
  imgText.style.left = `${updatedX}px`;
  imgText.style.top = `${updatedY}px`;
});

imgText.addEventListener("mouseup", () => {
  isDaraging = false;
  imgText.style.cursor = "grab";
});

const textArea = document.getElementById("text");
const addTextBtn = document
.querySelector(".text-btn")
.addEventListener("click", (e) => {
    const curruntElement = swiper.slides[swiper.realIndex];
    const appendedChild = curruntElement.appendChild(imgText);
    // appendChild(newParagraph)
    console.log(curruntElement);

    const currentSlideIndex = swiper.realIndex;
    console.log("Current slide index:", curruntElement.children[0]);
    textArea.classList.toggle("toggle-btn");
  });

  swiper.slides[swiper.realIndex].children[0].addEventListener("click", (e) => {
  console.log(imgText.value);

  if (imgText.value === "") {
    e.stopPropagation();
    // imgText.remove();
    // curruntElement.children[1].remove()
    const curruntElement = swiper.slides[swiper.realIndex];
    console.log(curruntElement.children[1].remove())
  }
});

textArea.addEventListener("input", (e) => {
  console.log("okokopk");
  console.log(e.target.value);

  imgText.value = e.target.value;
});

//  font code

const fontSelecter = document
  .getElementById("fonts")
  .addEventListener("change", (e) => {
    console.log(e.target.value)
    
    switch(e.target.value){

      case 'M':
        imgText.classList.add('meow')
        break
      case 'Q':
        imgText.classList.add('q-regular')
        break
      case 'C':
        imgText.classList.add('caveat')
        break

        

    }

  });
const colorSelecter = document
  .getElementById("color")
  .addEventListener("change", (e) => {
    console.log(e.target.value)
    switch(e.target.value){

      case 'r':
        imgText.style.color='red'
        break
      case 'y':
        imgText.style.color='yellow'
        break
      case 'g':
        imgText.style.color='green'
        break

    }

  });
