<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
        
        <link href="/img/favicon.png" rel="icon" />
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css" />
        <link href="css/app.css?{{time()}}" rel="stylesheet" type="text/css" />
        
        <title>SAMO - Sistema Financeiro</title>        
    </head>
    <body class="private-style-body">
        
        <section>
            <header class="main-header">
                <img class="logo" src="/img/logo-90.png" />
                <ul class="profile-menu">
                    <li><a href="#noOpen">
                            <img src="/img/profile.jpg" class="img-circle profile" />
                            Bruno Alves
                        </a>
                        <ul class="profile-sub-hidden">
                            <li><a href="about.asp">Meus dados</a></li>
                            <li><a href="/signin">Sair</a></li>
                        </ul>
                    </li>
                </ul>
            </header>
            
            <nav class="main-nav">
                <ul>
                    <li>
                        <a href="/profile">
                            <i class="glyphicon glyphicon-dashboard"></i>
                            <span>Perfil</span>
                        </a>
                    </li>
                    <li>
                        <a href="/finance">
                            <i class="glyphicon glyphicon-dashboard"></i>
                            <span>Finanças</span>
                        </a>
                    </li>
                    <li>
                        <a href="/user">
                            <i class="glyphicon glyphicon-dashboard"></i>
                            <span>Usuários</span>
                        </a>
                    </li>
                    <li>
                        <a href="/remenber">
                            <i class="glyphicon glyphicon-dashboard"></i>
                            <span>Lembrete</span>
                        </a>
                    </li>
                </ul>
            </nav>
            
            <main id="private-app" class="main-global"></main>
            <script type="text/javascript" src="js/PrivateIndex.js?{{time()}}"></script>
            
        </section>
        
    </body>
</html>
