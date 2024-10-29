<?php
include_once 'DBC.php';

$connection = DBC::getConnection();

$statement = $connection->prepare("SELECT * FROM post ORDER BY id DESC");
$statement->execute();
$posts = $statement->fetchAll();

foreach($posts as $post){
    echo '<div class="container">';
    echo '<div>';
    echo '<p>' . $post['creator'] . ' <br> ' . $post['text'] .'</p>';
    echo '</div>';
    echo '<br>';
    echo '</div>';
}
?>