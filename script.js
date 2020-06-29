// fetch

const CAT_IMG = 'https://api.thecatapi.com/v1/images/search';
const DOG_IMG = 'https://api.thedogapi.com/v1/images/search';
const allBtn = document.querySelectorAll('.buttons');
let img = document.querySelector('.image')

allBtn.forEach(element => {
   element.addEventListener('click', (val)=>{
      fetch(val.target.value)
      .then(Response => {
         Response.json()
            .then(data => {
               img.src = data[0].url;
               img.alt = 'img';               
               console.log(data[0].url);
            });
      });
   })
   
});
