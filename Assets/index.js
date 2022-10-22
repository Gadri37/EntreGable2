

const arrayDePizza = [{
    id: 1,
    nombre:'Margarita',
    ingredientes: ['queso','salsa de tomate','albahaca'],
    precio: 600
},
{
    id: 2,
    nombre:'Cuatro quesos',
    ingredientes: ['queso mozzarela','salsa de tomate','queso parmesano','queso provolone','queso azul'],
    precio: 1100
},
{
    id: 3,
    nombre:'Pepperoni',
    ingredientes: ['queso','salsa de tomate','pepperoni'],
    precio: 700
},
{
    id:4,
    nombre:'con Champiñones',
    ingredientes: ['queso','salsa de tomate','champiñones'], 
    precio: 800
},
{
    id: 5,
    nombre:'Hawaiana',
    ingredientes: ['queso','salsa de tomate','ananá'],
    precio: 900
},
{
    id: 6,
    nombre:'Napolitana',
    ingredientes: ['queso','salsa de tomate','tomate'],
    precio: 1000
}]

/*Traer elementos del dom necesarios para realizar el ejercicio*/

const resultContainer = document.getElementById("result-container");
const form = document.getElementById("form")
const input = document.querySelector(".input-form")

/*Buscar en el array de pizzas una pizza que coincida con el valor dado*/ 

const searchPizza = (value) => arrayDePizza.find(pizza => pizza.id === value)

const showEmptyError = () =>{
  resultContainer.innerHTML = `
  <div class="pizza-container">
  <h2 class="error-title"> Por favor, ingrese un número para poder buscar su pizza en el menú </h2>
  </div>`
}

const renderResult = (pizza) => {
  if(!pizza){
    resultContainer.innerHTML = `
    <div class="pizza-container">
            <h2 class="error-title>">No existe una pizza con el id ingresado</h2>
        </div>`;
  }else{
    resultContainer.innerHTML = `
    <div class="pizza-container">
            <h2 class="result-title">${pizza.nombre}</h2>
            <h3 class="result-price">$${pizza.precio}</h3>
        </div>`;
  }
};

const submitSearch = (e) =>{
  e.preventDefault();
  const searchedValue = input.value;
  if(!searchedValue){
    showEmptyError()
    return;
  }
  const searchedPizza = searchPizza(Number(searchedValue))
  renderResult(searchedPizza)

};

const init = () => {
  form.addEventListener("submit", submitSearch)
}

init()



// arrayDePizza.forEach((pizza) => {
//     if (pizza.id % 2 !== 0) {
//       console.log(`La ${pizza.nombre} tiene un id impar`);
//     }
//   });

// const menosDe600 = (arrayDePizza) => arrayDePizza.precio < 600;

// if (arrayDePizza.some(menosDe600)) {
//     console.log("Hay pizzas con precio menor a $600");
//   } else {
//     console.log("No hay pizzas con precio menor a $600");
//   }

//   arrayDePizza.forEach((pizza) =>
//   console.log(
//     `Vení a probar nuestra ${pizza.nombre} por tan solo $${pizza.precio}`
//   )
// );

// arrayDePizza.forEach((pizza) => {
//     console.log(`Los ingredientes de la ${pizza.nombre} son:`);
//     pizza.ingredientes.forEach((ingrediente) => console.log(ingrediente));
//   });
  
//   const createHTML = items =>{
//       const html = items.map(item => {
//         if(input.value===arrayDePizza.id){
//           return  item = `<h2>Pizza ${arrayDePizza.nombre}</h2><h3> $${arrayDePizza.precio}</h3>`;
//         }
//     else if(input.value === NaN){
//       return `Error, ingrese un número`;
//     }
//     else{
//       return `Error`;
//     }
//     }).join(' ');

//     caja.innerHTML = html;
//   }


//   const init = () => {
//     form.addEventListener('submit', e => {
//       e.preventDefault();
//       const item = input.value;
//       input.value = ' ';
    
//       items = [...items, item];
    
//       saveLocalStorage(items);
//       createHTML(items);
//   })
//   document.addEventListener('DOMContentLoaded', createHTML(items));
//   }
  
// init ();

  

// btnBuscar.addEventListener('click', function(){
//   let caja = getInputValue;
//   if (caja<"1" || caja>6){
//     return "Opción no encontrada"
//   }
//   else
//   const renderCaja = items =>{
//    const html = items.map(item =>
//       return `<h2>Pizza ${arrayDePizza.nombre}</h2><h3> $${arrayDePizza.precio}</h3>`       
//     )
//   }
// })