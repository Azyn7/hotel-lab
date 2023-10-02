$('document').ready(function(){
    $("input[name$='member']").click(function(){
        var test = $(this).val();

        if (test === "actmember") {
            $('.newacc').hide();
            $('.actmember').show();
            $('#left-header').html("Thanks for enrolling your GameStop account. Continue with verification.");
            document.getElementById("fname").required = false;
            document.getElementById("lname").required = false;
            document.getElementById("password").required = false;
            document.getElementById("phone").required = false;
        } else {
            $('.newacc').show();
            $('.actmember').hide();
            $('#left-header').html("Sign up for your FREE GameStop account and enjoy these benefits:");
            document.getElementById("fname").required = true;
            document.getElementById("lname").required = true;
            document.getElementById("password").required = true;
            document.getElementById("phone").required = true;
        }
    });

    $('.submit').click(function(){
        printInfo();
    });
});

function revealPassword() {
    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type ="password";
    }
}

function printInfo() {
    var fname = $('#fname').val();
    var lname = $('#lname').val();
    var email = $('#email').val();
    var phone = $('#phone').val();
    alert(fname + "\n" + lname + "\n" + email + "\n" + phone);
}