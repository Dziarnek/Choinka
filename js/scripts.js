var treeLayers = 0;

function drawTree(layers) {
    for (var i = 0; i < layers; i++ ) {
        var star = "*";
        for (var j = 0; j < i; j++) {
            star += "*";
        };
        console.log(star);
    };
};

treeLayers = prompt("Ile warstw ma mieć drzewko?");
    drawTree(treeLayers);

