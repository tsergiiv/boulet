<?php
/**
 * Single variation cart button
 *
 * @see https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 3.4.0
 */

defined( 'ABSPATH' ) || exit;

global $product;
?>

	<?php do_action( 'woocommerce_before_add_to_cart_button' ); ?>

        <div class="qty-custom variations_button">
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

        <div class="product-buttons">
			<button type="submit" class="single_add_to_cart_button button alt cartpage-btn add-tocart-button button btn-primary button product_type_simple add_to_cart_button ajax_add_to_cart"><i class="fas fa-shopping-cart"></i> <?php echo esc_html( $product->single_add_to_cart_text() ); ?></button>
        </div>
		<?php do_action( 'woocommerce_after_add_to_cart_button' ); ?>

	<input type="hidden" name="add-to-cart" value="<?php echo absint( $product->get_id() ); ?>" />
	<input type="hidden" name="product_id" value="<?php echo absint( $product->get_id() ); ?>" />
	<input type="hidden" name="variation_id" class="variation_id" value="0" />

