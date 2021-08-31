document.querySelector('.menu').addEventListener('click', ()=>{
    document.querySelectorAll('.target').forEach((item)=>{
        item.classList.toggle('change')
    })
})

/* Change of Icons -Section 1*/
const icons=document.querySelectorAll('.section-1-icons i')
let i = 1

setInterval(() => {
    i++
    const icon = document.querySelector('.section-1-icons .change')
    icon.classList.remove('change')

if(i > icons.length){
    icons[0].classList.add('change')
    i = 1
} else {
    icon.nextElementSibling.classList.add('change')
}
}, 3600) // =3.6 seg
/* End of Change of Icons -Section 1*/