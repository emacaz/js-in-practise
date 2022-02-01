// CUPONES
const cupones = [navidad, semanasanta, medioano, reyes];


function calcularPrecioConDescuento(precio, descuento) {

    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}


function onClickButtonPriceDiscount(coupon) {

    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;

    const resultP = document.getElementById("resultP");

    if(coupon) {
        discountValue = discountValue + coupon;
        const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

        resultP.innerText = "El precio con descuento es: $" + precioConDescuento;

    } else {
        const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

        resultP.innerText = "El precio con descuento es: $" + precioConDescuento;
    }
}

function existCoupon() {
    const userCoupon = document.getElementById("couponApply");
    const couponValue = userCoupon.value;

    const existCoupon = document.getElementById("existCoupon");

    for (let i = 0; i < cupones.length; i++){
        if (couponValue === cupones[i]){
            if (couponValue === "navidad") {
                onClickButtonPriceDiscount(10);
            } else if (couponValue === "semanasanta") {
                onClickButtonPriceDiscount(20);
            } else if (couponValue === "medioano") {
                onClickButtonPriceDiscount(30);
            } else {
                onClickButtonPriceDiscount(40);
            }
        } else {
            existCoupon.innerText = "El cupón no existe*";
        }
    }

}