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
            <ul class="adv-icons">
                <?php

                $posts = get_posts(array(
                    'post_type' => 'info',
                ));

                foreach ($posts as $post) {
                    setup_postdata($post);

                    ?>

	                <li>
		                <img src="<?= get_stylesheet_directory_uri(); ?>/assets/img/new/delivery.svg">
		                <p>
                            <?= the_field('advantage_1') ?>
                            <span><?= the_field('text_1') ?></span>
                        </p>
	                </li>
	                <li>
		                <img src="<?= get_stylesheet_directory_uri(); ?>/assets/img/new/assistance.svg">
		                <p>
                            <?= the_field('advantage_2') ?>
                            <span><?= the_field('text_2') ?></span>
                        </p>
	                </li>
	                <li>
		                <img src="<?= get_stylesheet_directory_uri(); ?>/assets/img/new/money-back.svg">
		                <p>
                            <?= the_field('advantage_3') ?>
                            <span><?= the_field('text_3') ?>t</span>
                        </p>
	                </li>
	                <li>
		                <img src="<?= get_stylesheet_directory_uri(); ?>/assets/img/new/payment.svg">
		                <p>
                            <?= the_field('advantage_4') ?>
                            <span><?= the_field('text_4') ?></span>
                        </p>
	                </li>

                    <?php
                }

                wp_reset_postdata();
                ?>
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
            <?php

            $args = array(
                'post_type' => 'product',
                'tax_query' => array(
                    array(
                        'taxonomy' => 'product_visibility',
                        'field'    => 'name',
                        'terms'    => 'featured',
                    ),
                ),
            );

            $loop = new WP_Query( $args );
            while ( $loop->have_posts() ) {
                $loop->the_post();
                global $product;

                wc_get_template_part( 'content', 'product' );
            }
            wp_reset_postdata();

            ?>
        </div>
    </div>
</section>
<section>
    <div class="container-custom">
        <h1 class="bold newest-products-title title-accent-color">Boîtes</h1>
        <hr class="sm-line">
        <div class="custom-item owl-carousel owl-products">
            <?php

            $args = array(
                'post_type' => 'product',
                'tax_query' => array(
                    array(
                        'taxonomy' => 'product_cat',
                        'field'    => 'slug',
                        'terms'    => 'boites',
                    ),
                ),
            );

            $loop = new WP_Query( $args );
            while ( $loop->have_posts() ) {
                $loop->the_post();
                global $product;

                wc_get_template_part( 'content', 'product' );
            }
            wp_reset_postdata();

            ?>
        </div>
    </div>
</section>
<section>
    <div class="container-custom">
        <div class="about-us-section">
            <?php

            $posts = get_posts(array(
                'post_type' => 'info',
            ));

            foreach ($posts as $post) {
                setup_postdata($post);

                ?>

	            <h1>Notre érablière,<br><span class="bold title-accent-color">Une histoire de famille</span></h1>
	            <div class="about-banner">
		            <img src="/wp-content/themes/storefront-child/assets/img/new/quality-product.jpg">
	            </div>
	            <div class="about-us-content">
		            <h1><?= the_field('title') ?><br><span class="bold title-accent-color"><?= the_field('subtitle') ?></span></h1>
		            <p>
                        <?= the_field('text') ?>
		            </p>
		            <a class="button btn-secondary" href="<?= the_field('button_link') ?>"><?= the_field('button_text') ?></a>
	            </div>

                <?php
            }

            wp_reset_postdata();
            ?>
        </div>
    </div>
</section>
<section>
    <div class="container-custom">
        <h1 class="bold newest-products-title title-accent-color">Nos spécialités</h1>
        <hr class="sm-line">
        <div class="home-categories">
            <div class="home-category" style="background: url(/wp-content/themes/storefront-child/assets/img/new/category1.jpg) center / cover no-repeat">
                <div class="home-category__title">
                    Sirop d'érable
                </div>
            </div>
            <div class="home-category" style="background: url(/wp-content/themes/storefront-child/assets/img/new/category2.jpg) center / cover no-repeat">
                <div class="home-category__title">
                    Cève de boulot
                </div>
            </div>
            <div class="home-category" style="background: url(/wp-content/themes/storefront-child/assets/img/new/category3.jpg) center / cover no-repeat">
                <div class="home-category__title">
                    Repas à emporter
                </div>
            </div>
        </div>
    </div>
</section>
<section class="instagram-section">
    <h1 class="bold brands-title title-accent-color">
        Suivez-nous sur les réseaux sociaux!
    </h1>
    <hr class="sm-line">
    <div class="social-gallery">
        <?php
        $posts = get_posts(array(
            'post_type' => 'socials',
        ));

        foreach ($posts as $post) {
            setup_postdata($post);
            ?>

            <?php if (get_field('facebook')): ?>
		        <a href="<?= the_field('facebook') ?>"><img src="<?= get_stylesheet_directory_uri(); ?>/assets/img/new/facebook.svg"></a>
            <?php endif; ?>

            <?php if (get_field('instagram')): ?>
		        <a href="<?= the_field('instagram') ?>"><img src="<?= get_stylesheet_directory_uri(); ?>/assets/img/new/instagram.svg"></a>
            <?php endif; ?>

            <?php if (get_field('tik_tok')): ?>
		        <a href="<?= the_field('tik_tok') ?>"><img src="<?= get_stylesheet_directory_uri(); ?>/assets/img/new/tiktok.svg"></a>
            <?php endif; ?>

            <?php
        }

        wp_reset_postdata();
        ?>
    </div>
</section>

<?php get_footer(); ?>
