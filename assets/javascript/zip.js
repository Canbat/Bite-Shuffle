$(document).ready(function () {
    $('#zipcode').keyup(function () {
        if ($(this).val() >=10000 && $(this).val() <=99999) {
            //Check to see if there is any text entered
            // If there is no text within the input ten disable the button
            $('.zipcode').prop('disabled', false);
        } else {
            //If there is text in the input, then enable the button
            $('.zipcode').prop('disabled', true);
        }
    });
});