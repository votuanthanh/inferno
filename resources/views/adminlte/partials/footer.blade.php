<script src="{{url('adminlte/js/jquery-2.2.3.min.js')}}"></script>
<script src="{{url('adminlte/js/bootstrap.min.js')}}"></script>
<script src="{{url('adminlte/js/fastclick.min.js')}}"></script>
<script type="text/javascript">
    window.Laravel = {
        csrfToken: '{{ csrf_token() }}'
    }
</script>
<script type="text/javascript" src="{{ mix('js/app.js') }}"></script>
</body>
</html>
