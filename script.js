// fetch
//!! у кошек нет свойства breeds
const CAT_IMG = 'https://api.thecatapi.com/v1/images/search';
const DOG_IMG = 'https://api.thedogapi.com/v1/images/search';
const allBtn = document.querySelectorAll('.buttons');
let img = document.querySelector('.image')
let wrap = document.querySelector('.wrapper');

let newDiv = document.createElement('div');
newDiv.classList.add('prop');

allBtn.forEach(element => {
   element.addEventListener('click', (val) => {
      if (wrap.children[0].className == 'prop') {
         wrap.children[0].remove();
      }
      if (val.target.value == DOG_IMG) {
         fetch(val.target.value)
            .then(Response => {
               Response.json()
                  .then(data => {
                     img.src = data[0].url;
                     img.alt = 'dog';
                     console.log(data[0].breeds[0]);

                     newDiv.innerHTML = `<span>Порода - ${data[0].breeds[0].name}</span>
                                        <span>Вес - ${data[0].breeds[0].weight.metric} кг</span>`
                     wrap.prepend(newDiv)

                  });
            });
      } else if (val.target.value == CAT_IMG) {
         fetch(val.target.value)
            .then(Response => {
               Response.json()
                  .then(data => {
                     img.src = data[0].url;
                     img.alt = 'cat';
                     console.log(data[0]);
                  });
            });
      }
   });
});
