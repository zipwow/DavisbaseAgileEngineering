
function meierize(x) {
    return x + "meier";
}
(function ($) {
    $.fn.meierizeDom = function () {
        return this.each(function () {
            $(this).append("meier");
        });
    };

    $.fn.updateFullName = function (id) {
        var element = $(this);
        $.getJSON("services/lookup.json", {
            "id": id
        }, function (data) {
            var fullName = data.fName + " " + data.lName;
            element.append(fullName); //this is a bug! multiple calls will cause us to append the name again.  How can we test this?  Then fix it?
        });
    };
})(jQuery);