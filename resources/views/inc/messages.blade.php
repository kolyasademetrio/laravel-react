@if(session()->has('success'))
    <script type="text/javascript">
        $(function(){
            alertify.alert("{!! session()->get('success') !!}");
            alertify.success("{!! session()->get('success') !!}");
        });
    </script>
@elseif(session()->has('error'))
    <script type="text/javascript">
        $(function(){
            alertify.alert("{!! session()->get('error') !!}");
            alertify.error("{!! session()->get('error') !!}");
        });
    </script>
@endif

@if ($errors->any())
    @foreach ($errors->all() as $error)
        <script type="text/javascript">
            $(function(){
                alertify.error("{{ trans($error) }}");
            });
        </script>
    @endforeach
@endif




{{--
{{ var_dump($errors->any()) }}

@if($errors->any())
    --}}
{{--{{ var_dump($errors) }}--}}{{--


    {{ var_dump($errors) }}
    <script type="text/javascript">
        $(function(){
            window.alertify.alert("{{ session('error') }}");
            window.alertify.error("{{ session('error') }}");
        });
    </script>
@endif--}}
