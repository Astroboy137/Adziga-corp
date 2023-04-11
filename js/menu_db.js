const = 

function add_box() {
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
    </div>'
    
    document.getElementById('catalog').append(box)
}
for (let index = 0; index < 10; index++) {
    add_box()
    
}