window.onload = function subscribe() {
    document.getElementById("subscribe-form").addEventListener("submit",alertSubFunc);
}

function subscribe() {
    let value = document.getElementById("email").value;
    alert("Subscriber added: "+ value);
}