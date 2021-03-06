<?php
/**
 * Checkout shipping information form
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/checkout/form-shipping.php.
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
 * @global WC_Checkout $checkout
 */

defined( 'ABSPATH' ) || exit;
?>
	<?php //if ( true === WC()->cart->needs_shipping_address() ) : ?>
<div class="gui-block gui-margin">
        <div class="gui-block-title">
            <strong aria-level="2" role="heading" id="gui-account-information-block-title"><?php esc_html_e( 'Ship to a different address?', 'woocommerce' ); ?></strong>
        </div>
        <div class="gui-block-content">
            <div class="gui-form equaul-fields">

                <?php do_action( 'woocommerce_before_checkout_shipping_form', $checkout ); ?>
                    <?php
                    $fields = $checkout->get_checkout_fields( 'shipping' );
                    foreach ( $fields as $key => $field ) {
                    ?>
                        <div class="gui-field">
                            <?php woocommerce_form_field( $key, $field, $checkout->get_value( $key ) ); ?>
                        </div>
                    <?php
                    }
                    ?>

                <?php do_action( 'woocommerce_after_checkout_shipping_form', $checkout ); ?>

            </div>
        </div>

</div>
	<?php //endif; ?>
<div class="gui-block">
	<?php do_action( 'woocommerce_before_order_notes', $checkout ); ?>

	<?php if ( apply_filters( 'woocommerce_enable_order_notes_field', 'yes' === get_option( 'woocommerce_enable_order_comments', 'yes' ) ) ) : ?>

		<?php if ( ! WC()->cart->needs_shipping() || wc_ship_to_billing_address_only() ) : ?>

            <div class="gui-block-title">
                <strong aria-level="2" role="heading" id="gui-account-information-block-title"><?php esc_html_e( 'Additional information', 'woocommerce' ); ?></strong>
            </div>

		<?php endif; ?>

		<div class="gui-block-content">
			<?php foreach ( $checkout->get_checkout_fields( 'order' ) as $key => $field ) : ?>
                <div class="gui-field">
                    <?php woocommerce_form_field( $key, $field, $checkout->get_value( $key ) ); ?>
                </div>
			<?php endforeach; ?>
		</div>

	<?php endif; ?>

	<?php do_action( 'woocommerce_after_order_notes', $checkout ); ?>
</div>
