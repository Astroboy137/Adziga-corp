const catalog = []

function add_box(kol) {
    console.log(0)
    var box = document.createElement('div')
    box.className = 'block'
    box.innerHTML = '<div class="card_top">\
        <div class="card_image">\
            <a href="#"><img src="" alt=""></a>\
        </div>\
    </div>\
    <!-- пока-что только так, остальные лучше через js генерировать -->\
    <div class="card_bottom">\
        <?php\
            $out = "SELECT * FROM content WHERE id = ${i}";\
            $res = $conn->query($out);\
            while($row = $res->fetch_assoc()){\
                echo "<p>",\
                $row["name"],"</br>", $row["value"],\
                "</p>";\
            }\
        ?>\
        <script>let i = 4\
    i++\
    </script>\
    <button id="like" class="like" onclick="like('+kol+')">\
    </div>'
    
    document.getElementById('catalog').append(box)
}
for (let index = 0; index < 10; index++) {
    add_box(index)
    
}
// setTimeout(() => {
//     let btn_flag = 1
//     const like_btns = document.getElementsByClassName('like')
//     for (let index = 0; index < like_btns.length; index++) {
//         const el = like_btns[index];
//         console.log(el)
//         el.onclick = function () {
//             console.log(btn_flag)
//         }
//         btn_flag++
//     }
// }, 500);
// надобудет добавить базу данных для лайков
// пока что это просто анимация лайка
var flag = 1
function like(elm_num) {
    const btn = document.getElementsByClassName('like')[elm_num]
    const btn_stl = btn.style
    if (flag > 0) {
        btn_stl.opacity = 0
        btn_stl.backgroundSize = '10px'
        setTimeout(() => {
            btn_stl.backgroundImage = "url('img/buttons/like_on.png')"
            btn_stl.opacity = 1
            btn_stl.backgroundSize = '32px'
        }, 150);
    } else if (flag < 0) {
        btn_stl.opacity = 0
        btn_stl.backgroundSize = '10px'
        setTimeout(() => {
            btn_stl.backgroundImage = "url('img/buttons/like_off.png')"
            btn_stl.opacity = 1
            btn_stl.backgroundSize = '32px'
        }, 150);
    }
    flag *= -1
}