$(document).ready(function () {
    $('#sname').focus(function () {
        $(this).css('background', 'red');
    });

    $('#sname').blur(function () {
        $(this).css('background', '');
    });

    $('#Country').change(function () {
        $(this).css('background', 'pink');
    });

    $('#sname').select(function () {
        $(this).css('background', 'yellow');
    });


    $('#sform').sumbit(function () {
        alert("form Submitted");
    });
});