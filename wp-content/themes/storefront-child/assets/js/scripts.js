function searchFunction() {
    $('#search-form').submit();
}

$(document).ready(function () {
    setTimeout(function(){
        $('.woocommerce-notices-wrapper').fadeOut(300);
    }, 3000);
    $('html').addClass('js');
    $('body').on('click', '.shadow-active', function () {
        $('body').removeClass('popup-opened');
        $('.widget_shopping_cart').addClass('.is-hidden').removeClass('is-visible');
        $('.login-popup').addClass('popup-is-hidden').removeClass('popup-is-visible');
        $('.shadow-active').fadeOut(300, function () {
            $(this).remove();
        });
    });
    $('.qty-plus').on('click', function () {
        var qtyVal = $(this).parent().children('input').val();
        $(this).parent().children('input').val(Math.max(parseInt(qtyVal) + 1));
        $(this).parent().children('input').trigger('change');
    });
    $('.qty-minus').on('click', function () {
        var qtyVal = $(this).parent().children('input').val();
        if (qtyVal > 1) {
            $(this).parent().children('input').val(Math.max(parseInt(qtyVal) - 1));
            $(this).parent().children('input').trigger('change');
        }
    });
    $('#qtyInput').on('change', function () {
        var formAction = $('#product_configure_form').data('action');
        var curValue = $(this).val();
        $(this).attr('value', curValue);
        $('#product_configure_form').attr('action', formAction + '?quantity=' + curValue);
    });
    $('.filter-category').each(function () {
        var activeCat = $(this).find('li.active');
        $(activeCat).parent('ul').addClass('active');
        $(activeCat).parent('ul').parent('li').addClass('active');
        if ($(activeCat).parent('ul').parent('li').parent('ul').parent('li').length) {
            $(activeCat).parent('ul').parent('li').parent('ul').parent('li').addClass('active');
        }
    });
    $('.filter-category i').on('click', function () {
        $(this).parent('li').toggleClass('active');
    });
    if ($('.messages')) {
        setTimeout(function () {
            $('.messages').remove();
        }, 4000);
    }
    if ($('.loged').length) {
        $('.product-wishlist-button').on('click', function () {
            var thisUrl = window.location.href;
            setTimeout(function () {
                window.location.href = thisUrl;
            }, 200);
        });
        var wishlistItems = [];
        $.get(wishlistUrl, function (data) {
            var wishlistProduct = data.wishlist;
            $.each(wishlistProduct, function (index, item) {
                var productWid = item.wid;
                $.each(item, function (index, product) {
                    var productId = product.vid;
                    if (productId !== undefined) {
                        wishlistItems.push(productId);
                    }
                    $('.prod-card').each(function () {
                        if ($(this).data('vid') == productId) {
                            $(this).addClass('in-wishlist');
                            $(this).data('wid', productWid);
                            $(this).find('.product-wishlist-button').attr('href', basicUrl + 'account/wishlistDelete/' + productWid + '/');
                        }
                    });
                    $('.product-buttons').each(function () {
                        if ($(this).data('vid') == productId) {
                            $(this).addClass('in-wishlist');
                            $(this).data('wid', productWid);
                            $(this).find('.product-wishlist-button').attr('href', basicUrl + 'account/wishlistDelete/' + productWid + '/');
                        }
                    });
                });
            });
            var wishItemsLength = wishlistItems.length;
            if (wishItemsLength > 0) {
                $('.header-wishlist-wrapper').append('<span>' + wishItemsLength + '</span>');
            }
        });
    }


    $('.cart-dropdown-form input').on('change', function () {
        var formAction = $(this).parent('form').data('action');
        var curValue = $(this).val();
        $(this).attr('value', curValue);
        $(this).closest('form').attr('action', formAction + '?quantity=' + curValue);
        $(this).parent('form').submit();
        console.log($(this).val());
        // var thisUrl = window.location.href;
        // $(this).parents('form').submit();
        // setTimeout(function(){
        //  window.location.href = thisUrl;
        // }, 200);
    })
    $('.open-massage').click(function () {
        $('.messages ul').addClass('massage-close');
    });

    // $('.cartpage-btn').on('click', function(e){
    //   e.preventDefault();
    //   var thisUrl = window.location.href;
    //   setTimeout(function(){
    //    $(this).parent('form').submit();
    //    window.location.href = thisUrl;
    //   }, 200);
    // });

    //     MOBILE MENUE
    $('.hamburger').click(function () {
        $('.mobile-menu').addClass('visible');
        $('.shadow').addClass('shadow-active');
    });
    $('.close-menu').click(function () {
        $('.mobile-menu').removeClass('visible');
        $('.shadow').removeClass('shadow-active');
    });
    $('.mobile-login-btn').click(function () {
        $('.mobile-menu').removeClass('visible');
        $('.login-popup').addClass('popup-is-visible').removeClass('popup-is-hidden');
    });
    $('.mobile-collection-arrow').click(function () {
        $('.mobile-menu_top,.mobile-menu-links').addClass('close');
        $('.mobile-category').removeClass('close').addClass('open');
    });
    $('.mobile-collection').click(function () {
        $('.mobile-menu_top,.mobile-menu-links').addClass('open').removeClass('close');
        $('.mobile-category').removeClass('open').addClass('close');
    });
    $('.has-subcat > i').click(function () {
        $(this).next('.header-subcat_mobile').removeClass('close').addClass('open');
    });
    $('.mobile-menu-top_subcat').click(function () {
        $(this).parent().parent('.header-subcat_mobile').removeClass('open').addClass('close');
    });

    $('.search-link').click(function () {
        $('.search').toggleClass('open close');
        $('.search-input-close').toggleClass('icon-inside');
        $('.search-input-box').val('');
    });
    $('.search-input-close,.input-open').click(function () {
        $('.search').addClass('close').removeClass('open');
        // $('.search-link').toggleClass('icon-inside');
        $('.search-input-close').toggleClass('icon-inside');
    });

//   popups
    $('.close-popup').click(function () {
        $('.widget_shopping_cart').addClass('is-hidden').removeClass('is-visible');
        $('.login-popup').addClass('popup-is-hidden').removeClass('popup-is-visible');
        $('.shadow').removeClass('shadow-active');
        $('body').removeClass('popup-opened');
        $('.shadow-active').fadeOut(300, function () {
            $(this).remove();
        });
    });
    $('.login-popup-link').click(function () {
        $('.login-popup').addClass('popup-is-visible').removeClass('popup-is-hidden');
        $('body').addClass('popup-opened');
        $('<span class="shadow shadow-active"></span>').hide().prependTo('body').fadeIn(300);
    });
    $('.cart-popup-link').click(function () {
        $('.widget_shopping_cart').addClass('is-visible').removeClass('is-hidden');
        $('body').addClass('popup-opened');
        $('<span class="shadow shadow-active"></span>').hide().prependTo('body').fadeIn(300);
    });
    $('.shadow').click(function () {
        $(this).removeClass('shadow-active');
        $('.login-popup').addClass('popup-is-hidden').removeClass('popup-is-visible');
        $('.cart-popup').addClass('popup-is-hidden').removeClass('popup-is-visible');
        $('.mobile-menu').removeClass('visible');
    });

//   popup login/ registration toogle
    $('.registration').click(function () {
        $('.login-popup-container').removeClass('open').addClass('close');
        $('.registration-popup-container').removeClass('close').addClass('open');
    });
    $('.login-button').click(function () {
        $('.login-popup-container').removeClass('close').addClass('open');
        $('.registration-popup-container').removeClass('open').addClass('close');
    });
//   collection sort
    $("#filter-form input").on("change", function () {
        $("#filter-form").submit();
    });
    $("#filter-sort #sort").on("change", function () {
        $("#filter-sort").submit();
    });
//   filter mobil
    $('.filter-icon-mobile').click(function () {
        $('.collection-sidebar').toggleClass('sidebar-open sidebar-close');
    });
    $('.filret-mobile-close').click(function () {
        $('.collection-sidebar').toggleClass('sidebar-open sidebar-close');
    });

    if ($(window).width() < 800) {
        $('.gui-active a').click(function (e) {
            $(this).parents('.gui-block-linklist').addClass('list-open');
            $('body').addClass('overflow-hidden').append('<div class="list-backdrop"></div>');
            e.preventDefault();
        });
        $('body').on('click', '.list-backdrop', function () {
            $('.gui-block-linklist').removeClass('list-open');
            $('body').removeClass('overflow-hidden');
            $('.list-backdrop').remove();
        });
    }

    $('.remove-product').on('click', function () {
        var form = $(this).closest('form');
        var actionURL = form.attr("action");
        console.log(actionURL)
        $.ajax({
            url: actionURL,
            data: form.serialize(),
            cache: false,
            success: function (result) {
                //if the submit was successful, you redirect
                window.location.href = window.location.href;
            },
            error: function () {
                //your error
            }
        })
    });

    //owel top
    $('.owl-products').owlCarousel({
        loop: false,
        margin: 32,
        nav: true,
        navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
        responsive: {
            0: {
                items: 2,
                margin: 20
            },
            600: {
                items: 3
            }
        }
    });
    $('.owl-brands').owlCarousel({
        items: 5,
        loop: false,
        margin: 0,
        nav: true,
        navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            900: {
                items: 4
            },
            1100: {
                items: 5
            }
        }
    });


    $('.owl-hero-autoplay_none').owlCarousel({
        loop: false,
        margin: 10,
        nav: true,
        navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
        onInitialized: function (event) {
            let element = jQuery(event.target);
            element.find('.owl-dots').addClass('container-custom').removeClass('disabled');
        },
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    $('.owl-hero-autoplay').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        margin: 10,
        nav: true,
        navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
        onInitialized: function (event) {
            let element = jQuery(event.target);
            element.find('.owl-dots').addClass('container-custom').removeClass('disabled');
        },
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $('.owl-review').owlCarousel({
        loop: false,
        margin: 5,
        nav: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })
    $('.owl-usp').owlCarousel({
        loop: false,
        margin: 0,
        nav: true,
        navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1,
                loop: true,
                center: true
            },
            600: {
                items: 2,
                loop: true,
                stagePadding: 10,
            },
            900: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });

    //catalog filter
    $("#collection-filter-price").slider({
        range: true,
        min: 0,
        max: 55,
        values: [0, 55],
        step: 1,
        slide: function (event, ui) {
            $('.price-filter-input #min').html(ui.values[0]).attr('value', ui.values[0].toFixed(2));
            $('.price-filter-input #max').html(ui.values[1]).attr('value', ui.values[1].toFixed(2));
            $('#filter_form_min').val(ui.values[0].toFixed(2));
            $('#filter_form_max').val(ui.values[1].toFixed(2));
        },
        stop: function (event, ui) {
            $('#filter-form').submit();
        }
    });

    //product
    $('.rating-link_scroll').click(function () {
        $('.rating-link_block').attr('aria-selected', true);
        $('.rating-link_block').attr('tabindex', 0);
        $('#proTabPanelReviews').removeClass('is-hidden');
        $('#proTabPanelInformation, #proTabPanelSpecs').addClass('is-hidden');
        $('#tab-proTabPanelInformation').attr('aria-selected', false);
        $('#tab-proTabPanelSpecs').attr('aria-selected', false);
    });

    //gui-form
    // gui_focus('#gui-form');
    // gui_validator('#gui-form');
    // gui_translation('This is a required field', 'This is a required field');

    //password change
    $('#gui-form-password-change').change(function () {
        if ($(this).is(':checked')) {
            $('#gui-block-change-password').removeClass('gui-hide');

            $('#gui-form-password-new').addClass('gui-validate');
            $('#gui-form-password-confirm').addClass('gui-validate');
        } else {
            $('#gui-block-change-password').addClass('gui-hide');

            $('#gui-form-password-new').removeClass('gui-validate');
            $('#gui-form-password-confirm').removeClass('gui-validate');
        }
    });
    $('#gui-form-password-change').change();

    //logout
    //gui_redirect('/',5);


    // Following inputs are only for User interaction.
    // When same address is chosen, shipping address form section is hidden and not validated when submitting.
    // When different address is chosen, shipping address form section is shown and validated when submitting.
    var $sameAddressInput = $('#gui-form-sameaddress-yes');
    var $noSameAddressInput = $('#gui-form-sameaddress-no');

    // Initializing - form is displayed or hidden with no visual effects.
    // Rewrote to native Javascript due to different jQuery versions in shops
    if (document.getElementById('gui-form-sameaddress-yes')) {
        document.getElementById('gui-form-sameaddress-yes').checked ? hideShippingForm('init') : showShippingForm('init');
    }

    // Event listeners to display or hide form with visual effects (sliding)
    $sameAddressInput.click(function () {
        hideShippingForm('click');
    });
    $noSameAddressInput.click(function () {
        showShippingForm('click');
    });

    function showShippingForm(eventType) {
        var $shippingForm = $('#shipping-form');

        // Displaying form section
        if (eventType == 'init') {
            $shippingForm.show();
        } else {
            $shippingForm.slideDown();
        }
    }

    function hideShippingForm(eventType) {
        var $shippingForm = $('#shipping-form');

        // Hiding form section
        if (eventType == 'init') {
            $shippingForm.hide();
        } else {
            $shippingForm.slideUp();
        }
    }

    $('#gui-form').submit(function () {
        $('.gui-form-address .gui-validate').removeClass('gui-validate');

        var shippingForm = $('#shipping-form');

        if (shippingForm.not(':visible').length) {
            shippingForm.find('.gui-validate').removeClass('gui-validate');
        }
    });

    var gui_countries = {
        "1": {"id": 1, "code": "af", "type": "default", "zipcode": true, "has_regions": true},
        "2": {"id": 2, "code": "al", "type": "default", "zipcode": true, "has_regions": true},
        "3": {"id": 3, "code": "dz", "type": "default", "zipcode": true, "has_regions": true},
        "4": {"id": 4, "code": "as", "type": "default", "zipcode": true, "has_regions": false},
        "5": {"id": 5, "code": "ad", "type": "default", "zipcode": true, "has_regions": true},
        "6": {"id": 6, "code": "ao", "type": "default", "zipcode": true, "has_regions": true},
        "7": {"id": 7, "code": "ai", "type": "default", "zipcode": true, "has_regions": false},
        "8": {"id": 8, "code": "aq", "type": "default", "zipcode": true, "has_regions": false},
        "9": {"id": 9, "code": "ag", "type": "default", "zipcode": true, "has_regions": true},
        "10": {"id": 10, "code": "ar", "type": "default", "zipcode": true, "has_regions": true},
        "11": {"id": 11, "code": "am", "type": "default", "zipcode": true, "has_regions": true},
        "12": {"id": 12, "code": "aw", "type": "default", "zipcode": false, "has_regions": false},
        "13": {"id": 13, "code": "au", "type": "international", "zipcode": true, "has_regions": true},
        "14": {"id": 14, "code": "at", "type": "default", "zipcode": true, "has_regions": true},
        "15": {"id": 15, "code": "az", "type": "default", "zipcode": true, "has_regions": true},
        "16": {"id": 16, "code": "bs", "type": "default", "zipcode": true, "has_regions": true},
        "17": {"id": 17, "code": "bh", "type": "international", "zipcode": false, "has_regions": true},
        "18": {"id": 18, "code": "bd", "type": "default", "zipcode": true, "has_regions": true},
        "19": {"id": 19, "code": "bb", "type": "default", "zipcode": true, "has_regions": true},
        "20": {"id": 20, "code": "by", "type": "default", "zipcode": true, "has_regions": true},
        "21": {"id": 21, "code": "be", "type": "default", "zipcode": true, "has_regions": true},
        "22": {"id": 22, "code": "bz", "type": "default", "zipcode": true, "has_regions": true},
        "23": {"id": 23, "code": "bj", "type": "default", "zipcode": true, "has_regions": true},
        "24": {"id": 24, "code": "bm", "type": "default", "zipcode": true, "has_regions": false},
        "25": {"id": 25, "code": "bt", "type": "default", "zipcode": true, "has_regions": true},
        "26": {"id": 26, "code": "bo", "type": "default", "zipcode": true, "has_regions": true},
        "27": {"id": 27, "code": "ba", "type": "default", "zipcode": true, "has_regions": true},
        "28": {"id": 28, "code": "bw", "type": "default", "zipcode": true, "has_regions": true},
        "29": {"id": 29, "code": "bv", "type": "default", "zipcode": true, "has_regions": false},
        "30": {"id": 30, "code": "br", "type": "default", "zipcode": true, "has_regions": true},
        "31": {"id": 31, "code": "io", "type": "default", "zipcode": true, "has_regions": false},
        "32": {"id": 32, "code": "bn", "type": "default", "zipcode": true, "has_regions": true},
        "33": {"id": 33, "code": "bg", "type": "default", "zipcode": true, "has_regions": true},
        "34": {"id": 34, "code": "bf", "type": "default", "zipcode": true, "has_regions": true},
        "35": {"id": 35, "code": "bi", "type": "default", "zipcode": true, "has_regions": true},
        "36": {"id": 36, "code": "kh", "type": "default", "zipcode": true, "has_regions": true},
        "37": {"id": 37, "code": "cm", "type": "default", "zipcode": true, "has_regions": true},
        "38": {"id": 38, "code": "ca", "type": "international", "zipcode": true, "has_regions": true},
        "39": {"id": 39, "code": "cv", "type": "default", "zipcode": true, "has_regions": true},
        "245": {"id": 245, "code": "bq", "type": "default", "zipcode": true, "has_regions": false},
        "40": {"id": 40, "code": "ky", "type": "default", "zipcode": true, "has_regions": true},
        "41": {"id": 41, "code": "cf", "type": "default", "zipcode": true, "has_regions": true},
        "42": {"id": 42, "code": "td", "type": "default", "zipcode": true, "has_regions": true},
        "43": {"id": 43, "code": "cl", "type": "default", "zipcode": true, "has_regions": true},
        "44": {"id": 44, "code": "cn", "type": "default", "zipcode": true, "has_regions": true},
        "45": {"id": 45, "code": "cx", "type": "default", "zipcode": true, "has_regions": false},
        "46": {"id": 46, "code": "cc", "type": "default", "zipcode": true, "has_regions": false},
        "47": {"id": 47, "code": "co", "type": "default", "zipcode": true, "has_regions": true},
        "48": {"id": 48, "code": "km", "type": "default", "zipcode": true, "has_regions": true},
        "49": {"id": 49, "code": "cg", "type": "default", "zipcode": true, "has_regions": true},
        "50": {"id": 50, "code": "cd", "type": "default", "zipcode": true, "has_regions": true},
        "51": {"id": 51, "code": "ck", "type": "default", "zipcode": true, "has_regions": false},
        "52": {"id": 52, "code": "cr", "type": "default", "zipcode": true, "has_regions": true},
        "53": {"id": 53, "code": "ci", "type": "default", "zipcode": true, "has_regions": true},
        "54": {"id": 54, "code": "hr", "type": "default", "zipcode": true, "has_regions": true},
        "55": {"id": 55, "code": "cu", "type": "default", "zipcode": true, "has_regions": true},
        "243": {"id": 243, "code": "cw", "type": "default", "zipcode": true, "has_regions": false},
        "56": {"id": 56, "code": "cy", "type": "default", "zipcode": true, "has_regions": true},
        "57": {"id": 57, "code": "cz", "type": "default", "zipcode": true, "has_regions": true},
        "58": {"id": 58, "code": "dk", "type": "default", "zipcode": true, "has_regions": true},
        "59": {"id": 59, "code": "dj", "type": "default", "zipcode": true, "has_regions": true},
        "60": {"id": 60, "code": "dm", "type": "default", "zipcode": true, "has_regions": true},
        "61": {"id": 61, "code": "do", "type": "default", "zipcode": true, "has_regions": true},
        "62": {"id": 62, "code": "ec", "type": "default", "zipcode": true, "has_regions": true},
        "63": {"id": 63, "code": "eg", "type": "international", "zipcode": false, "has_regions": true},
        "64": {"id": 64, "code": "sv", "type": "default", "zipcode": true, "has_regions": true},
        "65": {"id": 65, "code": "gq", "type": "default", "zipcode": true, "has_regions": true},
        "66": {"id": 66, "code": "er", "type": "default", "zipcode": true, "has_regions": true},
        "67": {"id": 67, "code": "ee", "type": "default", "zipcode": true, "has_regions": true},
        "68": {"id": 68, "code": "et", "type": "default", "zipcode": true, "has_regions": true},
        "69": {"id": 69, "code": "fk", "type": "default", "zipcode": true, "has_regions": false},
        "70": {"id": 70, "code": "fo", "type": "default", "zipcode": true, "has_regions": false},
        "71": {"id": 71, "code": "fj", "type": "default", "zipcode": true, "has_regions": true},
        "72": {"id": 72, "code": "fi", "type": "default", "zipcode": true, "has_regions": true},
        "73": {"id": 73, "code": "fr", "type": "international", "zipcode": true, "has_regions": true},
        "74": {"id": 74, "code": "gf", "type": "default", "zipcode": true, "has_regions": false},
        "75": {"id": 75, "code": "pf", "type": "default", "zipcode": true, "has_regions": false},
        "76": {"id": 76, "code": "tf", "type": "default", "zipcode": true, "has_regions": true},
        "77": {"id": 77, "code": "ga", "type": "default", "zipcode": true, "has_regions": true},
        "78": {"id": 78, "code": "gm", "type": "default", "zipcode": true, "has_regions": true},
        "79": {"id": 79, "code": "ge", "type": "default", "zipcode": true, "has_regions": true},
        "80": {"id": 80, "code": "de", "type": "default", "zipcode": true, "has_regions": true},
        "81": {"id": 81, "code": "gh", "type": "default", "zipcode": true, "has_regions": true},
        "82": {"id": 82, "code": "gi", "type": "default", "zipcode": true, "has_regions": false},
        "83": {"id": 83, "code": "gr", "type": "default", "zipcode": true, "has_regions": true},
        "84": {"id": 84, "code": "gl", "type": "default", "zipcode": true, "has_regions": true},
        "85": {"id": 85, "code": "gd", "type": "default", "zipcode": true, "has_regions": true},
        "86": {"id": 86, "code": "gp", "type": "default", "zipcode": true, "has_regions": false},
        "87": {"id": 87, "code": "gu", "type": "default", "zipcode": true, "has_regions": false},
        "88": {"id": 88, "code": "gt", "type": "default", "zipcode": true, "has_regions": true},
        "89": {"id": 89, "code": "gn", "type": "default", "zipcode": true, "has_regions": true},
        "90": {"id": 90, "code": "gw", "type": "default", "zipcode": true, "has_regions": true},
        "91": {"id": 91, "code": "gy", "type": "default", "zipcode": true, "has_regions": true},
        "92": {"id": 92, "code": "ht", "type": "default", "zipcode": true, "has_regions": true},
        "93": {"id": 93, "code": "hm", "type": "default", "zipcode": true, "has_regions": false},
        "94": {"id": 94, "code": "va", "type": "default", "zipcode": true, "has_regions": false},
        "95": {"id": 95, "code": "hn", "type": "default", "zipcode": true, "has_regions": true},
        "96": {"id": 96, "code": "hk", "type": "international", "zipcode": false, "has_regions": false},
        "97": {"id": 97, "code": "hu", "type": "default", "zipcode": true, "has_regions": true},
        "98": {"id": 98, "code": "is", "type": "default", "zipcode": true, "has_regions": true},
        "99": {"id": 99, "code": "in", "type": "default", "zipcode": true, "has_regions": true},
        "100": {"id": 100, "code": "id", "type": "default", "zipcode": true, "has_regions": true},
        "101": {"id": 101, "code": "ir", "type": "international", "zipcode": false, "has_regions": true},
        "102": {"id": 102, "code": "iq", "type": "international", "zipcode": false, "has_regions": true},
        "103": {"id": 103, "code": "ie", "type": "international", "zipcode": false, "has_regions": true},
        "104": {"id": 104, "code": "il", "type": "international", "zipcode": false, "has_regions": true},
        "105": {"id": 105, "code": "it", "type": "default", "zipcode": true, "has_regions": true},
        "106": {"id": 106, "code": "jm", "type": "default", "zipcode": true, "has_regions": true},
        "107": {"id": 107, "code": "jp", "type": "default", "zipcode": true, "has_regions": true},
        "108": {"id": 108, "code": "jo", "type": "international", "zipcode": false, "has_regions": true},
        "109": {"id": 109, "code": "kz", "type": "default", "zipcode": true, "has_regions": true},
        "110": {"id": 110, "code": "ke", "type": "default", "zipcode": true, "has_regions": true},
        "111": {"id": 111, "code": "ki", "type": "default", "zipcode": true, "has_regions": true},
        "112": {"id": 112, "code": "kp", "type": "default", "zipcode": true, "has_regions": true},
        "113": {"id": 113, "code": "kr", "type": "default", "zipcode": true, "has_regions": true},
        "246": {"id": 246, "code": "xk", "type": "default", "zipcode": false, "has_regions": true},
        "114": {"id": 114, "code": "kw", "type": "international", "zipcode": false, "has_regions": true},
        "115": {"id": 115, "code": "kg", "type": "default", "zipcode": true, "has_regions": true},
        "116": {"id": 116, "code": "la", "type": "default", "zipcode": true, "has_regions": true},
        "117": {"id": 117, "code": "lv", "type": "default", "zipcode": true, "has_regions": true},
        "118": {"id": 118, "code": "lb", "type": "international", "zipcode": false, "has_regions": true},
        "119": {"id": 119, "code": "ls", "type": "default", "zipcode": true, "has_regions": true},
        "120": {"id": 120, "code": "lr", "type": "default", "zipcode": true, "has_regions": true},
        "121": {"id": 121, "code": "ly", "type": "default", "zipcode": true, "has_regions": true},
        "122": {"id": 122, "code": "li", "type": "default", "zipcode": true, "has_regions": true},
        "123": {"id": 123, "code": "lt", "type": "default", "zipcode": true, "has_regions": true},
        "124": {"id": 124, "code": "lu", "type": "default", "zipcode": true, "has_regions": true},
        "125": {"id": 125, "code": "mo", "type": "default", "zipcode": true, "has_regions": false},
        "126": {"id": 126, "code": "mk", "type": "default", "zipcode": true, "has_regions": true},
        "127": {"id": 127, "code": "mg", "type": "default", "zipcode": true, "has_regions": true},
        "128": {"id": 128, "code": "mw", "type": "default", "zipcode": true, "has_regions": true},
        "129": {"id": 129, "code": "my", "type": "default", "zipcode": true, "has_regions": true},
        "130": {"id": 130, "code": "mv", "type": "default", "zipcode": true, "has_regions": true},
        "131": {"id": 131, "code": "ml", "type": "default", "zipcode": true, "has_regions": true},
        "132": {"id": 132, "code": "mt", "type": "default", "zipcode": true, "has_regions": true},
        "133": {"id": 133, "code": "mh", "type": "default", "zipcode": true, "has_regions": true},
        "134": {"id": 134, "code": "mq", "type": "default", "zipcode": true, "has_regions": false},
        "135": {"id": 135, "code": "mr", "type": "default", "zipcode": true, "has_regions": true},
        "136": {"id": 136, "code": "mu", "type": "default", "zipcode": true, "has_regions": true},
        "137": {"id": 137, "code": "yt", "type": "default", "zipcode": true, "has_regions": false},
        "138": {"id": 138, "code": "mx", "type": "default", "zipcode": true, "has_regions": true},
        "139": {"id": 139, "code": "fm", "type": "default", "zipcode": true, "has_regions": true},
        "140": {"id": 140, "code": "md", "type": "default", "zipcode": true, "has_regions": true},
        "141": {"id": 141, "code": "mc", "type": "default", "zipcode": true, "has_regions": false},
        "142": {"id": 142, "code": "mn", "type": "default", "zipcode": true, "has_regions": true},
        "242": {"id": 242, "code": "me", "type": "default", "zipcode": true, "has_regions": true},
        "143": {"id": 143, "code": "ms", "type": "default", "zipcode": true, "has_regions": false},
        "144": {"id": 144, "code": "ma", "type": "default", "zipcode": true, "has_regions": true},
        "145": {"id": 145, "code": "mz", "type": "default", "zipcode": true, "has_regions": true},
        "146": {"id": 146, "code": "mm", "type": "default", "zipcode": true, "has_regions": true},
        "147": {"id": 147, "code": "na", "type": "default", "zipcode": true, "has_regions": true},
        "148": {"id": 148, "code": "nr", "type": "default", "zipcode": true, "has_regions": true},
        "149": {"id": 149, "code": "np", "type": "default", "zipcode": true, "has_regions": true},
        "151": {"id": 151, "code": "an", "type": "default", "zipcode": true, "has_regions": false},
        "150": {"id": 150, "code": "nl", "type": "autocomplete", "zipcode": true, "has_regions": true},
        "152": {"id": 152, "code": "nc", "type": "default", "zipcode": true, "has_regions": false},
        "153": {"id": 153, "code": "nz", "type": "default", "zipcode": true, "has_regions": true},
        "154": {"id": 154, "code": "ni", "type": "default", "zipcode": true, "has_regions": true},
        "155": {"id": 155, "code": "ne", "type": "default", "zipcode": true, "has_regions": true},
        "156": {"id": 156, "code": "ng", "type": "default", "zipcode": true, "has_regions": true},
        "157": {"id": 157, "code": "nu", "type": "default", "zipcode": true, "has_regions": false},
        "158": {"id": 158, "code": "nf", "type": "default", "zipcode": true, "has_regions": false},
        "159": {"id": 159, "code": "mp", "type": "default", "zipcode": true, "has_regions": false},
        "160": {"id": 160, "code": "no", "type": "default", "zipcode": true, "has_regions": true},
        "161": {"id": 161, "code": "om", "type": "international", "zipcode": false, "has_regions": true},
        "162": {"id": 162, "code": "pk", "type": "default", "zipcode": true, "has_regions": true},
        "163": {"id": 163, "code": "pw", "type": "default", "zipcode": true, "has_regions": true},
        "164": {"id": 164, "code": "ps", "type": "international", "zipcode": false, "has_regions": false},
        "165": {"id": 165, "code": "pa", "type": "default", "zipcode": true, "has_regions": true},
        "166": {"id": 166, "code": "pg", "type": "default", "zipcode": true, "has_regions": true},
        "167": {"id": 167, "code": "py", "type": "default", "zipcode": true, "has_regions": true},
        "168": {"id": 168, "code": "pe", "type": "default", "zipcode": true, "has_regions": true},
        "169": {"id": 169, "code": "ph", "type": "default", "zipcode": true, "has_regions": true},
        "170": {"id": 170, "code": "pn", "type": "default", "zipcode": true, "has_regions": false},
        "171": {"id": 171, "code": "pl", "type": "international", "zipcode": true, "has_regions": true},
        "172": {"id": 172, "code": "pt", "type": "default", "zipcode": true, "has_regions": true},
        "173": {"id": 173, "code": "pr", "type": "default", "zipcode": true, "has_regions": false},
        "174": {"id": 174, "code": "qa", "type": "international", "zipcode": false, "has_regions": true},
        "175": {"id": 175, "code": "re", "type": "international", "zipcode": true, "has_regions": false},
        "176": {"id": 176, "code": "ro", "type": "default", "zipcode": true, "has_regions": true},
        "177": {"id": 177, "code": "ru", "type": "default", "zipcode": true, "has_regions": true},
        "178": {"id": 178, "code": "rw", "type": "default", "zipcode": true, "has_regions": true},
        "179": {"id": 179, "code": "sh", "type": "default", "zipcode": true, "has_regions": true},
        "180": {"id": 180, "code": "kn", "type": "default", "zipcode": true, "has_regions": true},
        "181": {"id": 181, "code": "lc", "type": "default", "zipcode": true, "has_regions": true},
        "182": {"id": 182, "code": "pm", "type": "default", "zipcode": true, "has_regions": false},
        "183": {"id": 183, "code": "vc", "type": "default", "zipcode": true, "has_regions": true},
        "184": {"id": 184, "code": "ws", "type": "default", "zipcode": true, "has_regions": true},
        "185": {"id": 185, "code": "sm", "type": "default", "zipcode": true, "has_regions": true},
        "186": {"id": 186, "code": "st", "type": "default", "zipcode": true, "has_regions": true},
        "187": {"id": 187, "code": "sa", "type": "international", "zipcode": false, "has_regions": true},
        "188": {"id": 188, "code": "sn", "type": "default", "zipcode": true, "has_regions": true},
        "240": {"id": 240, "code": "rs", "type": "default", "zipcode": true, "has_regions": true},
        "189": {"id": 189, "code": "cs", "type": "default", "zipcode": true, "has_regions": false},
        "190": {"id": 190, "code": "sc", "type": "default", "zipcode": true, "has_regions": true},
        "191": {"id": 191, "code": "sl", "type": "default", "zipcode": true, "has_regions": true},
        "192": {"id": 192, "code": "sg", "type": "default", "zipcode": true, "has_regions": true},
        "244": {"id": 244, "code": "sx", "type": "default", "zipcode": true, "has_regions": false},
        "193": {"id": 193, "code": "sk", "type": "default", "zipcode": true, "has_regions": true},
        "194": {"id": 194, "code": "si", "type": "default", "zipcode": true, "has_regions": true},
        "195": {"id": 195, "code": "sb", "type": "default", "zipcode": true, "has_regions": true},
        "196": {"id": 196, "code": "so", "type": "default", "zipcode": true, "has_regions": true},
        "197": {"id": 197, "code": "za", "type": "default", "zipcode": true, "has_regions": true},
        "198": {"id": 198, "code": "gs", "type": "default", "zipcode": true, "has_regions": false},
        "199": {"id": 199, "code": "es", "type": "default", "zipcode": true, "has_regions": true},
        "200": {"id": 200, "code": "lk", "type": "default", "zipcode": true, "has_regions": true},
        "201": {"id": 201, "code": "sd", "type": "default", "zipcode": true, "has_regions": true},
        "202": {"id": 202, "code": "sr", "type": "default", "zipcode": false, "has_regions": true},
        "203": {"id": 203, "code": "sj", "type": "default", "zipcode": true, "has_regions": false},
        "204": {"id": 204, "code": "sz", "type": "default", "zipcode": true, "has_regions": true},
        "205": {"id": 205, "code": "se", "type": "default", "zipcode": true, "has_regions": true},
        "206": {"id": 206, "code": "ch", "type": "default", "zipcode": true, "has_regions": true},
        "207": {"id": 207, "code": "sy", "type": "international", "zipcode": false, "has_regions": true},
        "208": {"id": 208, "code": "tw", "type": "default", "zipcode": true, "has_regions": true},
        "209": {"id": 209, "code": "tj", "type": "default", "zipcode": true, "has_regions": true},
        "210": {"id": 210, "code": "tz", "type": "default", "zipcode": true, "has_regions": true},
        "211": {"id": 211, "code": "th", "type": "default", "zipcode": true, "has_regions": true},
        "212": {"id": 212, "code": "tl", "type": "default", "zipcode": true, "has_regions": true},
        "213": {"id": 213, "code": "tg", "type": "default", "zipcode": true, "has_regions": true},
        "214": {"id": 214, "code": "tk", "type": "default", "zipcode": true, "has_regions": false},
        "215": {"id": 215, "code": "to", "type": "default", "zipcode": true, "has_regions": true},
        "216": {"id": 216, "code": "tt", "type": "default", "zipcode": false, "has_regions": true},
        "217": {"id": 217, "code": "tn", "type": "default", "zipcode": true, "has_regions": true},
        "218": {"id": 218, "code": "tr", "type": "default", "zipcode": true, "has_regions": true},
        "219": {"id": 219, "code": "tm", "type": "default", "zipcode": true, "has_regions": true},
        "220": {"id": 220, "code": "tc", "type": "default", "zipcode": true, "has_regions": false},
        "221": {"id": 221, "code": "tv", "type": "default", "zipcode": true, "has_regions": true},
        "222": {"id": 222, "code": "ug", "type": "default", "zipcode": true, "has_regions": true},
        "223": {"id": 223, "code": "ua", "type": "default", "zipcode": true, "has_regions": true},
        "224": {"id": 224, "code": "ae", "type": "international", "zipcode": false, "has_regions": true},
        "225": {"id": 225, "code": "gb", "type": "international", "zipcode": true, "has_regions": true},
        "226": {"id": 226, "code": "us", "type": "international", "zipcode": true, "has_regions": true},
        "227": {"id": 227, "code": "um", "type": "default", "zipcode": true, "has_regions": true},
        "228": {"id": 228, "code": "uy", "type": "default", "zipcode": true, "has_regions": true},
        "229": {"id": 229, "code": "uz", "type": "default", "zipcode": true, "has_regions": true},
        "230": {"id": 230, "code": "vu", "type": "default", "zipcode": true, "has_regions": true},
        "231": {"id": 231, "code": "ve", "type": "default", "zipcode": true, "has_regions": true},
        "232": {"id": 232, "code": "vn", "type": "default", "zipcode": true, "has_regions": true},
        "233": {"id": 233, "code": "vg", "type": "default", "zipcode": true, "has_regions": false},
        "234": {"id": 234, "code": "vi", "type": "default", "zipcode": true, "has_regions": false},
        "235": {"id": 235, "code": "wf", "type": "default", "zipcode": true, "has_regions": false},
        "236": {"id": 236, "code": "eh", "type": "default", "zipcode": true, "has_regions": true},
        "237": {"id": 237, "code": "ye", "type": "international", "zipcode": false, "has_regions": true},
        "238": {"id": 238, "code": "zm", "type": "default", "zipcode": true, "has_regions": true},
        "239": {"id": 239, "code": "zw", "type": "international", "zipcode": false, "has_regions": true}
    };

    // gui_address('#gui-billing-address', 'LINK/services/addresslookup/?country=_country_&zipcode=_zipcode_&number=_number_', 'LINK/services/regions/?country=_country_');
    // gui_address('#gui-shipping-address', 'LINK/services/addresslookup/?country=_country_&zipcode=_zipcode_&number=_number_', 'LINK.com/services/regions/?country=_country_');
    // gui_focus('#gui-form');
    // gui_validator('#gui-form');
    // gui_translation('This is a required field', 'This is a required field');

});

function Util() {
};

/*
	class manipulation functions
*/
Util.hasClass = function (el, className) {
    if (el.classList) return el.classList.contains(className);
    else return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
};

Util.addClass = function (el, className) {
    var classList = className.split(' ');
    if (el.classList) el.classList.add(classList[0]);
    else if (!Util.hasClass(el, classList[0])) el.className += " " + classList[0];
    if (classList.length > 1) Util.addClass(el, classList.slice(1).join(' '));
};

Util.removeClass = function (el, className) {
    var classList = className.split(' ');
    if (el.classList) el.classList.remove(classList[0]);
    else if (Util.hasClass(el, classList[0])) {
        var reg = new RegExp('(\\s|^)' + classList[0] + '(\\s|$)');
        el.className = el.className.replace(reg, ' ');
    }
    if (classList.length > 1) Util.removeClass(el, classList.slice(1).join(' '));
};

Util.toggleClass = function (el, className, bool) {
    if (bool) Util.addClass(el, className);
    else Util.removeClass(el, className);
};

Util.setAttributes = function (el, attrs) {
    for (var key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
};

/*
  DOM manipulation
*/
Util.getChildrenByClassName = function (el, className) {
    var children = el.children,
        childrenByClass = [];
    for (var i = 0; i < el.children.length; i++) {
        if (Util.hasClass(el.children[i], className)) childrenByClass.push(el.children[i]);
    }
    return childrenByClass;
};

Util.is = function (elem, selector) {
    if (selector.nodeType) {
        return elem === selector;
    }

    var qa = (typeof (selector) === 'string' ? document.querySelectorAll(selector) : selector),
        length = qa.length,
        returnArr = [];

    while (length--) {
        if (qa[length] === elem) {
            return true;
        }
    }

    return false;
};

/*
	Animate height of an element
*/
Util.setHeight = function (start, to, element, duration, cb) {
    var change = to - start,
        currentTime = null;

    var animateHeight = function (timestamp) {
        if (!currentTime) currentTime = timestamp;
        var progress = timestamp - currentTime;
        var val = parseInt((progress / duration) * change + start);
        element.style.height = val + "px";
        if (progress < duration) {
            window.requestAnimationFrame(animateHeight);
        } else {
            cb();
        }
    };

    //set the height of the element before starting animation -> fix bug on Safari
    element.style.height = start + "px";
    window.requestAnimationFrame(animateHeight);
};

/*
	Smooth Scroll
*/

Util.scrollTo = function (final, duration, cb, scrollEl) {
    var element = scrollEl || window;
    var start = element.scrollTop || document.documentElement.scrollTop,
        currentTime = null;

    if (!scrollEl) start = window.scrollY || document.documentElement.scrollTop;

    var animateScroll = function (timestamp) {
        if (!currentTime) currentTime = timestamp;
        var progress = timestamp - currentTime;
        if (progress > duration) progress = duration;
        var val = Math.easeInOutQuad(progress, start, final - start, duration);
        element.scrollTo(0, val);
        if (progress < duration) {
            window.requestAnimationFrame(animateScroll);
        } else {
            cb && cb();
        }
    };

    window.requestAnimationFrame(animateScroll);
};

/*
  Focus utility classes
*/

//Move focus to an element
Util.moveFocus = function (element) {
    if (!element) element = document.getElementsByTagName("body")[0];
    element.focus();
    if (document.activeElement !== element) {
        element.setAttribute('tabindex', '-1');
        element.focus();
    }
};

/*
  Misc
*/

Util.getIndexInArray = function (array, el) {
    return Array.prototype.indexOf.call(array, el);
};

Util.cssSupports = function (property, value) {
    if ('CSS' in window) {
        return CSS.supports(property, value);
    } else {
        var jsProperty = property.replace(/-([a-z])/g, function (g) {
            return g[1].toUpperCase();
        });
        return jsProperty in document.body.style;
    }
};

// merge a set of user options into plugin defaults
// https://gomakethings.com/vanilla-javascript-version-of-jquery-extend/
Util.extend = function () {
    // Variables
    var extended = {};
    var deep = false;
    var i = 0;
    var length = arguments.length;

    // Check if a deep merge
    if (Object.prototype.toString.call(arguments[0]) === '[object Boolean]') {
        deep = arguments[0];
        i++;
    }

    // Merge the object into the extended object
    var merge = function (obj) {
        for (var prop in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, prop)) {
                // If deep merge and property is an object, merge properties
                if (deep && Object.prototype.toString.call(obj[prop]) === '[object Object]') {
                    extended[prop] = extend(true, extended[prop], obj[prop]);
                } else {
                    extended[prop] = obj[prop];
                }
            }
        }
    };

    // Loop through each object and conduct a merge
    for (; i < length; i++) {
        var obj = arguments[i];
        merge(obj);
    }

    return extended;
};

// Check if Reduced Motion is enabled
Util.osHasReducedMotion = function () {
    if (!window.matchMedia) return false;
    var matchMediaObj = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (matchMediaObj) return matchMediaObj.matches;
    return false; // return false if not supported
};

/*
	Polyfills
*/
//Closest() method
if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
    Element.prototype.closest = function (s) {
        var el = this;
        if (!document.documentElement.contains(el)) return null;
        do {
            if (el.matches(s)) return el;
            el = el.parentElement || el.parentNode;
        } while (el !== null && el.nodeType === 1);
        return null;
    };
}

//Custom Event() constructor
if (typeof window.CustomEvent !== "function") {

    function CustomEvent(event, params) {
        params = params || {bubbles: false, cancelable: false, detail: undefined};
        var evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
    }

    CustomEvent.prototype = window.Event.prototype;

    window.CustomEvent = CustomEvent;
}

/*
	Animation curves
*/
Math.easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
};

Math.easeInQuart = function (t, b, c, d) {
    t /= d;
    return c * t * t * t * t + b;
};

Math.easeOutQuart = function (t, b, c, d) {
    t /= d;
    t--;
    return -c * (t * t * t * t - 1) + b;
};

Math.easeInOutQuart = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t * t + b;
    t -= 2;
    return -c / 2 * (t * t * t * t - 2) + b;
};

Math.easeOutElastic = function (t, b, c, d) {
    var s = 1.70158;
    var p = d * 0.7;
    var a = c;
    if (t == 0) return b;
    if ((t /= d) == 1) return b + c;
    if (!p) p = d * .3;
    if (a < Math.abs(c)) {
        a = c;
        var s = p / 4;
    } else var s = p / (2 * Math.PI) * Math.asin(c / a);
    return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
};


/* JS Utility Classes */

// make focus ring visible only for keyboard navigation (i.e., tab key)
(function () {
    var focusTab = document.getElementsByClassName('js-tab-focus'),
        shouldInit = false,
        outlineStyle = false,
        eventDetected = false;

    function detectClick() {
        if (focusTab.length > 0) {
            resetFocusStyle(false);
            window.addEventListener('keydown', detectTab);
        }
        window.removeEventListener('mousedown', detectClick);
        outlineStyle = false;
        eventDetected = true;
    };

    function detectTab(event) {
        if (event.keyCode !== 9) return;
        resetFocusStyle(true);
        window.removeEventListener('keydown', detectTab);
        window.addEventListener('mousedown', detectClick);
        outlineStyle = true;
    };

    function resetFocusStyle(bool) {
        var outlineStyle = bool ? '' : 'none';
        for (var i = 0; i < focusTab.length; i++) {
            focusTab[i].style.setProperty('outline', outlineStyle);
        }
    };

    function initFocusTabs() {
        if (shouldInit) {
            if (eventDetected) resetFocusStyle(outlineStyle);
            return;
        }
        shouldInit = focusTab.length > 0;
        window.addEventListener('mousedown', detectClick);
    };

    initFocusTabs();
    window.addEventListener('initFocusTabs', initFocusTabs);
}());

function resetFocusTabsStyle() {
    window.dispatchEvent(new CustomEvent('initFocusTabs'));
};
/*!
 * Serialize all form data into a query string
 * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node}   form The form to serialize
 * @return {String}      The serialized form data
 */
var serialize = function (form) {

    // Setup our serialized data
    var serialized = [];

    // Loop through each field in the form
    for (var i = 0; i < form.elements.length; i++) {

        var field = form.elements[i];

        // Don't serialize fields without a name, submits, buttons, file and reset inputs, and disabled fields
        if (!field.name || field.disabled || field.type === 'file' || field.type === 'reset' || field.type === 'submit' || field.type === 'button') continue;

        // If a multi-select, get all selections
        if (field.type === 'select-multiple') {
            for (var n = 0; n < field.options.length; n++) {
                if (!field.options[n].selected) continue;
                serialized.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(field.options[n].value));
            }
        }

        // Convert field data to a query string
        else if ((field.type !== 'checkbox' && field.type !== 'radio') || field.checked) {
            serialized.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(field.value));
        }
    }

    return serialized.join('&');

};
// File#: _1_accordion
// Usage: codyhouse.co/license
(function () {
    var Accordion = function (element) {
        this.element = element;
        this.items = Util.getChildrenByClassName(this.element, 'js-accordion__item');
        this.version = this.element.getAttribute('data-version') ? '-' + this.element.getAttribute('data-version') : '';
        this.showClass = 'accordion' + this.version + '__item--is-open';
        this.animateHeight = (this.element.getAttribute('data-animation') == 'on');
        this.multiItems = !(this.element.getAttribute('data-multi-items') == 'off');
        this.initAccordion();
    };

    Accordion.prototype.initAccordion = function () {
        //set initial aria attributes
        for (var i = 0; i < this.items.length; i++) {
            var button = this.items[i].getElementsByTagName('button')[0],
                content = this.items[i].getElementsByClassName('js-accordion__panel')[0],
                isOpen = Util.hasClass(this.items[i], this.showClass) ? 'true' : 'false';
            Util.setAttributes(button, {
                'aria-expanded': isOpen,
                'aria-controls': 'accordion-content-' + i,
                'id': 'accordion-header-' + i
            });
            Util.addClass(button, 'js-accordion__trigger');
            Util.setAttributes(content, {'aria-labelledby': 'accordion-header-' + i, 'id': 'accordion-content-' + i});
        }

        //listen for Accordion events
        this.initAccordionEvents();
    };

    Accordion.prototype.initAccordionEvents = function () {
        var self = this;

        this.element.addEventListener('click', function (event) {
            var trigger = event.target.closest('.js-accordion__trigger');
            //check index to make sure the click didn't happen inside a children accordion
            if (trigger && Util.getIndexInArray(self.items, trigger.parentElement) >= 0) self.triggerAccordion(trigger);
        });
    };

    Accordion.prototype.triggerAccordion = function (trigger) {
        var self = this;
        var bool = (trigger.getAttribute('aria-expanded') === 'true');

        this.animateAccordion(trigger, bool);
    };

    Accordion.prototype.animateAccordion = function (trigger, bool) {
        var self = this;
        var item = trigger.closest('.js-accordion__item'),
            content = item.getElementsByClassName('js-accordion__panel')[0],
            ariaValue = bool ? 'false' : 'true';

        if (!bool) Util.addClass(item, this.showClass);
        trigger.setAttribute('aria-expanded', ariaValue);
        self.resetContentVisibility(item, content, bool);

        if (!this.multiItems && !bool) this.closeSiblings(item);
    };

    Accordion.prototype.resetContentVisibility = function (item, content, bool) {
        Util.toggleClass(item, this.showClass, !bool);
        content.removeAttribute("style");
        if (bool && !this.multiItems) { // accordion item has been closed -> check if there's one open to move inside viewport
            this.moveContent();
        }
    };

    Accordion.prototype.closeSiblings = function (item) {
        //if only one accordion can be open -> search if there's another one open
        var index = Util.getIndexInArray(this.items, item);
        for (var i = 0; i < this.items.length; i++) {
            if (Util.hasClass(this.items[i], this.showClass) && i != index) {
                this.animateAccordion(this.items[i].getElementsByClassName('js-accordion__trigger')[0], true);
                return false;
            }
        }
    };

    Accordion.prototype.moveContent = function () { // make sure title of the accordion just opened is inside the viewport
        var openAccordion = this.element.getElementsByClassName(this.showClass);
        if (openAccordion.length == 0) return;
        var boundingRect = openAccordion[0].getBoundingClientRect();
        if (boundingRect.top < 0 || boundingRect.top > window.innerHeight) {
            var windowScrollTop = window.scrollY || document.documentElement.scrollTop;
            window.scrollTo(0, boundingRect.top + windowScrollTop);
        }
    };

    window.Accordion = Accordion;

    //initialize the Accordion objects
    var accordions = document.getElementsByClassName('js-accordion');
    if (accordions.length > 0) {
        for (var i = 0; i < accordions.length; i++) {
            (function (i) {
                new Accordion(accordions[i]);
            })(i);
        }
    }
}());
// File#: _1_anim-menu-btn
// Usage: codyhouse.co/license
(function () {
    var menuBtns = document.getElementsByClassName('js-anim-menu-btn');
    if (menuBtns.length > 0) {
        for (var i = 0; i < menuBtns.length; i++) {
            (function (i) {
                initMenuBtn(menuBtns[i]);
            })(i);
        }

        function initMenuBtn(btn) {
            btn.addEventListener('click', function (event) {
                event.preventDefault();
                var status = !Util.hasClass(btn, 'anim-menu-btn--state-b');
                Util.toggleClass(btn, 'anim-menu-btn--state-b', status);
                // emit custom event
                var event = new CustomEvent('anim-menu-btn-clicked', {detail: status});
                btn.dispatchEvent(event);
            });
        };
    }
}());
// File#: _1_custom-select
// Usage: codyhouse.co/license
(function () {
    // NOTE: you need the js code only when using the --custom-dropdown variation of the Custom Select component. Default version does nor require JS.

    var CustomSelect = function (element) {
        this.element = element;
        this.select = this.element.getElementsByTagName('select')[0];
        this.optGroups = this.select.getElementsByTagName('optgroup');
        this.options = this.select.getElementsByTagName('option');
        this.selectedOption = getSelectedOptionText(this);
        this.selectId = this.select.getAttribute('id');
        this.trigger = false;
        this.dropdown = false;
        this.customOptions = false;
        this.arrowIcon = this.element.getElementsByTagName('svg');
        this.label = document.querySelector('[for="' + this.selectId + '"]');

        this.optionIndex = 0; // used while building the custom dropdown

        initCustomSelect(this); // init markup
        initCustomSelectEvents(this); // init event listeners
    };

    function initCustomSelect(select) {
        // create the HTML for the custom dropdown element
        select.element.insertAdjacentHTML('beforeend', initButtonSelect(select) + initListSelect(select));

        // save custom elements
        select.dropdown = select.element.getElementsByClassName('js-select__dropdown')[0];
        select.trigger = select.element.getElementsByClassName('js-select__button')[0];
        select.customOptions = select.dropdown.getElementsByClassName('js-select__item');

        // hide default select
        Util.addClass(select.select, 'is-hidden');
        if (select.arrowIcon.length > 0) select.arrowIcon[0].style.display = 'none';

        // place dropdown
        placeDropdown(select);
    };

    function initCustomSelectEvents(select) {
        // option selection in dropdown
        initSelection(select);

        // click events
        select.trigger.addEventListener('click', function () {
            toggleCustomSelect(select, false);
        });
        if (select.label) {
            // move focus to custom trigger when clicking on <select> label
            select.label.addEventListener('click', function () {
                Util.moveFocus(select.trigger);
            });
        }
        // keyboard navigation
        select.dropdown.addEventListener('keydown', function (event) {
            if (event.keyCode && event.keyCode == 38 || event.key && event.key.toLowerCase() == 'arrowup') {
                keyboardCustomSelect(select, 'prev', event);
            } else if (event.keyCode && event.keyCode == 40 || event.key && event.key.toLowerCase() == 'arrowdown') {
                keyboardCustomSelect(select, 'next', event);
            }
        });
        // native <select> element has been updated -> update custom select as well
        select.element.addEventListener('select-updated', function (event) {
            resetCustomSelect(select);
        });
    };

    function toggleCustomSelect(select, bool) {
        var ariaExpanded;
        if (bool) {
            ariaExpanded = bool;
        } else {
            ariaExpanded = select.trigger.getAttribute('aria-expanded') == 'true' ? 'false' : 'true';
        }
        select.trigger.setAttribute('aria-expanded', ariaExpanded);
        if (ariaExpanded == 'true') {
            var selectedOption = getSelectedOption(select);
            Util.moveFocus(selectedOption); // fallback if transition is not supported
            select.dropdown.addEventListener('transitionend', function cb() {
                Util.moveFocus(selectedOption);
                select.dropdown.removeEventListener('transitionend', cb);
            });
            placeDropdown(select); // place dropdown based on available space
        }
    };

    function placeDropdown(select) {
        // remove placement classes to reset position
        Util.removeClass(select.dropdown, 'select__dropdown--right select__dropdown--up');
        var triggerBoundingRect = select.trigger.getBoundingClientRect();
        Util.toggleClass(select.dropdown, 'select__dropdown--right', (document.documentElement.clientWidth - 5 < triggerBoundingRect.left + select.dropdown.offsetWidth));
        // check if there's enough space up or down
        var moveUp = (window.innerHeight - triggerBoundingRect.bottom - 5) < triggerBoundingRect.top;
        Util.toggleClass(select.dropdown, 'select__dropdown--up', moveUp);
        // check if we need to set a max width
        var maxHeight = moveUp ? triggerBoundingRect.top - 20 : window.innerHeight - triggerBoundingRect.bottom - 20;
        // set max-height based on available space
        select.dropdown.setAttribute('style', 'max-height: ' + maxHeight + 'px; width: ' + triggerBoundingRect.width + 'px;');
    };

    function keyboardCustomSelect(select, direction, event) { // navigate custom dropdown with keyboard
        event.preventDefault();
        var index = Util.getIndexInArray(select.customOptions, document.activeElement);
        index = (direction == 'next') ? index + 1 : index - 1;
        if (index < 0) index = select.customOptions.length - 1;
        if (index >= select.customOptions.length) index = 0;
        Util.moveFocus(select.customOptions[index]);
    };

    function initSelection(select) { // option selection
        select.dropdown.addEventListener('click', function (event) {
            var option = event.target.closest('.js-select__item');
            if (!option) return;
            selectOption(select, option);
        });
    };

    function selectOption(select, option) {
        if (option.hasAttribute('aria-selected') && option.getAttribute('aria-selected') == 'true') {
            // selecting the same option
            select.trigger.setAttribute('aria-expanded', 'false'); // hide dropdown
        } else {
            var selectedOption = select.dropdown.querySelector('[aria-selected="true"]');
            if (selectedOption) selectedOption.setAttribute('aria-selected', 'false');
            option.setAttribute('aria-selected', 'true');
            select.trigger.getElementsByClassName('js-select__label')[0].textContent = option.textContent;
            select.trigger.setAttribute('aria-expanded', 'false');
            // new option has been selected -> update native <select> element _ arai-label of trigger <button>
            updateNativeSelect(select, option.getAttribute('data-index'));
            updateTriggerAria(select);
        }
        // move focus back to trigger
        select.trigger.focus();
    };

    function updateNativeSelect(select, index) {
        select.select.selectedIndex = index;
        select.select.dispatchEvent(new CustomEvent('change', {bubbles: true})); // trigger change event
    };

    function updateTriggerAria(select) {
        select.trigger.setAttribute('aria-label', select.options[select.select.selectedIndex].innerHTML + ', ' + select.label.textContent);
    };

    function getSelectedOptionText(select) {// used to initialize the label of the custom select button
        var label = '';
        if ('selectedIndex' in select.select) {
            label = select.options[select.select.selectedIndex].text;
        } else {
            label = select.select.querySelector('option[selected]').text;
        }
        return label;

    };

    function initButtonSelect(select) { // create the button element -> custom select trigger
        // check if we need to add custom classes to the button trigger
        var customClasses = select.element.getAttribute('data-trigger-class') ? ' ' + select.element.getAttribute('data-trigger-class') : '';

        var label = select.options[select.select.selectedIndex].innerHTML + ', ' + select.label.textContent;

        var button = '<button type="button" class="js-select__button select__button' + customClasses + '" aria-label="' + label + '" aria-expanded="false" aria-controls="' + select.selectId + '-dropdown"><span aria-hidden="true" class="js-select__label select__label">' + select.selectedOption + '</span>';
        if (select.arrowIcon.length > 0 && select.arrowIcon[0].outerHTML) {
            var clone = select.arrowIcon[0].cloneNode(true);
            Util.removeClass(clone, 'select__icon');
            button = button + clone.outerHTML;
        }

        return button + '</button>';

    };

    function initListSelect(select) { // create custom select dropdown
        var list = '<div class="js-select__dropdown select__dropdown" aria-describedby="' + select.selectId + '-description" id="' + select.selectId + '-dropdown">';
        list = list + getSelectLabelSR(select);
        if (select.optGroups.length > 0) {
            for (var i = 0; i < select.optGroups.length; i++) {
                var optGroupList = select.optGroups[i].getElementsByTagName('option'),
                    optGroupLabel = '<li><span class="select__item select__item--optgroup">' + select.optGroups[i].getAttribute('label') + '</span></li>';
                list = list + '<ul class="select__list" role="listbox">' + optGroupLabel + getOptionsList(select, optGroupList) + '</ul>';
            }
        } else {
            list = list + '<ul class="select__list" role="listbox">' + getOptionsList(select, select.options) + '</ul>';
        }
        return list;
    };

    function getSelectLabelSR(select) {
        if (select.label) {
            return '<p class="sr-only" id="' + select.selectId + '-description">' + select.label.textContent + '</p>'
        } else {
            return '';
        }
    };

    function resetCustomSelect(select) {
        // <select> element has been updated (using an external control) - update custom select
        var selectedOption = select.dropdown.querySelector('[aria-selected="true"]');
        if (selectedOption) selectedOption.setAttribute('aria-selected', 'false');
        var option = select.dropdown.querySelector('.js-select__item[data-index="' + select.select.selectedIndex + '"]');
        option.setAttribute('aria-selected', 'true');
        select.trigger.getElementsByClassName('js-select__label')[0].textContent = option.textContent;
        select.trigger.setAttribute('aria-expanded', 'false');
        updateTriggerAria(select);
    };

    function getOptionsList(select, options) {
        var list = '';
        for (var i = 0; i < options.length; i++) {
            var selected = options[i].hasAttribute('selected') ? ' aria-selected="true"' : ' aria-selected="false"';
            list = list + '<li><button type="button" class="reset js-select__item select__item select__item--option" role="option" data-value="' + options[i].value + '" ' + selected + ' data-index="' + select.optionIndex + '">' + options[i].text + '</button></li>';
            select.optionIndex = select.optionIndex + 1;
        }
        ;
        return list;
    };

    function getSelectedOption(select) {
        var option = select.dropdown.querySelector('[aria-selected="true"]');
        if (option) return option;
        else return select.dropdown.getElementsByClassName('js-select__item')[0];
    };

    function moveFocusToSelectTrigger(select) {
        if (!document.activeElement.closest('.js-select')) return
        select.trigger.focus();
    };

    function checkCustomSelectClick(select, target) { // close select when clicking outside it
        if (!select.element.contains(target)) toggleCustomSelect(select, 'false');
    };

    //initialize the CustomSelect objects
    var customSelect = document.getElementsByClassName('js-select');
    if (customSelect.length > 0) {
        var selectArray = [];
        for (var i = 0; i < customSelect.length; i++) {
            (function (i) {
                selectArray.push(new CustomSelect(customSelect[i]));
            })(i);
        }

        // listen for key events
        window.addEventListener('keyup', function (event) {
            if (event.keyCode && event.keyCode == 27 || event.key && event.key.toLowerCase() == 'escape') {
                // close custom select on 'Esc'
                selectArray.forEach(function (element) {
                    moveFocusToSelectTrigger(element); // if focus is within dropdown, move it to dropdown trigger
                    toggleCustomSelect(element, 'false'); // close dropdown
                });
            }
        });
        // close custom select when clicking outside it
        window.addEventListener('click', function (event) {
            selectArray.forEach(function (element) {
                checkCustomSelectClick(element, event.target);
            });
        });
    }
}());
// File#: _1_diagonal-movement
// Usage: codyhouse.co/license
/*
  Modified version of the jQuery-menu-aim plugin
  https://github.com/kamens/jQuery-menu-aim
  - Replaced jQuery with Vanilla JS
  - Minor changes
*/
(function () {
    var menuAim = function (opts) {
        init(opts);
    };

    window.menuAim = menuAim;

    function init(opts) {
        var activeRow = null,
            mouseLocs = [],
            lastDelayLoc = null,
            timeoutId = null,
            options = Util.extend({
                menu: '',
                rows: false, //if false, get direct children - otherwise pass nodes list
                submenuSelector: "*",
                submenuDirection: "right",
                tolerance: 75,  // bigger = more forgivey when entering submenu
                enter: function () {
                },
                exit: function () {
                },
                activate: function () {
                },
                deactivate: function () {
                },
                exitMenu: function () {
                }
            }, opts),
            menu = options.menu;

        var MOUSE_LOCS_TRACKED = 3,  // number of past mouse locations to track
            DELAY = 300;  // ms delay when user appears to be entering submenu

        /**
         * Keep track of the last few locations of the mouse.
         */
        var mousemoveDocument = function (e) {
            mouseLocs.push({x: e.pageX, y: e.pageY});

            if (mouseLocs.length > MOUSE_LOCS_TRACKED) {
                mouseLocs.shift();
            }
        };

        /**
         * Cancel possible row activations when leaving the menu entirely
         */
        var mouseleaveMenu = function () {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }

            // If exitMenu is supplied and returns true, deactivate the
            // currently active row on menu exit.
            if (options.exitMenu(this)) {
                if (activeRow) {
                    options.deactivate(activeRow);
                }

                activeRow = null;
            }
        };

        /**
         * Trigger a possible row activation whenever entering a new row.
         */
        var mouseenterRow = function () {
                if (timeoutId) {
                    // Cancel any previous activation delays
                    clearTimeout(timeoutId);
                }

                options.enter(this);
                possiblyActivate(this);
            },
            mouseleaveRow = function () {
                options.exit(this);
            };

        /*
     * Immediately activate a row if the user clicks on it.
     */
        var clickRow = function () {
            activate(this);
        };

        /**
         * Activate a menu row.
         */
        var activate = function (row) {
            if (row == activeRow) {
                return;
            }

            if (activeRow) {
                options.deactivate(activeRow);
            }

            options.activate(row);
            activeRow = row;
        };

        /**
         * Possibly activate a menu row. If mouse movement indicates that we
         * shouldn't activate yet because user may be trying to enter
         * a submenu's content, then delay and check again later.
         */
        var possiblyActivate = function (row) {
            var delay = activationDelay();

            if (delay) {
                timeoutId = setTimeout(function () {
                    possiblyActivate(row);
                }, delay);
            } else {
                activate(row);
            }
        };

        /**
         * Return the amount of time that should be used as a delay before the
         * currently hovered row is activated.
         *
         * Returns 0 if the activation should happen immediately. Otherwise,
         * returns the number of milliseconds that should be delayed before
         * checking again to see if the row should be activated.
         */
        var activationDelay = function () {
            if (!activeRow || !Util.is(activeRow, options.submenuSelector)) {
                // If there is no other submenu row already active, then
                // go ahead and activate immediately.
                return 0;
            }

            function getOffset(element) {
                var rect = element.getBoundingClientRect();
                return {top: rect.top + window.pageYOffset, left: rect.left + window.pageXOffset};
            };

            var offset = getOffset(menu),
                upperLeft = {
                    x: offset.left,
                    y: offset.top - options.tolerance
                },
                upperRight = {
                    x: offset.left + menu.offsetWidth,
                    y: upperLeft.y
                },
                lowerLeft = {
                    x: offset.left,
                    y: offset.top + menu.offsetHeight + options.tolerance
                },
                lowerRight = {
                    x: offset.left + menu.offsetWidth,
                    y: lowerLeft.y
                },
                loc = mouseLocs[mouseLocs.length - 1],
                prevLoc = mouseLocs[0];

            if (!loc) {
                return 0;
            }

            if (!prevLoc) {
                prevLoc = loc;
            }

            if (prevLoc.x < offset.left || prevLoc.x > lowerRight.x || prevLoc.y < offset.top || prevLoc.y > lowerRight.y) {
                // If the previous mouse location was outside of the entire
                // menu's bounds, immediately activate.
                return 0;
            }

            if (lastDelayLoc && loc.x == lastDelayLoc.x && loc.y == lastDelayLoc.y) {
                // If the mouse hasn't moved since the last time we checked
                // for activation status, immediately activate.
                return 0;
            }

            // Detect if the user is moving towards the currently activated
            // submenu.
            //
            // If the mouse is heading relatively clearly towards
            // the submenu's content, we should wait and give the user more
            // time before activating a new row. If the mouse is heading
            // elsewhere, we can immediately activate a new row.
            //
            // We detect this by calculating the slope formed between the
            // current mouse location and the upper/lower right points of
            // the menu. We do the same for the previous mouse location.
            // If the current mouse location's slopes are
            // increasing/decreasing appropriately compared to the
            // previous's, we know the user is moving toward the submenu.
            //
            // Note that since the y-axis increases as the cursor moves
            // down the screen, we are looking for the slope between the
            // cursor and the upper right corner to decrease over time, not
            // increase (somewhat counterintuitively).
            function slope(a, b) {
                return (b.y - a.y) / (b.x - a.x);
            };

            var decreasingCorner = upperRight,
                increasingCorner = lowerRight;

            // Our expectations for decreasing or increasing slope values
            // depends on which direction the submenu opens relative to the
            // main menu. By default, if the menu opens on the right, we
            // expect the slope between the cursor and the upper right
            // corner to decrease over time, as explained above. If the
            // submenu opens in a different direction, we change our slope
            // expectations.
            if (options.submenuDirection == "left") {
                decreasingCorner = lowerLeft;
                increasingCorner = upperLeft;
            } else if (options.submenuDirection == "below") {
                decreasingCorner = lowerRight;
                increasingCorner = lowerLeft;
            } else if (options.submenuDirection == "above") {
                decreasingCorner = upperLeft;
                increasingCorner = upperRight;
            }

            var decreasingSlope = slope(loc, decreasingCorner),
                increasingSlope = slope(loc, increasingCorner),
                prevDecreasingSlope = slope(prevLoc, decreasingCorner),
                prevIncreasingSlope = slope(prevLoc, increasingCorner);

            if (decreasingSlope < prevDecreasingSlope && increasingSlope > prevIncreasingSlope) {
                // Mouse is moving from previous location towards the
                // currently activated submenu. Delay before activating a
                // new menu row, because user may be moving into submenu.
                lastDelayLoc = loc;
                return DELAY;
            }

            lastDelayLoc = null;
            return 0;
        };

        /**
         * Hook up initial menu events
         */
        menu.addEventListener('mouseleave', mouseleaveMenu);
        var rows = (options.rows) ? options.rows : menu.children;
        if (rows.length > 0) {
            for (var i = 0; i < rows.length; i++) {
                (function (i) {
                    rows[i].addEventListener('mouseenter', mouseenterRow);
                    rows[i].addEventListener('mouseleave', mouseleaveRow);
                    rows[i].addEventListener('click', clickRow);
                })(i);
            }
        }

        document.addEventListener('mousemove', function (event) {
            (!window.requestAnimationFrame) ? mousemoveDocument(event) : window.requestAnimationFrame(function () {
                mousemoveDocument(event);
            });
        });
    };
}());


// File#: _1_drawer
// Usage: codyhouse.co/license
(function () {
    var Drawer = function (element) {
        this.element = element;
        this.content = document.getElementsByClassName('js-drawer__body')[0];
        this.triggers = document.querySelectorAll('[aria-controls="' + this.element.getAttribute('id') + '"]');
        this.firstFocusable = null;
        this.lastFocusable = null;
        this.selectedTrigger = null;
        this.isModal = Util.hasClass(this.element, 'js-drawer--modal');
        this.showClass = "drawer--is-visible";
        this.initDrawer();
    };

    Drawer.prototype.initDrawer = function () {
        var self = this;
        //open drawer when clicking on trigger buttons
        if (this.triggers) {
            for (var i = 0; i < this.triggers.length; i++) {
                this.triggers[i].addEventListener('click', function (event) {
                    event.preventDefault();
                    if (Util.hasClass(self.element, self.showClass)) {
                        self.closeDrawer(event.target);
                        return;
                    }
                    self.selectedTrigger = event.target;
                    self.showDrawer();
                    self.initDrawerEvents();
                });
            }
        }

        // if drawer is already open -> we should initialize the drawer events
        if (Util.hasClass(this.element, this.showClass)) this.initDrawerEvents();
    };

    Drawer.prototype.showDrawer = function () {
        var self = this;
        this.content.scrollTop = 0;
        Util.addClass(this.element, this.showClass);
        this.getFocusableElements();
        Util.moveFocus(this.element);
        // wait for the end of transitions before moving focus
        this.element.addEventListener("transitionend", function cb(event) {
            Util.moveFocus(self.element);
            self.element.removeEventListener("transitionend", cb);
        });
        this.emitDrawerEvents('drawerIsOpen', this.selectedTrigger);
    };

    Drawer.prototype.closeDrawer = function (target) {
        Util.removeClass(this.element, this.showClass);
        this.firstFocusable = null;
        this.lastFocusable = null;
        if (this.selectedTrigger) this.selectedTrigger.focus();
        //remove listeners
        this.cancelDrawerEvents();
        this.emitDrawerEvents('drawerIsClose', target);
    };

    Drawer.prototype.initDrawerEvents = function () {
        //add event listeners
        this.element.addEventListener('keydown', this);
        this.element.addEventListener('click', this);
    };

    Drawer.prototype.cancelDrawerEvents = function () {
        //remove event listeners
        this.element.removeEventListener('keydown', this);
        this.element.removeEventListener('click', this);
    };

    Drawer.prototype.handleEvent = function (event) {
        switch (event.type) {
            case 'click': {
                this.initClick(event);
            }
            case 'keydown': {
                this.initKeyDown(event);
            }
        }
    };

    Drawer.prototype.initKeyDown = function (event) {
        if (event.keyCode && event.keyCode == 27 || event.key && event.key == 'Escape') {
            //close drawer window on esc
            this.closeDrawer(false);
        } else if (this.isModal && (event.keyCode && event.keyCode == 9 || event.key && event.key == 'Tab')) {
            //trap focus inside drawer
            this.trapFocus(event);
        }
    };

    Drawer.prototype.initClick = function (event) {
        //close drawer when clicking on close button or drawer bg layer
        if (!event.target.closest('.js-drawer__close') && !Util.hasClass(event.target, 'js-drawer')) return;
        event.preventDefault();
        this.closeDrawer(event.target);
    };

    Drawer.prototype.trapFocus = function (event) {
        if (this.firstFocusable == document.activeElement && event.shiftKey) {
            //on Shift+Tab -> focus last focusable element when focus moves out of drawer
            event.preventDefault();
            this.lastFocusable.focus();
        }
        if (this.lastFocusable == document.activeElement && !event.shiftKey) {
            //on Tab -> focus first focusable element when focus moves out of drawer
            event.preventDefault();
            this.firstFocusable.focus();
        }
    }

    Drawer.prototype.getFocusableElements = function () {
        //get all focusable elements inside the drawer
        var allFocusable = this.element.querySelectorAll('[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex]:not([tabindex="-1"]), [contenteditable], audio[controls], video[controls], summary');
        this.getFirstVisible(allFocusable);
        this.getLastVisible(allFocusable);
    };

    Drawer.prototype.getFirstVisible = function (elements) {
        //get first visible focusable element inside the drawer
        for (var i = 0; i < elements.length; i++) {
            if (elements[i].offsetWidth || elements[i].offsetHeight || elements[i].getClientRects().length) {
                this.firstFocusable = elements[i];
                return true;
            }
        }
    };

    Drawer.prototype.getLastVisible = function (elements) {
        //get last visible focusable element inside the drawer
        for (var i = elements.length - 1; i >= 0; i--) {
            if (elements[i].offsetWidth || elements[i].offsetHeight || elements[i].getClientRects().length) {
                this.lastFocusable = elements[i];
                return true;
            }
        }
    };

    Drawer.prototype.emitDrawerEvents = function (eventName, target) {
        var event = new CustomEvent(eventName, {detail: target});
        this.element.dispatchEvent(event);
    };

    //initialize the Drawer objects
    var drawer = document.getElementsByClassName('js-drawer');
    if (drawer.length > 0) {
        for (var i = 0; i < drawer.length; i++) {
            (function (i) {
                new Drawer(drawer[i]);
            })(i);
        }
    }
}());
// File#: _1_image-magnifier
// Usage: codyhouse.co/license

(function () {
    var ImageMagnifier = function (element) {
        this.element = element;
        this.asset = this.element.getElementsByClassName('js-img-mag__asset')[0];
        this.ready = false;
        this.scale = 1;
        this.intervalId = false;
        this.moving = false;
        this.moveEvent = false;
        initImageMagnifier(this);
    };

    function initImageMagnifier(imgMag) {
        // wait for the image to be loaded
        imgMag.asset.addEventListener('load', function () {
            initImageMagnifierMove(imgMag);
        });
        if (imgMag.asset.complete) {
            initImageMagnifierMove(imgMag);
        }
    };

    function initImageMagnifierMove(imgMag) {
        if (imgMag.ready) return;
        imgMag.ready = true;
        initImageMagnifierScale(imgMag); // get image scale
        // listen to mousenter event
        imgMag.element.addEventListener('mouseenter', handleEvent.bind(imgMag));
    };

    function initImageMagnifierScale(imgMag) {
        var customScale = imgMag.element.getAttribute('data-scale');
        if (customScale) { // use custom scale set in HTML
            imgMag.scale = customScale;
        } else { // use natural width of image to get the scale value
            imgMag.scale = imgMag.asset.naturalWidth / imgMag.element.offsetWidth;
            // round to 2 places decimal
            imgMag.scale = Math.floor((imgMag.scale * 100)) / 100;
            if (imgMag.scale > 1.2) imgMag.scale = imgMag.scale - 0.2;
        }
    };

    function initImageMove(imgMag) { // add move event listeners
        imgMag.moveEvent = handleEvent.bind(imgMag);
        imgMag.element.addEventListener('mousemove', imgMag.moveEvent);
        imgMag.element.addEventListener('mouseleave', imgMag.moveEvent);
    };

    function cancelImageMove(imgMag) { // remove move event listeners
        if (imgMag.intervalId) {
            (!window.requestAnimationFrame) ? clearInterval(imgMag.intervalId) : window.cancelAnimationFrame(imgMag.intervalId);
            imgMag.intervalId = false;
        }
        if (imgMag.moveEvent) {
            imgMag.element.removeEventListener('mousemove', imgMag.moveEvent);
            imgMag.element.removeEventListener('mouseleave', imgMag.moveEvent);
            imgMag.moveEvent = false;
        }
    };

    function handleEvent(event) {
        switch (event.type) {
            case 'mouseenter':
                startMove(this, event);
                break;
            case 'mousemove':
                move(this, event);
                break;
            case 'mouseleave':
                endMove(this);
                break;
        }
    };

    function startMove(imgMag, event) {
        imgMag.moving = true;
        initImageMove(imgMag); // listen to mousemove event
        zoomImageMagnifier(imgMag, event);
    };

    function move(imgMag, event) {
        if (!imgMag.moving || imgMag.intervalId) return;
        (!window.requestAnimationFrame)
            ? imgMag.intervalId = setTimeout(function () {
                zoomImageMagnifier(imgMag, event);
            }, 250)
            : imgMag.intervalId = window.requestAnimationFrame(function () {
                zoomImageMagnifier(imgMag, event);
            });
    };

    function endMove(imgMag) {
        imgMag.moving = false;
        cancelImageMove(imgMag); // remove event listeners
        imgMag.asset.removeAttribute('style'); // reset image style
    };

    function zoomImageMagnifier(imgMag, event) { // zoom effect on mousemove
        var elementRect = imgMag.element.getBoundingClientRect();
        var translateX = (elementRect.left - event.clientX);
        var translateY = (elementRect.top - event.clientY);
        if (translateX > 0) translateX = 0;
        if (translateX < -1 * elementRect.width) translateX = -1 * elementRect.width;
        if (translateY > 0) translateY = 0;
        if (translateY < -1 * elementRect.height) translateX = -1 * elementRect.height;
        var transform = 'translateX(' + translateX * (imgMag.scale - 1) + 'px) translateY(' + translateY * (imgMag.scale - 1) + 'px) scale(' + imgMag.scale + ')';
        imgMag.asset.setAttribute('style', 'transform: ' + transform + ';');
        imgMag.intervalId = false;
    };

    // init ImageMagnifier object
    var imageMag = document.getElementsByClassName('js-img-mag');
    if (imageMag.length > 0) {
        for (var i = 0; i < imageMag.length; i++) {
            new ImageMagnifier(imageMag[i]);
        }
    }
}());
// File#: _1_number-input
// Usage: codyhouse.co/license
// (function() {
//   var InputNumber = function(element) {
//     this.element = element;
//     this.input = this.element.getElementsByClassName('js-number-input__value')[0];
//     this.min = parseFloat(this.input.getAttribute('min'));
//     this.max = parseFloat(this.input.getAttribute('max'));
//     this.step = parseFloat(this.input.getAttribute('step'));
//     if(isNaN(this.step)) this.step = 1;
//     this.precision = getStepPrecision(this.step);
//     initInputNumberEvents(this);
//   };

//   function initInputNumberEvents(input) {
//     // listen to the click event on the custom increment buttons
//     input.element.addEventListener('click', function(event){
//       var increment = event.target.closest('.js-number-input__btn');
//       if(increment) {
//         event.preventDefault();
//         updateInputNumber(input, increment);
//       }
//     });

//     // when input changes, make sure the new value is acceptable
//     input.input.addEventListener('focusout', function(event){
//       var value = parseFloat(input.input.value);
//       if( value < input.min ) value = input.min;
//       if( value > input.max ) value = input.max;
//       // check value is multiple of step
//       value = checkIsMultipleStep(input, value);
//       if( value != parseFloat(input.input.value)) input.input.value = value;

//     });
//   };

//   function getStepPrecision(step) {
//     // if step is a floating number, return its precision
//     return (step.toString().length - Math.floor(step).toString().length - 1);
//   };

//   function updateInputNumber(input, btn) {
//     var value = ( Util.hasClass(btn, 'number-input__btn--plus') ) ? parseFloat(input.input.value) + input.step : parseFloat(input.input.value) - input.step;
//     if( input.precision > 0 ) value = value.toFixed(input.precision);
//     if( value < input.min ) value = input.min;
//     if( value > input.max ) value = input.max;
//     input.input.value = value;
//     input.input.dispatchEvent(new CustomEvent('change', {bubbles: true})); // trigger change event
//   };

//   function checkIsMultipleStep(input, value) {
//     // check if the number inserted is a multiple of the step value
//     var remain = (value*10*input.precision)%(input.step*10*input.precision);
//     if( remain != 0) value = value - remain;
//     if( input.precision > 0 ) value = value.toFixed(input.precision);
//     return value;
//   };

//   //initialize the InputNumber objects
//   var inputNumbers = document.getElementsByClassName('js-number-input');
//   if( inputNumbers.length > 0 ) {
//     for( var i = 0; i < inputNumbers.length; i++) {
//       (function(i){new InputNumber(inputNumbers[i]);})(i);
//     }
//   }
// }());
// File#: _1_live-add-to-cart
// Add Ajax add to cart fonctionality to the website
(function () {
    var LiveCart = function (element) {
        this.addToCartForm = element;
        this.checkoutTrigger = element.getElementsByClassName('js-quick-checkout-trigger')[0];
        initQuickCheckout(this);
    };

    function initQuickCheckout(cart) { // basic slideshow settings
        cart.checkoutTrigger.addEventListener("click", function (e) {
            e.preventDefault();
            //clearCart(cart);
            quickCheckoutAction(cart);
        });
    };

    function clearCart(cart) {
        var clearUrl = checkouturl = cart.checkoutTrigger.getAttribute('data-clear-url');

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                quickCheckoutAction(cart);
            }
        };
        xhr.open('POST', clearUrl);
        xhr.send();
    }

    function quickCheckoutAction(cart) {
        var form = cart.addToCartForm,
            action = form.action,
            checkouturl = cart.checkoutTrigger.getAttribute('data-checkout-url');

        var fields = serialize(form);

        if (location.protocol == 'http:') {
            action = action.replace('https:', 'http:');
        }

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                window.location.href = checkouturl;
            }
        };

        xhr.open('POST', action);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
        xhr.send(fields);
    }

    //initialize the ProductV3 objects
    var liveCartElements = document.getElementsByClassName('js-live-quick-checkout');

    if (liveCartElements.length > 0) {
        for (var i = 0; i < liveCartElements.length; i++) {
            (function (i) {
                new LiveCart(liveCartElements[i]);
            })(i);
        }
    }
    ;


}());
// File#: _1_responsive-sidebar
// Usage: codyhouse.co/license
(function () {
    var Sidebar = function (element) {
        this.element = element;
        this.triggers = document.querySelectorAll('[aria-controls="' + this.element.getAttribute('id') + '"]');
        this.firstFocusable = null;
        this.lastFocusable = null;
        this.selectedTrigger = null;
        this.showClass = "sidebar--is-visible";
        this.staticClass = "sidebar--static";
        this.customStaticClass = "";
        this.readyClass = "sidebar--loaded";
        this.layout = false; // this will be static or mobile
        getCustomStaticClass(this); // custom classes for static version
        initSidebar(this);
    };

    function getCustomStaticClass(element) {
        var customClasses = element.element.getAttribute('data-static-class');
        if (customClasses) element.customStaticClass = ' ' + customClasses;
    };

    function initSidebar(sidebar) {
        initSidebarResize(sidebar); // handle changes in layout -> mobile to static and viceversa

        if (sidebar.triggers) { // open sidebar when clicking on trigger buttons - mobile layout only
            for (var i = 0; i < sidebar.triggers.length; i++) {
                sidebar.triggers[i].addEventListener('click', function (event) {
                    event.preventDefault();
                    if (Util.hasClass(sidebar.element, sidebar.showClass)) {
                        sidebar.selectedTrigger = event.target;
                        closeSidebar(sidebar);
                        return;
                    }
                    sidebar.selectedTrigger = event.target;
                    showSidebar(sidebar);
                    initSidebarEvents(sidebar);
                });
            }
        }
    };

    function showSidebar(sidebar) { // mobile layout only
        Util.addClass(sidebar.element, sidebar.showClass);
        getFocusableElements(sidebar);
        Util.moveFocus(sidebar.element);
    };

    function closeSidebar(sidebar) { // mobile layout only
        Util.removeClass(sidebar.element, sidebar.showClass);
        sidebar.firstFocusable = null;
        sidebar.lastFocusable = null;
        if (sidebar.selectedTrigger) sidebar.selectedTrigger.focus();
        sidebar.element.removeAttribute('tabindex');
        //remove listeners
        cancelSidebarEvents(sidebar);
    };

    function initSidebarEvents(sidebar) { // mobile layout only
        //add event listeners
        sidebar.element.addEventListener('keydown', handleEvent.bind(sidebar));
        sidebar.element.addEventListener('click', handleEvent.bind(sidebar));
    };

    function cancelSidebarEvents(sidebar) { // mobile layout only
        //remove event listeners
        sidebar.element.removeEventListener('keydown', handleEvent.bind(sidebar));
        sidebar.element.removeEventListener('click', handleEvent.bind(sidebar));
    };

    function handleEvent(event) { // mobile layout only
        switch (event.type) {
            case 'click': {
                initClick(this, event);
            }
            case 'keydown': {
                initKeyDown(this, event);
            }
        }
    };

    function initKeyDown(sidebar, event) { // mobile layout only
        if (event.keyCode && event.keyCode == 27 || event.key && event.key == 'Escape') {
            //close sidebar window on esc
            closeSidebar(sidebar);
        } else if (event.keyCode && event.keyCode == 9 || event.key && event.key == 'Tab') {
            //trap focus inside sidebar
            trapFocus(sidebar, event);
        }
    };

    function initClick(sidebar, event) { // mobile layout only
        //close sidebar when clicking on close button or sidebar bg layer
        if (!event.target.closest('.js-sidebar__close-btn') && !Util.hasClass(event.target, 'js-sidebar')) return;
        event.preventDefault();
        closeSidebar(sidebar);
    };

    function trapFocus(sidebar, event) { // mobile layout only
        if (sidebar.firstFocusable == document.activeElement && event.shiftKey) {
            //on Shift+Tab -> focus last focusable element when focus moves out of sidebar
            event.preventDefault();
            sidebar.lastFocusable.focus();
        }
        if (sidebar.lastFocusable == document.activeElement && !event.shiftKey) {
            //on Tab -> focus first focusable element when focus moves out of sidebar
            event.preventDefault();
            sidebar.firstFocusable.focus();
        }
    };

    function initSidebarResize(sidebar) {
        // custom event emitted when window is resized - detect only if the sidebar--static@{breakpoint} class was added
        var beforeContent = getComputedStyle(sidebar.element, ':before').getPropertyValue('content');
        if (beforeContent && beforeContent != '' && beforeContent != 'none') {
            checkSidebarLayout(sidebar);

            sidebar.element.addEventListener('update-sidebar', function (event) {
                checkSidebarLayout(sidebar);
            });
        }
        Util.addClass(sidebar.element, sidebar.readyClass);
    };

    function checkSidebarLayout(sidebar) {
        var layout = getComputedStyle(sidebar.element, ':before').getPropertyValue('content').replace(/\'|"/g, '');
        if (layout == sidebar.layout) return;
        sidebar.layout = layout;
        if (layout != 'static') Util.addClass(sidebar.element, 'is-hidden');
        Util.toggleClass(sidebar.element, sidebar.staticClass + sidebar.customStaticClass, layout == 'static');
        if (layout != 'static') setTimeout(function () {
            Util.removeClass(sidebar.element, 'is-hidden')
        });
        // reset element role
        (layout == 'static') ? sidebar.element.removeAttribute('role', 'alertdialog') : sidebar.element.setAttribute('role', 'alertdialog');
        // reset mobile behaviour
        if (layout == 'static' && Util.hasClass(sidebar.element, sidebar.showClass)) closeSidebar(sidebar);
    };

    function getFocusableElements(sidebar) {
        //get all focusable elements inside the drawer
        var allFocusable = sidebar.element.querySelectorAll('[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex]:not([tabindex="-1"]), [contenteditable], audio[controls], video[controls], summary');
        getFirstVisible(sidebar, allFocusable);
        getLastVisible(sidebar, allFocusable);
    };

    function getFirstVisible(sidebar, elements) {
        //get first visible focusable element inside the sidebar
        for (var i = 0; i < elements.length; i++) {
            if (elements[i].offsetWidth || elements[i].offsetHeight || elements[i].getClientRects().length) {
                sidebar.firstFocusable = elements[i];
                return true;
            }
        }
    };

    function getLastVisible(sidebar, elements) {
        //get last visible focusable element inside the sidebar
        for (var i = elements.length - 1; i >= 0; i--) {
            if (elements[i].offsetWidth || elements[i].offsetHeight || elements[i].getClientRects().length) {
                sidebar.lastFocusable = elements[i];
                return true;
            }
        }
    };

    //initialize the Sidebar objects
    var sidebar = document.getElementsByClassName('js-sidebar');
    if (sidebar.length > 0) {
        for (var i = 0; i < sidebar.length; i++) {
            (function (i) {
                new Sidebar(sidebar[i]);
            })(i);
        }
        // switch from mobile to static layout
        var customEvent = new CustomEvent('update-sidebar');
        window.addEventListener('resize', function (event) {
            (!window.requestAnimationFrame) ? setTimeout(function () {
                resetLayout();
            }, 250) : window.requestAnimationFrame(resetLayout);
        });

        (window.requestAnimationFrame) // init sidebar layout
            ? window.requestAnimationFrame(resetLayout)
            : resetLayout();

        function resetLayout() {
            for (var i = 0; i < sidebar.length; i++) {
                (function (i) {
                    sidebar[i].dispatchEvent(customEvent)
                })(i);
            }
            ;
        };
    }
}());
// File#: _1_slider
// Usage: codyhouse.co/license
(function () {
    var Slider = function (element) {
        this.element = element;
        this.rangeWrapper = this.element.getElementsByClassName('slider__range');
        this.rangeInput = this.element.getElementsByClassName('slider__input');
        this.value = this.element.getElementsByClassName('js-slider__value');
        this.floatingValue = this.element.getElementsByClassName('js-slider__value--floating');
        this.rangeMin = this.rangeInput[0].getAttribute('min');
        this.rangeMax = this.rangeInput[0].getAttribute('max');
        this.sliderWidth = window.getComputedStyle(this.element.getElementsByClassName('slider__range')[0]).getPropertyValue('width');
        this.thumbWidth = getComputedStyle(this.element).getPropertyValue('--slide-thumb-size');
        this.isInputVar = (this.value[0].tagName.toLowerCase() == 'input');
        this.isFloatingVar = this.floatingValue.length > 0;
        if (this.isFloatingVar) {
            this.floatingValueLeft = window.getComputedStyle(this.floatingValue[0]).getPropertyValue('left');
        }
        initSlider(this);
    };

    function initSlider(slider) {
        updateLabelValues(slider);// update label/input value so that it is the same as the input range
        updateLabelPosition(slider, false); // update label position if floating variation
        updateRangeColor(slider, false); // update range bg color
        checkRangeSupported(slider); // hide label/input value if input range is not supported

        // listen to change in the input range
        for (var i = 0; i < slider.rangeInput.length; i++) {
            (function (i) {
                slider.rangeInput[i].addEventListener('input', function (event) {
                    updateSlider(slider, i);
                });
                slider.rangeInput[i].addEventListener('change', function (event) { // fix issue on IE where input event is not emitted
                    updateSlider(slider, i);
                });
            })(i);
        }

        // if there's an input text, listen for changes in value, validate it and then update slider
        if (slider.isInputVar) {
            for (var i = 0; i < slider.value.length; i++) {
                (function (i) {
                    slider.value[i].addEventListener('change', function (event) {
                        updateRange(slider, i);
                    });
                })(i);
            }
        }

        // native <input> element has been updated (e.g., form reset) -> update custom appearance
        slider.element.addEventListener('slider-updated', function (event) {
            for (var i = 0; i < slider.value.length; i++) {
                updateSlider(slider, i);
            }
        });

        // custom events - emitted if slider has allows for multi-values
        slider.element.addEventListener('inputRangeLimit', function (event) {
            updateLabelValues(slider);
            updateLabelPosition(slider, event.detail);
        });
    };

    function updateSlider(slider, index) {
        updateLabelValues(slider);
        updateLabelPosition(slider, index);
        updateRangeColor(slider, index);
    };

    function updateLabelValues(slider) {
        for (var i = 0; i < slider.rangeInput.length; i++) {
            slider.isInputVar ? slider.value[i].value = slider.rangeInput[i].value : slider.value[i].textContent = slider.rangeInput[i].value;
        }
    };

    function updateLabelPosition(slider, index) {
        if (!slider.isFloatingVar) return;
        var i = index ? index : 0,
            j = index ? index + 1 : slider.rangeInput.length;
        for (var k = i; k < j; k++) {
            var percentage = (slider.rangeInput[k].value - slider.rangeMin) / (slider.rangeMax - slider.rangeMin);
            slider.floatingValue[k].style.left = 'calc(0.5 * ' + slider.floatingValueLeft + ' + ' + percentage + ' * ( ' + slider.sliderWidth + ' - ' + slider.floatingValueLeft + ' ))';
        }
    };

    function updateRangeColor(slider, index) {
        if (slider.rangeInput.length > 1) {
            slider.element.dispatchEvent(new CustomEvent('updateRange', {detail: index}));
            return;
        }
        var percentage = parseInt((slider.rangeInput[0].value - slider.rangeMin) / (slider.rangeMax - slider.rangeMin) * 100),
            fill = 'calc(' + percentage + '*(' + slider.sliderWidth + ' - 0.5*' + slider.thumbWidth + ')/100)',
            empty = 'calc(' + slider.sliderWidth + ' - ' + percentage + '*(' + slider.sliderWidth + ' - 0.5*' + slider.thumbWidth + ')/100)';

        slider.rangeWrapper[0].style.setProperty('--slider-fill-value', fill);
        slider.rangeWrapper[0].style.setProperty('--slider-empty-value', empty);
    };

    function updateRange(slider, index) {
        var newValue = parseFloat(slider.value[index].value);
        if (isNaN(newValue)) {
            slider.value[index].value = slider.rangeInput[index].value;
            return;
        } else {
            if (newValue < slider.rangeMin) newValue = slider.rangeMin;
            if (newValue > slider.rangeMax) newValue = slider.rangeMax;
            slider.rangeInput[index].value = newValue;
            var inputEvent = new Event('change');
            slider.rangeInput[index].dispatchEvent(inputEvent);
        }
    };

    function checkRangeSupported(slider) {
        var input = document.createElement("input");
        input.setAttribute("type", "range");
        Util.toggleClass(slider.element, 'slider--range-not-supported', input.type !== "range");
    };

    //initialize the Slider objects
    var sliders = document.getElementsByClassName('js-slider');
    if (sliders.length > 0) {
        for (var i = 0; i < sliders.length; i++) {
            (function (i) {
                new Slider(sliders[i]);
            })(i);
        }
    }
}());
// File#: _1_swipe-content
(function () {
    var SwipeContent = function (element) {
        this.element = element;
        this.delta = [false, false];
        this.dragging = false;
        this.intervalId = false;
        initSwipeContent(this);
    };

    function initSwipeContent(content) {
        content.element.addEventListener('mousedown', handleEvent.bind(content));
        content.element.addEventListener('touchstart', handleEvent.bind(content));
    };

    function initDragging(content) {
        //add event listeners
        content.element.addEventListener('mousemove', handleEvent.bind(content));
        content.element.addEventListener('touchmove', handleEvent.bind(content));
        content.element.addEventListener('mouseup', handleEvent.bind(content));
        content.element.addEventListener('mouseleave', handleEvent.bind(content));
        content.element.addEventListener('touchend', handleEvent.bind(content));
    };

    function cancelDragging(content) {
        //remove event listeners
        if (content.intervalId) {
            (!window.requestAnimationFrame) ? clearInterval(content.intervalId) : window.cancelAnimationFrame(content.intervalId);
            content.intervalId = false;
        }
        content.element.removeEventListener('mousemove', handleEvent.bind(content));
        content.element.removeEventListener('touchmove', handleEvent.bind(content));
        content.element.removeEventListener('mouseup', handleEvent.bind(content));
        content.element.removeEventListener('mouseleave', handleEvent.bind(content));
        content.element.removeEventListener('touchend', handleEvent.bind(content));
    };

    function handleEvent(event) {
        switch (event.type) {
            case 'mousedown':
            case 'touchstart':
                startDrag(this, event);
                break;
            case 'mousemove':
            case 'touchmove':
                drag(this, event);
                break;
            case 'mouseup':
            case 'mouseleave':
            case 'touchend':
                endDrag(this, event);
                break;
        }
    };

    function startDrag(content, event) {
        content.dragging = true;
        // listen to drag movements
        initDragging(content);
        content.delta = [parseInt(unify(event).clientX), parseInt(unify(event).clientY)];
        // emit drag start event
        emitSwipeEvents(content, 'dragStart', content.delta, event.target);
    };

    function endDrag(content, event) {
        cancelDragging(content);
        // credits: https://css-tricks.com/simple-swipe-with-vanilla-javascript/
        var dx = parseInt(unify(event).clientX),
            dy = parseInt(unify(event).clientY);

        // check if there was a left/right swipe
        if (content.delta && (content.delta[0] || content.delta[0] === 0)) {
            var s = getSign(dx - content.delta[0]);

            if (Math.abs(dx - content.delta[0]) > 30) {
                (s < 0) ? emitSwipeEvents(content, 'swipeLeft', [dx, dy]) : emitSwipeEvents(content, 'swipeRight', [dx, dy]);
            }

            content.delta[0] = false;
        }
        // check if there was a top/bottom swipe
        if (content.delta && (content.delta[1] || content.delta[1] === 0)) {
            var y = getSign(dy - content.delta[1]);

            if (Math.abs(dy - content.delta[1]) > 30) {
                (y < 0) ? emitSwipeEvents(content, 'swipeUp', [dx, dy]) : emitSwipeEvents(content, 'swipeDown', [dx, dy]);
            }

            content.delta[1] = false;
        }
        // emit drag end event
        emitSwipeEvents(content, 'dragEnd', [dx, dy]);
        content.dragging = false;
    };

    function drag(content, event) {
        if (!content.dragging) return;
        // emit dragging event with coordinates
        (!window.requestAnimationFrame)
            ? content.intervalId = setTimeout(function () {
                emitDrag.bind(content, event);
            }, 250)
            : content.intervalId = window.requestAnimationFrame(emitDrag.bind(content, event));
    };

    function emitDrag(event) {
        emitSwipeEvents(this, 'dragging', [parseInt(unify(event).clientX), parseInt(unify(event).clientY)]);
    };

    function unify(event) {
        // unify mouse and touch events
        return event.changedTouches ? event.changedTouches[0] : event;
    };

    function emitSwipeEvents(content, eventName, detail, el) {
        var trigger = false;
        if (el) trigger = el;
        // emit event with coordinates
        var event = new CustomEvent(eventName, {detail: {x: detail[0], y: detail[1], origin: trigger}});
        content.element.dispatchEvent(event);
    };

    function getSign(x) {
        if (!Math.sign) {
            return ((x > 0) - (x < 0)) || +x;
        } else {
            return Math.sign(x);
        }
    };

    window.SwipeContent = SwipeContent;

    //initialize the SwipeContent objects
    var swipe = document.getElementsByClassName('js-swipe-content');
    if (swipe.length > 0) {
        for (var i = 0; i < swipe.length; i++) {
            (function (i) {
                new SwipeContent(swipe[i]);
            })(i);
        }
    }
}());
// File#: _1_switch-icon
// Usage: codyhouse.co/license
(function () {
    var switchIcons = document.getElementsByClassName('js-switch-icon');
    if (switchIcons.length > 0) {
        for (var i = 0; i < switchIcons.length; i++) {
            (function (i) {
                if (!Util.hasClass(switchIcons[i], 'switch-icon--hover')) initswitchIcons(switchIcons[i]);
            })(i);
        }

        function initswitchIcons(btn) {
            btn.addEventListener('click', function (event) {
                event.preventDefault();
                var status = !Util.hasClass(btn, 'switch-icon--state-b');
                Util.toggleClass(btn, 'switch-icon--state-b', status);
                // emit custom event
                var event = new CustomEvent('switch-icon-clicked', {detail: status});
                btn.dispatchEvent(event);
            });
        };
    }
}());
// File#: _1_tabs
// Usage: codyhouse.co/license
(function () {
    var Tab = function (element) {
        this.element = element;
        this.tabList = this.element.getElementsByClassName('js-tabs__controls')[0];
        this.listItems = this.tabList.getElementsByTagName('li');
        this.triggers = this.tabList.getElementsByTagName('a');
        this.panelsList = this.element.getElementsByClassName('js-tabs__panels')[0];
        this.panels = Util.getChildrenByClassName(this.panelsList, 'js-tabs__panel');
        this.hideClass = 'is-hidden';
        this.customShowClass = this.element.getAttribute('data-show-panel-class') ? this.element.getAttribute('data-show-panel-class') : false;
        this.layout = this.element.getAttribute('data-tabs-layout') ? this.element.getAttribute('data-tabs-layout') : 'horizontal';
        this.initTab();
    };

    Tab.prototype.initTab = function () {
        //set initial aria attributes
        this.tabList.setAttribute('role', 'tablist');
        for (var i = 0; i < this.triggers.length; i++) {
            var bool = (i == 0),
                panelId = this.panels[i].getAttribute('id');
            this.listItems[i].setAttribute('role', 'presentation');
            Util.setAttributes(this.triggers[i], {
                'role': 'tab',
                'aria-selected': bool,
                'aria-controls': panelId,
                'id': 'tab-' + panelId
            });
            Util.addClass(this.triggers[i], 'js-tabs__trigger');
            Util.setAttributes(this.panels[i], {'role': 'tabpanel', 'aria-labelledby': 'tab-' + panelId});
            Util.toggleClass(this.panels[i], this.hideClass, !bool);

            if (!bool) this.triggers[i].setAttribute('tabindex', '-1');
        }

        //listen for Tab events
        this.initTabEvents();
    };

    Tab.prototype.initTabEvents = function () {
        var self = this;
        //click on a new tab -> select content
        this.tabList.addEventListener('click', function (event) {
            if (event.target.closest('.js-tabs__trigger')) self.triggerTab(event.target.closest('.js-tabs__trigger'), event);
        });
        //arrow keys to navigate through tabs
        this.tabList.addEventListener('keydown', function (event) {
            ;
            if (!event.target.closest('.js-tabs__trigger')) return;
            if (tabNavigateNext(event, self.layout)) {
                event.preventDefault();
                self.selectNewTab('next');
            } else if (tabNavigatePrev(event, self.layout)) {
                event.preventDefault();
                self.selectNewTab('prev');
            }
        });
    };

    Tab.prototype.selectNewTab = function (direction) {
        var selectedTab = this.tabList.querySelector('[aria-selected="true"]'),
            index = Util.getIndexInArray(this.triggers, selectedTab);
        index = (direction == 'next') ? index + 1 : index - 1;
        //make sure index is in the correct interval
        //-> from last element go to first using the right arrow, from first element go to last using the left arrow
        if (index < 0) index = this.listItems.length - 1;
        if (index >= this.listItems.length) index = 0;
        this.triggerTab(this.triggers[index]);
        this.triggers[index].focus();
    };

    Tab.prototype.triggerTab = function (tabTrigger, event) {
        var self = this;
        event && event.preventDefault();
        var index = Util.getIndexInArray(this.triggers, tabTrigger);
        //no need to do anything if tab was already selected
        if (this.triggers[index].getAttribute('aria-selected') == 'true') return;

        for (var i = 0; i < this.triggers.length; i++) {
            var bool = (i == index);
            Util.toggleClass(this.panels[i], this.hideClass, !bool);
            if (this.customShowClass) Util.toggleClass(this.panels[i], this.customShowClass, bool);
            this.triggers[i].setAttribute('aria-selected', bool);
            bool ? this.triggers[i].setAttribute('tabindex', '0') : this.triggers[i].setAttribute('tabindex', '-1');
        }
    };

    function tabNavigateNext(event, layout) {
        if (layout == 'horizontal' && (event.keyCode && event.keyCode == 39 || event.key && event.key == 'ArrowRight')) {
            return true;
        } else if (layout == 'vertical' && (event.keyCode && event.keyCode == 40 || event.key && event.key == 'ArrowDown')) {
            return true;
        } else {
            return false;
        }
    };

    function tabNavigatePrev(event, layout) {
        if (layout == 'horizontal' && (event.keyCode && event.keyCode == 37 || event.key && event.key == 'ArrowLeft')) {
            return true;
        } else if (layout == 'vertical' && (event.keyCode && event.keyCode == 38 || event.key && event.key == 'ArrowUp')) {
            return true;
        } else {
            return false;
        }
    };

    //initialize the Tab objects
    var tabs = document.getElementsByClassName('js-tabs');
    if (tabs.length > 0) {
        for (var i = 0; i < tabs.length; i++) {
            (function (i) {
                new Tab(tabs[i]);
            })(i);
        }
    }
}());
// File#: _2_carousel
// Usage: codyhouse.co/license
(function () {
    var Carousel = function (opts) {
        this.options = Util.extend(Carousel.defaults, opts);
        this.element = this.options.element;
        this.listWrapper = this.element.getElementsByClassName('carousel__wrapper')[0];
        this.list = this.element.getElementsByClassName('carousel__list')[0];
        this.items = this.element.getElementsByClassName('carousel__item');
        this.initItems = []; // store only the original elements - will need this for cloning
        this.itemsNb = this.items.length; //original number of items
        this.visibItemsNb = 1; // tot number of visible items
        this.itemsWidth = 1; // this will be updated with the right width of items
        this.itemOriginalWidth = false; // store the initial width to use it on resize
        this.selectedItem = 0; // index of first visible item
        this.translateContainer = 0; // this will be the amount the container has to be translated each time a new group has to be shown (negative)
        this.containerWidth = 0; // this will be used to store the total width of the carousel (including the overflowing part)
        this.ariaLive = false;
        // navigation
        this.controls = this.element.getElementsByClassName('js-carousel__control');
        this.animating = false;
        // autoplay
        this.autoplayId = false;
        this.autoplayPaused = false;
        //drag
        this.dragStart = false;
        // resize
        this.resizeId = false;
        // used to re-initialize js
        this.cloneList = [];
        // store items min-width
        this.itemAutoSize = false;
        // store translate value (loop = off)
        this.totTranslate = 0;
        // modify loop option if navigation is on
        if (this.options.nav) this.options.loop = false;
        // store counter elements (if present)
        this.counter = this.element.getElementsByClassName('js-carousel__counter');
        this.counterTor = this.element.getElementsByClassName('js-carousel__counter-tot');
        initCarouselLayout(this); // get number visible items + width items
        setItemsWidth(this, true);
        insertBefore(this, this.visibItemsNb); // insert clones before visible elements
        updateCarouselClones(this); // insert clones after visible elements
        resetItemsTabIndex(this); // make sure not visible items are not focusable
        initAriaLive(this); // set aria-live region for SR
        initCarouselEvents(this); // listen to events
        initCarouselCounter(this);
        Util.addClass(this.element, 'carousel--loaded');
    };

    //public carousel functions
    Carousel.prototype.showNext = function () {
        showNextItems(this);
    };

    Carousel.prototype.showPrev = function () {
        showPrevItems(this);
    };

    Carousel.prototype.startAutoplay = function () {
        startAutoplay(this);
    };

    Carousel.prototype.pauseAutoplay = function () {
        pauseAutoplay(this);
    };

    //private carousel functions
    function initCarouselLayout(carousel) {
        // evaluate size of single elements + number of visible elements
        var itemStyle = window.getComputedStyle(carousel.items[0]),
            containerStyle = window.getComputedStyle(carousel.listWrapper),
            itemWidth = parseFloat(itemStyle.getPropertyValue('width')),
            itemMargin = parseFloat(itemStyle.getPropertyValue('margin-right')),
            containerPadding = parseFloat(containerStyle.getPropertyValue('padding-left')),
            containerWidth = parseFloat(containerStyle.getPropertyValue('width'));

        if (!carousel.itemAutoSize) {
            carousel.itemAutoSize = itemWidth;
        }

        // if carousel.listWrapper is hidden -> make sure to retrieve the proper width
        containerWidth = getCarouselWidth(carousel, containerWidth);

        if (!carousel.itemOriginalWidth) { // on resize -> use initial width of items to recalculate
            carousel.itemOriginalWidth = itemWidth;
        } else {
            itemWidth = carousel.itemOriginalWidth;
        }

        if (carousel.itemAutoSize) {
            carousel.itemOriginalWidth = parseInt(carousel.itemAutoSize);
            itemWidth = carousel.itemOriginalWidth;
        }
        // make sure itemWidth is smaller than container width
        if (containerWidth < itemWidth) {
            carousel.itemOriginalWidth = containerWidth
            itemWidth = carousel.itemOriginalWidth;
        }
        // get proper width of elements
        carousel.visibItemsNb = parseInt((containerWidth - 2 * containerPadding + itemMargin) / (itemWidth + itemMargin));
        carousel.itemsWidth = parseFloat((((containerWidth - 2 * containerPadding + itemMargin) / carousel.visibItemsNb) - itemMargin).toFixed(1));
        carousel.containerWidth = (carousel.itemsWidth + itemMargin) * carousel.items.length;
        carousel.translateContainer = 0 - ((carousel.itemsWidth + itemMargin) * carousel.visibItemsNb);
        // flexbox fallback
        if (!flexSupported) carousel.list.style.width = (carousel.itemsWidth + itemMargin) * carousel.visibItemsNb * 3 + 'px';

        // this is used when loop == off
        carousel.totTranslate = 0 - carousel.selectedItem * (carousel.itemsWidth + itemMargin);
        if (carousel.items.length <= carousel.visibItemsNb) carousel.totTranslate = 0;

        centerItems(carousel); // center items if carousel.items.length < visibItemsNb
        alignControls(carousel); // check if controls need to be aligned to a different element
    };

    function setItemsWidth(carousel, bool) {
        for (var i = 0; i < carousel.items.length; i++) {
            carousel.items[i].style.width = carousel.itemsWidth + "px";
            if (bool) carousel.initItems.push(carousel.items[i]);
        }
    };

    function updateCarouselClones(carousel) {
        if (!carousel.options.loop) return;
        // take care of clones after visible items (needs to run after the update of clones before visible items)
        if (carousel.items.length < carousel.visibItemsNb * 3) {
            insertAfter(carousel, carousel.visibItemsNb * 3 - carousel.items.length, carousel.items.length - carousel.visibItemsNb * 2);
        } else if (carousel.items.length > carousel.visibItemsNb * 3) {
            removeClones(carousel, carousel.visibItemsNb * 3, carousel.items.length - carousel.visibItemsNb * 3);
        }
        // set proper translate value for the container
        setTranslate(carousel, 'translateX(' + carousel.translateContainer + 'px)');
    };

    function initCarouselEvents(carousel) {
        // listen for click on previous/next arrow
        // dots navigation
        if (carousel.options.nav) {
            carouselCreateNavigation(carousel);
            carouselInitNavigationEvents(carousel);
        }

        if (carousel.controls.length > 0) {
            carousel.controls[0].addEventListener('click', function (event) {
                event.preventDefault();
                showPrevItems(carousel);
                updateAriaLive(carousel);
            });
            carousel.controls[1].addEventListener('click', function (event) {
                event.preventDefault();
                showNextItems(carousel);
                updateAriaLive(carousel);
            });

            // update arrow visility -> loop == off only
            resetCarouselControls(carousel);
            // emit custom event - items visible
            emitCarouselActiveItemsEvent(carousel)
        }
        // autoplay
        if (carousel.options.autoplay) {
            startAutoplay(carousel);
            // pause autoplay if user is interacting with the carousel
            carousel.element.addEventListener('mouseenter', function (event) {
                pauseAutoplay(carousel);
                carousel.autoplayPaused = true;
            });
            carousel.element.addEventListener('focusin', function (event) {
                pauseAutoplay(carousel);
                carousel.autoplayPaused = true;
            });
            carousel.element.addEventListener('mouseleave', function (event) {
                carousel.autoplayPaused = false;
                startAutoplay(carousel);
            });
            carousel.element.addEventListener('focusout', function (event) {
                carousel.autoplayPaused = false;
                startAutoplay(carousel);
            });
        }
        // drag events
        if (carousel.options.drag && window.requestAnimationFrame) {
            //init dragging
            new SwipeContent(carousel.element);
            carousel.element.addEventListener('dragStart', function (event) {
                if (event.detail.origin && event.detail.origin.closest('.js-carousel__control')) return;
                if (event.detail.origin && event.detail.origin.closest('.js-carousel__navigation')) return;
                if (event.detail.origin && !event.detail.origin.closest('.carousel__wrapper')) return;
                Util.addClass(carousel.element, 'carousel--is-dragging');
                pauseAutoplay(carousel);
                carousel.dragStart = event.detail.x;
                animateDragEnd(carousel);
            });
            carousel.element.addEventListener('dragging', function (event) {
                if (!carousel.dragStart) return;
                if (carousel.animating || Math.abs(event.detail.x - carousel.dragStart) < 10) return;
                var translate = event.detail.x - carousel.dragStart + carousel.translateContainer;
                if (!carousel.options.loop) {
                    translate = event.detail.x - carousel.dragStart + carousel.totTranslate;
                }
                setTranslate(carousel, 'translateX(' + translate + 'px)');
            });
        }
        // reset on resize
        window.addEventListener('resize', function (event) {
            pauseAutoplay(carousel);
            clearTimeout(carousel.resizeId);
            carousel.resizeId = setTimeout(function () {
                resetCarouselResize(carousel);
                // reset dots navigation
                resetDotsNavigation(carousel);
                resetCarouselControls(carousel);
                setCounterItem(carousel);
                startAutoplay(carousel);
                centerItems(carousel); // center items if carousel.items.length < visibItemsNb
                alignControls(carousel);
                // emit custom event - items visible
                emitCarouselActiveItemsEvent(carousel)
            }, 250)
        });
    };

    function showPrevItems(carousel) {
        if (carousel.animating) return;
        carousel.animating = true;
        carousel.selectedItem = getIndex(carousel, carousel.selectedItem - carousel.visibItemsNb);
        animateList(carousel, '0', 'prev');
    };

    function showNextItems(carousel) {
        if (carousel.animating) return;
        carousel.animating = true;
        carousel.selectedItem = getIndex(carousel, carousel.selectedItem + carousel.visibItemsNb);
        animateList(carousel, carousel.translateContainer * 2 + 'px', 'next');
    };

    function animateDragEnd(carousel) { // end-of-dragging animation
        carousel.element.addEventListener('dragEnd', function cb(event) {
            carousel.element.removeEventListener('dragEnd', cb);
            Util.removeClass(carousel.element, 'carousel--is-dragging');
            if (event.detail.x - carousel.dragStart < -40) {
                carousel.animating = false;
                showNextItems(carousel);
            } else if (event.detail.x - carousel.dragStart > 40) {
                carousel.animating = false;
                showPrevItems(carousel);
            } else if (event.detail.x - carousel.dragStart == 0) { // this is just a click -> no dragging
                return;
            } else { // not dragged enought -> do not update carousel, just reset
                carousel.animating = true;
                animateList(carousel, carousel.translateContainer + 'px', false);
            }
            carousel.dragStart = false;
        });
    };

    function animateList(carousel, translate, direction) { // takes care of changing visible items
        pauseAutoplay(carousel);
        Util.addClass(carousel.list, 'carousel__list--animating');
        var initTranslate = carousel.totTranslate;
        if (!carousel.options.loop) {
            translate = noLoopTranslateValue(carousel, direction);
        }
        setTimeout(function () {
            setTranslate(carousel, 'translateX(' + translate + ')');
        });
        if (transitionSupported) {
            carousel.list.addEventListener('transitionend', function cb(event) {
                if (event.propertyName && event.propertyName != 'transform') return;
                Util.removeClass(carousel.list, 'carousel__list--animating');
                carousel.list.removeEventListener('transitionend', cb);
                animateListCb(carousel, direction);
            });
        } else {
            animateListCb(carousel, direction);
        }
        if (!carousel.options.loop && (initTranslate == carousel.totTranslate)) {
            // translate value was not updated -> trigger transitionend event to restart carousel
            carousel.list.dispatchEvent(new CustomEvent('transitionend'));
        }
        resetCarouselControls(carousel);
        setCounterItem(carousel);
        // emit custom event - items visible
        emitCarouselActiveItemsEvent(carousel)
    };

    function noLoopTranslateValue(carousel, direction) {
        var translate = carousel.totTranslate;
        if (direction == 'next') {
            translate = carousel.totTranslate + carousel.translateContainer;
        } else if (direction == 'prev') {
            translate = carousel.totTranslate - carousel.translateContainer;
        } else if (direction == 'click') {
            translate = carousel.selectedDotIndex * carousel.translateContainer;
        }
        if (translate > 0) {
            translate = 0;
            carousel.selectedItem = 0;
        }
        if (translate < -carousel.translateContainer - carousel.containerWidth) {
            translate = -carousel.translateContainer - carousel.containerWidth;
            carousel.selectedItem = carousel.items.length - carousel.visibItemsNb;
        }
        if (carousel.visibItemsNb > carousel.items.length) translate = 0;
        carousel.totTranslate = translate;
        return translate + 'px';
    };

    function animateListCb(carousel, direction) { // reset actions after carousel has been updated
        if (direction) updateClones(carousel, direction);
        carousel.animating = false;
        // reset autoplay
        startAutoplay(carousel);
        // reset tab index
        resetItemsTabIndex(carousel);
    };

    function updateClones(carousel, direction) {
        if (!carousel.options.loop) return;
        // at the end of each animation, we need to update the clones before and after the visible items
        var index = (direction == 'next') ? 0 : carousel.items.length - carousel.visibItemsNb;
        // remove clones you do not need anymore
        removeClones(carousel, index, false);
        // add new clones
        (direction == 'next') ? insertAfter(carousel, carousel.visibItemsNb, 0) : insertBefore(carousel, carousel.visibItemsNb);
        //reset transform
        setTranslate(carousel, 'translateX(' + carousel.translateContainer + 'px)');
    };

    function insertBefore(carousel, nb, delta) {
        if (!carousel.options.loop) return;
        var clones = document.createDocumentFragment();
        var start = 0;
        if (delta) start = delta;
        for (var i = start; i < nb; i++) {
            var index = getIndex(carousel, carousel.selectedItem - i - 1),
                clone = carousel.initItems[index].cloneNode(true);
            Util.addClass(clone, 'js-clone');
            clones.insertBefore(clone, clones.firstChild);
        }
        carousel.list.insertBefore(clones, carousel.list.firstChild);
        emitCarouselUpdateEvent(carousel);
    };

    function insertAfter(carousel, nb, init) {
        if (!carousel.options.loop) return;
        var clones = document.createDocumentFragment();
        for (var i = init; i < nb + init; i++) {
            var index = getIndex(carousel, carousel.selectedItem + carousel.visibItemsNb + i),
                clone = carousel.initItems[index].cloneNode(true);
            Util.addClass(clone, 'js-clone');
            clones.appendChild(clone);
        }
        carousel.list.appendChild(clones);
        emitCarouselUpdateEvent(carousel);
    };

    function removeClones(carousel, index, bool) {
        if (!carousel.options.loop) return;
        if (!bool) {
            bool = carousel.visibItemsNb;
        }
        for (var i = 0; i < bool; i++) {
            if (carousel.items[index]) carousel.list.removeChild(carousel.items[index]);
        }
    };

    function resetCarouselResize(carousel) { // reset carousel on resize
        var visibleItems = carousel.visibItemsNb;
        // get new items min-width value
        resetItemAutoSize(carousel);
        initCarouselLayout(carousel);
        setItemsWidth(carousel, false);
        resetItemsWidth(carousel); // update the array of original items -> array used to create clones
        if (carousel.options.loop) {
            if (visibleItems > carousel.visibItemsNb) {
                removeClones(carousel, 0, visibleItems - carousel.visibItemsNb);
            } else if (visibleItems < carousel.visibItemsNb) {
                insertBefore(carousel, carousel.visibItemsNb, visibleItems);
            }
            updateCarouselClones(carousel); // this will take care of translate + after elements
        } else {
            // reset default translate to a multiple value of (itemWidth + margin)
            var translate = noLoopTranslateValue(carousel);
            setTranslate(carousel, 'translateX(' + translate + ')');
        }
        resetItemsTabIndex(carousel); // reset focusable elements
    };

    function resetItemAutoSize(carousel) {
        if (!cssPropertiesSupported) return;
        // remove inline style
        carousel.items[0].removeAttribute('style');
        // get original item width
        carousel.itemAutoSize = getComputedStyle(carousel.items[0]).getPropertyValue('width');
    };

    function resetItemsWidth(carousel) {
        for (var i = 0; i < carousel.initItems.length; i++) {
            carousel.initItems[i].style.width = carousel.itemsWidth + "px";
        }
    };

    function resetItemsTabIndex(carousel) {
        var carouselActive = carousel.items.length > carousel.visibItemsNb;
        var j = carousel.items.length;
        for (var i = 0; i < carousel.items.length; i++) {
            if (carousel.options.loop) {
                if (i < carousel.visibItemsNb || i >= 2 * carousel.visibItemsNb) {
                    carousel.items[i].setAttribute('tabindex', '-1');
                } else {
                    if (i < j) j = i;
                    carousel.items[i].removeAttribute('tabindex');
                }
            } else {
                if ((i < carousel.selectedItem || i >= carousel.selectedItem + carousel.visibItemsNb) && carouselActive) {
                    carousel.items[i].setAttribute('tabindex', '-1');
                } else {
                    if (i < j) j = i;
                    carousel.items[i].removeAttribute('tabindex');
                }
            }
        }
        resetVisibilityOverflowItems(carousel, j);
    };

    function startAutoplay(carousel) {
        if (carousel.options.autoplay && !carousel.autoplayId && !carousel.autoplayPaused) {
            carousel.autoplayId = setInterval(function () {
                showNextItems(carousel);
            }, carousel.options.autoplayInterval);
        }
    };

    function pauseAutoplay(carousel) {
        if (carousel.options.autoplay) {
            clearInterval(carousel.autoplayId);
            carousel.autoplayId = false;
        }
    };

    function initAriaLive(carousel) { // create an aria-live region for SR
        if (!carousel.options.ariaLive) return;
        // create an element that will be used to announce the new visible slide to SR
        var srLiveArea = document.createElement('div');
        Util.setAttributes(srLiveArea, {
            'class': 'sr-only js-carousel__aria-live',
            'aria-live': 'polite',
            'aria-atomic': 'true'
        });
        carousel.element.appendChild(srLiveArea);
        carousel.ariaLive = srLiveArea;
    };

    function updateAriaLive(carousel) { // announce to SR which items are now visible
        if (!carousel.options.ariaLive) return;
        carousel.ariaLive.innerHTML = 'Item ' + (carousel.selectedItem + 1) + ' selected. ' + carousel.visibItemsNb + ' items of ' + carousel.initItems.length + ' visible';
    };

    function getIndex(carousel, index) {
        if (index < 0) index = getPositiveValue(index, carousel.itemsNb);
        if (index >= carousel.itemsNb) index = index % carousel.itemsNb;
        return index;
    };

    function getPositiveValue(value, add) {
        value = value + add;
        if (value > 0) return value;
        else return getPositiveValue(value, add);
    };

    function setTranslate(carousel, translate) {
        carousel.list.style.transform = translate;
        carousel.list.style.msTransform = translate;
    };

    function getCarouselWidth(carousel, computedWidth) { // retrieve carousel width if carousel is initially hidden
        var closestHidden = carousel.listWrapper.closest('.sr-only');
        if (closestHidden) { // carousel is inside an .sr-only (visually hidden) element
            Util.removeClass(closestHidden, 'sr-only');
            computedWidth = carousel.listWrapper.offsetWidth;
            Util.addClass(closestHidden, 'sr-only');
        } else if (isNaN(computedWidth)) {
            computedWidth = getHiddenParentWidth(carousel.element, carousel);
        }
        return computedWidth;
    };

    function getHiddenParentWidth(element, carousel) {
        var parent = element.parentElement;
        if (parent.tagName.toLowerCase() == 'html') return 0;
        var style = window.getComputedStyle(parent);
        if (style.display == 'none' || style.visibility == 'hidden') {
            parent.setAttribute('style', 'display: block!important; visibility: visible!important;');
            var computedWidth = carousel.listWrapper.offsetWidth;
            parent.style.display = '';
            parent.style.visibility = '';
            return computedWidth;
        } else {
            return getHiddenParentWidth(parent, carousel);
        }
    };

    function resetCarouselControls(carousel) {
        if (carousel.options.loop) return;
        // update arrows status
        if (carousel.controls.length > 0) {
            (carousel.totTranslate == 0)
                ? carousel.controls[0].setAttribute('disabled', true)
                : carousel.controls[0].removeAttribute('disabled');
            (carousel.totTranslate == (-carousel.translateContainer - carousel.containerWidth) || carousel.items.length <= carousel.visibItemsNb)
                ? carousel.controls[1].setAttribute('disabled', true)
                : carousel.controls[1].removeAttribute('disabled');
        }
        // update carousel dots
        if (carousel.options.nav) {
            var selectedDot = carousel.navigation.getElementsByClassName(carousel.options.navigationItemClass + '--selected');
            if (selectedDot.length > 0) Util.removeClass(selectedDot[0], carousel.options.navigationItemClass + '--selected');

            var newSelectedIndex = getSelectedDot(carousel);
            if (carousel.totTranslate == (-carousel.translateContainer - carousel.containerWidth)) {
                newSelectedIndex = carousel.navDots.length - 1;
            }
            Util.addClass(carousel.navDots[newSelectedIndex], carousel.options.navigationItemClass + '--selected');
        }

        (carousel.totTranslate == 0 && (carousel.totTranslate == (-carousel.translateContainer - carousel.containerWidth) || carousel.items.length <= carousel.visibItemsNb))
            ? Util.addClass(carousel.element, 'carousel--hide-controls')
            : Util.removeClass(carousel.element, 'carousel--hide-controls');
    };

    function emitCarouselUpdateEvent(carousel) {
        carousel.cloneList = [];
        var clones = carousel.element.querySelectorAll('.js-clone');
        for (var i = 0; i < clones.length; i++) {
            Util.removeClass(clones[i], 'js-clone');
            carousel.cloneList.push(clones[i]);
        }
        emitCarouselEvents(carousel, 'carousel-updated', carousel.cloneList);
    };

    function carouselCreateNavigation(carousel) {
        if (carousel.element.getElementsByClassName('js-carousel__navigation').length > 0) return;

        var navigation = document.createElement('ol'),
            navChildren = '';

        var navClasses = carousel.options.navigationClass + ' js-carousel__navigation';
        if (carousel.items.length <= carousel.visibItemsNb) {
            navClasses = navClasses + ' is-hidden';
        }
        navigation.setAttribute('class', navClasses);

        var dotsNr = Math.ceil(carousel.items.length / carousel.visibItemsNb),
            selectedDot = getSelectedDot(carousel),
            indexClass = carousel.options.navigationPagination ? '' : 'sr-only'
        for (var i = 0; i < dotsNr; i++) {
            var className = (i == selectedDot) ? 'class="' + carousel.options.navigationItemClass + ' ' + carousel.options.navigationItemClass + '--selected js-carousel__nav-item"' : 'class="' + carousel.options.navigationItemClass + ' js-carousel__nav-item"';
            navChildren = navChildren + '<li ' + className + '><button class="reset js-tab-focus" style="outline: none;"><span class="' + indexClass + '">' + (i + 1) + '</span></button></li>';
        }
        navigation.innerHTML = navChildren;
        carousel.element.appendChild(navigation);
    };

    function carouselInitNavigationEvents(carousel) {
        carousel.navigation = carousel.element.getElementsByClassName('js-carousel__navigation')[0];
        carousel.navDots = carousel.element.getElementsByClassName('js-carousel__nav-item');
        carousel.navIdEvent = carouselNavigationClick.bind(carousel);
        carousel.navigation.addEventListener('click', carousel.navIdEvent);
    };

    function carouselRemoveNavigation(carousel) {
        if (carousel.navigation) carousel.element.removeChild(carousel.navigation);
        if (carousel.navIdEvent) carousel.navigation.removeEventListener('click', carousel.navIdEvent);
    };

    function resetDotsNavigation(carousel) {
        if (!carousel.options.nav) return;
        carouselRemoveNavigation(carousel);
        carouselCreateNavigation(carousel);
        carouselInitNavigationEvents(carousel);
    };

    function carouselNavigationClick(event) {
        var dot = event.target.closest('.js-carousel__nav-item');
        if (!dot) return;
        if (this.animating) return;
        this.animating = true;
        var index = Util.getIndexInArray(this.navDots, dot);
        this.selectedDotIndex = index;
        this.selectedItem = index * this.visibItemsNb;
        animateList(this, false, 'click');
    };

    function getSelectedDot(carousel) {
        return Math.ceil(carousel.selectedItem / carousel.visibItemsNb);
    };

    function initCarouselCounter(carousel) {
        if (carousel.counterTor.length > 0) carousel.counterTor[0].textContent = carousel.itemsNb;
        setCounterItem(carousel);
    };

    function setCounterItem(carousel) {
        if (carousel.counter.length == 0) return;
        var totalItems = carousel.selectedItem + carousel.visibItemsNb;
        if (totalItems > carousel.items.length) totalItems = carousel.items.length;
        carousel.counter[0].textContent = totalItems;
    };

    function centerItems(carousel) {
        if (!carousel.options.justifyContent) return;
        Util.toggleClass(carousel.list, 'justify-center', carousel.items.length < carousel.visibItemsNb);
    };

    function alignControls(carousel) {
        if (carousel.controls.length < 1 || !carousel.options.alignControls) return;
        if (!carousel.controlsAlignEl) {
            carousel.controlsAlignEl = carousel.element.querySelector(carousel.options.alignControls);
        }
        if (!carousel.controlsAlignEl) return;
        var translate = (carousel.element.offsetHeight - carousel.controlsAlignEl.offsetHeight);
        for (var i = 0; i < carousel.controls.length; i++) {
            carousel.controls[i].style.marginBottom = translate + 'px';
        }
    };

    function emitCarouselActiveItemsEvent(carousel) {
        emitCarouselEvents(carousel, 'carousel-active-items', {
            firstSelectedItem: carousel.selectedItem,
            visibleItemsNb: carousel.visibItemsNb
        });
    };

    function emitCarouselEvents(carousel, eventName, eventDetail) {
        var event = new CustomEvent(eventName, {detail: eventDetail});
        carousel.element.dispatchEvent(event);
    };

    function resetVisibilityOverflowItems(carousel, j) {
        if (!carousel.options.overflowItems) return;
        var itemWidth = carousel.containerWidth / carousel.items.length,
            delta = (window.innerWidth - itemWidth * carousel.visibItemsNb) / 2,
            overflowItems = Math.ceil(delta / itemWidth);

        for (var i = 0; i < overflowItems; i++) {
            var indexPrev = j - 1 - i; // prev element
            if (indexPrev >= 0) carousel.items[indexPrev].removeAttribute('tabindex');
            var indexNext = j + carousel.visibItemsNb + i; // next element
            if (indexNext < carousel.items.length) carousel.items[indexNext].removeAttribute('tabindex');
        }
    };

    Carousel.defaults = {
        element: '',
        autoplay: false,
        autoplayInterval: 5000,
        loop: true,
        nav: false,
        navigationItemClass: 'carousel__nav-item',
        navigationClass: 'carousel__navigation',
        navigationPagination: false,
        drag: false,
        justifyContent: false,
        alignControls: false,
        overflowItems: false
    };

    window.Carousel = Carousel;

    //initialize the Carousel objects
    var carousels = document.getElementsByClassName('js-carousel'),
        flexSupported = Util.cssSupports('align-items', 'stretch'),
        transitionSupported = Util.cssSupports('transition'),
        cssPropertiesSupported = ('CSS' in window && CSS.supports('color', 'var(--color-var)'));

    if (carousels.length > 0) {
        for (var i = 0; i < carousels.length; i++) {
            (function (i) {
                var autoplay = (carousels[i].getAttribute('data-autoplay') && carousels[i].getAttribute('data-autoplay') == 'on') ? true : false,
                    autoplayInterval = (carousels[i].getAttribute('data-autoplay-interval')) ? carousels[i].getAttribute('data-autoplay-interval') : 5000,
                    drag = (carousels[i].getAttribute('data-drag') && carousels[i].getAttribute('data-drag') == 'on') ? true : false,
                    loop = (carousels[i].getAttribute('data-loop') && carousels[i].getAttribute('data-loop') == 'off') ? false : true,
                    nav = (carousels[i].getAttribute('data-navigation') && carousels[i].getAttribute('data-navigation') == 'on') ? true : false,
                    navigationItemClass = carousels[i].getAttribute('data-navigation-item-class') ? carousels[i].getAttribute('data-navigation-item-class') : 'carousel__nav-item',
                    navigationClass = carousels[i].getAttribute('data-navigation-class') ? carousels[i].getAttribute('data-navigation-class') : 'carousel__navigation',
                    navigationPagination = (carousels[i].getAttribute('data-navigation-pagination') && carousels[i].getAttribute('data-navigation-pagination') == 'on') ? true : false,
                    overflowItems = (carousels[i].getAttribute('data-overflow-items') && carousels[i].getAttribute('data-overflow-items') == 'on') ? true : false,
                    alignControls = carousels[i].getAttribute('data-align-controls') ? carousels[i].getAttribute('data-align-controls') : false,
                    justifyContent = (carousels[i].getAttribute('data-justify-content') && carousels[i].getAttribute('data-justify-content') == 'on') ? true : false;
                new Carousel({
                    element: carousels[i],
                    autoplay: autoplay,
                    autoplayInterval: autoplayInterval,
                    drag: drag,
                    ariaLive: true,
                    loop: loop,
                    nav: nav,
                    navigationItemClass: navigationItemClass,
                    navigationPagination: navigationPagination,
                    navigationClass: navigationClass,
                    overflowItems: overflowItems,
                    justifyContent: justifyContent,
                    alignControls: alignControls
                });
            })(i);
        }
    }
    ;
}());
// File#: _2_dropdown
// Usage: codyhouse.co/license
(function () {
    var Dropdown = function (element) {
        this.element = element;
        this.trigger = this.element.getElementsByClassName('js-dropdown__trigger')[0];
        this.dropdown = this.element.getElementsByClassName('js-dropdown__menu')[0];
        this.triggerFocus = false;
        this.dropdownFocus = false;
        this.hideInterval = false;
        // sublevels
        this.dropdownSubElements = this.element.getElementsByClassName('js-dropdown__sub-wrapper');
        this.prevFocus = false; // store element that was in focus before focus changed
        this.addDropdownEvents();
    };

    Dropdown.prototype.addDropdownEvents = function () {
        //place dropdown
        var self = this;
        this.placeElement();
        this.element.addEventListener('placeDropdown', function (event) {
            self.placeElement();
        });
        // init dropdown
        this.initElementEvents(this.trigger, this.triggerFocus); // this is used to trigger the primary dropdown
        this.initElementEvents(this.dropdown, this.dropdownFocus); // this is used to trigger the primary dropdown
        // init sublevels
        this.initSublevels(); // if there are additional sublevels -> bind hover/focus events
    };

    Dropdown.prototype.placeElement = function () {
        // remove inline style first
        this.dropdown.removeAttribute('style');
        // check dropdown position
        var triggerPosition = this.trigger.getBoundingClientRect(),
            isRight = (window.innerWidth < triggerPosition.left + parseInt(getComputedStyle(this.dropdown).getPropertyValue('width')));

        var xPosition = isRight ? 'right: 0px; left: auto;' : 'left: 0px; right: auto;';
        this.dropdown.setAttribute('style', xPosition);
    };

    Dropdown.prototype.initElementEvents = function (element, bool) {
        var self = this;
        element.addEventListener('mouseenter', function () {
            bool = true;
            self.showDropdown();
        });
        element.addEventListener('focus', function () {
            self.showDropdown();
        });
        element.addEventListener('mouseleave', function () {
            bool = false;
            self.hideDropdown();
        });
        element.addEventListener('focusout', function () {
            self.hideDropdown();
        });
    };

    Dropdown.prototype.showDropdown = function () {
        if (this.hideInterval) clearInterval(this.hideInterval);
        // remove style attribute
        this.dropdown.removeAttribute('style');
        this.placeElement();
        this.showLevel(this.dropdown, true);
    };

    Dropdown.prototype.hideDropdown = function () {
        var self = this;
        if (this.hideInterval) clearInterval(this.hideInterval);
        this.hideInterval = setTimeout(function () {
            var dropDownFocus = document.activeElement.closest('.js-dropdown'),
                inFocus = dropDownFocus && (dropDownFocus == self.element);
            // if not in focus and not hover -> hide
            if (!self.triggerFocus && !self.dropdownFocus && !inFocus) {
                self.hideLevel(self.dropdown, true);
                // make sure to hide sub/dropdown
                self.hideSubLevels();
                self.prevFocus = false;
            }
        }, 300);
    };

    Dropdown.prototype.initSublevels = function () {
        var self = this;
        var dropdownMenu = this.element.getElementsByClassName('js-dropdown__menu');
        for (var i = 0; i < dropdownMenu.length; i++) {
            var listItems = dropdownMenu[i].children;
            // bind hover
            new menuAim({
                menu: dropdownMenu[i],
                activate: function (row) {
                    var subList = row.getElementsByClassName('js-dropdown__menu')[0];
                    if (!subList) return;
                    Util.addClass(row.querySelector('a'), 'dropdown__item--hover');
                    self.showLevel(subList);
                },
                deactivate: function (row) {
                    var subList = row.getElementsByClassName('dropdown__menu')[0];
                    if (!subList) return;
                    Util.removeClass(row.querySelector('a'), 'dropdown__item--hover');
                    self.hideLevel(subList);
                },
                submenuSelector: '.js-dropdown__sub-wrapper',
            });
        }
        // store focus element before change in focus
        this.element.addEventListener('keydown', function (event) {
            if (event.keyCode && event.keyCode == 9 || event.key && event.key == 'Tab') {
                self.prevFocus = document.activeElement;
            }
        });
        // make sure that sublevel are visible when their items are in focus
        this.element.addEventListener('keyup', function (event) {
            if (event.keyCode && event.keyCode == 9 || event.key && event.key == 'Tab') {
                // focus has been moved -> make sure the proper classes are added to subnavigation
                var focusElement = document.activeElement,
                    focusElementParent = focusElement.closest('.js-dropdown__menu'),
                    focusElementSibling = focusElement.nextElementSibling;

                // if item in focus is inside submenu -> make sure it is visible
                if (focusElementParent && !Util.hasClass(focusElementParent, 'dropdown__menu--is-visible')) {
                    self.showLevel(focusElementParent);
                }
                // if item in focus triggers a submenu -> make sure it is visible
                if (focusElementSibling && !Util.hasClass(focusElementSibling, 'dropdown__menu--is-visible')) {
                    self.showLevel(focusElementSibling);
                }

                // check previous element in focus -> hide sublevel if required
                if (!self.prevFocus) return;
                var prevFocusElementParent = self.prevFocus.closest('.js-dropdown__menu'),
                    prevFocusElementSibling = self.prevFocus.nextElementSibling;

                if (!prevFocusElementParent) return;

                // element in focus and element prev in focus are siblings
                if (focusElementParent && focusElementParent == prevFocusElementParent) {
                    if (prevFocusElementSibling) self.hideLevel(prevFocusElementSibling);
                    return;
                }

                // element in focus is inside submenu triggered by element prev in focus
                if (prevFocusElementSibling && focusElementParent && focusElementParent == prevFocusElementSibling) return;

                // shift tab -> element in focus triggers the submenu of the element prev in focus
                if (focusElementSibling && prevFocusElementParent && focusElementSibling == prevFocusElementParent) return;

                var focusElementParentParent = focusElementParent.parentNode.closest('.js-dropdown__menu');

                // shift tab -> element in focus is inside the dropdown triggered by a siblings of the element prev in focus
                if (focusElementParentParent && focusElementParentParent == prevFocusElementParent) {
                    if (prevFocusElementSibling) self.hideLevel(prevFocusElementSibling);
                    return;
                }

                if (prevFocusElementParent && Util.hasClass(prevFocusElementParent, 'dropdown__menu--is-visible')) {
                    self.hideLevel(prevFocusElementParent);
                }
            }
        });
    };

    Dropdown.prototype.hideSubLevels = function () {
        var visibleSubLevels = this.dropdown.getElementsByClassName('dropdown__menu--is-visible');
        if (visibleSubLevels.length == 0) return;
        while (visibleSubLevels[0]) {
            this.hideLevel(visibleSubLevels[0]);
        }
        var hoveredItems = this.dropdown.getElementsByClassName('dropdown__item--hover');
        while (hoveredItems[0]) {
            Util.removeClass(hoveredItems[0], 'dropdown__item--hover');
        }
    };

    Dropdown.prototype.showLevel = function (level, bool) {
        if (bool == undefined) {
            //check if the sublevel needs to be open to the left
            Util.removeClass(level, 'dropdown__menu--left');
            var boundingRect = level.getBoundingClientRect();
            if (window.innerWidth - boundingRect.right < 5 && boundingRect.left + window.scrollX > 2 * boundingRect.width) Util.addClass(level, 'dropdown__menu--left');
        }
        Util.addClass(level, 'dropdown__menu--is-visible');
        Util.removeClass(level, 'dropdown__menu--is-hidden');
    };

    Dropdown.prototype.hideLevel = function (level, bool) {
        if (!Util.hasClass(level, 'dropdown__menu--is-visible')) return;
        Util.removeClass(level, 'dropdown__menu--is-visible');
        Util.addClass(level, 'dropdown__menu--is-hidden');

        level.addEventListener('transitionend', function cb(event) {
            if (event.propertyName != 'opacity') return;
            level.removeEventListener('transitionend', cb);
            Util.removeClass(level, 'dropdown__menu--is-hidden dropdown__menu--left');
            if (bool && !Util.hasClass(level, 'dropdown__menu--is-visible')) level.setAttribute('style', 'width: 0px');
        });
    };

    window.Dropdown = Dropdown;

    var dropdown = document.getElementsByClassName('js-dropdown');
    if (dropdown.length > 0) { // init Dropdown objects
        for (var i = 0; i < dropdown.length; i++) {
            (function (i) {
                new Dropdown(dropdown[i]);
            })(i);
        }
    }
}());
// File#: _2_flexi-header
// Usage: codyhouse.co/license
(function () {
    var flexHeader = document.getElementsByClassName('js-main-header');
    if (flexHeader.length > 0) {
        var menuTrigger = flexHeader[0].getElementsByClassName('js-anim-menu-btn')[0],
            searchTrigger = flexHeader[0].getElementsByClassName('js-toggle-search'),
            menuItems = flexHeader[0].getElementsByClassName('js-main-nav__control'),
            firstFocusableElement = getMenuFirstFocusable(),
            menuLayout = 'mobile';

        // we'll use these to store the node that needs to receive focus when the mobile menu is closed
        // we'll use these to store the node that needs to receive focus when the mobile menu/search input are closed
        var focusSearch = false,
            focusMenu = false;

        setMainNavLayout();

        menuTrigger.addEventListener('anim-menu-btn-clicked', function (event) {
            toggleMenuNavigation(event.detail);
        });

        window.addEventListener('resize', function (event) {
            setMainNavLayout();
        });

        function setMainNavLayout() {
            var layout = getComputedStyle(flexHeader[0], ':before').getPropertyValue('content').replace(/\'|"/g, '');
            if (layout == menuLayout) return;
            menuLayout = layout;
            Util.toggleClass(flexHeader[0], 'main-header--desktop', menuLayout == 'desktop');
            Util.toggleClass(flexHeader[0], 'main-header--mobile', menuLayout != 'desktop');
        };

        // toggle menu on mobile
        if (menuItems.length > 0) {
            for (var i = 0; i < menuItems.length; i++) {
                menuItems[i].addEventListener('click', function (event) {
                    var layout = getComputedStyle(flexHeader[0], ':before').getPropertyValue('content').replace(/\'|"/g, '');
                    if (layout == 'mobile') {
                        console.log('menu open');
                        event.preventDefault();
                        //var triggerBtn = event.target.closest('.js-main-nav__control');
                        //if(!triggerBtn) return;
                        var mainItem = this.closest('.js-main-nav__item');
                        if (!mainItem) return;
                        var itemExpanded = Util.hasClass(mainItem, 'main-nav__item--expanded');
                        Util.toggleClass(mainItem, 'main-nav__item--expanded', !itemExpanded);
                        itemExpanded ? this.removeAttribute('aria-expanded') : this.setAttribute('aria-expanded', 'true');
                        //if(megaNav.layout == 'desktop' && !itemExpanded) closeSubNav(megaNav, mainItem);
                        // close search if open
                        //closeSearch(megaNav, false);
                        //resetNavAppearance(megaNav); // reset nav expanded appearance

                    }
                });
            }
        }

        // toggle search on desktop
        if (searchTrigger.length > 0) {
            searchTrigger[0].addEventListener('switch-icon-clicked', function (event) { // toggle menu visibility an small devices
                toggleSearch(event.detail);
            });
        }


        // listen for key events
        window.addEventListener('keyup', function (event) {
            // listen for esc key
            if ((event.keyCode && event.keyCode == 27) || (event.key && event.key.toLowerCase() == 'escape')) {
                // close navigation on mobile if open
                if (menuTrigger.getAttribute('aria-expanded') == 'true' && isVisible(menuTrigger)) {
                    focusMenu = menuTrigger; // move focus to menu trigger when menu is close
                    menuTrigger.click();
                }
                // close search if open
                if (searchTrigger.length > 0 && searchTrigger[0].getAttribute('aria-expanded') == 'true' && isVisible(searchTrigger[0])) {
                    focusSearch = searchTrigger[0]; // move focus to search trigger when search is close
                    searchTrigger[0].click();
                }
            }
            // listen for tab key
            if ((event.keyCode && event.keyCode == 9) || (event.key && event.key.toLowerCase() == 'tab')) {
                // close navigation on mobile if open when nav loses focus
                if (menuTrigger.getAttribute('aria-expanded') == 'true' && isVisible(menuTrigger) && !document.activeElement.closest('.js-main-header')) menuTrigger.click();
            }
        });

        // listen for resize
        var resizingId = false;
        window.addEventListener('resize', function () {
            clearTimeout(resizingId);
            resizingId = setTimeout(doneResizing, 500);
        });

        function toggleSearch(bool) {
            Util.addClass(searchTrigger[0], 'switch-icon--disabled');
            Util.toggleClass(flexHeader[0], 'main-header--search-expanded', bool);
            searchTrigger[0].setAttribute('aria-expanded', bool);
            setTimeout(function () {
                //flexHeader[0].addEventListener('transitionend', function cb(){
                //flexHeader[0].removeEventListener('transitionend', cb);
                Util.removeClass(searchTrigger[0], 'switch-icon--disabled');
                if (bool) flexHeader[0].getElementsByClassName('main-header__search-form')[0].getElementsByTagName('input')[0].focus();
                else if (focusSearch) {// move focus to a new element when closing the search
                    focusSearch.focus();
                    focusSearch = false;
                }
                //});
            }, 50);

            // toggle expanded class to header
            Util.toggleClass(flexHeader[0], 'header-v3--expanded', bool);
        };

        function initSubNav(megaNav) {
            // toggle subnavigation visibility
            megaNav.element.addEventListener('click', function (event) {
                var triggerBtn = event.target.closest('.js-mega-nav__control');
                if (!triggerBtn) return;
                var mainItem = triggerBtn.closest('.js-mega-nav__item');
                if (!mainItem) return;
                var itemExpanded = Util.hasClass(mainItem, megaNav.itemExpClass);
                Util.toggleClass(mainItem, megaNav.itemExpClass, !itemExpanded);
                itemExpanded ? triggerBtn.removeAttribute('aria-expanded') : triggerBtn.setAttribute('aria-expanded', 'true');
                if (megaNav.layout == 'desktop' && !itemExpanded) closeSubNav(megaNav, mainItem);
                // close search if open
                closeSearch(megaNav, false);
                resetNavAppearance(megaNav); // reset nav expanded appearance
            });
        };

        function getMenuFirstFocusable() {
            var focusableEle = flexHeader[0].getElementsByClassName('main-header__nav')[0].querySelectorAll('[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex]:not([tabindex="-1"]), [contenteditable], audio[controls], video[controls], summary'),
                firstFocusable = false;
            for (var i = 0; i < focusableEle.length; i++) {
                if (focusableEle[i].offsetWidth || focusableEle[i].offsetHeight || focusableEle[i].getClientRects().length) {
                    firstFocusable = focusableEle[i];
                    break;
                }
            }

            return firstFocusable;
        };

        function isVisible(element) {
            return (element.offsetWidth || element.offsetHeight || element.getClientRects().length);
        };

        function doneResizing() {
            if (!isVisible(menuTrigger) && Util.hasClass(flexHeader[0], 'main-header--expanded')) {
                menuTrigger.click();
            }
        };

        function toggleMenuNavigation(bool) { // toggle menu visibility on small devices
            Util.toggleClass(document.getElementsByClassName('main-header__nav')[0], 'main-header__nav--is-visible', bool);
            Util.toggleClass(flexHeader[0], 'main-header--expanded', bool);
            menuTrigger.setAttribute('aria-expanded', bool);
            if (bool) firstFocusableElement.focus(); // move focus to first focusable element
            else if (focusMenu) {
                focusMenu.focus();
                focusMenu = false;
            }
        };
    }
}());
// File#: _2_slider-multi-value
// Usage: codyhouse.co/license
(function () {
    var SliderMulti = function (element) {
        this.element = element;
        this.rangeWrapper = this.element.getElementsByClassName('slider__range');
        this.rangeInput = this.element.getElementsByClassName('slider__input');
        this.rangeMin = this.rangeInput[0].getAttribute('min');
        this.rangeMax = this.rangeInput[0].getAttribute('max');
        this.sliderWidth = window.getComputedStyle(this.element.getElementsByClassName('slider__range')[0]).getPropertyValue('width');
        this.thumbWidth = getComputedStyle(this.element).getPropertyValue('--slide-thumb-size');
        initSliderMulti(this);
    };

    function initSliderMulti(slider) {
        // toggle custom class based on browser support
        toggleMsClass(slider);

        // init bg color of the slider
        updateRangeColor(slider);

        slider.element.addEventListener('updateRange', function (event) {
            checkRangeValues(slider, event.detail);
            updateRangeColor(slider);
        });

        // custom event emitted after window resize
        slider.element.addEventListener('update-slider-multi-value', function (event) {
            slider.sliderWidth = window.getComputedStyle(slider.element.getElementsByClassName('slider__range')[0]).getPropertyValue('width');
            updateRangeColor(slider);
        });
    };

    function checkRangeValues(slider, index) {
        // if min value was changed -> make sure min value is smaller than max value
        // if max value was changed -> make sure max value is bigger than min value
        var i = (index == 0) ? 1 : 0,
            limit = parseFloat(slider.rangeInput[i].value);
        if ((index == 0 && slider.rangeInput[0].value >= limit) || (index == 1 && slider.rangeInput[1].value <= limit)) {
            slider.rangeInput[index].value = limit;
            slider.element.dispatchEvent(new CustomEvent('inputRangeLimit', {detail: index}))
        }
    };

    function updateRangeColor(slider) { // update background fill color of the slider
        var percentageStart = parseInt((slider.rangeInput[0].value - slider.rangeMin) / (slider.rangeMax - slider.rangeMin) * 100),
            percentageEnd = parseInt((slider.rangeInput[1].value - slider.rangeMin) / (slider.rangeMax - slider.rangeMin) * 100),
            start = 'calc(' + percentageStart + '*(' + slider.sliderWidth + ' - 0.5*' + slider.thumbWidth + ')/100)',
            end = 'calc(' + percentageEnd + '*(' + slider.sliderWidth + ' - 0.5*' + slider.thumbWidth + ')/100)';

        slider.rangeWrapper[0].style.setProperty('--slider-fill-value-start', start);
        slider.rangeWrapper[0].style.setProperty('--slider-fill-value-end', end);
    };

    function toggleMsClass(slider) {
        var cssVariablesSupport = Util.cssSupports('--color-value', 'red'),
            imeAlignSuport = Util.cssSupports('-ms-ime-align', 'auto');
        if (imeAlignSuport || !cssVariablesSupport) Util.addClass(slider.element, 'slider--ms-fallback'); // IE and Edge (<=18) Fallback
    };

    //initialize the SliderMulti objects
    var slidersMulti = document.getElementsByClassName('js-slider');
    if (slidersMulti.length > 0) {
        var slidersMultiArray = [];
        for (var i = 0; i < slidersMulti.length; i++) {
            (function (i) {
                if (slidersMulti[i].getElementsByClassName('slider__input').length > 1) slidersMultiArray.push(new SliderMulti(slidersMulti[i]));
            })(i);
        }
        if (slidersMultiArray.length > 0) {
            var resizingId = false,
                customEvent = new CustomEvent('update-slider-multi-value');

            window.addEventListener('resize', function () {
                clearTimeout(resizingId);
                resizingId = setTimeout(doneResizing, 500);
            });

            function doneResizing() {
                for (var i = 0; i < slidersMultiArray.length; i++) {
                    (function (i) {
                        slidersMultiArray[i].element.dispatchEvent(customEvent)
                    })(i);
                }
                ;
            };
        }
    }
}());
// File#: _2_slideshow
// Usage: codyhouse.co/license
(function () {
    var Slideshow = function (opts) {
        this.options = slideshowAssignOptions(Slideshow.defaults, opts);
        this.element = this.options.element;
        this.items = this.element.getElementsByClassName('js-slideshow__item');
        this.controls = this.element.getElementsByClassName('js-slideshow__control');
        this.selectedSlide = 0;
        this.autoplayId = false;
        this.autoplayPaused = false;
        this.navigation = false;
        this.navCurrentLabel = false;
        this.ariaLive = false;
        this.moveFocus = false;
        this.animating = false;
        this.supportAnimation = Util.cssSupports('transition');
        this.animationOff = (!Util.hasClass(this.element, 'slideshow--transition-fade') && !Util.hasClass(this.element, 'slideshow--transition-slide') && !Util.hasClass(this.element, 'slideshow--transition-prx'));
        this.animationType = Util.hasClass(this.element, 'slideshow--transition-prx') ? 'prx' : 'slide';
        this.animatingClass = 'slideshow--is-animating';
        initSlideshow(this);
        initSlideshowEvents(this);
        initAnimationEndEvents(this);
    };

    Slideshow.prototype.showNext = function () {
        showNewItem(this, this.selectedSlide + 1, 'next');
    };

    Slideshow.prototype.showPrev = function () {
        showNewItem(this, this.selectedSlide - 1, 'prev');
    };

    Slideshow.prototype.showItem = function (index) {
        showNewItem(this, index, false);
    };

    Slideshow.prototype.startAutoplay = function () {
        var self = this;
        if (this.options.autoplay && !this.autoplayId && !this.autoplayPaused) {
            self.autoplayId = setInterval(function () {
                self.showNext();
            }, self.options.autoplayInterval);
        }
    };

    Slideshow.prototype.pauseAutoplay = function () {
        var self = this;
        if (this.options.autoplay) {
            clearInterval(self.autoplayId);
            self.autoplayId = false;
        }
    };

    function slideshowAssignOptions(defaults, opts) {
        // initialize the object options
        var mergeOpts = {};
        mergeOpts.element = (typeof opts.element !== "undefined") ? opts.element : defaults.element;
        mergeOpts.navigation = (typeof opts.navigation !== "undefined") ? opts.navigation : defaults.navigation;
        mergeOpts.autoplay = (typeof opts.autoplay !== "undefined") ? opts.autoplay : defaults.autoplay;
        mergeOpts.autoplayInterval = (typeof opts.autoplayInterval !== "undefined") ? opts.autoplayInterval : defaults.autoplayInterval;
        mergeOpts.swipe = (typeof opts.swipe !== "undefined") ? opts.swipe : defaults.swipe;
        return mergeOpts;
    };

    function initSlideshow(slideshow) { // basic slideshow settings
        // if no slide has been selected -> select the first one
        if (slideshow.element.getElementsByClassName('slideshow__item--selected').length < 1) Util.addClass(slideshow.items[0], 'slideshow__item--selected');
        slideshow.selectedSlide = Util.getIndexInArray(slideshow.items, slideshow.element.getElementsByClassName('slideshow__item--selected')[0]);
        // create an element that will be used to announce the new visible slide to SR
        var srLiveArea = document.createElement('div');
        Util.setAttributes(srLiveArea, {
            'class': 'sr-only js-slideshow__aria-live',
            'aria-live': 'polite',
            'aria-atomic': 'true'
        });
        slideshow.element.appendChild(srLiveArea);
        slideshow.ariaLive = srLiveArea;
    };

    function initSlideshowEvents(slideshow) {
        // if slideshow navigation is on -> create navigation HTML and add event listeners
        if (slideshow.options.navigation) {
            // check if navigation has already been included
            if (slideshow.element.getElementsByClassName('js-slideshow__navigation').length == 0) {
                var navigation = document.createElement('ol'),
                    navChildren = '';

                var navClasses = 'slideshow__navigation js-slideshow__navigation';
                if (slideshow.items.length <= 1) {
                    navClasses = navClasses + ' is-hidden';
                }

                navigation.setAttribute('class', navClasses);
                for (var i = 0; i < slideshow.items.length; i++) {
                    var className = (i == slideshow.selectedSlide) ? 'class="slideshow__nav-item slideshow__nav-item--selected js-slideshow__nav-item"' : 'class="slideshow__nav-item js-slideshow__nav-item"',
                        navCurrentLabel = (i == slideshow.selectedSlide) ? '<span class="sr-only js-slideshow__nav-current-label">Current Item</span>' : '';
                    navChildren = navChildren + '<li ' + className + '><button class="reset"><span class="sr-only">' + (i + 1) + '</span>' + navCurrentLabel + '</button></li>';
                }
                navigation.innerHTML = navChildren;
                slideshow.element.appendChild(navigation);
            }

            slideshow.navCurrentLabel = slideshow.element.getElementsByClassName('js-slideshow__nav-current-label')[0];
            slideshow.navigation = slideshow.element.getElementsByClassName('js-slideshow__nav-item');

            var dotsNavigation = slideshow.element.getElementsByClassName('js-slideshow__navigation')[0];

            dotsNavigation.addEventListener('click', function (event) {
                navigateSlide(slideshow, event, true);
            });
            dotsNavigation.addEventListener('keyup', function (event) {
                navigateSlide(slideshow, event, (event.key.toLowerCase() == 'enter'));
            });
        }
        // slideshow arrow controls
        if (slideshow.controls.length > 0) {
            // hide controls if one item available
            if (slideshow.items.length <= 1) {
                Util.addClass(slideshow.controls[0], 'is-hidden');
                Util.addClass(slideshow.controls[1], 'is-hidden');
            }
            slideshow.controls[0].addEventListener('click', function (event) {
                event.preventDefault();
                slideshow.showPrev();
                updateAriaLive(slideshow);
            });
            slideshow.controls[1].addEventListener('click', function (event) {
                event.preventDefault();
                slideshow.showNext();
                updateAriaLive(slideshow);
            });
        }
        // swipe events
        if (slideshow.options.swipe) {
            //init swipe
            new SwipeContent(slideshow.element);
            slideshow.element.addEventListener('swipeLeft', function (event) {
                slideshow.showNext();
            });
            slideshow.element.addEventListener('swipeRight', function (event) {
                slideshow.showPrev();
            });
        }
        // autoplay
        if (slideshow.options.autoplay) {
            slideshow.startAutoplay();
            // pause autoplay if user is interacting with the slideshow
            slideshow.element.addEventListener('mouseenter', function (event) {
                slideshow.pauseAutoplay();
                slideshow.autoplayPaused = true;
            });
            slideshow.element.addEventListener('focusin', function (event) {
                slideshow.pauseAutoplay();
                slideshow.autoplayPaused = true;
            });
            slideshow.element.addEventListener('mouseleave', function (event) {
                slideshow.autoplayPaused = false;
                slideshow.startAutoplay();
            });
            slideshow.element.addEventListener('focusout', function (event) {
                slideshow.autoplayPaused = false;
                slideshow.startAutoplay();
            });
        }
        // detect if external buttons control the slideshow
        var slideshowId = slideshow.element.getAttribute('id');
        if (slideshowId) {
            var externalControls = document.querySelectorAll('[data-controls="' + slideshowId + '"]');
            for (var i = 0; i < externalControls.length; i++) {
                (function (i) {
                    externalControlSlide(slideshow, externalControls[i]);
                })(i);
            }
        }
        // custom event to trigger selection of a new slide element
        slideshow.element.addEventListener('selectNewItem', function (event) {
            // check if slide is already selected
            if (event.detail) {
                if (event.detail - 1 == slideshow.selectedSlide) return;
                showNewItem(slideshow, event.detail - 1, false);
            }
        });
    };

    function navigateSlide(slideshow, event, keyNav) {
        // user has interacted with the slideshow navigation -> update visible slide
        var target = (Util.hasClass(event.target, 'js-slideshow__nav-item')) ? event.target : event.target.closest('.js-slideshow__nav-item');
        if (keyNav && target && !Util.hasClass(target, 'slideshow__nav-item--selected')) {
            slideshow.showItem(Util.getIndexInArray(slideshow.navigation, target));
            slideshow.moveFocus = true;
            updateAriaLive(slideshow);
        }
    };

    function initAnimationEndEvents(slideshow) {
        // remove animation classes at the end of a slide transition
        for (var i = 0; i < slideshow.items.length; i++) {
            (function (i) {
                slideshow.items[i].addEventListener('animationend', function () {
                    resetAnimationEnd(slideshow, slideshow.items[i]);
                });
                slideshow.items[i].addEventListener('transitionend', function () {
                    resetAnimationEnd(slideshow, slideshow.items[i]);
                });
            })(i);
        }
    };

    function resetAnimationEnd(slideshow, item) {
        setTimeout(function () { // add a delay between the end of animation and slideshow reset - improve animation performance
            if (Util.hasClass(item, 'slideshow__item--selected')) {
                if (slideshow.moveFocus) Util.moveFocus(item);
                emitSlideshowEvent(slideshow, 'newItemVisible', slideshow.selectedSlide);
                slideshow.moveFocus = false;
            }
            Util.removeClass(item, 'slideshow__item--' + slideshow.animationType + '-out-left slideshow__item--' + slideshow.animationType + '-out-right slideshow__item--' + slideshow.animationType + '-in-left slideshow__item--' + slideshow.animationType + '-in-right');
            item.removeAttribute('aria-hidden');
            slideshow.animating = false;
            Util.removeClass(slideshow.element, slideshow.animatingClass);
        }, 100);
    };

    function showNewItem(slideshow, index, bool) {
        if (slideshow.items.length <= 1) return;
        if (slideshow.animating && slideshow.supportAnimation) return;
        slideshow.animating = true;
        Util.addClass(slideshow.element, slideshow.animatingClass);
        if (index < 0) index = slideshow.items.length - 1;
        else if (index >= slideshow.items.length) index = 0;
        // skip slideshow item if it is hidden
        if (bool && Util.hasClass(slideshow.items[index], 'is-hidden')) {
            slideshow.animating = false;
            index = bool == 'next' ? index + 1 : index - 1;
            showNewItem(slideshow, index, bool);
            return;
        }
        // index of new slide is equal to index of slide selected item
        if (index == slideshow.selectedSlide) {
            slideshow.animating = false;
            return;
        }
        var exitItemClass = getExitItemClass(slideshow, bool, slideshow.selectedSlide, index);
        var enterItemClass = getEnterItemClass(slideshow, bool, slideshow.selectedSlide, index);
        // transition between slides
        if (!slideshow.animationOff) Util.addClass(slideshow.items[slideshow.selectedSlide], exitItemClass);
        Util.removeClass(slideshow.items[slideshow.selectedSlide], 'slideshow__item--selected');
        slideshow.items[slideshow.selectedSlide].setAttribute('aria-hidden', 'true'); //hide to sr element that is exiting the viewport
        if (slideshow.animationOff) {
            Util.addClass(slideshow.items[index], 'slideshow__item--selected');
        } else {
            Util.addClass(slideshow.items[index], enterItemClass + ' slideshow__item--selected');
        }
        // reset slider navigation appearance
        resetSlideshowNav(slideshow, index, slideshow.selectedSlide);
        slideshow.selectedSlide = index;
        // reset autoplay
        slideshow.pauseAutoplay();
        slideshow.startAutoplay();
        // reset controls/navigation color themes
        resetSlideshowTheme(slideshow, index);
        // emit event
        emitSlideshowEvent(slideshow, 'newItemSelected', slideshow.selectedSlide);
        if (slideshow.animationOff) {
            slideshow.animating = false;
            Util.removeClass(slideshow.element, slideshow.animatingClass);
        }
    };

    function getExitItemClass(slideshow, bool, oldIndex, newIndex) {
        var className = '';
        if (bool) {
            className = (bool == 'next') ? 'slideshow__item--' + slideshow.animationType + '-out-right' : 'slideshow__item--' + slideshow.animationType + '-out-left';
        } else {
            className = (newIndex < oldIndex) ? 'slideshow__item--' + slideshow.animationType + '-out-left' : 'slideshow__item--' + slideshow.animationType + '-out-right';
        }
        return className;
    };

    function getEnterItemClass(slideshow, bool, oldIndex, newIndex) {
        var className = '';
        if (bool) {
            className = (bool == 'next') ? 'slideshow__item--' + slideshow.animationType + '-in-right' : 'slideshow__item--' + slideshow.animationType + '-in-left';
        } else {
            className = (newIndex < oldIndex) ? 'slideshow__item--' + slideshow.animationType + '-in-left' : 'slideshow__item--' + slideshow.animationType + '-in-right';
        }
        return className;
    };

    function resetSlideshowNav(slideshow, newIndex, oldIndex) {
        if (slideshow.navigation) {
            Util.removeClass(slideshow.navigation[oldIndex], 'slideshow__nav-item--selected');
            Util.addClass(slideshow.navigation[newIndex], 'slideshow__nav-item--selected');
            slideshow.navCurrentLabel.parentElement.removeChild(slideshow.navCurrentLabel);
            slideshow.navigation[newIndex].getElementsByTagName('button')[0].appendChild(slideshow.navCurrentLabel);
        }
    };

    function resetSlideshowTheme(slideshow, newIndex) {
        var dataTheme = slideshow.items[newIndex].getAttribute('data-theme');
        if (dataTheme) {
            if (slideshow.navigation) slideshow.navigation[0].parentElement.setAttribute('data-theme', dataTheme);
            if (slideshow.controls[0]) slideshow.controls[0].parentElement.setAttribute('data-theme', dataTheme);
        } else {
            if (slideshow.navigation) slideshow.navigation[0].parentElement.removeAttribute('data-theme');
            if (slideshow.controls[0]) slideshow.controls[0].parentElement.removeAttribute('data-theme');
        }
    };

    function emitSlideshowEvent(slideshow, eventName, detail) {
        var event = new CustomEvent(eventName, {detail: detail});
        slideshow.element.dispatchEvent(event);
    };

    function updateAriaLive(slideshow) {
        slideshow.ariaLive.innerHTML = 'Item ' + (slideshow.selectedSlide + 1) + ' of ' + slideshow.items.length;
    };

    function externalControlSlide(slideshow, button) { // control slideshow using external element
        button.addEventListener('click', function (event) {
            var index = button.getAttribute('data-index');
            if (!index || index == slideshow.selectedSlide + 1) return;
            event.preventDefault();
            showNewItem(slideshow, index - 1, false);
        });
    };

    Slideshow.defaults = {
        element: '',
        navigation: true,
        autoplay: false,
        autoplayInterval: 5000,
        swipe: false
    };

    window.Slideshow = Slideshow;

    //initialize the Slideshow objects
    var slideshows = document.getElementsByClassName('js-slideshow');
    if (slideshows.length > 0) {
        for (var i = 0; i < slideshows.length; i++) {
            (function (i) {
                var navigation = (slideshows[i].getAttribute('data-navigation') && slideshows[i].getAttribute('data-navigation') == 'off') ? false : true,
                    autoplay = (slideshows[i].getAttribute('data-autoplay') && slideshows[i].getAttribute('data-autoplay') == 'on') ? true : false,
                    autoplayInterval = (slideshows[i].getAttribute('data-autoplay-interval')) ? slideshows[i].getAttribute('data-autoplay-interval') : 5000,
                    swipe = (slideshows[i].getAttribute('data-swipe') && slideshows[i].getAttribute('data-swipe') == 'on') ? true : false;
                new Slideshow({
                    element: slideshows[i],
                    navigation: navigation,
                    autoplay: autoplay,
                    autoplayInterval: autoplayInterval,
                    swipe: swipe
                });
            })(i);
        }
    }
}());
// File#: _3_thumbnail-slideshow
// Usage: codyhouse.co/license
(function () {
    var ThumbSlideshow = function (element) {
        this.element = element;
        this.slideshow = this.element.getElementsByClassName('slideshow')[0];
        this.slideshowItems = this.slideshow.getElementsByClassName('js-slideshow__item');
        this.carousel = this.element.getElementsByClassName('thumbslide__nav-wrapper')[0];
        this.carouselList = this.carousel.getElementsByClassName('thumbslide__nav-list')[0];
        this.carouselListWrapper = this.carousel.getElementsByClassName('thumbslide__nav')[0];
        this.carouselControls = this.element.getElementsByClassName('js-thumbslide__tb-control');
        // custom obj
        this.slideshowObj = false;
        // thumb properties
        this.thumbItems = false;
        this.thumbOriginalWidth = false;
        this.thumbOriginalHeight = false;
        this.thumbVisibItemsNb = false;
        this.itemsWidth = false;
        this.itemsHeight = false;
        this.itemsMargin = false;
        this.thumbTranslateContainer = false;
        this.thumbTranslateVal = 0;
        // vertical variation
        this.thumbVertical = Util.hasClass(this.element, 'thumbslide--vertical');
        // recursive update
        this.recursiveDirection = true;
        // drag events
        this.thumbDragging = true;
        this.dragStart = false;
        // resize
        this.resize = false;
        // image load -> store info about thumb image being loaded
        this.loaded = false;
        initThumbs(this);
        initSlideshow(this);
        checkImageLoad(this);
    };

    function initThumbs(thumbSlider) { // create thumb items
        var carouselItems = '';
        for (var i = 0; i < thumbSlider.slideshowItems.length; i++) {
            var url = thumbSlider.slideshowItems[i].getAttribute('data-thumb'),
                alt = thumbSlider.slideshowItems[i].getAttribute('data-alt');
            if (!alt) alt = 'Image Preview';
            carouselItems = carouselItems + '<li class="thumbslide__nav-item"><img src="' + url + '" alt="' + alt + '">' + '</li>';
        }
        thumbSlider.carouselList.innerHTML = carouselItems;
        if (!thumbSlider.thumbVertical) initThumbsLayout(thumbSlider);
        else loadThumbsVerticalLayout(thumbSlider);
    };

    function initThumbsLayout(thumbSlider) {  // set thumbs visible numbers + width
        // evaluate size of single elements + number of visible elements
        thumbSlider.thumbItems = thumbSlider.carouselList.getElementsByClassName('thumbslide__nav-item');

        var itemStyle = window.getComputedStyle(thumbSlider.thumbItems[0]),
            containerStyle = window.getComputedStyle(thumbSlider.carouselListWrapper),
            itemWidth = parseFloat(itemStyle.getPropertyValue('width')),
            itemMargin = parseFloat(itemStyle.getPropertyValue('margin-right')),
            containerPadding = parseFloat(containerStyle.getPropertyValue('padding-left')),
            containerWidth = parseFloat(containerStyle.getPropertyValue('width'));

        if (!thumbSlider.thumbOriginalWidth) { // on resize -> use initial width of items to recalculate
            thumbSlider.thumbOriginalWidth = itemWidth;
        } else {
            itemWidth = thumbSlider.thumbOriginalWidth;
        }
        // get proper width of elements
        thumbSlider.thumbVisibItemsNb = parseInt((containerWidth - 2 * containerPadding + itemMargin) / (itemWidth + itemMargin));
        thumbSlider.itemsWidth = ((containerWidth - 2 * containerPadding + itemMargin) / thumbSlider.thumbVisibItemsNb) - itemMargin;
        thumbSlider.thumbTranslateContainer = (((thumbSlider.itemsWidth + itemMargin) * thumbSlider.thumbVisibItemsNb));
        thumbSlider.itemsMargin = itemMargin;
        // flexbox fallback
        if (!flexSupported) thumbSlider.carouselList.style.width = (thumbSlider.itemsWidth + itemMargin) * thumbSlider.slideshowItems.length + 'px';
        setThumbsWidth(thumbSlider);
    };

    function checkImageLoad(thumbSlider) {
        if (!thumbSlider.thumbVertical) { // no need to wait for image load, we already have their width
            updateVisibleThumb(thumbSlider, 0);
            updateThumbControls(thumbSlider);
            initTbSlideshowEvents(thumbSlider);
        } else { // wait for image to be loaded -> need to know the right height
            var image = new Image();
            image.onload = function () {
                thumbSlider.loaded = true;
            }
            image.onerror = function () {
                thumbSlider.loaded = true;
            }
            image.src = thumbSlider.slideshowItems[0].getAttribute('data-thumb');
        }
    };

    function loadThumbsVerticalLayout(thumbSlider) {
        // this is the vertical layout -> we need to make sure the thumb are loaded before checking the value of their height
        if (thumbSlider.loaded) {
            initThumbsVerticalLayout(thumbSlider);
            updateVisibleThumb(thumbSlider, 0);
            updateThumbControls(thumbSlider);
            initTbSlideshowEvents(thumbSlider);
        } else { // wait for thumbs to be loaded
            setTimeout(function () {
                loadThumbsVerticalLayout(thumbSlider);
            }, 100);
        }
    }

    function initThumbsVerticalLayout(thumbSlider) {
        // evaluate size of single elements + number of visible elements
        thumbSlider.thumbItems = thumbSlider.carouselList.getElementsByClassName('thumbslide__nav-item');

        var itemStyle = window.getComputedStyle(thumbSlider.thumbItems[0]),
            containerStyle = window.getComputedStyle(thumbSlider.carouselListWrapper),
            itemWidth = parseFloat(itemStyle.getPropertyValue('width')),
            itemHeight = parseFloat(itemStyle.getPropertyValue('height')),
            itemRatio = itemWidth / itemHeight,
            itemMargin = parseFloat(itemStyle.getPropertyValue('margin-bottom')),
            containerPadding = parseFloat(containerStyle.getPropertyValue('padding-top')),
            containerWidth = parseFloat(containerStyle.getPropertyValue('width')),
            containerHeight = parseFloat(containerStyle.getPropertyValue('height'));

        if (!flexSupported) containerHeight = parseFloat(window.getComputedStyle(thumbSlider.element).getPropertyValue('height'));

        if (!thumbSlider.thumbOriginalHeight) { // on resize -> use initial width of items to recalculate
            thumbSlider.thumbOriginalHeight = itemHeight;
            thumbSlider.thumbOriginalWidth = itemWidth;
        } else {
            resetOriginalSize(thumbSlider);
            itemHeight = thumbSlider.thumbOriginalHeight;
        }
        // get proper height of elements
        thumbSlider.thumbVisibItemsNb = parseInt((containerHeight - 2 * containerPadding + itemMargin) / (itemHeight + itemMargin));
        thumbSlider.itemsHeight = ((containerHeight - 2 * containerPadding + itemMargin) / thumbSlider.thumbVisibItemsNb) - itemMargin;
        thumbSlider.itemsWidth = thumbSlider.itemsHeight * itemRatio,
            thumbSlider.thumbTranslateContainer = (((thumbSlider.itemsHeight + itemMargin) * thumbSlider.thumbVisibItemsNb));
        thumbSlider.itemsMargin = itemMargin;
        // flexbox fallback
        if (!flexSupported) {
            thumbSlider.carousel.style.height = (thumbSlider.itemsHeight + itemMargin) * thumbSlider.slideshowItems.length + 'px';
            thumbSlider.carouselListWrapper.style.height = containerHeight + 'px';
        }
        setThumbsWidth(thumbSlider);
    };

    function setThumbsWidth(thumbSlider) { // set thumbs width
        for (var i = 0; i < thumbSlider.thumbItems.length; i++) {
            thumbSlider.thumbItems[i].style.width = thumbSlider.itemsWidth + "px";
            if (thumbSlider.thumbVertical) thumbSlider.thumbItems[i].style.height = thumbSlider.itemsHeight + "px";
        }

        if (thumbSlider.thumbVertical) {
            var padding = parseFloat(window.getComputedStyle(thumbSlider.carouselListWrapper).getPropertyValue('padding-left'));
            thumbSlider.carousel.style.width = (thumbSlider.itemsWidth + 2 * padding) + "px";
            if (!flexSupported) thumbSlider.slideshow.style.width = (parseFloat(window.getComputedStyle(thumbSlider.element).getPropertyValue('width')) - (thumbSlider.itemsWidth + 2 * padding) - 10) + 'px';
        }
    };

    function initSlideshow(thumbSlider) { // for the main slideshow, we are using the Slideshow component -> we only need to initialize the object
        var autoplay = (thumbSlider.slideshow.getAttribute('data-autoplay') && thumbSlider.slideshow.getAttribute('data-autoplay') == 'on') ? true : false,
            autoplayInterval = (thumbSlider.slideshow.getAttribute('data-autoplay-interval')) ? thumbSlider.slideshow.getAttribute('data-autoplay-interval') : 5000,
            swipe = (thumbSlider.slideshow.getAttribute('data-swipe') && thumbSlider.slideshow.getAttribute('data-swipe') == 'on') ? true : false;
        thumbSlider.slideshowObj = new Slideshow({
            element: thumbSlider.slideshow,
            navigation: false,
            autoplay: autoplay,
            autoplayInterval: autoplayInterval,
            swipe: swipe
        });
    };

    function initTbSlideshowEvents(thumbSlider) {
        // listen for new slide selection -> 'newItemSelected' custom event is emitted each time a new slide is selected
        thumbSlider.slideshowObj.element.addEventListener('newItemSelected', function (event) {
            updateVisibleThumb(thumbSlider, event.detail);
        });

        // click on a thumbnail -> update slide in slideshow
        thumbSlider.carouselList.addEventListener('click', function (event) {
            if (thumbSlider.thumbDragging) return;
            var selectedOption = event.target.closest('.thumbslide__nav-item');
            if (!selectedOption || Util.hasClass(selectedOption, 'thumbslide__nav-item--active')) return;
            thumbSlider.slideshowObj.showItem(Util.getIndexInArray(thumbSlider.carouselList.getElementsByClassName('thumbslide__nav-item'), selectedOption));
        });

        // reset thumbnails on resize
        window.addEventListener('resize', function (event) {
            if (thumbSlider.resize) return;
            thumbSlider.resize = true;
            window.requestAnimationFrame(resetThumbsResize.bind(thumbSlider));
        });

        // enable drag on thumbnails
        new SwipeContent(thumbSlider.carouselList);
        thumbSlider.carouselList.addEventListener('dragStart', function (event) {
            var coordinate = getDragCoordinate(thumbSlider, event);
            thumbSlider.dragStart = coordinate;
            thumbDragEnd(thumbSlider);
        });
        thumbSlider.carouselList.addEventListener('dragging', function (event) {
            if (!thumbSlider.dragStart) return;
            var coordinate = getDragCoordinate(thumbSlider, event);
            if (thumbSlider.slideshowObj.animating || Math.abs(coordinate - thumbSlider.dragStart) < 20) return;
            Util.addClass(thumbSlider.element, 'thumbslide__nav-list--dragging');
            thumbSlider.thumbDragging = true;
            Util.addClass(thumbSlider.carouselList, 'thumbslide__nav-list--no-transition');
            var translate = thumbSlider.thumbVertical ? 'translateY' : 'translateX';
            setTranslate(thumbSlider, translate + '(' + (thumbSlider.thumbTranslateVal + coordinate - thumbSlider.dragStart) + 'px)');
        });
    };

    function thumbDragEnd(thumbSlider) {
        thumbSlider.carouselList.addEventListener('dragEnd', function cb(event) {
            var coordinate = getDragCoordinate(thumbSlider, event);
            thumbSlider.thumbTranslateVal = resetTranslateToRound(thumbSlider, thumbSlider.thumbTranslateVal + coordinate - thumbSlider.dragStart);
            thumbShowNewItems(thumbSlider, false);
            thumbSlider.dragStart = false;
            Util.removeClass(thumbSlider.carouselList, 'thumbslide__nav-list--no-transition');
            thumbSlider.carouselList.removeEventListener('dragEnd', cb);
            setTimeout(function () {
                thumbSlider.thumbDragging = false;
            }, 50);
            Util.removeClass(thumbSlider.element, 'thumbslide__nav-list--dragging');
        });
    };

    function getDragCoordinate(thumbSlider, event) { // return the drag value based on direction of thumbs navugation
        return thumbSlider.thumbVertical ? event.detail.y : event.detail.x;
    }

    function resetTranslateToRound(thumbSlider, value) { // at the ed of dragging -> set translate of coontainer to right value
        var dimension = getItemDimension(thumbSlider);
        return Math.round(value / (dimension + thumbSlider.itemsMargin)) * (dimension + thumbSlider.itemsMargin);
    };

    function resetThumbsResize() { // reset thumbs width on resize
        var thumbSlider = this;
        if (!thumbSlider.thumbVertical) initThumbsLayout(thumbSlider);
        else initThumbsVerticalLayout(thumbSlider);
        setThumbsWidth(thumbSlider);
        var dimension = getItemDimension(thumbSlider);
        // reset the translate value of the thumbs container as well
        if ((-1) * thumbSlider.thumbTranslateVal % (dimension + thumbSlider.itemsMargin) > 0) {
            thumbSlider.thumbTranslateVal = -1 * parseInt(((-1) * thumbSlider.thumbTranslateVal) / (dimension + thumbSlider.itemsMargin)) * (dimension + thumbSlider.itemsMargin);
            thumbShowNewItems(thumbSlider, false);
        }
        thumbSlider.resize = false;
    };

    function thumbShowNewItems(thumbSlider, direction) { // when a new slide is selected -> update position of thumbs navigation
        var dimension = getItemDimension(thumbSlider);
        if (direction == 'next') thumbSlider.thumbTranslateVal = thumbSlider.thumbTranslateVal - thumbSlider.thumbTranslateContainer;
        else if (direction == 'prev') thumbSlider.thumbTranslateVal = thumbSlider.thumbTranslateVal + thumbSlider.thumbTranslateContainer;
        // make sure translate value is correct
        if (-1 * thumbSlider.thumbTranslateVal >= (thumbSlider.thumbItems.length - thumbSlider.thumbVisibItemsNb) * (dimension + thumbSlider.itemsMargin)) thumbSlider.thumbTranslateVal = -1 * ((thumbSlider.thumbItems.length - thumbSlider.thumbVisibItemsNb) * (dimension + thumbSlider.itemsMargin));
        if (thumbSlider.thumbTranslateVal > 0) thumbSlider.thumbTranslateVal = 0;

        var translate = thumbSlider.thumbVertical ? 'translateY' : 'translateX';
        setTranslate(thumbSlider, translate + '(' + thumbSlider.thumbTranslateVal + 'px)');
        updateThumbControls(thumbSlider);
    };

    function updateVisibleThumb(thumbSlider, index) { // update selected thumb
        // update selected thumbnails
        var selectedThumb = thumbSlider.carouselList.getElementsByClassName('thumbslide__nav-item--active');
        if (selectedThumb.length > 0) Util.removeClass(selectedThumb[0], 'thumbslide__nav-item--active');
        Util.addClass(thumbSlider.thumbItems[index], 'thumbslide__nav-item--active');
        // update carousel translate value if new thumb is not visible
        recursiveUpdateThumb(thumbSlider, index);
    };

    function recursiveUpdateThumb(thumbSlider, index) { // recursive function used to update the position of thumbs navigation (eg when going from last slide to first one)
        var dimension = getItemDimension(thumbSlider);
        if (((index + 1 - thumbSlider.thumbVisibItemsNb) * (dimension + thumbSlider.itemsMargin) + thumbSlider.thumbTranslateVal >= 0) || (index * (dimension + thumbSlider.itemsMargin) + thumbSlider.thumbTranslateVal <= 0 && thumbSlider.thumbTranslateVal < 0)) {
            var increment = ((index + 1 - thumbSlider.thumbVisibItemsNb) * (dimension + thumbSlider.itemsMargin) + thumbSlider.thumbTranslateVal >= 0) ? 1 : -1;
            if (!thumbSlider.recursiveDirection || thumbSlider.recursiveDirection == increment) {
                thumbSlider.thumbTranslateVal = -1 * increment * (dimension + thumbSlider.itemsMargin) + thumbSlider.thumbTranslateVal;
                thumbSlider.recursiveDirection = increment;
                recursiveUpdateThumb(thumbSlider, index);
            } else {
                thumbSlider.recursiveDirection = false;
                thumbShowNewItems(thumbSlider, false);
            }
        } else {
            thumbSlider.recursiveDirection = false;
            thumbShowNewItems(thumbSlider, false);
        }
    }

    function updateThumbControls(thumbSlider) { // reset thumb controls style
        var dimension = getItemDimension(thumbSlider);
        Util.toggleClass(thumbSlider.carouselListWrapper, 'thumbslide__nav--scroll-start', (thumbSlider.thumbTranslateVal != 0));
        Util.toggleClass(thumbSlider.carouselListWrapper, 'thumbslide__nav--scroll-end', (thumbSlider.thumbTranslateVal != -1 * ((thumbSlider.thumbItems.length - thumbSlider.thumbVisibItemsNb) * (dimension + thumbSlider.itemsMargin))) && (thumbSlider.thumbItems.length > thumbSlider.thumbVisibItemsNb));
        if (thumbSlider.carouselControls.length == 0) return;
        Util.toggleClass(thumbSlider.carouselControls[0], 'thumbslide__tb-control--disabled', (thumbSlider.thumbTranslateVal == 0));
        Util.toggleClass(thumbSlider.carouselControls[1], 'thumbslide__tb-control--disabled', (thumbSlider.thumbTranslateVal == -1 * ((thumbSlider.thumbItems.length - thumbSlider.thumbVisibItemsNb) * (dimension + thumbSlider.itemsMargin))));
    };

    function getItemDimension(thumbSlider) {
        return thumbSlider.thumbVertical ? thumbSlider.itemsHeight : thumbSlider.itemsWidth;
    }

    function setTranslate(thumbSlider, translate) {
        thumbSlider.carouselList.style.transform = translate;
        thumbSlider.carouselList.style.msTransform = translate;
    };

    function resetOriginalSize(thumbSlider) {
        if (!Util.cssSupports('color', 'var(--var-name)')) return;
        var thumbWidth = parseInt(getComputedStyle(thumbSlider.element).getPropertyValue('--thumbslide-thumbnail-auto-size'));
        if (thumbWidth == thumbSlider.thumbOriginalWidth) return;
        thumbSlider.thumbOriginalHeight = parseFloat((thumbSlider.thumbOriginalHeight) * (thumbWidth / thumbSlider.thumbOriginalWidth));
        thumbSlider.thumbOriginalWidth = thumbWidth;
    };

    //initialize the ThumbSlideshow objects
    var thumbSlideshows = document.getElementsByClassName('js-thumbslide'),
        flexSupported = Util.cssSupports('align-items', 'stretch');
    if (thumbSlideshows.length > 0) {
        for (var i = 0; i < thumbSlideshows.length; i++) {
            (function (i) {
                new ThumbSlideshow(thumbSlideshows[i]);
            })(i);
        }
    }
}());
