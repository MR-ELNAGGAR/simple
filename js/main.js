let arr = [
  {
    title: "Oversize white t-shirt",
    describtion:
      "Oversize white T-shirt made of bolivar fabric with Front an back printing and available in sizes <br/> (large - x large - xx large).",
    img1SRC: "imgs/t_shirts/t_shirt1_1.webp",
    img2SRC: "imgs/t_shirts/t_shirt1_2.webp",
    img3SRC: "imgs/t_shirts/t_shirt1_3.webp",
    priceAfter: "400",
    priceBefore: "290",
  },
  {
    title: "Oversize black t-shirt",
    describtion:
      "Oversize black T-shirt made of bolivar fabric with Front an back printing and available in sizes <br/> (large - x large - xx large).",
    img1SRC: "imgs/t_shirts/t_shirt2_1.webp",
    img2SRC: "imgs/t_shirts/t_shirt2_2.webp",
    img3SRC: "imgs/t_shirts/t_shirt2_3.webp",
    priceAfter: "400",
    priceBefore: "290",
  },
  {
    title: "Oversize melt-green t-shirt",
    describtion:
    "Oversize melt-green T-shirt made of bolivar fabric with Front an back printing and available in sizes <br/> (large - x large - xx large).",
    img1SRC: "imgs/t_shirts/t_shirt3_1.webp",
    img2SRC: "imgs/t_shirts/t_shirt3_2.webp",
    img3SRC: "imgs/t_shirts/t_shirt3_3.webp",
    priceAfter: "400",
    priceBefore: "290",
  },
  {
    title: "Oversize black t-shirt",
    describtion:
      "Oversize black T-shirt made of bolivar fabric with Front an back printing and available in sizes <br/> (large - x large - xx large).",
    img1SRC: "imgs/t_shirts/t_shirt4_1.webp",
    img2SRC: "imgs/t_shirts/t_shirt4_2.webp",
    img3SRC: "imgs/t_shirts/t_shirt4_3.webp",
    priceAfter: "400",
    priceBefore: "290",
  },
];
let productsDiv = document.querySelector(".products");

arr.forEach((productData) => {
  let productInnerHTML = `
            <div class="img">
              <img src="${productData.img1SRC}" alt="" />
            </div>

            <div class="text">
              <h1 class="name">${productData.title}</h1>
              <div class="price">
                <p><span>Price: </span> <span class="priceAfter">${productData.priceAfter}-EG</span> ${productData.priceBefore}-EG</p>
              </div>
            </div>
  `;
  let product = document.createElement("div");
  product.className = "product";
  product.innerHTML = productInnerHTML;
  productsDiv.appendChild(product);

  product.addEventListener("click", () => {
    let productTabDiv = document.querySelector(".productTab");
    productTabDiv.className = "productTab";
    let productTabInnerHTML = `
                <div class="close">
          <span class="line line1"></span>
          <span class="line line2"></span>
        </div>
        <div class="sliderImgs">
          <!-- ########################################################### -->
          <div class="slider">
            <div class="list">
              <div class="item">
                <img class="img1" src="${productData.img1SRC}" alt="" />
              </div>

              <div class="item">
                <img class="img2" src="${productData.img2SRC}" alt="" />
              </div>

              <div class="item">
                <img class="img3" src="${productData.img3SRC}" alt="" />
              </div>
            </div>

            <div class="buttons">
              <button id="prev"><</button>
              <button id="next">></button>
            </div>

            <ul class="dots">
              <li class="active"></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <!-- ########################################################### -->
        </div>

        <div class="detailts">

          <div class="titleTap"><h1 class="name">${productData.title}</h1></div>
          
          <div class="describtion">

            <p>
              <span>Describtion : </span>${productData.describtion}
            </p>

          </div>

          <div class="price after"><p>${productData.priceAfter}-EG</p></div>

          
          <div class="price before">
            <p><span>Price : </span>${productData.priceBefore}-EG</p>
          </div>


        </div>
    `;
    productTabDiv.innerHTML = productTabInnerHTML;

    let closer = document.querySelector(".close");
    closer.addEventListener("click", () => {
      productTabDiv.className = "productTab hide";
    });
    // #################################################################################################
    if (productTabDiv.className == "productTab") {
      let slider = document.querySelector(".slider .list");
      let items = document.querySelectorAll(".slider .list .item");
      let next = document.getElementById("next");
      let prev = document.getElementById("prev");
      let dots = document.querySelectorAll(".slider .dots li");

      let lengthItems = items.length - 1;
      let active = 0;
      next.onclick = function () {
        active = active + 1 <= lengthItems ? active + 1 : 0;
        reloadSlider();
      };
      prev.onclick = function () {
        active = active - 1 >= 0 ? active - 1 : lengthItems;
        reloadSlider();
      };
      let refreshInterval = setInterval(() => {
        next.click();
      }, 3000);
      function reloadSlider() {
        slider.style.left = -items[active].offsetLeft + "px";
        //
        let last_active_dot = document.querySelector(".slider .dots li.active");
        if (last_active_dot != null) {
          last_active_dot.classList.remove("active");
          dots[active].classList.add("active");
        }

        clearInterval(refreshInterval);
        refreshInterval = setInterval(() => {
          next.click();
        }, 3000);
      }

      dots.forEach((li, key) => {
        li.addEventListener("click", () => {
          active = key;
          reloadSlider();
        });
      });
      window.onresize = function (event) {
        reloadSlider();
      };
    }

    // #################################################################################################
  });
});
