<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel + React</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">

        <!-- Styles -->
        <style>
            html, body {
                background-color: #fff;
                color: #636b6f;
                font-family: 'Raleway', sans-serif;
                font-weight: 100;
                height: 100vh;
                margin: 0;
            }

            .full-height {
                height: 100vh;
            }

            .flex-center {
                align-items: center;
                display: flex;
                justify-content: center;
            }

            .position-ref {
                position: relative;
            }

            .top-right {
                position: absolute;
                right: 10px;
                top: 18px;
            }

            .content {
                text-align: center;
            }

            .title {
                font-size: 84px;
            }

            .todo {
                color: #636b6f;
                padding: 0 25px;
                font-size: 12px;
                font-weight: 600;
                letter-spacing: .1rem;
                text-decoration: none;
                text-transform: uppercase;
                width: 50%;
                margin: 0 auto;
                text-align: left;
            }

            .m-b-md {
                margin-bottom: 30px;
            }
        </style>
    </head>
    <body>
        <div class="flex-center position-ref full-height">
            @if (Route::has('login'))
                <div class="top-right links">
                    @if (Auth::check())
                        <a href="{{ url('/home') }}">Home</a>
                    @else
                        <a href="{{ url('/login') }}">Login</a>
                        <a href="{{ url('/register') }}">Register</a>
                    @endif
                </div>
            @endif

            <div class="content">
                <div class="title m-b-md">
                    Bruno Alves da Silva
                </div>
                
                <ul class="todo">
                    <li>Documentação</li>
                    <li>Interface publica</li>
                    <li>Interface privada</li>
                </ul>
            </div>
        </div>
        
        <script src="https://www.gstatic.com/firebasejs/3.7.3/firebase.js"></script>
        <script>
        (function(){
            // Initialize Firebase
            const config = {
                apiKey: "AIzaSyBoZVotZ8rq7wdiA6cLTuAHtS2A3OICkps",
                authDomain: "meus-alertas.firebaseapp.com",
                databaseURL: "https://meus-alertas.firebaseio.com",
                storageBucket: "meus-alertas.appspot.com",
                messagingSenderId: "747585815388"
            };
            firebase.initializeApp(config);
            
            // Autenticação
            const auth = firebase.auth();
            auth.onAuthStateChanged(firebaseUser => { // Evento que escuta as informações de autenticação
                if (firebaseUser) {
                    //console.table(firebaseUser);
                } else {
                    console.log("Not logged!");
                }
            });
            
            const user = "contato@alvesbruno.com";
            const pass = "senhasenha";
            
            let login = auth.signInWithEmailAndPassword(user, pass);
                login.then(firebaseUser => { console.log("Usuario Logado"); });
                login.catch(e => { console.log(e.message); });
                
            auth.signOut();
            
            function writeNewPost(uid, username, picture, title, body) {

              // Get a key for a new Post.
              var newPostKey = firebase.database().ref().child('posts').push().key;
              
              // A post entry.
              var postData = {
                author: username,
                uid: uid,
                body: body,
                title: title,
                starCount: 0,
                authorPic: picture,
                key: newPostKey
              };

              // Write the new post's data simultaneously in the posts list and the user's post list.
              var updates = {};
              updates['/posts/' + newPostKey] = postData;
              updates['/user-posts/' + uid + '/' + newPostKey] = postData;

              return firebase.database().ref().update(updates);
            }
            
            writeNewPost(1, "bruno", "imagem.jpg", "Titulo do banco", "body do banco");
            
            //auth.createUserWithEmailAndPassword(user, pass);
            
            //auth.signInWithEmailAndPassword(email, password);   // Loga um usuário
            //auth.createUserWithEmailAndPassword(email, pass);   // Cria um usuário e senha
        })();
        </script>
    </body>
</html>
