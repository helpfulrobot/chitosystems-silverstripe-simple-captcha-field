/** =============================
 * SimpleCaptchaField.js
 * * ===========================
 * @author Patrick Chito-voro
 * @copyright 2016 Chito Systems.
 *
 * ============================= */

(function ($) {
    "use strict";
    /*global jQuery, document, window*/
    $(document).ready(function () {
        SimpleCaptchaField.validate();
    });

}(jQuery));


var SimpleCaptchaField = function () {

    return {
        validate: function () {

            $("form." + SIMPLECAPTCHAFORM).on('submit', function (e) {

                var Captcha = $("input.SimpleCaptchaField").val();
                var url = "simple-validation/validate/" + Captcha;

                $.ajax({
                    url: url,
                    type: 'get',
                    success: function (results) {
                        if (results != 'valid') {
                            $('.input-captcha').append("<div class='message validation'>Correct captcha is required</div>");
                            return false;
                        }

                    },
                    error: function () {
                        alert('Sorry there has been an error');
                    }
                });
            });

        }
    }
}();