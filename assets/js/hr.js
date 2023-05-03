document.querySelectorAll('.hrcontent a').forEach(function(selected){
    selected.addEventListener('click',function(){
        document.querySelector('.hrcontent .active').classList.remove('active')
        selected.classList.add('active')
    })
})