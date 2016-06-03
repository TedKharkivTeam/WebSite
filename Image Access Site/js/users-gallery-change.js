function changepart() {
    var frame = document.getElementById("mainframe");
    if (frame.src.indexOf('Users-Gallery1.html') + 1) {
        frame.src = "Users-Gallery2.html";
    }
    else if (frame.src.indexOf('Users-Gallery2.html') + 1) {
        frame.src = "Users-Gallery3.html";
    }
    else if (frame.src.indexOf('Users-Gallery2.html') + 1) {
        frame.src = "Users-Gallery3.html";
    }
    else if (frame.src.indexOf('Users-Gallery3.html') + 1) {
        frame.src = "Users-Gallery4.html";
    }
    else if (frame.src.indexOf('Users-Gallery4.html') + 1) {
        frame.src = "Users-Gallery5.html";
    }
    else if (frame.src.indexOf('Users-Gallery5.html') + 1) {
        frame.src = "Users-Gallery1.html";
    }
}