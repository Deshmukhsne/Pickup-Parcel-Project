<?php
$host = "localhost";
$user = "root";
$password = "";
$database = "admin_panel";

$conn = new mysqli($host, $user, $password, $database);

if ($conn->connect_error) {
    echo "Database connected successfully!";
}
?>
