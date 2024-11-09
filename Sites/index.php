<?php
include_once 'database/DBC.php'
?>

<h1>Index 1</h1>
<p>
Blogito je moderní a přehledná webová platforma zaměřená na sdílení inspirativních článků, osobních příběhů a užitečných tipů.
 Uživatelé zde mohou najít široké spektrum témat, od cestování a životního stylu až po zdraví a technologie. 
 Blogito podporuje kreativitu a umožňuje uživatelům snadno publikovat své vlastní příspěvky, sdílet názory a navazovat spojení s ostatními autory.</p>
<?php 
    $sql = "SELECT * FROM nodes;";
    $result = mysqli_query($connection, $sql);
    $result_check = mysqli_num_rows($result);
    if ($result_check > 0){
        while ($row = mysqli_fetch_assoc($result)){
            echo $row['user_uid'];
        }
    }
?>