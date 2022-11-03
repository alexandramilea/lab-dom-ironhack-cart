
 // ITERATION 1
 // Global Variables 
 const calculatePricesBtn = document.getElementById('calculate');
 const createProductElement  = document.querySelector('.create-product')
 const createProductName = createProductElement.querySelector('input[type="text"]');
 const createProductPrice = createProductElement.querySelector('input[type="number"]');

 function updateSubtotal(product) {
   console.log('Calculating subtotal, yey!');

   //... your code goes here
   // Variables Declared
   const subTotalField = product.querySelector('.subtotal span');
   const price = product.querySelector('.price span');
   const quantity = product.querySelector('.quantity input');
   calculatePricesBtn.addEventListener('click', calculateAll);
   // SubTotal Price calculated
   const totalSubPrice  = price.innerHTML  * quantity.value;
   subTotalField.innerHTML = totalSubPrice;
   return totalSubPrice;
 }

 function calculateAll() {
   // code in the following two lines is added just for testing purposes.
   // it runs when only iteration 1 is completed. at later point, it can be removed.
   const singleProduct = document.querySelector('.product');
   updateSubtotal(singleProduct);
   // end of test

   // ITERATION 2
   //... your code goes here
   const products = document.getElementsByClassName('product');
   const totalDisplay = document.querySelector('#total-value span');
   // Calculate final Price 
   let total = 0;

   // ITERATION 3
   //... your code goes here
   // Call the updateSubTotal with a for loop for each product
   for (let index = 0; index < products.length; index++) {
     const product = products[index];
     total  += updateSubtotal(product);
   }
    // Updated the final TOTAL
    totalDisplay.innerHTML =  total;
 }

 // ITERATION 4

 function removeProduct(event) {
   const target = event.currentTarget;
   console.log('The target in remove is:', target);
   //... your code goes here
   // Deleted the parent container for product
   target.parentNode.parentNode.remove();
   calculateAll();
 }

 // ITERATION 5

 function createProduct() {
   //... your code goes here


   if( !(createProductName.value &&  createProductPrice.value > 0) ) {
     alert('Please Fill all required fields');
     return;
   };
   const product = document.querySelector('.product');
   // Copy the whole element 
   const newProduct = product.cloneNode(true);


   // Element Selected 
   const newProductName = newProduct.querySelector('.name span');
   const newProductPrice = newProduct.querySelector('.price span');
   const newProductQuantity = newProduct.querySelector('.quantity input');
   const newProductSubtotal = newProduct.querySelector('.subtotal span');
   const newProductBtn = newProduct.querySelector('.btn');

   // Input Selected 
   const  productName = document.querySelector('.create-product input[type="text"]');
   const  unitPrice = document.querySelector('.create-product input[type="number"]');

   // Inject the html new  with values for new row 
   newProductName.innerText = productName.value;
   newProductPrice.innerText = unitPrice.value;
   newProductQuantity.value = "0";
   newProductSubtotal.innerText = "0";
   newProductBtn.addEventListener('click', removeProduct);

   // Push the element into table
   const tbody = document.querySelector('#cart tbody');
   tbody.appendChild(newProduct);
   cleanInputField();
 }

 // Clean Input Field from each 
 function cleanInputField(){

     // Set the value for the new row 
     createProductName.value = '';
     createProductPrice.value = 0;
 }

 window.addEventListener('load', () => {
   // Calculate Prices Btn calls 
   const calculatePricesBtn = document.getElementById('calculate');
   calculatePricesBtn.addEventListener('click', calculateAll);

   // Remove Product Btn delete Selected all butons
   const removeProductBtn  = document.querySelectorAll('.action .btn-remove');

   // Set event listener for each buttons
   for (let index = 0; index < removeProductBtn.length; index++) {
     const btn = removeProductBtn[index];
     btn.addEventListener('click', removeProduct);
   }

   //... your code goes here
   // Set event listener for create button 
   const createBtn = document.querySelector('#create');
   createBtn.addEventListener('click', createProduct);
 });