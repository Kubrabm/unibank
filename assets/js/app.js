const changeBackground = document.getElementById('changeBackground');
const body = document.body;


changeBackground.addEventListener('click', () => {
  if (body.classList.contains('darkthema')) {
    body.classList.remove('darkthema');
    changeBackground.classList.replace('fa-sun', 'fa-moon');
  } else {
    body.classList.add('darkthema');
    changeBackground.classList.replace('fa-moon', 'fa-sun');
  }
});

const changeColor = document.getElementById('changeBackground');
const text = document.querySelectorAll('a, p, span, h1, h2, h3, h4, h5, h6');
let isWhite = false;

changeColor.addEventListener('click', () => {
  if (isWhite) {
    text.forEach(element => {
      element.style.color = 'initial';
    });
    isWhite = false;
  } else {
    text.forEach(element => {
      element.style.color = '#fff';
    });
    isWhite = true;
  }
});



function opensearchbox() {
  var x = document.getElementById("searchbox");
  var y=document.getElementById('buttonheader')
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display="none"
  } else {
    x.style.display = "none";
    y.style.display="block"
  }
};


const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".pagination",
    clickable: true
  },
});



if(localStorage.getItem('cards') === null) {
  localStorage.setItem('cards',JSON.stringify([]))
}


let buttons = document.getElementById('btn');

for(let btn of buttons) {
  btn.onclick = function(e) {
      e.preventDefault();
      let id = this.parentElement.parentElement.id;
      let title = this.previousElementSibling.previousElementSibling.innerHTML
      let price = this.previousElementSibling.innerHTML;
     
      let product_list = JSON.parse(localStorage.getItem('products'));

      let existProd = product_list.find(item => item.Id == id);
      
      if(existProd === undefined) {
          product_list.push({
              Id: id,
              Title: title,
              Image: src,
              Price: price,
              Count: 1
          })
          document.querySelector('.toaster').innerHTML = 'Successfully added'
          document.querySelector('.toaster').style.backgroundColor = 'green'

      }
      else{
          existProd.Count += 1;
          document.querySelector('.toaster').innerHTML = 'Already added'
          document.querySelector('.toaster').style.backgroundColor = 'red'
      }

      

      localStorage.setItem('products',JSON.stringify(product_list))
      document.querySelector('.toaster').style.right = '5%'
      setTimeout(() => {
          document.querySelector('.toaster').style.right = '-20%'
      }, 1300);
      ShowCount()
  }
}


function ShowCount() {
  let items = JSON.parse(localStorage.getItem('products'))
  document.querySelector('#count').innerHTML = items.length;
}

ShowCount()


