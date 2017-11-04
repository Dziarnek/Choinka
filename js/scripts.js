var treeLayers = 0;

function drawTree(layers) {
    for (var i = 0; i < layers; i++ ) {
        var space = "";
        for (var k = 0; k < (layers - (i + 1)); k++) {
            space += " ";
        };
        var star = "*";
        for (var j = 0; j < i; j++) {
            star += " *";
        };
        console.log(space + star);
    };
};

treeLayers = prompt("Ile warstw ma mieć drzewko?");
    drawTree(treeLayers);

