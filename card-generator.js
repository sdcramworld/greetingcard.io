document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("generateButton").addEventListener("click", generateCard);
    document.getElementById("downloadButton").addEventListener("click", downloadCard);
});

function generateCard() {
    var name = document.getElementById("nameInput").value;
    var position = document.getElementById("positionInput").value;
    var imageUrl = "https://images.ctfassets.net/jrh3lrn7oql1/7a5oudcZMl63FO9CXh4ivu/f7c9f6dfcc4f447f2f1190b9f8d37e6b/Eid_Alfiter_2025_card.jpg";

    if (name && position) {
        var canvas = document.createElement("canvas");
        var context = canvas.getContext("2d");
        var image = new Image();
        image.crossOrigin = "anonymous";
        image.onload = function() {
            canvas.width = image.width;
            canvas.height = image.height;
            context.drawImage(image, 0, 0);
            context.font = "40px Cairo, sans-serif";
            context.fillStyle = "#333";
            context.textAlign = "center";
            context.textBaseline = "middle";
            context.fillText(name, canvas.width / 2, canvas.height - 180);
            context.fillText(position, canvas.width / 2, canvas.height - 140);
            document.getElementById("resultImage").src = canvas.toDataURL("image/png");
            document.getElementById("resultContainer").style.display = "block";
        };
        image.src = imageUrl;
    }
}

function downloadCard() {
    var imageCard = document.getElementById("resultImage");
    if (imageCard.src && imageCard.src.startsWith("data:image")) {
        var link = document.createElement("a");
        link.href = imageCard.src;
        link.download = "Custom_Card.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}
