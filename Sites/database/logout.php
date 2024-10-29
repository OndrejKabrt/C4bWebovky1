<?php

session_destroy();

session_destroy();
$_SESSION["loggedin"] = false;
header("Location: / ");