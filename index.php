<!-- použito, z kodu pana učitele Pavláta -->

<?php
session_start();
$request = $_SERVER['REQUEST_URI'];

switch ($request) {
    case '':
    case '/':
        $redirect = '\Sites\index.php';
        break;
    case '/login':
        $redirect = '\Sites\LoginForm.php';
        break;
    case'/welcome':
        $redirect = '\Sites\Welcome.php';
        break;
    case '/register':
        $redirect = '\Sites\RegisterForm.php';
        break;
    case '/blogy':
        $redirect = '\Sites/database\Blogy.php';
        break;
    case '/blog':
        $redirect = '\Sites\BlogForm.php';
        break;     
    case '/database/login':
        $redirect = '\Sites\database\login.php';
        break;
    case '/database/register':
        $redirect = '\Sites\database\register.php';
        break;
    case '/database/logout':
        $redirect = '\Sites\database\logout.php';
        break;  
    case '/database/post':
        $redirect = '\Sites\database\post.php';
        break;
    default:
        http_response_code(404);
        require __DIR__ . '\Sites\404.php';
        exit();
}

$_SESSION['site'] = $redirect;
require_once __DIR__ . '/Sites/basic/Header.php';
require_once __DIR__ . $redirect ?? __DIR__ . '/Sites/index.php';
require_once __DIR__ . '/Sites/basic/Footer.php';


