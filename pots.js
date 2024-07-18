let accessory = document.querySelector('.accessories');



for (var i = 0; i < accessories.length; i++) {
  // Tab to edit
  let x = accessories[i].off;
  /*discount*/
  function discount() {
    
    let prie = accessories[i].price;
   let price = Number(prie.substr(1,prie.length - 1));
    
    let total =(price * x)/100;
    
    return total;
  }
  
 /*
 fashion product list
 */
 if(i === 3){
   break;
 }
  accessory.innerHTML += `
    <div class="one hidden" data-aos-delay='100' data-aos='zoom-in-up' data-aos-duration='1000'>
        
        <div class="image">
        <img src="${accessories[i].image}" alt="image">
        <span class="fa fa-heart wishlist" aria-hidden="true"></span>
      </div>
      
      <div class="content">
        <span class="name">${accessories[i].name}</span>
        
        <div class="off">
        <span class ="price">${accessories[i].price}</span>
        <del class="priceOff">#${discount()}<del>
        </div>
        
        <div class="btns">
          <button class="addCart">Add to Cart</button>
        </div>
        
      </div>
      
      </div>
     
  `;
  
  
}
