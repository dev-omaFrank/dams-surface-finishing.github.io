$(document).ready(function() {

    (function($) {
        "use strict";


        jQuery.validator.addMethod('answercheck', function(value, element) {
            return this.optional(element) || /^\bcat\b$/.test(value)
        }, "type the correct answer -_-");

        // validate contactForm form
        $(function() {
            $('#contactForm').validate({
                rules: {
                    name: {
                        required: true,
                        minlength: 8
                    },
                    subject: {
                        required: true,
                        minlength: 5
                    },
                    number: {
                        required: true,
                        minlength: 10
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    message: {
                        required: true,
                        minlength: 10
                    }
                },
                messages: {
                    name: {
                        required: "You must enter a name",
                        minlength: "Your name must consist of at least 8 characters"
                    },
                    subject: {
                        required: "Enter email subject",
                        minlength: "Your subject must consist of at least 5 characters"
                    },
                    number: {
                        required: "Enter phone number",
                        minlength: "You must enter a valid phone number"
                    },
                    email: {
                        required: "Enter email address"
                    },
                    message: {
                        required: "What's on your mind?",
                        minlength: "Message box cannot be empty"
                    }
                },
                submitHandler: function(form) {
                    $(form).ajaxSubmit({
                        type: "POST",
                        data: $(form).serialize(),
                        url: "contact_process.php",
                        success: function() {
                            $('#contactForm :input').attr('disabled', 'disabled');
                            $('#contactForm').fadeTo("slow", 1, function() {
                                $(this).find(':input').attr('disabled', 'disabled');
                                $(this).find('label').css('cursor', 'default');
                                $('#success').fadeIn()
                                $('.modal').modal('hide');
                                $('#success').modal('show');
                            })
                        },
                        error: function() {
                            $('#contactForm').fadeTo("slow", 1, function() {
                                $('#error').fadeIn()
                                $('.modal').modal('hide');
                                $('#error').modal('show');
                            })
                        }
                    })
                }
            })
        })

    })(jQuery)
})