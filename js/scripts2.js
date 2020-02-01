$(document).ready(function () {
    var groceryList = [];
    $("#formOne").submit(function (event) {
        event.preventDefault();

        let val = item = $('#item1').val();
        if(val !== '') {
            groceryList.push(item);
        }

        $("#result").show();
        var list = $("#result ul");
        list.empty();
        groceryList.sort().forEach(function (val) {
            var upper = val.toUpperCase();
            $('<li>').text(upper).appendTo(list);
        })
    });
});