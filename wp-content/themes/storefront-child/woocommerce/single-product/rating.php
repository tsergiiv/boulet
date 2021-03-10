<?php
/**
 * Single Product Rating
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/single-product/rating.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 3.6.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

global $product;

if ( ! wc_review_ratings_enabled() ) {
	return;
}

$rating_count = $product->get_rating_count();
$review_count = $product->get_review_count();
$average      = $product->get_average_rating();

if ( $rating_count > 0 ) : ?>

    <div class="rating flex items-center">
        <?php //echo wc_get_rating_html( $average, $rating_count ); // WPCS: XSS ok. ?>
        <?php if ( comments_open() ) : ?>
            <?php //phpcs:disable ?>
            <div class="rate-stars flex rate-<?php echo $review_count; ?>">
                <i class="fa fa-star-o"></i>
                <i class="fa fa-star-o"></i>
                <i class="fa fa-star-o"></i>
                <i class="fa fa-star-o"></i>
                <i class="fa fa-star-o"></i>
            </div>
            <a href="#proTabPanelReviews" class="rating__link rating-link_scroll" rel="nofollow"><?php printf( '<span class="reviews-title">' . esc_html( $review_count ) . ' Avis clients</span>' ); ?></a>
            <?php // phpcs:enable ?>
        <?php endif ?>
    </div>

<?php endif; ?>
