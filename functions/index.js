


function showImages(){
    const charactersItem = document.getElementById('characters-card');
    if (charactersItem.classList.contains('hidden')) {
        charactersItem.classList.remove('hidden');
        charactersItem.classList.add('flex');
    } else {
        charactersItem.classList.remove('flex');
        charactersItem.classList.add('hidden');
    }
}


function redirectToPage(page){
    document.getElementsByClassName('character-item__button')
    window.location.href = page;
}