<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="admin.php" method="post" enctype="multipart/form-data">
        <input type="file" name="image" placeholder="картинка товара">
        <input type="text" placeholder="название товара" name="name">
        <input type="text" placeholder="цена товара" name="value">
        <input type="submit" value="submit">
    </form>
</body>
</html>