<header class="header-min header-style-1">
	<div class="container-custom">
		<div class="logo-wrap">
			<a href="/" class="logo-wrap_link" title="Real 1st Theme (cosmetic)">
				<img src="<?= get_stylesheet_directory_uri() ?>/assets/img/new/logo.png" alt="Boulet">
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
					   title="Accueil">
						Accueil
						<i class="  active  fas fa-chevron-right"></i>
					</a>
				</li>
				<li class="mobile-menu-links">
					<a href="/shop"
					   class="mobile-collection "
					   title="Boutique">
						Boutique
					</a>
					<i class="mobile-collection-arrow  fas fa-chevron-right"></i>
				</li>
				<ul class="mobile-category close">
                    <?php
                    function getMobSubcategories($cat)
                    {
                        $category_id = $cat->term_id;

                        $args = array(
                            'taxonomy' => 'product_cat',
                            'child_of' => 0,
                            'parent' => $category_id,
                            'show_count' => 0,
                            'pad_counts' => 0,
                            'hierarchical' => 1,
                            'title_li' => '',
                            'hide_empty' => 0
                        );

                        $sub_cats = get_categories($args);

                        ?>

						<li class="has-subcat">
							<a href="<?= get_category_link($category_id) ?>"><?= $cat->name ?></a><?= $sub_cats ? '<i class="fas fa-chevron-right"></i>' : '' ?>
                            <?php
                            if ($sub_cats) {
                            ?>
								<ul class="header-subcat_mobile close">
									<li class="mobile-menu-top">
										<a href="javascript:;" class="mobile-menu-top_subcat">
											<i class="fas fa-chevron-left"></i>
                                            <?= $cat->name ?>
										</a>
									</li>

                                    <?php getMobCategories($category_id); ?>
								</ul>
							<?php
                            }
                            ?>
						</li>

                        <?php
                    }

                    function getMobCategories($category_id)
                    {
                        $args = array(
                            'taxonomy' => 'product_cat',
                            'child_of' => 0,
                            'parent' => $category_id,
                            'show_count' => 0,
                            'pad_counts' => 0,
                            'hierarchical' => 1,
                            'title_li' => '',
                            'hide_empty' => 0
                        );

                        $sub_cats = get_categories($args);

                        foreach ($sub_cats as $cat) {
                            getMobSubcategories($cat);
                        }
                    }

                    ?>

                    <?php
                    $args = array(
                        'taxonomy' => 'product_cat',
                        'show_count' => 0,
                        'pad_counts' => 0,
                        'hierarchical' => 1,
                        'title_li' => '',
                        'hide_empty' => 0
                    );

                    $all_categories = get_categories($args);

                    ?>

					<li class="mobile-menu-top">
						<a href="javascript:;" class="mobile-collection">
							<i class="mobile-collection-arrow fas fa-chevron-left"></i>
							Boutique</a>
					</li>

					<?php

                    foreach ($all_categories as $cat) {
                        if ($cat->category_parent == 0) {
                            getMobSubcategories($cat);
                        }
                    }
                    ?>
				</ul>
				<li class="mobile-menu-links">
					<a href="/about" class=""
					   title="À propos">
						À propos
						<i class=" fas fa-chevron-right"></i>
					</a>
				</li>
				<li class="mobile-menu-links">
					<a href="/contacts" class=""
					   title="Contact">
						Contact
						<i class=" fas fa-chevron-right"></i>
					</a>
				</li>
			</ul>
		</nav>

		<nav class="desktop-nav">
			<ul>
				<li>
					<a href="/" class="<?= get_the_title() == 'Homepage' ? 'active' : '' ?>" title="Accueil">
						Accueil
					</a>
				</li>
				<li id="collection-link" class="collection">
					<a href="/shop" class="<?= get_the_title() == 'New Product' ? 'active' : '' ?>"" title="Boutique">
						Boutique
					</a>
					<ul class="header-category">
                        <?php
                        function getSubcategories($cat)
                        {
                            $category_id = $cat->term_id;

                            $args = array(
                                'taxonomy' => 'product_cat',
                                'child_of' => 0,
                                'parent' => $category_id,
                                'show_count' => 0,
                                'pad_counts' => 0,
                                'hierarchical' => 1,
                                'title_li' => '',
                                'hide_empty' => 0
                            );

                            $sub_cats = get_categories($args);

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

                        function getCategories($category_id)
                        {
                            $args = array(
                                'taxonomy' => 'product_cat',
                                'child_of' => 0,
                                'parent' => $category_id,
                                'show_count' => 0,
                                'pad_counts' => 0,
                                'hierarchical' => 1,
                                'title_li' => '',
                                'hide_empty' => 0
                            );

                            $sub_cats = get_categories($args);

                            foreach ($sub_cats as $cat) {
                                getSubcategories($cat);
                            }
                        }

                        ?>

                        <?php
                        $args = array(
                            'taxonomy' => 'product_cat',
                            'show_count' => 0,
                            'pad_counts' => 0,
                            'hierarchical' => 1,
                            'title_li' => '',
                            'hide_empty' => 0
                        );

                        $all_categories = get_categories($args);

                        foreach ($all_categories as $cat) {
                            if ($cat->category_parent == 0) {
                                getSubcategories($cat);
                            }
                        }
                        ?>
					</ul>
				</li>
				<li>
					<a href="/about" class="<?= get_the_title() == 'About' ? 'active' : '' ?>" title="À propos">
						À propos
					</a>
				</li>
				<li>
					<a href="/contacts" class="<?= get_the_title() == 'Contacts' ? 'active' : '' ?>" title="Contact">
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
					<form action="/" method="get" role="search" id="search-form">
						<input type="text" name="post_type" value="product" hidden>
						<label class="sr-only" for="searchInputMobile">Search</label>
						<input class="header-v3__nav-form-control form-control width-100% search-input-box" value=""
						       autocomplete="off" type="search" name="s" onsearch="searchFunction()"
						       id="searchInputMobile" placeholder="Chercher">
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
            <?php if (is_user_logged_in()): ?>
				<a class="login-popup-link" href="/my-account"><i class="fas fa-user"></i></a>
            <?php else: ?>
	            <li class="login-popup-mobile">
		            <a class="login-popup-link" href="javascript:;"><i class="fas fa-user"></i></a>
		            <div class="login-popup popup-is-hidden popup">
			            <ul class="login-popup-container open">
				            <li class="popup-logo">
					            <img src="<?= get_stylesheet_directory_uri(); ?>/assets/img/logo.svg"
					                 alt="Boulet">
				            </li>
				            <li class="popup-title">
					            <h1 class="bold title-accent-color">S'identifier</h1>
					            <span class="content-secondary-color">Connectez-vous à votre compte</span>
				            </li>
				            <li class="popup-login-form">
					            <form class="woocommerce-form woocommerce-form-login login" method="post">

                                    <?php do_action('woocommerce_login_form_start'); ?>

						            <div class="grid center input-box">

									<span class="input-group">
                                        <i class="fas fa-user"></i>
                          	            <input class="input input-icon woocommerce-Input woocommerce-Input--text input-text"
                                               type="text" id="username" name="username" placeholder="Courriel" autocomplete="username"
                                               value="<?php echo (!empty($_POST['username'])) ? esc_attr(wp_unslash($_POST['username'])) : ''; ?>"/><?php // @codingStandardsIgnoreLine ?>
                                    </span>

							            <span class="input-group">
                                        <i class="fas fa-lock"></i>
                          	            <input class="input input-icon woocommerce-Input woocommerce-Input--text input-text"
                                               type="password" id="password" name="password" placeholder="Mot de passe" autocomplete="current-password">
                                    </span>

                                        <?php do_action('woocommerce_login_form'); ?>

							            <a href="<?php echo esc_url(wp_lostpassword_url()); ?>" class="forgot">Mot de passe oublié?</a>


							            <p class="form-row">
                                            <?php wp_nonce_field('woocommerce-login', 'woocommerce-login-nonce'); ?>
							            </p>

							            <button type="submit" class="button btn-pink roboto woocommerce-button button woocommerce-form-login__submit" name="login" value="<?php esc_attr_e('Log in', 'woocommerce'); ?>">S&#039;identifier</button>

                                        <?php do_action('woocommerce_login_form_end'); ?>
						            </div>
					            </form>

					            <div class="popup-bottom">
						            <span class="content-secondary-color">OU Connectez-vous avec</span>
						            <div class="social-group">
							            <a href="<?= get_home_url() ?>/wp-login.php?loginSocial=google" data-plugin="nsl" data-action="connect"
							               data-redirect="<?= get_permalink( wc_get_page_id( 'myaccount' ) ); ?>" data-provider="google" data-popupwidth="600" data-popupheight="600"
							               class="button btn-transparant roboto google">
								            <i class="fab fa-google"></i> Google
							            </a>
							            <a href="<?= get_home_url() ?>/wp-login.php?loginSocial=facebook"
							               data-plugin="nsl" data-action="connect" data-redirect="<?= get_permalink( wc_get_page_id( 'myaccount' ) ); ?>" data-provider="facebook" data-popupwidth="475"
							               data-popupheight="175" class="button btn-transparant roboto">
								            <i class="fab fa-facebook-f"></i> Facebook
							            </a>
						            </div>
						            <a class="button btn-transparant btn-pink-border roboto registration"
						               href="javascript:;" tabindex=5>S&#039;inscrire</a>
					            </div>
				            </li>
			            </ul>
			            <ul class="registration-popup-container close">
				            <li class="popup-logo">
					            <img src="<?= get_stylesheet_directory_uri(); ?>/assets/img/logo.svg"
					                 alt="Boulet">
				            </li>
				            <li class="popup-title">
					            <h1 class="bold title-accent-color">S'inscrire</h1>
					            <span class="content-secondary-color">Inscrivez-vous à votre compte</span>
				            </li>
				            <li class="popup-registration-form">
					            <form method="post" id="form-register" action="account/registerPost/">
						            <div class="grid center input-box">
							            <input type="text" class="input woocommerce-Input woocommerce-Input--text input-text" name="username" id="reg_username" placeholder="Prénom" autocomplete="username" value="<?php echo ( ! empty( $_POST['username'] ) ) ? esc_attr( wp_unslash( $_POST['username'] ) ) : ''; ?>" /><?php // @codingStandardsIgnoreLine ?>
							            <input type="email" class="input woocommerce-Input woocommerce-Input--text input-text" name="email" placeholder="Email" id="reg_email" autocomplete="email" value="<?php echo ( ! empty( $_POST['email'] ) ) ? esc_attr( wp_unslash( $_POST['email'] ) ) : ''; ?>" /><?php // @codingStandardsIgnoreLine ?>
							            <input type="password" class="input woocommerce-Input woocommerce-Input--text input-text" name="password" placeholder="Mot de passe" id="reg_password" autocomplete="new-password" />

                                        <?php wp_nonce_field( 'woocommerce-register', 'woocommerce-register-nonce' ); ?>
							            <button type="submit" class="button btn-pink roboto woocommerce-Button woocommerce-button button woocommerce-form-register__submit" name="register" value="<?php esc_attr_e( 'Register', 'woocommerce' ); ?>">Commencer</button>
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
            <?php endif; ?>
		</ul>
	</div>
</header>
