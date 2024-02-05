window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import '@fortawesome/fontawesome-free/js/all.min';

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


document.querySelectorAll('.add-to-cart-btn').forEach(item => {
    item.addEventListener("click", () => {
        alert("تم إضافة المنتج إلى عربة الشراء بنجاح")
     })
})

document.getElementById("copyright").innerHTML = "جميع الحقوق محفوظة للمتجر لعام" + new Date().getFullYear();

console.log("أهلا بك في متجر أنوسة للأنوثة")