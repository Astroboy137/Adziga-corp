// function create_imgs(){
//     const spis = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'purple']

//     for (let i = 0; i < spis.length; i++) {
//         const x = spis[i];
//         var box = document.createElement('div')
//         box.className = 'slider_cont'
//         box.innerHTML = '<img>'+x+'</img>'
//         document.getElementById('slider').append(box)
//     }
// }
// create_imgs()

let slider_cfg = [
"https://mobimg.b-cdn.net/v3/fetch/74/74739e1770f31cdbfdde99cc0b2925d3.jpeg?w=1470&r=0.5625",
"https://w-dog.ru/wallpapers/10/18/426720569630139/solnechnyj-vodopad-les-nebo-solnce-voda.jpg",
"https://i.pinimg.com/originals/76/cd/79/76cd79a8da202d46c88fc728e30e690f.jpg",
"https://klike.net/uploads/posts/2022-09/1662635483_g-8.jpg"
]
let num = 0
function slide(side) {
    let slider_image = document.getElementById('slider_image');
    document.getElementById('slider').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
    slider_image.style.opacity = '0'
    setTimeout(function() {
        if (side == 'right') {
            if (num < slider_cfg.length - 1) {
                num++
            } else {
                num = 0
            }
            slider_image.src = slider_cfg[num]
        } else if (side == 'left') {
            if (num != 0) {
                num--
            } else {
                num = slider_cfg.length - 1
            }
            slider_image.src = slider_cfg[num]
        }
        slider_image.style.opacity = '1'
    },500)
}

// varibles

