$(document).ready(function() {
    const itemsToShowInitially = 6;
    let visibleItemCount = itemsToShowInitially;

    $(".item-style:gt(" + (visibleItemCount - 1) + ")").hide();

    $(".button").click(function() {
        $(".item-style:hidden:lt(" + itemsToShowInitially + ")").show();
        visibleItemCount += itemsToShowInitially;

        if (visibleItemCount >= $(".item-style").length) {
            $(".button").hide();
        }
    });
});

