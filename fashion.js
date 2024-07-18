let fashions = document.querySelector('.fashion');


for (var i = 0; i < fashion.length; i++) {
  // Tab to edit
  let x = fashion[i].off;
  /*discount*/
  function discount() {
    
    let prie = fashion[i].price;
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
  fashions.innerHTML += `
    <div class="one hidden" data-aos-delay='200' data-aos='zoom-in-up' data-aos-duration='1000'>
        
        <div class="image">
        <img src="${fashion[i].image}" alt="image">
        <span class="fa fa-heart wishlist" aria-hidden="true"></span>
      </div>
      
      <div class="content">
        <span class="name">${fashion[i].name}</span>
        
        <div class="off">
        <span class ="price">${fashion[i].price}</span>
        <del class="priceOff">#${discount()}<del>
        </div>
        
        <div class="btns">
          <button class="addCart">Add to Cart</button>
        </div>
        
      </div>
      
      </div>
     
  `;
  
  
}
