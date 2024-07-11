const cartWrapper = document.querySelector('.cart-wrapper');

window.addEventListener('click', function function_name(event) {

 
 if (event.target.hasAttribute ('data-cart')) {
   
  const card = event.target.closest('.card');
   

  const productInfo = {
  	id: card.dataset.id,
  	imgSrc: card.querySelector('.card-product__img').getAttribute('src'),
  	title: card.querySelector('.card-product__link').innerText,
  	proiz: card.querySelector('.card-product__desc').innerText,
    price: card.querySelector('.card-product__price_discount').innerText,
  };
if (window.products) {
    window.products.push(productInfo)
} else {
    window.products = []
}

const cartItemHTML = ` <div class="catalog-list__item" data-id="${productInfo.id}"><div class="card">
                              <div class="card-product__header">
                                <a href="Мидокалм.html" data-pjax="0">
                                  <div class="card-product__img_wrp">
                                  <img class="card-product__img" src="${productInfo.imgSrc}" alt="Мидокалм 150 мг № 30 табл п/плён оболоч" title="Мидокалм 150 мг № 30 табл п/плён оболоч">            </div>
                                </a>
                             </div>
                             <div class="card-product__main">
                               <div class="card-product__title">
                                <a class="card-product__link" name="name" href="${productInfo.title}" data-pjax="0">${productInfo.title}</a>
                               </div>
                             <div class="card-product__desc">
                             <div>${productInfo.proiz}</div>
                          </div>
                         </div>
                             <div class="card-product__footer">
                               <div class="card-product__prices">
                              <span class="card-product__price_discount" name="price" >${productInfo.price}</span>
                            </div>
                            
                             <div class="card-product__actions">
                  <button class="card-product__btn cart-add__btn" >Удалить</button>
                      </div>
                     </div>
                         </div>
                               </div>`;
document.getElementById('land').innerHTML += cartItemHTML
}

});
											