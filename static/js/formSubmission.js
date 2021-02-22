window.addEventListener("DOMContentLoaded", function() {

    // get the form elements defined in your form HTML above
    
    var form = document.getElementById("my-form");
    var button = document.getElementById("my-form-button");
    var status = document.getElementById("my-form-status");

    // Success and Error functions for after the form is submitted
    
    function success() {
      form.reset();
      button.style = "display: none ";
      status.innerHTML = "<div class='toast toast-success'> <button class='btn btn-clear float-right'></button>Thanks for contacting me, I'll get back to you soon!</div>";
      form.classList.remove('loading');
      form.classList.remove('loading-lg');
      form.classList.remove('blur');
    }

    function error() {
      status.innerHTML = "<div class='toast toast-error'> <button class='btn btn-clear float-right'></button>Oops something went wrong!</div>";
      form.classList.remove('loading');
      form.classList.remove('loading-lg');
      form.classList.remove('blur');
    }

    // handle the form submission event

    form.addEventListener("submit", function(ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ev.target.classList.toggle('loading');
      ev.target.classList.toggle('loading-lg');
      ev.target.classList.toggle('blur');
      ajax(form.method, form.action, data, success, error);
    });
  });
  
  // helper function for sending an AJAX request

  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }