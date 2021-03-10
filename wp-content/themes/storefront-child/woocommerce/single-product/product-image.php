<?php
/**
 * Single Product Image
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/single-product/product-image.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 3.5.1
 */

defined( 'ABSPATH' ) || exit;

// Note: `wc_get_gallery_image_html` was added in WC 3.3.2 and did not exist prior. This check protects against theme overrides being used on older versions of WC.
if ( ! function_exists( 'wc_get_gallery_image_html' ) ) {
	return;
}

global $product;

$columns           = apply_filters( 'woocommerce_product_thumbnails_columns', 2 );
$post_thumbnail_id = $product->get_image_id();
$wrapper_classes   = apply_filters(
	'woocommerce_single_product_image_gallery_classes',
	array(
		'woocommerce-product-gallery',
		'woocommerce-product-gallery--' . ( $product->get_image_id() ? 'with-images' : 'without-images' ),
		'woocommerce-product-gallery--columns-' . absint( $columns ),
		'images',
	)
);
?>
<div class="product-gallery">
    <div class="thumbslide js-thumbslide">
        <div class="slideshow js-product-v2__slideshow slideshow--transition-slide slideshow--ratio-1:1" data-control="hover">
            <p class="sr-only">Product image slideshow Items</p>
            <ul class="slideshow__content">
                <li class="slideshow__item bg js-slideshow__item slideshow__item" data-thumb="/wp-content/themes/woocommerce/assets/img/product-1.jpg" id="item-2">
                    <figure class="position-absolute height-100% width-100% top-0 left-0" data-scale="1.3">
                        <div class="img-mag height-100%">
                            <img class="img-mag__asset" src="/wp-content/themes/woocommerce/assets/img/product-1.jpg" alt="Brand 3 Bâton de rouge à lèvres - Copy">
                        </div>
                    </figure>
                </li>
                <li class="slideshow__item bg js-slideshow__item slideshow__item" data-thumb="/wp-content/themes/woocommerce/assets/img/product-1.jpg" id="item-3">
                    <figure class="position-absolute height-100% width-100% top-0 left-0" data-scale="1.3">
                        <div class="img-mag height-100%">
                            <img class="img-mag__asset" src="/wp-content/themes/woocommerce/assets/img/product-1.jpg" alt="Brand 3 Bâton de rouge à lèvres - Copy">
                        </div>
                    </figure>
                </li>
                <li class="slideshow__item bg js-slideshow__item slideshow__item" data-thumb="/wp-content/themes/woocommerce/assets/img/product-1.jpg" id="item-4">
                    <figure class="position-absolute height-100% width-100% top-0 left-0" data-scale="1.3">
                        <div class="img-mag height-100%">
                            <img class="img-mag__asset" src="/wp-content/themes/woocommerce/assets/img/product-1.jpg" alt="Brand 3 Bâton de rouge à lèvres - Copy">
                        </div>
                    </figure>
                </li>
                <li class="slideshow__item bg js-slideshow__item slideshow__item" data-thumb="/wp-content/themes/woocommerce/assets/img/product-1.jpg" id="item-5">
                    <figure class="position-absolute height-100% width-100% top-0 left-0" data-scale="1.3">
                        <div class="img-mag height-100%">
                            <img class="img-mag__asset" src="/wp-content/themes/woocommerce/assets/img/product-1.jpg" alt="Brand 3 Bâton de rouge à lèvres - Copy">
                        </div>
                    </figure>
                </li>
                <li class="slideshow__item bg js-slideshow__item slideshow__item" data-thumb="/wp-content/themes/woocommerce/assets/img/product-1.jpg" id="item-6">
                    <figure class="position-absolute height-100% width-100% top-0 left-0" data-scale="1.3">
                        <div class="img-mag height-100%">
                            <img class="img-mag__asset" src="/wp-content/themes/woocommerce/assets/img/product-1.jpg" alt="Brand 3 Bâton de rouge à lèvres - Copy">
                        </div>
                    </figure>
                </li>
                <li class="slideshow__item bg js-slideshow__item slideshow__item" data-thumb="/wp-content/themes/woocommerce/assets/img/product-1.jpg" id="item-7">
                    <figure class="position-absolute height-100% width-100% top-0 left-0" data-scale="1.3">
                        <div class="img-mag height-100%">
                            <img class="img-mag__asset" src="/wp-content/themes/woocommerce/assets/img/product-1.jpg" alt="Brand 3 Bâton de rouge à lèvres - Copy">
                        </div>
                    </figure>
                </li>
                <li class="slideshow__item bg js-slideshow__item slideshow__item" data-thumb="/wp-content/themes/woocommerce/assets/img/product-1.jpg" id="item-8">
                    <figure class="position-absolute height-100% width-100% top-0 left-0" data-scale="1.3">
                        <div class="img-mag height-100%">
                            <img class="img-mag__asset" src="/wp-content/themes/woocommerce/assets/img/product-1.jpg" alt="Brand 3 Bâton de rouge à lèvres - Copy">
                        </div>
                    </figure>
                </li>
                <li class="slideshow__item bg js-slideshow__item slideshow__item" data-thumb="/wp-content/themes/woocommerce/assets/img/product-1.jpg" id="item-9">
                    <figure class="position-absolute height-100% width-100% top-0 left-0" data-scale="1.3">
                        <div class="img-mag height-100%">
                            <img class="img-mag__asset" src="/wp-content/themes/woocommerce/assets/img/product-1.jpg" alt="Brand 3 Bâton de rouge à lèvres - Copy">
                        </div>
                    </figure>
                </li>
            </ul>
        </div>

        <div class="thumbslide__nav-wrapper relative" aria-hidden="true">
            <a href="javascript:;" class="thumbslide__nav-dot_left"><i class="fas fa-chevron-left"></i></a>
            <a href="javascript:;" class="thumbslide__nav-dot_right"><i class="fas fa-chevron-right"></i></a>
            <nav class="thumbslide__nav" >
                <ol class="thumbslide__nav-list">
                    <!-- this content will be created using JavaScript -->
                </ol>
            </nav>
        </div>
    </div>
</div>
<div class="is-hidden <?php echo esc_attr( implode( ' ', array_map( 'sanitize_html_class', $wrapper_classes ) ) ); ?>" data-columns="<?php echo esc_attr( $columns ); ?>" style="opacity: 0; transition: opacity .25s ease-in-out;">
	<figure class="woocommerce-product-gallery__wrapper">
		<?php
		if ( $product->get_image_id() ) {
			$html = wc_get_gallery_image_html( $post_thumbnail_id, true );
		} else {
			$html  = '<div class="woocommerce-product-gallery__image--placeholder">';
			$html .= sprintf( '<img src="%s" alt="%s" class="wp-post-image" />', esc_url( wc_placeholder_img_src( 'woocommerce_single' ) ), esc_html__( 'Awaiting product image', 'woocommerce' ) );
			$html .= '</div>';
		}

		echo apply_filters( 'woocommerce_single_product_image_thumbnail_html', $html, $post_thumbnail_id ); // phpcs:disable WordPress.XSS.EscapeOutput.OutputNotEscaped

		do_action( 'woocommerce_product_thumbnails' );
		?>
	</figure>
</div>
