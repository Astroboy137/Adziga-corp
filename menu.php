<?php
            $i=$_POST['i'];
            $conn = new mysqli("localhost",'root','','adziga-bd');
            $out = "SELECT * FROM content WHERE id = $i";
            $res = $conn->query($out);
            while($row = $res->fetch_assoc()){
                echo $i;
                echo $row["name"],'</br>';
                echo $row["value"];
            };
        ?>
    