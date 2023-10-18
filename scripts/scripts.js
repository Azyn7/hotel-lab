$('document').ready(function(){
    // Changes aspect of the site based on size (hiding elements and changing classes)
    window.onload = window.onresize = function () {
        var browserWidth = window.innerWidth;
        if (browserWidth < 600) {
            $('#main-form').removeClass("small-form");
        } else if (browserWidth < 1000) {
            $('#main-form').removeClass("col-md-6");
            $('#main-form').addClass("col-xs-6");
            $('#main-form').addClass("small-form");
            $('#fname-box').addClass("col-md-12");
            $('#lname-box').addClass("col-md-12");
            $('#arrow-right').hide();
        } else {
            $('#main-form').removeClass("col-xs-6");
            $('#main-form').addClass("col-md-6");
            $('#main-form').removeClass("small-form");
            $('#fname-box').removeClass("col-md-12");
            $('#lname-box').removeClass("col-md-12");
            if (browserWidth > 1700) {
                $('#arrow-right').show();
            } else {
                $('#arrow-right').hide();
            }
        }
    }

    /**
     * [Script to check which radio button is clicked, "New Account" or "Active Membership"]
     * [Changes site based on the radio selected.]
     */
    $("input[name$='member']").click(function(){
        var activeOrNew = $(this).val();

        // If "Active Member" is selected, hide all aspects related to a new account being created.
        if (activeOrNew === "actmember") {
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

    // Submit Button, just prints info for debug reasons.
    $('.submit').click(function(){
        printInfo();
    });
});

function revealPassword(elementID) {
    /**
     * [Reveals the password, or text, of whatever element has an ID matching the paramater passed in.]
     * @param elementID The ID of whatever element is desired to be targeted. 
     */
    var element = document.getElementById(elementID);
    if (element.type === "password") {
        element.type = "text";
    } else {
        element.type = "password";
    }
}

function printInfo() {
    /**
     * [Prints info to an alert box.]
     */
    var fname = $('#fname').val();
    var lname = $('#lname').val();
    var email = $('#email').val();
    var phone = $('#phone').val();
    alert(fname + "\n" + lname + "\n" + email + "\n" + phone);
}