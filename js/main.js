//change nav on scroll

window.addEventListener('scroll', ()=>{
    document.querySelector('nav').classList.toggle
    ('window-scroll',window.scrollY > 0)
})



//show /hide fa questions

const faqs = document.querySelectorAll('.faq'); // we get all in faqs

faqs.forEach(faq =>{
    faq.addEventListener('click',()=>{
        faq.classList.toggle('open');

        //change ICON
        const icon = faq.querySelector('.faq__icon i');
        if(icon.className =='uil uil-plus'){
            icon.className = "uil uil-minus"
        }else{
            icon.className = "uil uil-plus"
        }

    })

    })

