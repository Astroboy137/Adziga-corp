

function add_box() {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'menu.php');
    xhr.onload = function() {
    if (xhr.status === 200) {
        console.log(xhr.responseText);
        var box = document.createElement('div')
        
        box.className = 'block'
        box.innerHTML = '<div class="card_top">\
        <div class="card_image">\
            <a href="#"><img src="" alt=""></a>\
        </div>\
        </div>\
        <!-- пока-что только так, остальные лучше через js генерировать -->\
        <div class="card_bottom">\
        <p>'+xhr.responseText+'</p>\
        </div>'
    document.getElementById('catalog').append(box)
    } else {
        console.log('Ошибка получения данных');
    }
    };
    i=4
    xhr.send(i);
}
for (let index = 4; index < 10; index++) {
    add_box()
}