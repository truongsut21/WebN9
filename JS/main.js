//---------- hang moi ve
import { data } from "./data.js";
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const chidren = data.chidren
const jacket = data.jacket
const male = data.male
let htmlHangMoiVe = []

// su ly lan chuot hien navbar
// ==================== show scroll up =================
function scrollTop() {
  const scrollTop = document.getElementById("fixNav");

  if (this.scrollY >= 130) {
    scrollTop.classList.add("fixNav");
  } else {
    scrollTop.classList.remove("fixNav");
  }
}
window.addEventListener("scroll", scrollTop);

// tao local gio hang
let listCart = JSON.parse(localStorage.getItem("LIST_CARD_SHOP-N9"))

if(!listCart){
  localStorage.setItem("LIST_CARD_SHOP-N9", JSON.stringify([]));
}







male.map((item, index) => {
  htmlHangMoiVe.push(
    `
        <div class="card h-100" style="width: 18rem;" onclick="setLocal(['jacket',${index}])">
              <img class="card-img-top card-img-1" src="${item.img[0]}" alt="Card image cap" >
              <img class="card-img-top card-img-2" src="${item.img[1]}" alt="Card image cap" >

              <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">${item.sale}</p>
                <h4 class="card-title text-info">${item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} VNĐ</h4>
                <p><a href="" class=" text-white" data-toggle="modal" data-target="#myModal2"><button type="button"
                  class="btn btn-info"> <i class="fas fa-shopping-cart pr-2"></i>Mua ngay</button><i
                  class="fas fa-user"></i></a> <strong><a href="" style="color: rgb(1, 105, 119);">xem chi tiết</a></strong>
              </p>
              </div>
            </div>
        `
  )


})
$('.hangMoiVe').innerHTML = htmlHangMoiVe.join('')
$('.hangMoiVesm').innerHTML = htmlHangMoiVe.join('')


let hangmoihtml = []
jacket.map((item, index) => {
  hangmoihtml.push(
    `
        <div class="card h-100" style="width: 18rem;" onclick="setLocal(['jacket',${index}])">
              <img class="card-img-top card-img-1" src="${item.img[0]}" alt="Card image cap" class="fluid" ">
              <img class="card-img-top card-img-2" src="${item.img[1]}" alt="Card image cap" class="fluid" ">
              <img class="card-img-top img-sale" src="../img/salepng.png" alt="Card image cap" class="fluid" style="    position: absolute;
              top: 0px;
              width: 138px;">
              
              <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
            
                <h6 class="gachchu">44.990.000</h6>
                <h4 class="card-title text-danger">${item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}VNĐ</h4>
                <p><a href="" class=" text-white" data-toggle="modal" data-target="#myModal2"><button type="button"
                class="btn btn-info"> <i class="fas fa-shopping-cart pr-2"></i>Mua ngay</button><i
                class="fas fa-user"></i></a> <strong><a href="" style="color: rgb(1, 105, 119);">xem chi tiết</a></strong>
            </p>
              </div>
            </div>
        `
  )
})
$('.giamGiasmhtml').innerHTML = hangmoihtml.join('')
$('.hangmoihtml').innerHTML = hangmoihtml.join('')




