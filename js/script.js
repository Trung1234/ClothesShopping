

function showActionLoop(actionLoopId) {
    var element = document.getElementById(actionLoopId);
    element.classList.remove("visible-lg");
}
function hideActionLoop(actionLoopId) {
    var element = document.getElementById(actionLoopId);
    element.classList.add("visible-lg");
}