async function fetchCharacterColleague() {
    try {
        const response = await fetch('https://hp-api.onrender.com/api/characters/staff');
        const characters = await response.json();
        displayCharacterColleague(characters)
       
    } 
    
    catch (error) {
        console.error('Error fetching characters:', error);
    }
}
function displayCharacterColleague(characters) {
    const charactersContainer = document.getElementById('characters');
    charactersContainer.innerHTML = '';
    
    if (Array.isArray(characters)) {
        characters.forEach(character => {
            const characterItem = document.createElement('section');
            characterItem.className = 'character-item';
            const imageUrl = character.image || '../images/custom.svg';
            characterItem.innerHTML = `
                <figure class="characterItem__image-container">
                    <img src="${imageUrl}" class="characterItem__image" alt="${character.name}">
                    <figcaption class="characterItem__info">
                        <header>
                            <h2 class="characterItem__info-title">${character.name}</h2>
                        </header>
                        <p class="characterItem__info-text">${character.alternate_names[0]}</p>
                        <p class="characterItem__info-text">${character.house}</p>
                        <p class="characterItem__info-text">${character.dateOfBirth}</p>
                        <footer>
                            <button class="characterItem__info-button"> 
                                <span class="characterItem__info-button-span">
                                    <p>Більше інформації</p>
                                    <img src="../images/arrow.svg" alt="arrow">
                                </span>
                            </button>
                        </footer>
                    </figcaption>
                </figure>
            `;
            charactersContainer.appendChild(characterItem);
        });
    } else {
        console.error('Expected an array of characters');
    }
}

document.addEventListener('DOMContentLoaded', fetchCharacterColleague);