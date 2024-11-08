async function fetchCharacterDetails() {
    try {
        const response = await fetch('https://hp-api.onrender.com/api/characters');
        const characters = await response.json();
        displayCharacterDetails(characters);
       
    } 
    
    catch (error) {
        console.error('Error fetching characters:', error);
    }
}



document.addEventListener('DOMContentLoaded', fetchCharacterDetails);