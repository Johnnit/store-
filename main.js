

let fashion = [
   {
    name : 'Fashion Wears',
    image : 'Clothe.jpg',
    price : "#2000",
    off: 50
  },
  {
    name : 'Fashion Wears',
    image : 'Clothe.jpg',
    price : "#2500",
    off : 20
  },
  {
    name: 'Fashion Wears',
    image: 'Clothe.jpg',
    price: "#20000",
    off: 30
  },
  {
    name: 'Fashion Wears',
    image: 'Clothe.jpg',
    price: "#5000",
    off: 10
  },
   {
    name: 'Fash Wears',
    image: 'Clothe.jpg',
    price: "#2000",
    off : 60
  }
];


let appliance= [
   {
    name : 'Computer',
    image : 'Clothe.jpg',
    price : "#20000",
    off: 50
  },
  {
    name : 'Wrist watchs',
    image : 'Clothe.jpg',
    price : "#25000",
    off : 20
  },
  {
    name: 'Oraimo Cord',
    image: 'Clothe.jpg',
    price: "#2000",
    off: 30
  },
  {
    name: 'HP laptop',
    image: 'Clothe.jpg',
    price: "#500000",
    off: 10
  },
   {
    name: 'Flash drive',
    image: 'Clothe.jpg',
    price: "#2000",
    off : 60
  }
];



let accessories = [
   {
    name : 'Computer',
    image : 'Clothe.jpg',
    price : "#20000",
    off: 50
  },
  {
    name : 'Wrist watchs',
    image : 'Clothe.jpg',
    price : "#25000",
    off : 20
  },
  {
    name: 'Oraimo Cord',
    image: 'Clothe.jpg',
    price: "#2000",
    off: 30
  },
  {
    name: 'HP laptop',
    image: 'Clothe.jpg',
    price: "#500000",
    off: 10
  },
   {
    name: 'Flash drive',
    image: 'Clothe.jpg',
    price: "#2000",
    off : 60
  }
];



document.querySelector('.sign').onclick=()=>{
  open('signup.html');
}
document.querySelectorAll('.top').forEach((e)=>{
//e.setAttribute('data-aos','fade-out');
e.setAttribute('data-aos',"fade-right");
//e.setAttribute('data-aos-offset',"300");
  e.setAttribute('data-aos-easing',"ease-in-sine");
});
