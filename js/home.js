let slider_cfg = [
    "https://mobimg.b-cdn.net/v3/fetch/74/74739e1770f31cdbfdde99cc0b2925d3.jpeg?w=1470&r=0.5625",
    "https://w-dog.ru/wallpapers/10/18/426720569630139/solnechnyj-vodopad-les-nebo-solnce-voda.jpg",
    "https://i.pinimg.com/originals/76/cd/79/76cd79a8da202d46c88fc728e30e690f.jpg",
    "https://klike.net/uploads/posts/2022-09/1662635483_g-8.jpg",
    'img/fire.jpg',
    'img/fire3.png'
]
let num = 0
const slider_image = document.getElementById('slider_image');
const img_style = slider_image.style
function slide(side) {
    document.getElementById('slider').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
    if (side == 'right') {
        img_style.opacity = '0'
        img_style.transform = 'translate(-500px, 0)'
        img_style.height = '330px'
        setTimeout(() => {
            img_style.transition = 0
            img_style.transform = 'translate(500px, 0)'
            if (num != 0) {
                num--
            } else {
                num = slider_cfg.length - 1
            }
            slider_image.src = slider_cfg[num]
        }, 250);
        setTimeout(() => {
            img_style.transition = '.25s'
            img_style.transform = 'translate(0, 0)'
            img_style.opacity = 1
            img_style.height = '400px'
        }, 500);
    } else if (side == 'left') {
        img_style.opacity = '0'
        img_style.transform = 'translate(500px, 0)'
        img_style.height = '330px'
        setTimeout(() => {
            img_style.transition = 0
            img_style.transform = 'translate(-500px, 0)'
            if (num != 0) {
                num--
            } else {
                num = slider_cfg.length - 1
            }
            slider_image.src = slider_cfg[num]
        }, 250);
        setTimeout(() => {
            img_style.transition = '.25s'
            img_style.transform = 'translate(0, 0)'
            img_style.opacity = 1
            img_style.height = '400px'
        }, 500);
    }
}