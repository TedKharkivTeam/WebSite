function changepart() {
    var frame = document.getElementById("mainframe");
    if (frame.src.indexOf('Users_Gallery1.html') + 1) {
        frame.src = "Users_Gallery2.html";
    }
    else if (frame.src.indexOf('Users_Gallery2.html') + 1) {
        frame.src = "Users_Gallery3.html";
    }
    else if (frame.src.indexOf('Users_Gallery2.html') + 1) {
        frame.src = "Users_Gallery3.html";
    }
    else if (frame.src.indexOf('Users_Gallery3.html') + 1) {
        frame.src = "Users_Gallery4.html";
    }
    else if (frame.src.indexOf('Users_Gallery4.html') + 1) {
        frame.src = "Users_Gallery5.html";
    }
    else if (frame.src.indexOf('Users_Gallery5.html') + 1) {
        frame.src = "Users_Gallery1.html";
    }
}