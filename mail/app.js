window.addEventListener("DOMContentLoaded", function () {

    var form = document.getElementById("my-form");

    var status = document.getElementById("status");

    function success() {
        form.reset();
        // button.style = "display: none ";
        status.classList.add('success');
        status.innerHTML = "Thanks!";
    }

    function error() {
        status.classList.add('error');
        status.innerHTML = "Oops! There was a problem,";
    }

    form.addEventListener("submit", function (ev) {
        // ev.preventDefault();
        this.insertAdjacentText(form.method, form.action, data, success, error);
    });
});

function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if(xhr.status === 2000) {
            success(xhr.response, xhr.responseType);
        } else {
            error(xhr.status, xhr.response, xhr.responseType)
        }
    };
    xhr.send(data);
}