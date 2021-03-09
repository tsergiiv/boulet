<header class="header-min header-style-1">
    <div class="container-custom">
        <div class="logo-wrap">
            <a href="/" class="logo-wrap_link" title="Real 1st Theme (cosmetic)">
                <img src="<?= get_stylesheet_directory_uri() ?>/assets/img/logo.svg" alt="Real 1st Theme (cosmetic)">
            </a>
        </div>
        <nav class="mobile-nav">
            <a href="javascript:;" class="hamburger">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <defs>
                        <style>.a {
                                fill: none;
                            }</style>
                    </defs>
                    <path class="a" d="M0,0H24V24H0Z"/>
                    <path d="M3,18H21V16H3Zm0-5H21V11H3ZM3,6V8H21V6Z"/>
                </svg>
            </a>
            <ul class="mobile-menu">
                <a href="javascript:;" class="btn-circle-close close-menu"><i class="fas fa-times"></i></a>
                <div class="mobile-menu_top">
                    <span class="user_circle not-logined"><i class="far fa-user"></i></span>
                    <a href="javascript:;" class="mobile-login-btn"> S&#039;identifier</a>
                </div>
                <li class="mobile-menu-links">
                    <a href="/" class=" active "
                       title="Real 1st Theme (cosmetic)">
                        Accueil
                        <i class="  active  fas fa-chevron-right"></i>
                    </a>
                </li>
                <li class="mobile-menu-links">
                    <a href="/catalog"
                       class="mobile-collection "
                       title="Real 1st Theme (cosmetic)">
                        Boutique
                    </a>
                    <i class="mobile-collection-arrow  fas fa-chevron-right"></i>
                </li>
                <ul class="mobile-category close">
                    <li class="mobile-menu-top">
                        <a href="javascript:;" class="mobile-collection">
                            <i class="mobile-collection-arrow  fas fa-chevron-left"></i>
                            Boutique</a>
                    </li>
                    <li class="has-subcat">
                        <a href="/maquillage/">Maquillage</a>
                        <i class="fas fa-chevron-right "></i>
                        <ul class="header-subcat_mobile close">
                            <li class="mobile-menu-top">
                                <a href="javascript:;" class="mobile-menu-top_subcat"><i
                                        class="fas fa-chevron-left"></i> Maquillage </a>
                            </li>
                            <li class=" ">
                                <a href="/maquillage/visage/">Visage</a>
                            </li>
                            <li class=" ">
                                <a href="/maquillage/levres/">Lèvres</a>
                            </li>
                            <li class="  has-subcat ">
                                <a href="/maquillage/yeux/">Yeux</a>
                                <i class="fas fa-chevron-right"></i>
                                <ul class="header-subcat_mobile close">
                                    <li class="mobile-menu-top">
                                        <a href="javascript:;" class="mobile-menu-top_subcat"><i
                                                class="fas fa-chevron-left"></i> Yeux</a>
                                    </li>
                                    <li class=" ">
                                        <a href="/maquillage/yeux/eyeliner/">Eyeliner</a>
                                    </li>
                                    <li class=" ">
                                        <a href="/maquillage/yeux/kajal/">Kajal</a>
                                    </li>
                                    <li class=" ">
                                        <a href="/maquillage/yeux/demaquillant-pour-les-yeux/">Démaquillant pour les
                                            yeux</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>

                    <li class="  has-subcat ">
                        <a href="/produits-pour-le-corps/">Produits pour le corps</a>
                        <i class="fas fa-chevron-right "></i>
                        <ul class="header-subcat_mobile close">
                            <li class="mobile-menu-top">
                                <a href="javascript:;" class="mobile-menu-top_subcat"><i
                                        class="fas fa-chevron-left"></i> Produits pour le corps</a>
                            </li>
                            <li class=" ">
                                <a href="/produits-pour-le-corps/test/">test</a>
                            </li>
                        </ul>
                    <li class=" ">
                        <a href="/produits-capillaires/">Produits capillaires</a>
                </ul>
                <li class="mobile-menu-links">
                    <a href="/about" class=""
                       title="Real 1st Theme (cosmetic)">
                        À propos
                        <i class=" fas fa-chevron-right"></i>
                    </a>
                </li>
                <li class="mobile-menu-links">
                    <a href="/contacts" class=""
                       title="Real 1st Theme (cosmetic)">
                        Contact
                        <i class=" fas fa-chevron-right"></i>
                    </a>
                </li>
            </ul>
        </nav>

        <nav class="desktop-nav">
            <ul>
                <li>
                    <a href="/" class=" active " title="Real 1st Theme (cosmetic)">
                        Accueil
                    </a>
                </li>
                <li id="collection-link" class="collection">
                    <a href="/shop" class="" title="Real 1st Theme (cosmetic)">
                        Boutique
                    </a>
                    <ul class="header-category">
                        <?php
                        function getSubcategories($cat) {
                            $category_id = $cat->term_id;

                            $args = array(
                                'taxonomy'     => 'product_cat',
                                'child_of'     => 0,
                                'parent'       => $category_id,
                                'show_count'   => 0,
                                'pad_counts'   => 0,
                                'hierarchical' => 1,
                                'title_li'     => '',
                                'hide_empty'   => 0
                            );

                            $sub_cats = get_categories( $args );

                            ?>

                            <li class="has-subcat">
                                <a href="<?= get_category_link($category_id) ?>"><?= $cat->name ?><?= $sub_cats ? '<i class="fas fa-chevron-right"></i>' : '' ?></a>
                                <?php
                                if ($sub_cats) {
                                    echo '<ul class="header-subcat">';
                                    getCategories($category_id);
                                    echo '</ul>';
                                }
                                ?>
                            </li>

                            <?php
                        }

                        function getCategories($category_id) {
                            $args = array(
                                'taxonomy'     => 'product_cat',
                                'child_of'     => 0,
                                'parent'       => $category_id,
                                'show_count'   => 0,
                                'pad_counts'   => 0,
                                'hierarchical' => 1,
                                'title_li'     => '',
                                'hide_empty'   => 0
                            );

                            $sub_cats = get_categories( $args );

                            foreach ($sub_cats as $cat) {
                                getSubcategories($cat);
                            }
                        }
                        ?>

                        <?php
                        $args = array(
                            'taxonomy'     => 'product_cat',
                            'show_count'   => 0,
                            'pad_counts'   => 0,
                            'hierarchical' => 1,
                            'title_li'     => '',
                            'hide_empty'   => 0
                        );

                        $all_categories = get_categories( $args );

                        foreach ($all_categories as $cat) {
                            if ($cat->category_parent == 0) {
                                getSubcategories($cat);
                            }
                        }
                        ?>
                    </ul>
                </li>
                <li>
                    <a href="/about" class="" title="Real 1st Theme (cosmetic)">
                        À propos
                    </a>
                </li>
                <li>
                    <a href="/contacts" class="" title="Real 1st Theme (cosmetic)">
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
        <ul class="header-icons">
            <li class="relative">
                <a href="javascript:;" class="search-link"><i class="fas fa-search"></i></a>
                <a href="javascript:;" class="search-input-close"><i class="fas fa-times"></i></a>
                <div class="search close">
                    <form action="search/" method="get" role="search">
                        <label class="sr-only" for="searchInputMobile">Search</label>
                        <input class="header-v3__nav-form-control form-control width-100% search-input-box" value=""
                               autocomplete="off" type="search" name="q" id="searchInputMobile" placeholder="Chercher">
                    </form>
                </div>
            </li>
            <li class="header-wishlist-wrapper">
                <a href="/account/wishlist/"> <i class="far fa-heart"></i> </a>
            </li>
            <li class="relative cart-popup-mobile">
                <a class="cart-popup-link" href="javascript:;">
                    <i class="fas fa-shopping-bag"></i>
                </a>
                <?php storefront_header_cart() ?>
            </li>
            <li class="login-popup-mobile">
                <a class="login-popup-link" href="javascript:;"><i class="fas fa-user"></i></a>
                <div class="login-popup popup-is-hidden popup">
                    <ul class="login-popup-container open">
                        <li class="popup-logo">
                            <img src="<?= get_stylesheet_directory_uri(); ?>/assets/img/logo.svg"
                                 alt="Real 1st Theme (cosmetic)">
                        </li>
                        <li class="popup-title">
                            <h1 class="bold title-accent-color">S'identifier</h1>
                            <span class="content-secondary-color">Connectez-vous à votre compte</span>
                        </li>
                        <li class="popup-login-form">
                            <form method="post" id="formLogin" action="account/loginPost/">
                                <div class="grid center input-box">
                          <span class="input-group">
                            <i class="fas fa-user"></i>
                          	<input class="input input-icon" type="email" id="formLoginEmail" name="email"
                                   placeholder="Courriel" autocomplete='email' tabindex=1 required>
                           </span>
                                    <span class="input-group">
                            <i class="fas fa-lock"></i>
                          	<input class="input input-icon" type="password" id="formLoginPassword" name="password"
                                   placeholder="Mot de passe" autocomplete="current-password" tabindex=2 required>
                           </span>
                                    <a href="/account/password/" class="forgot " tabindex=6>Mot de passe oublié?</a>

                                    <input type="hidden" name="key" value="f8f13cb6a8173168d2855879151efbaa"/>
                                    <input type="hidden" name="type" value="login"/>
                                    <button type="submit" onclick="$('#formLogin').submit(); return false;"
                                            class="button btn-pink roboto" tabindex=3>S&#039;identifier
                                    </button>
                                </div>
                            </form>
                            <div class="popup-bottom">
                                <span class="content-secondary-color">OU Connectez-vous avec</span>
                                <div class="social-group">
                                    <a class="button btn-transparant roboto" href="javascript:;" rel="nofollow"
                                       onclick=""><i class="fab fa-facebook-f"></i> Facebook</a>
                                    <a class="button btn-transparant roboto google" href="javascript:;" rel="nofollow"
                                       onclick=""><i class="fab fa-google"></i> Google</a>
                                </div>
                                <a class="button btn-transparant btn-pink-border roboto registration"
                                   href="javascript:;" tabindex=5>S&#039;inscrire</a>
                            </div>
                        </li>
                    </ul>
                    <ul class="registration-popup-container close">
                        <li class="popup-logo">
                            <img src="<?php bloginfo('template_url'); ?>/assets/img/logo.svg"
                                 alt="Real 1st Theme (cosmetic)">
                        </li>
                        <li class="popup-title">
                            <h1 class="bold title-accent-color">S'inscrire</h1>
                            <span class="content-secondary-color">Inscrivez-vous à votre compte</span>
                        </li>
                        <li class="popup-registration-form">
                            <form method="post" id="form-register" action="account/registerPost/">
                                <div class="grid center input-box">
                                    <input class="input" type="text" name="name" placeholder="Prénom" tabindex=1
                                           required>
                                    <input class="input" type="text" name="lastName" placeholder="Nom de famille"
                                           tabindex=1 required>
                                    <input class="input" type="text" name="telephone" placeholder="numéro de téléphone"
                                           tabindex=1 required>
                                    <input class="input" type="email" name="email" placeholder="Email" required>
                                    <input class="input" type="password" name="password" placeholder="Mot de passe"
                                           required>
                                    <input class="input" type="password" name="confirmPassword"
                                           placeholder="Confirmez le mot de passe" required>
                                    <input type="hidden" name="key" value="f8f13cb6a8173168d2855879151efbaa"/>
                                    <button type="submit" onclick="$('#form-register').submit(); return false;"
                                            class="button btn-pink roboto" tabindex=3>Commencer
                                    </button>
                                </div>
                            </form>
                            <div class="popup-bottom">
                                <span class="content-secondary-color">Vous avez déjà un compte?</span>
                                <a class="button btn-transparant btn-pink-border roboto login-button"
                                   href="javascript:;" tabindex=5>Se connecter</a>
                            </div>
                        </li>
                    </ul>
                    <a href="javascript:;" class="btn-close close-popup"><i class="fas fa-times"></i></a>
                </div>
            </li>
        </ul>
    </div>
</header>
