<?php get_header('other'); ?>

<section>
    <div class="owl-carousel owl-hero  owl-hero-autoplay_none  ">
        <?php
        $posts = get_posts(array(
            'post_type' => 'slide',
        ));

        foreach ($posts as $post) {
            setup_postdata($post);

            if (get_field('visible')):
                ?>

                <div class="item">
                    <div class="hero-img" style="background-image: url(<?= the_field('image') ?>);  ">
                        <div class="container-custom  ">
                            <h1 class="bold">
                                <?= the_field('title') ?>
                            </h1>
                            <h2 class="bold">
                                <?= the_field('subtitle') ?>
                            </h2>
                            <a href="<?= the_field('button_link') ?>" class="roboto button btn-primary btn-mobile">
                                <?= the_field('button_text') ?>
                            </a>
                        </div>
                    </div>
                </div>

            <?php
            endif;
        }

        wp_reset_postdata();
        ?>
    </div>
</section>


<section>
    <div class="container-custom">
        <div class="usp-wrapper">
            <ul>
                <li>
                    <img src="/wp-content/themes/woocommerce/assets/img/icon-1.svg">
                    <p>Livraison gratuite</p>
                </li>
                <li>
                    <img src="/wp-content/themes/woocommerce/assets/img/icon-2.svg">
                    <p>Livraison partout au QC, CAN</p>
                </li>
                <li>
                    <img src="/wp-content/themes/woocommerce/assets/img/icon-3.svg">
                    <p>Encouragez local</p>
                </li>
                <li>
                    <img src="/wp-content/themes/woocommerce/assets/img/icon-4.svg">
                    <p>Pur délice</p>
                </li>
            </ul>
        </div>
    </div>
</section>
<section>
    <div class="container-custom">
        <h1 class="bold featured-products-title title-accent-color">
            Produits vedettes
        </h1>
        <hr class="sm-line">
        <div class="custom-item owl-carousel owl-products">
            <div class="item">

                <div class="prod-card" data-vid="59971786">


                    <div class="prod-card__img-wrapper">
                        <a href="/baton-de-rouge-a-levres-copy.html" class="prod-card__img-link" aria-label="Brand 3 Eye-liner">
                            <figure class="media-wrapper media-wrapper--1:1 bg-contrast-lower">
                                <img src="/wp-content/themes/woocommerce/assets/img/image-1.jpg">
                            </figure>
                        </a>
                    </div>

                    <div class="padding-sm text-left">
                        <h1 class="text-base">
                            <a href="/baton-de-rouge-a-levres-copy.html" class="bold product-card__title">
                                Caramel à l'érable
                            </a>
                        </h1>

                        <div class="custom-price margin-bottom-xs">
                            <ins class="content-secondary-color prod-card__price">€52.00</ins>
                        </div>
                        <div class="text-right products-cart">
                            <form action="cart/add/59971786/" data-action="cart/add/59971786/" method="post">
                                <a class="cartpage-btn product-cart-btn-mobile" href="javascript:;" onclick="$(this).parent().submit();">
                                    <i class="fas fa-shopping-cart"></i>
                                    <span class="product-cart-btn-title-mobile">Ajouter au panier</span>
                                </a>
                            </form>
                            <a class="product-wishlist-button" href="/account/wishlistAdd/36542669/?variant_id=59971786" >
                                <i class="far fa-heart"></i>
                                <i class="fas fa-heart"></i>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
            <div class="item">



                <div class="prod-card" data-vid="59971789">


                    <div class="prod-card__img-wrapper">
                        <a href="/baton-de-rouge-a-levres-copy-copy.html" class="prod-card__img-link" aria-label="Brand 1 Toner de beauté">
                            <figure class="media-wrapper media-wrapper--1:1 bg-contrast-lower">
                                <img src="/wp-content/themes/woocommerce/assets/img/image-2.jpg">
                            </figure>
                        </a>

                    </div>

                    <div class="padding-sm text-left">
                        <h1 class="text-base">
                            <a href="/baton-de-rouge-a-levres-copy-copy.html" class="bold product-card__title">
                                Suçons
                            </a>
                        </h1>

                        <div class="custom-price margin-bottom-xs">
                            <ins class="content-secondary-color prod-card__price">€52.00</ins>
                        </div>
                        <div class="text-right products-cart">
                            <form action="cart/add/59971789/" data-action="cart/add/59971789/" method="post">
                                <a class="cartpage-btn product-cart-btn-mobile" href="javascript:;" onclick="$(this).parent().submit();">
                                    <i class="fas fa-shopping-cart"></i>
                                    <span class="product-cart-btn-title-mobile">Ajouter au panier</span>
                                </a>
                            </form>
                            <a class="product-wishlist-button" href="/account/wishlistAdd/36542672/?variant_id=59971789" >
                                <i class="far fa-heart"></i>
                                <i class="fas fa-heart"></i>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
            <div class="item">



                <div class="prod-card" data-vid="59971792">


                    <div class="prod-card__img-wrapper">
                        <a href="/toner-de-beaute-copy.html" class="prod-card__img-link" aria-label="Brand 1 Crème fond de teint visage">
                            <figure class="media-wrapper media-wrapper--1:1 bg-contrast-lower">
                                <img src="/wp-content/themes/woocommerce/assets/img/image-3.jpg">
                            </figure>
                        </a>

                    </div>

                    <div class="padding-sm text-left">
                        <h1 class="text-base">
                            <a href="/toner-de-beaute-copy.html" class="bold product-card__title">
                                Sac de sirop
                            </a>
                        </h1>

                        <div class="custom-price margin-bottom-xs">
                            <ins class="content-secondary-color prod-card__price">€52.00</ins>
                        </div>
                        <div class="text-right products-cart">
                            <form action="cart/add/59971792/" data-action="cart/add/59971792/" method="post">
                                <a class="cartpage-btn product-cart-btn-mobile" href="javascript:;" onclick="$(this).parent().submit();">
                                    <i class="fas fa-shopping-cart"></i>
                                    <span class="product-cart-btn-title-mobile">Ajouter au panier</span>
                                </a>
                            </form>
                            <a class="product-wishlist-button" href="/account/wishlistAdd/36542675/?variant_id=59971792" >
                                <i class="far fa-heart"></i>
                                <i class="fas fa-heart"></i>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
            <div class="item">



                <div class="prod-card" data-vid="59971792">


                    <div class="prod-card__img-wrapper">
                        <a href="/toner-de-beaute-copy.html" class="prod-card__img-link" aria-label="Brand 1 Crème fond de teint visage">
                            <figure class="media-wrapper media-wrapper--1:1 bg-contrast-lower">
                                <img src="/wp-content/themes/woocommerce/assets/img/image-3.jpg">
                            </figure>
                        </a>

                    </div>

                    <div class="padding-sm text-left">
                        <h1 class="text-base">
                            <a href="/toner-de-beaute-copy.html" class="bold product-card__title">
                                Sac de sirop
                            </a>
                        </h1>

                        <div class="custom-price margin-bottom-xs">
                            <ins class="content-secondary-color prod-card__price">€52.00</ins>
                        </div>
                        <div class="text-right products-cart">
                            <form action="cart/add/59971792/" data-action="cart/add/59971792/" method="post">
                                <a class="cartpage-btn product-cart-btn-mobile" href="javascript:;" onclick="$(this).parent().submit();">
                                    <i class="fas fa-shopping-cart"></i>
                                    <span class="product-cart-btn-title-mobile">Ajouter au panier</span>
                                </a>
                            </form>
                            <a class="product-wishlist-button" href="/account/wishlistAdd/36542675/?variant_id=59971792" >
                                <i class="far fa-heart"></i>
                                <i class="fas fa-heart"></i>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</section>
<section>
    <div class="container-custom">
        <h1 class="bold newest-products-title title-accent-color">Boîtes</h1>
        <hr class="sm-line">
        <div class="custom-item owl-carousel owl-products">
            <?php

            $posts = get_posts(array(
                'post_type' => 'product',
            ));

            foreach ($posts as $post) {
                setup_postdata($post);

                wc_get_template_part( 'content', 'product' );
                ?>

<!--                <div class="item">-->
<!--                    <div class="prod-card" data-vid="60978761">-->
<!--                        <div class="prod-card__img-wrapper">-->
<!--                            <a href="--><?//= $product->get_permalink() ?><!--" class="prod-card__img-link" aria-label="Brand 2 Bâton de rouge à lèvres 2 - Copy">-->
<!--                                <figure class="media-wrapper media-wrapper--1:1 bg-contrast-lower">-->
<!--                                    --><?//= $product->get_image() ?>
<!--                                </figure>-->
<!--                            </a>-->
<!--                        </div>-->
<!---->
<!--                        <div class="padding-sm text-left">-->
<!--                            <h1 class="text-base">-->
<!--                                <a href="/baton-de-rouge-a-levres-2-copy.html" class="bold product-card__title">-->
<!--                                    --><?//= $product->get_title() ?>
<!--                                </a>-->
<!--                            </h1>-->
<!---->
<!--                            <div class="custom-price margin-bottom-xs">-->
<!--                                <ins class="content-secondary-color prod-card__price">--><?//= $product->get_price_html() ?><!--</ins>-->
<!--                            </div>-->
<!--                            <div class="text-right products-cart">-->
<!--                                <form action="cart/add/60978761/" data-action="cart/add/60978761/" method="post">-->
<!--                                    <a class="cartpage-btn product-cart-btn-mobile" href="javascript:;" onclick="$(this).parent().submit();">-->
<!--                                        <i class="fas fa-shopping-cart"></i>-->
<!--                                        <span class="product-cart-btn-title-mobile">Ajouter au panier</span>-->
<!--                                    </a>-->
<!--                                </form>-->
<!--                                <a class="product-wishlist-button" href="/account/wishlistAdd/37147346/?variant_id=60978761" >-->
<!--                                    <i class="far fa-heart"></i>-->
<!--                                    <i class="fas fa-heart"></i>-->
<!--                                </a>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->

                <?php
            }

            wp_reset_postdata();
            ?>
        </div>
    </div>
</section>
<section>
    <div class="container-custom">
        <div class="about-us-section">
            <h1>Notre érablière,<br><span class="bold title-accent-color">Une histoire de famille</span></h1>
            <div class="about-banner">
                <img src="/wp-content/themes/woocommerce/assets/img/about_us_banner.jpg">
            </div>
            <div class="about-us-content">
                <h1>Nous croyons en la<br><span class="bold title-accent-color">Produits naturels</span></h1>
                <p>
                    Notre érablière sera toujours une réussite familiale et notre endroit de rassemblement préféré, c’est pourquoi nous souhaitons vous offrir nos petits délices sucrés à la maison pour que vous aussi à votre tour puissiez vous rassembler et avoir autant de plaisir que nous à les déguster.
                </p>
                <a class="button btn-secondary" href="/service/about/">À propos de nous</a>
            </div>
        </div>
    </div>
</section>
<section>
    <div class="container-custom">
        <div class="usp-wrapper usp-style-3 icons-wrapper">
            <ul>
                <li class="usp-border-color">
                    <img src="/wp-content/themes/woocommerce/assets/img/icon-l-1.svg">
                    <p>Qualité supérieur</p>
                </li>
                <li class="usp-border-color">
                    <img src="/wp-content/themes/woocommerce/assets/img/icon-l-2.svg">
                    <p>Goût distinctif</p>
                </li>
                <li class="usp-border-color">
                    <img src="/wp-content/themes/woocommerce/assets/img/icon-l-3.svg">
                    <p>Producteurs passionnés</p>
                </li>
                <li class="usp-border-color">
                    <img src="/wp-content/themes/woocommerce/assets/img/icon-l-4.svg">
                    <p>Entreprise d’ici</p>
                </li>
            </ul>
        </div>
    </div>
</section>
<section class="instagram-section">
    <h1 class="bold brands-title title-accent-color">
        Suivez-nous sur Instagram!
    </h1>
    <hr class="sm-line">
    <div class="instagram-gallery">
        <img src="/wp-content/themes/woocommerce/assets/img/insta-1.jpg">
        <img src="/wp-content/themes/woocommerce/assets/img/insta-2.jpg">
        <img src="/wp-content/themes/woocommerce/assets/img/insta-3.jpg">
        <img src="/wp-content/themes/woocommerce/assets/img/insta-4.jpg">
    </div>
</section>

<?php get_footer(); ?>
