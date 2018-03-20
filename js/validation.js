var emailS = "#form-m-email";
var nameS = "#form-m-name";
var messageS = "#form-m-message";
var errorsContainer = "#errors-container"

function validateForm() {
    var name = $(nameS).val();
    var email = $(emailS).val();
    var message = $(messageS).val();

    var errors = "";
    if (!name || name == "" || name == null) {
        errors += "Please enter a name! <br/>";
    }

    if (!email || email == "" || email == null) {
        errors += "Please enter an email address! <br/>";
    }

    if (!message || message == "" || message == null) {
        errors += "Please enter a message! <br/>";
    }

    if (errors == "") {
        var message = $(errorsContainer).html("");
        return true;
    } else {
        var message = $(errorsContainer).html(errors);
        return false;
    }

}