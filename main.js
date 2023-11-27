function toggleOverlay() {
    let overlay = document.getElementById("overlay");
    overlay.style.display = (overlay.style.display === "none" || overlay.style.display === "") ? "flex" : "none";
}