const allBuy = document.querySelectorAll(".buy-btn")
allBuy.forEach(item => {
    item.addEventListener("click", (eo) => {
        // changer le buotton de ajouter au panier to ajouté
{

        item.setAttribute("disabled", "");
        item.classList.remove("buy-btn");
        item.innerHTML= " &#10004; Ajouté";
        item.style.background=" #71e971"; 
        
}
// ajouter l'article au panier
const card = document.querySelectorAll(".product")[0]
console.log(card);
const imgSrc = card.getElementsByClassName("img-fluid mb-3")[0].src
const name = card.getElementsByClassName("p-name")[0].innerText
const prix = card.getElementsByClassName("p-price")[0].innerText
const addedProduct = `<section id="cart-container" class="container my-5">
<table  width="100%">
<tbody>
    <tr>
        <td><a href="#"><i class="fas fa-trash-alt"></i></a></td>
        <td><img src="${imgSrc}" alt=""></td>
        <td><h5 style="padding-top: 0%;">${name}</h5></td>
        <td><h5 style="padding-top: 0%;">${prix}</h5></td>
        <td><input class="w-25 pl-1" value="1" type="number"></td>
        <td><h5 style="padding-top: 0%;">110.00£</h5></td>
    </tr> </tbody> </table></section>`
    allProducts.innerHTML = addedProduct;

    
      

    })


});













