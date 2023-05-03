document.querySelectorAll('.branc a').forEach(function(selected){
    selected.addEventListener('click',function(){
        document.querySelector('.branc .active').classList.remove('active')
        selected.classList.add('active')
    })
})