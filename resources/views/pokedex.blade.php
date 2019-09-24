<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Pokedex App</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        <link href="../../css/app.css" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">

    </head>
    <body>
        {{--  pokedex red banner area --}}
        <div class="pokedex-header">
            <div class="container">
                <div class="col-md-12 pokedex-controllers">
                    <span>
                        <img src="{{url('images/pokedex-power.png')}}" alt="pokedex-control-power">
                    </span>
                    <span class="pokedex-controls">
                        <img src="{{url('images/pokedex-controls.png')}}" alt="pokedex-controls">
                    </span>
                </div>
                <div class="col-md-12 text-center pokemon-logo">
                    <img src="{{url('images/Pokemon-logo.png')}}" alt="pokemon logo">
                </div>
                <div class="col-md-12 text-center">
                    <img src="{{url('images/Ash-trainer.png')}}" alt="ash trainer">
                </div>
            </div>
        </div>
        {{--    pokedex pokemons list area    --}}
        <div class="flex-center position-ref full-height">
            <div class="content">
                <div id="pokedex-json" class="links">
                </div>
            </div>
        </div>
        <script src="js/app.js"></script>
    </body>
</html>
