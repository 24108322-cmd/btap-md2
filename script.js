function upDate(previewPic) {
    console.log("Mouse over event");
    console.log("Alt:", previewPic.alt);
    console.log("Source:", previewPic.src);

    document.getElementById("image").innerHTML = previewPic.alt;

    document.getElementById("image").style.backgroundImage =
        "url('" + previewPic.src + "')";
}

function undo() {
    document.getElementById("image").style.backgroundImage = "url('')";

    document.getElementById("image").innerHTML =
        "Di chuột qua hình ảnh bên dưới để hiển thị tại đây.";
}

const images = document.querySelectorAll(".preview");

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("mouseover", function () {
        upDate(this);
    });

    images[i].addEventListener("mouseout", undo);
}
