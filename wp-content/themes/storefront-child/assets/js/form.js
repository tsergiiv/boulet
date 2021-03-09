document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');

    jQuery('#submit-btn').click(function(e) {
        e.preventDefault();

        console.log('form processing');

        let error = formValidate(form);

        console.log(error);

        if (error === 0) {
            let action = $('input[name="action"]').val();

            let formData = new FormData();

            formData.append('Nom', jQuery('input[name="full_name"]').val());
            formData.append('Numéro de telephone', jQuery('input[name="phone"]').val());
            formData.append('Courriel', jQuery('input[name="mail"]').val());
            formData.append('Sujet', jQuery('input[name="subject"]').val());
            formData.append('Message', jQuery('textarea[name="message"]').val());

            try {
                $.ajax({
                    url: action,
                    type: 'POST',
                    dataType: 'json',
                    processData: false,
                    contentType: false,
                    data: formData,
                    success: function(data){
                        if (data['error'] == 0) {
                            console.log('the email was successfully sent');
                            jQuery(form).find('input, textarea').val('');
                            location.reload();
                        }
                    },
                    error: function (error) {
                        // console.log('error' + error);
                    },
                });
            } catch (e) {
                // console.log(e);
            }
        }
    });

    function formValidate(form) {
        let error = 0;
        let formReq = jQuery(form).find('input, textarea');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            if (input.getAttribute("type") === "email") {
                if (emailTest(input)) {
                    formAddError(input);
                    error++;
                }
            } else if (input.getAttribute("type") === "tel") {
                if (phoneTest(input)) {
                    formAddError(input);
                    error++;
                }
            } else {
                if (input.value === '') {
                    formAddError(input);
                    error++;
                }
            }
        }
        return error;
    }

    function formAddError(input) {
        input.parentElement.classList.add('error');
        input.classList.add('error');
    }

    function formRemoveError(input) {
        input.parentElement.classList.remove('error');
        input.classList.remove('error');
    }

    // Функция теста email
    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }

    function phoneTest(input) {
        return !/^\+?([0-9]){8,15}$/.test(input.value);
    }
});