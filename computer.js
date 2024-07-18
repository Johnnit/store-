let appliances = document.querySelector('.appliance');



for (var i = 0; i < appliance.length; i++) {
  // Tab to edit
  let x = appliance[i].off;
  /*discount*/
  function discount() {
    
    let prie = appliance[i].price;
   let price = Number(prie.substr(1,prie.length - 1));
    
    let total =(price * x)/100;
    
    return total;
  }
  
 /*
 fashion product list
 */
 
 
 if(screen.width === 360){
   
   if(i === 3){
   break;
 }
 }
 
  appliances.innerHTML += `
    <div class="one hidden" data-aos-delay='100' data-aos='zoom-in-up' data-aos-duration='1000'>
        
        <div class="image">
        <img src="${appliance[i].image}" alt="image">
        <span class="fa fa-heart wishlist" aria-hidden="true"></span>
      </div>
      
      <div class="content">
        <span class="name">${appliance[i].name}</span>
        
        <div class="off">
        <span class ="price">${appliance[i].price}</span>
        <del class="priceOff">#${discount()}<del>
        </div>
        
        <div class="btns">
          <button class="addCart">Add to Cart</button>
        </div>
        
      </div>
      
      </div>
     
  `;
  
  
}
