function loadMore() {
    var elements = document.getElementsByClassName("hidden row");


    elements[0].className = "row";

    if (elements.length - 1 <= 0) {
        document.getElementById("loadMoreButton").style.display = "none";
    }
}