$(document).ready(function () {
    $("#formOne").submit(function (event) {
        event.preventDefault();

        $(".hide").hide();

        var items = ["#item1", "#item2", "#item3", "#item4"];

        var values = items.map(function (item) {
            return $(item).val();

            // }).filter(val => val !== '');
        }).filter(function (val) {  //  for ignoring empty input
            return (val !== "")
        });

        $("#result").show();
        var list = $("#result ul");
        values.sort().forEach(function (val) {
            var upper = val.toUpperCase();
            $('<li>').text(upper).appendTo(list);
        })

    });
});