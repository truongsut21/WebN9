import { data } from "./data.js";
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const chidren = data.chidren
const jacket = data.jacket
const male = data.male



let info = JSON.parse(localStorage.getItem('ITEM_SHOP_N9'))


if (!info) {
  localStorage.setItem('ITEM_SHOP_N9', JSON.stringify(['jacket', 0]))
}
function scrollTop() {
  const scrollTop = document.getElementById("fixNav");

  if (this.scrollY >= 130) {
    scrollTop.classList.add("fixNav");
  } else {
    scrollTop.classList.remove("fixNav");
  }
}

window.addEventListener("scroll", scrollTop);
console.log('info', info)


const item = data[info[0]][info[1]]



console.log(item)
let sliderForhtml = []
$('#name-item').innerHTML = item.name
$('#price-item').innerHTML = item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "VND"
$('#description-item').innerHTML = 'MÔ TẢ: ' + item.description
item.img.map(item => {
  sliderForhtml.push(
    `
        <div><img
                      src="${item}"
                      alt="" class="img-rounded imgShow" alt="Cinque Terre" height="50%">
                  </div>
        `
  )
})
$('.slider-for').innerHTML = sliderForhtml.join(',')


let sliderNavhtml = []
item.img.map(item => {
  sliderNavhtml.push(
    `
        <div><img
                      src="${item}"
                      alt="" class="img-thumbnail">
                    </div>
        `
  )
})
$('.slider-nav').innerHTML = sliderNavhtml.join(',')



