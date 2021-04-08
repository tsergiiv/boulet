<?php
/**
 * Related Products
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/single-product/related.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see         https://docs.woocommerce.com/document/template-structure/
 * @package     WooCommerce\Templates
 * @version     3.9.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( $related_products ) : ?>
    <section>
        <div class="container-custom">
            <div class="usp-wrapper">
                <ul class="adv-icons">

                    <li>
                        <img src="https://woocommerce.takasho.work/wp-content/themes/storefront-child/assets/img/new/delivery.svg">
                        <p>
                            Livraison gratuite
                            <span>Livraison gratuite sur toute commande</span>
                        </p>
                    </li>
                    <li>
                        <img src="https://woocommerce.takasho.work/wp-content/themes/storefront-child/assets/img/new/assistance.svg">
                        <p>
                            Livraison partout au QC, CAN
                            <span>Assistance 24 heures sur 24</span>
                        </p>
                    </li>
                    <li>
                        <img src="https://woocommerce.takasho.work/wp-content/themes/storefront-child/assets/img/new/money-back.svg">
                        <p>
                            Encouragez local
                            <span>30 jours pour un retour gratuitt</span>
                        </p>
                    </li>
                    <li>
                        <img src="https://woocommerce.takasho.work/wp-content/themes/storefront-child/assets/img/new/payment.svg">
                        <p>
                            Pur délice
                            <span>Nous assurons un paiement sécurisé</span>
                        </p>
                    </li>

                </ul>
            </div>
        </div>
    </section>
	<section class="featured-product-section">
        <div class="container-custom">
            <?php
            $heading = apply_filters( 'woocommerce_product_related_products_heading', __( 'Related products', 'woocommerce' ) );

            if ( $heading ) :
                ?>
                <h2 class="bold featured-products-title title-accent-color">Produits vedettes</h2>
                <hr class="sm-line">
            <?php endif; ?>

            <?php woocommerce_product_loop_start(); ?>

                <?php foreach ( $related_products as $related_product ) : ?>

                        <?php
                        $post_object = get_post( $related_product->get_id() );

                        setup_postdata( $GLOBALS['post'] =& $post_object ); // phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited, Squiz.PHP.DisallowMultipleAssignments.Found

                        wc_get_template_part( 'content', 'product' );
                        ?>

                <?php endforeach; ?>

            <?php woocommerce_product_loop_end(); ?>
        </div>
	</section>
	<?php
endif;

wp_reset_postdata();
