/**
 * Created by ferhoba on 7/21/2017.
 * Version : 0.1.0.0
 */
(function ($) {
    $.fn.linkIt = function (options) {
        var settings = $.extend({
            href    :null,
            text    :null,
            target  :"_self"
        }, options);
        // Validation
        if(settings.href === null){
            console.log("You need an href option applied to LinkIt work fine");
            return this;
        }
        return this.each(function () {
            var object = $(this); //all object where LinkIt is applied

            // If new text is NOT added plugin will just use an original text from document
            if(settings.text === null){
                settings.text = object.text();
            }
            object.wrap('<a target="'+settings.target+'" href = "'+settings.href+'"></a>').text(settings.text);
        });
    }
}(jQuery));
