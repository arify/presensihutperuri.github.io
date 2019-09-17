
(function ($) {
    "use strict";


    /*==================================================================
    [ Focus Contact2 ]*/
    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })
  
  
    /*==================================================================
    [ Validate ]*/
    var email = $('.validate-input input[name="entry.1794779266"]');


    $('.validate-form').on('submit',function(){
        var check = true;

        if($(email).val().trim().match(/^(pL[0-9]|Pl[0-9]|b|f|g|h|r|pl[0-9]|m|[0-9]|B|F|G|H|R|PL[0-9]|M|D|d|Q|q)[0-9]{3}$/) == null) {
            showValidate(email);
            check=false;
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
       });
    });

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);
