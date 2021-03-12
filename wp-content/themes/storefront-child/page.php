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
                <?php

                $posts = get_posts(array(
                    'post_type' => 'info',
                ));

                foreach ($posts as $post) {
                    setup_postdata($post);

                    ?>

	                <li>
		                <img src="/wp-content/themes/woocommerce/assets/img/icon-1.svg">
		                <p><?= the_field('advantage_1') ?></p>
	                </li>
	                <li>
		                <img src="/wp-content/themes/woocommerce/assets/img/icon-2.svg">
		                <p><?= the_field('advantage_2') ?></p>
	                </li>
	                <li>
		                <img src="/wp-content/themes/woocommerce/assets/img/icon-3.svg">
		                <p><?= the_field('advantage_3') ?></p>
	                </li>
	                <li>
		                <img src="/wp-content/themes/woocommerce/assets/img/icon-4.svg">
		                <p><?= the_field('advantage_4') ?></p>
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
		            <img src="/wp-content/themes/woocommerce/assets/img/about_us_banner.jpg">
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
        <div class="usp-wrapper usp-style-3 icons-wrapper">
            <ul>
                <?php

                $posts = get_posts(array(
                    'post_type' => 'info',
                ));

                foreach ($posts as $post) {
                    setup_postdata($post);

                    ?>

	                <li class="usp-border-color">
		                <img src="/wp-content/themes/woocommerce/assets/img/icon-l-1.svg">
		                <p><?= the_field('advantage_5') ?></p>
	                </li>
	                <li class="usp-border-color">
		                <img src="/wp-content/themes/woocommerce/assets/img/icon-l-2.svg">
		                <p><?= the_field('advantage_6') ?></p>
	                </li>
	                <li class="usp-border-color">
		                <img src="/wp-content/themes/woocommerce/assets/img/icon-l-3.svg">
		                <p><?= the_field('advantage_7') ?></p>
	                </li>
	                <li class="usp-border-color">
		                <img src="/wp-content/themes/woocommerce/assets/img/icon-l-4.svg">
		                <p><?= the_field('advantage_8') ?></p>
	                </li>

                    <?php
                }

                wp_reset_postdata();
                ?>
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
        <?php
        $posts = get_posts(array(
            'post_type' => 'instagram',
	        'order'     => 'asc'
        ));

        foreach ($posts as $post) {
            setup_postdata($post);

            ?>

	        <img src="<?= the_field('photo') ?>">

            <?php
        }

        wp_reset_postdata();
        ?>
    </div>
</section>

<?php get_footer(); ?>
