<h2>Добро пожаловать {{\Auth::user()->email}}</h2>
<br>
@if(\Auth::user()->is_admin == 1)
    <a href="{{ route('admin')  }}">В админку</a>
@endif
<div>
    <a href="{{ route('logout') }}">Выйти</a>
</div>