import { data } from "./data.js";
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const chidren = data.chidren
const jacket = data.jacket
const male = data.male


let listCart = JSON.parse(localStorage.getItem("LIST_CARD_SHOP-N9"))

let listCartShowHTML = []


function scrollTop() {
    const scrollTop = document.getElementById("fixNav");
  
    if (this.scrollY >= 130) {
      scrollTop.classList.add("fixNav");
    } else {
      scrollTop.classList.remove("fixNav");
    }
  }
  window.addEventListener("scroll", scrollTop);


console.log('listCart', listCart)
console.log('data',data['jacket'][0])


if (listCart || !listCart == []) {
    $('#total-cart').innerHTML = '400.000 VNĐ'
    listCart.map(info => {
        console.log('info',info)
        const item = data[info[0]][info[1]]

        let itemCart = `
        <div class="row mb-1">
        <div class="list-cart col-12 ">
          <hr>
          <div class="row">
            <div class="col-2">
              <img
                src="${item.img[0]}"
                alt="" width="100%" class="info-img-cart">
            </div>
            <div class="col-4 ml-3">
              <h5>Áo Sweater Dệt Graphic Nam MSW 1009</h5> <br>
              <h6>Color: Đen <br>
                Sex: Men <br>
                Size: XL</h6>
            </div>

            <div class="col-4 sl-cart">
              <h3>SL: <span>+</span> 1 <span>-</span></h3>
              <h2>200.000 VNĐ</h2>
            </div>
            <div class="col-1">
              <button type="button" class="btn btn-light btn-sm"><i class="fas fa-times"></i></button>

            </div>
          </div>

        </div>
        <hr>
      </div>
        `
        listCartShowHTML.push(itemCart)

    })
    $('.show-item-cart').innerHTML = listCartShowHTML.join(',')

}
else {
    // khong co san pham nao
    alert('no')
    $('.show-item-cart').innerHTML = '<h5 class="mt-5"> BẠN CHƯA CÓ SẢN PHẨM NÀO </h5>'
}


localStorage.setItem("LIST_CARD_SHOP-N9", JSON.stringify([]));
listCart = JSON.parse(localStorage.getItem("LIST_CARD_SHOP-N9"))