function create_imgs(){
    const spis = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'purple']

    for (let i = 0; i < spis.length; i++) {
        const x = spis[i];
        var box = document.createElement('div')
        box.className = 'slider_cont'
        box.innerHTML = '<img>'+x+'</img>'
        document.getElementById('slider').append(box)
    }
}
create_imgs()

function slide(side) {
    document.getElementById('slider').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
}