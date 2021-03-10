<?php
/**
 * Simple product add to cart
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/single-product/add-to-cart/simple.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 3.4.0
 */

defined( 'ABSPATH' ) || exit;

global $product;

if ( ! $product->is_purchasable() ) {
	return;
}

echo wc_get_stock_html( $product ); // WPCS: XSS ok.

if ( $product->is_in_stock() ) : ?>

	<?php do_action( 'woocommerce_before_add_to_cart_form' ); ?>

	<form class="cart" action="<?php echo esc_url( apply_filters( 'woocommerce_add_to_cart_form_action', $product->get_permalink() ) ); ?>" method="post" enctype='multipart/form-data'>

        <?php do_action( 'woocommerce_before_add_to_cart_button' ); ?>

        <div class="qty-custom">
            <label class="form-label margin-bottom-sm block" for="qtyInput">Qté:</label>

            <div class="number-input number-input--v2 js-number-input inline-block">
                <?php
                do_action( 'woocommerce_before_add_to_cart_quantity' );

                woocommerce_quantity_input(
                    array(
                        'min_value'   => apply_filters( 'woocommerce_quantity_input_min', $product->get_min_purchase_quantity(), $product ),
                        'max_value'   => apply_filters( 'woocommerce_quantity_input_max', $product->get_max_purchase_quantity(), $product ),
                        'input_value' => isset( $_POST['quantity'] ) ? wc_stock_amount( wp_unslash( $_POST['quantity'] ) ) : $product->get_min_purchase_quantity(), // WPCS: CSRF ok, input var ok.
                    )
                );

                do_action( 'woocommerce_after_add_to_cart_quantity' );
                ?>
                <a href="javascript:;" class="qty-change qty-plus" aria-label="Increase Quantity">
                    <svg class="icon" viewBox="0 0 16 16" aria-hidden="true"><g class="qty-button"><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="8.5" y1="1.5" x2="8.5" y2="15.5"></line> <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="1.5" y1="8.5" x2="15.5" y2="8.5"></line> </g></svg>
                </a>
                <a href="javascript:;" class="qty-change qty-minus" aria-label="Decrease Quantity">
                    <svg class="icon" viewBox="0 0 16 16" aria-hidden="true"><g class="qty-button"><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="1.5" y1="8.5" x2="15.5" y2="8.5"></line> </g></svg>
                </a>
            </div>
        </div>

        <div class="margin-bottom-md">
            <div class="product-buttons">
                <a class="button btn-secondary btn--quick-checkout js-quick-checkout-trigger" type="submit" data-checkout-url="/checkout/" data-clear-url="/">Acheter maintenant</a>
                <button type="submit" name="add-to-cart" value="<?php echo esc_attr( $product->get_id() ); ?>" class="cartpage-btn add-tocart-button button btn-primary"><i class="fas fa-shopping-cart"></i>Ajouter au panier</button>
                <a class="product-wishlist-button" href="<?php echo esc_attr( $product->get_id() ); ?>" >
                    <i class="far fa-heart"></i>
                    <i class="fas fa-heart"></i>
                </a>
            </div>
        </div>
		<?php do_action( 'woocommerce_after_add_to_cart_button' ); ?>
	</form>

	<?php do_action( 'woocommerce_after_add_to_cart_form' ); ?>

<?php endif; ?>
