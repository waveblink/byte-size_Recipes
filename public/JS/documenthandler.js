// function attachFormSubmitListener() {
//     document.querySelector('form').addEventListener('submit', function (e) {
//         console.log('submit listener triggered');
//
//         e.preventDefault();
//
//         let formData = {
//             name: document.querySelector('input[name="name"]').value,
//             cuisine: document.querySelector('input[name="cuisine"]').value,
//             meal: document.querySelector('input[name="meal"]').value,
//             recipe: document.querySelector('textarea[name="recipe"]').value,
//         };
//
//         let previewHtml = `
//         <div class="recipe-preview">
//             <h2>${formData.name}</h2>
//             <p><strong>Cuisine:</strong> ${formData.cuisine}</p>
//             <p><strong>Meal Type:</strong> ${formData.meal}</p>
//             <p><strong>Recipe:</strong></p>
//             <p>${formData.recipe}</p>
//             <button id="newRecipe" class="btn btn-primary">Submit Another Recipe</button>
//         </div>
//         `;
//
//         const originalFormHtml = document.querySelector('.my-5').innerHTML;
//
//         document.querySelector('.my-5').innerHTML = previewHtml;
//
//         document.getElementById('newRecipe').addEventListener('click', function () {
//             document.querySelector('.my-5').innerHTML = originalFormHtml;
//             attachFormSubmitListener(); // Reattach the event listener to the new form
//         });
//     });
// }
//
// // Initial call to attach the event listener when the page loads
// attachFormSubmitListener();
