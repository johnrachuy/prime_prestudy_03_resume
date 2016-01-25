$(document).ready(function() {
    $('.button').on('click', function() {
        $('.reveal').fadeIn("slow");
        $(this).remove();
    });
});
