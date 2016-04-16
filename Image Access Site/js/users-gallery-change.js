function changepart() {
    var frame = document.getElementById("mainframe");
    if(frame.src.indexOf('users_gallery1.html') + 1) {frame.src = "users_gallery2.html";}
    else if(frame.src.indexOf('users_gallery2.html') + 1) {frame.src = "users_gallery3.html";}
    else if(frame.src.indexOf('users_gallery2.html') + 1) {frame.src = "users_gallery3.html";}
    else if(frame.src.indexOf('users_gallery3.html') + 1) {frame.src = "users_gallery4.html";}
    else if(frame.src.indexOf('users_gallery4.html') + 1) {frame.src = "users_gallery5.html";}
    else if(frame.src.indexOf('users_gallery5.html') + 1) {frame.src = "users_gallery1.html";}
}