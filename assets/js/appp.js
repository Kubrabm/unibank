if(localStorage.getItem('products') === null) {
    localStorage.setItem('products',JSON.stringify([]))
  }
  
  
  let btns = document.querySelectorAll('.btn-primary');
  
  
  for(let btn of btns) {
  
    btn.addEventListener('click',function(event) {
        event.preventDefault();
  
        let id = btn.parentElement.parentElement.id;
        let src = btn.parentElement.previousElementSibling.src;
        let title = btn.previousElementSibling.previousElementSibling.innerHTML;
        let price = btn.previousElementSibling.children[0].innerHTML;
  
        let product_list = JSON.parse(localStorage.getItem('products'));
  
        let existProd = product_list.find(item => item.Id == id);
        console.log(id);
        console.log(src);
        console.log(title);
        console.log(price);
        
        if(existProd === undefined) {
            product_list.push({
                Id: id,
                Name: title,
                Image: src,
                Price: price,
                Count: 1
            })
        }
        else{
            existProd.Count += 1;
        }
  
        localStorage.setItem('products',JSON.stringify(product_list))
        ShowCount();
    });
  }
  
  function ShowCount() {
    let items = JSON.parse(localStorage.getItem('products'))
    document.querySelector('.count').innerHTML = items.length;
  }
  ShowCount();


  document.querySelectorAll('.menu a').forEach(function(menu) {
    menu.addEventListener('click', function() {
        document.querySelector('.menu .active').classList.remove('active')
        menu.classList.add('active')
    })
})

document.querySelectorAll('.menuhamburger a').forEach(function(menuhamburger) {
    menuhamburger.addEventListener('click', function() {
        document.querySelector('.menuhamburger .active').classList.remove('active')
        menuhamburger.classList.add('active')
    })
})

document.querySelectorAll('.theme i').forEach(function(theme) {
    theme.addEventListener('click', function() {
        document.querySelector('.theme .d-none').classList.remove('d-none')
        theme.classList.add('d-none')
    })
})

document.querySelectorAll('.themehamburger i').forEach(function(themehamburger) {
    themehamburger.addEventListener('click', function() {
        document.querySelector('.themehamburger .d-none').classList.remove('d-none')
        themehamburger.classList.add('d-none')
    })
})

let langs = document.querySelectorAll('.lang a')

for(let lang of langs) {
    lang.onclick = function(e) {
        e.preventDefault()
        
        for(let lang of langs) {
            this.classList.add('d-none')
            lang.classList.remove('d-none')

            if(lang.innerHTML == 'RUS') {
                this.classList.add('d-none')
            }
        }
    }
}

let langshamburger = document.querySelectorAll('.langhamburger a')

for(let langhamburger of langshamburger) {
    langhamburger.onclick = function(e) {
        e.preventDefault()
        
        for(let langhamburger of langshamburger) {
            this.classList.add('d-none')
            langhamburger.classList.remove('d-none')

            if(langhamburger.innerHTML == 'RUS') {
                this.classList.add('d-none')
            }
        }
    }
}





let hamburgermenu = document.querySelector('.hamburgermenu i')
let hamburgermenudiv = document.querySelector('.hamburgermenudiv')

hamburgermenu.onclick = () => { 
    hamburgermenudiv.classList.toggle('d-none')
    document.body.classList.toggle('scroll')
}