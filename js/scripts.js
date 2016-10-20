// Intialize Lettering JS
$("h1").lettering();
//make backstrech go//

$.backstretch("img/castle.jpg");

$(".grid").masonry({/*options*/
    itemSelector: '.grid-item",
    columnWidth: 250,
    gutter:24,
    transitionDuration: '1s'})
