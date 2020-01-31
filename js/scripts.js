$(document).ready(function () {
    $("#formOne").submit(function (event) {
        $(".hide").hide();

        var items = [];

        items.forEach(function (item) {
            return "#item1, #item2, #item3, #item4";

        });

        $("#result").show();

        event.preventDefault();
    });
});