// async function fetchCharacterDetails() {
//     try {
//         const response = await fetch('https://hp-api.onrender.com/api/characters');
//         const characters = await response.json();
//         displayCharacterDetails(characters);
//     } catch (error) {
//         console.error('Error fetching characters:', error);
//     }
// }

// function displayCharacterDetails(characters) {
//     const characterDetails = document.getElementById('characters');
//     characterDetails.innerHTML = '';
//     characters.forEach(character => {
//         const characterItem = document.createElement('section');
//         characterItem.className = 'characterItem';
//         characterItem.innerHTML = `
//         <aside class="characterItem-container">
//             <p class="characterItem__info-text">Name: ${character.name}</p>
//             <p class="characterItem__info-text">Alternate names: ${character.alternate_names.join(', ')}</p>
//             <p class="characterItem__info-text">Species: ${character.species}</p>
//             <p class="characterItem__info-text">Gender: ${character.gender}</p>
//             <p class="characterItem__info-text">House: ${character.house}</p>
//             <p class="characterItem__info-text">Date of birth: ${character.dateOfBirth}</p>
//             <p class="characterItem__info-text">Year of birth: ${character.yearOfBirth}</p>
//             <p class="characterItem__info-text">Wizard: ${character.wizard}</p>
//             <p class="characterItem__info-text">Ancestry: ${character.ancestry}</p>
//             <p class="characterItem__info-text">Eye colour: ${character.eyeColour}</p>
//             <p class="characterItem__info-text">Hair colour: ${character.hairColour}</p>
//             <p class="characterItem__info-text">Wand: ${character.wand.wood}, core: ${character.wand.core}, length: ${character.wand.length}</p>
//             <p class="characterItem__info-text">Patronus: ${character.patronus}</p>
//             <p class="characterItem__info-text">Hogwarts student: ${character.hogwartsStudent}</p>
//             <p class="characterItem__info-text">Hogwarts staff: ${character.hogwartsStaff}</p>
//             <p class="characterItem__info-text">Actor: ${character.actor}</p>
//             <p class="characterItem__info-text">Alive: ${character.alive}</p>
//         </aside>
//         `;
//         characterDetails.appendChild(characterItem);
//     });
//     addHoverEffectToButtons(); 
// }

// function addHoverEffectToButtons() {
//     const buttons = document.querySelectorAll('.characterItem__info-button');
//     buttons.forEach(button => {
//         button.addEventListener('mouseover', () => {
//             const extraInfo = button.nextElementSibling;
//             if (extraInfo) {
//                 extraInfo.style.display = 'block';
//             }
//         });
//         button.addEventListener('mouseout', () => {
//             const extraInfo = button.nextElementSibling;
//             if (extraInfo) {
//                 extraInfo.style.display = 'none';
//             }
//         });
//     });
// }

// document.addEventListener('DOMContentLoaded', fetchCharacterDetails);