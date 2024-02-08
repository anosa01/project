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

document.querySelectorAll('.size-option input[type="radio"]').forEach(item => {
    item.addEventListener('change', () => {
        document.querySelectorAll('.size-option').forEach(i => {
            i.classList.remove('active')
            })
        item.parentNode.parentNode.classList.add('active')
    })
})

document.querySelectorAll('.color-option input[type="radio"]').forEach(item => {
    item.addEventListener('change', () => {
        document.querySelectorAll('.color-option').forEach(i => {
            i.classList.remove('active')
            })
        item.parentNode.parentNode.classList.add('active')
    })
})

// حساب سعر إجمالي المنتج

// document.querySelectorAll('.quantity').
// document.querySelectorAll('#product-quantity').
// document.querySelectorAll('[data-product-quantity]').

document.querySelectorAll('[data-product-quantity]').forEach(item => {
    item.addEventListener('change', () => {
        const newQuantity = item.value;
        const parent = item.closest('[data-product-info]');
        const pricePerUnit = parent.getAttribute('data-product-price');
        const totalPriceForProduct = newQuantity * pricePerUnit
        parent.querySelector('.total-price-for-product').innerHTML = totalPriceForProduct + " د.ك";

        calculateTotalPrice()
    })
})

document.querySelectorAll('[data-remove-from-card]').forEach(item => {
    item.addEventListener('click', () => {
        item.closest('[data-product-info]').remove()
        calculateTotalPrice()
    })
})

function calculateTotalPrice() {
    let totalPriceForAllProduct = 0;
    document.querySelectorAll('[data-product-info]').forEach(product => {
        const pricePerUnite = product.getAttribute('data-product-price');
        const quantity = product.querySelector('[data-product-quantity]').value
        const totalPriceForProduct = pricePerUnite * quantity

        totalPriceForAllProduct = totalPriceForAllProduct + totalPriceForProduct;
    })
    document.getElementById('total-price-for-all-product').innerHTML = totalPriceForAllProduct + ' د.ك'
}  
document.getElementById("copyright").innerHTML = "جميع الحقوق محفوظة للمتجر لعام" + new Date().getFullYear();

const citiesByCountry = {
    kwt:['الأحمدي','الجهراء','العاصمة','الفروانية','حولي','مبارك الكبير'],
    ksa:['الرياض','الدرعية','الخرج','الدوادمي','المجمعة','القويعية','الأفلاج','وادي الدواسر','الزلفي','شقراء','حوطة بني تميم',
        'عفيف','الغاط','السليل','ضرما','المزاحمية','رماح','ثادق','حريملاء','الحريق','مرات','الرين','الدلم','أخرى'],
    qtr:['الدوحة','الغويرية','الجميلية','الخور','الوكرة','الريان','جريان البطنة','الشمال','أم صلال','مسيعيد','أخرى'],
    brn:['العاصمة','المحرق','الشمالية','الجنوبية','أخرى'],
    ae:['أبوظبي','الشارقة','الفجيرة','أم القيوين','دبي','رأس الخيمة','عجمان','أخرى'],
    omn:['الداخلية','الظاهرة','شمال الباطنة','جنوب الباطنة','البريمي','الوسطى','شمال الشرقية','جنوب الشرقية','ظفار','مسقط','مسندم','أخرى']
}

document.querySelectorAll('select[name="country"]').forEach(item => {
    item.addEventListener('change', () => {
        const country = item.value

        const cities = citiesByCountry[country]

        document.querySelectorAll('#paymentcities option').forEach(option => option.remove())

        const firstOption = document.createElement('option')
        const optionText = document.createTextNode('اختر المدينة')
        firstOption.appendChild(optionText)
        firstOption.setAttribute('value', '')
        firstOption.setAttribute('disabled', 'true')
        firstOption.setAttribute('selected', 'true')

        const city_options = document.getElementById('paymentcities')
        city_options.appendChild(firstOption)

        cities.forEach(city => {
            const newOption = document.createElement('option')
            const optionText = document.createTextNode(city)
            newOption.appendChild(optionText)
            newOption.setAttribute('value', city)
            city_options.appendChild(newOption)
        })
    })
})

// أخفاء وإظهار حقول ادخال البطاقة الإئتمانية

document.querySelectorAll('#form-checkout input[name="payment-method"]').forEach(item => {
    item.addEventListener('change', () => {
        const paymentMethod = item.value;

        const creditCardInputs = document.querySelectorAll('#credit_card_info input');

        if(paymentMethod === 'on_delivery') {
            creditCardInputs.forEach(input => {
                input.style.display='none'
            })
        } else {
            creditCardInputs.forEach(input => {
                input.style.display='block'
            })
        }
    })
})


console.log("أهلا بك في متجر أنوسة للأنوثة")