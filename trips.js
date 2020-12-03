function copyBillingAddress() {
    var mailingInputElements = document.querySelectorAll("#mailingaddress input");
    var billingInputElements = document.querySelectorAll("#billingaddress input");
    if (document.getElementById("sameaddress").checked) {
        for (var i = 0; i < mailingInputElements.length; i++) {
            billingInputElements[i + 1].value = mailingInputElements[i].value;
        }
        document.querySelector("#billingaddress select").value = document.querySelector("#mailingaddress select").value;
    }
    else {
        for (var i = 0; i < mailingInputElements.length; i++) {
            billingInputElements[i + 1].value = "";
        }
        document.querySelector("#billingaddress select").selectedIndex = -1;
    }
}