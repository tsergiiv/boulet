<?php
/**
 * Edit address form
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/myaccount/form-edit-address.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 3.6.0
 */

defined( 'ABSPATH' ) || exit;

$page_title = ( 'billing' === $load_address ) ? esc_html__( 'Billing address', 'woocommerce' ) : esc_html__( 'Shipping address', 'woocommerce' );

do_action( 'woocommerce_before_edit_account_address_form' ); ?>

<?php if ( ! $load_address ) : ?>
	<?php wc_get_template( 'myaccount/my-address.php' ); ?>
<?php else : ?>

	<form method="post">
        <div class="gui-block">
            <div class="gui-block-title" role="heading" aria-level="2" id="gui-account-billing-info-title">
                <strong><?php echo apply_filters( 'woocommerce_my_account_edit_address_title', $page_title, $load_address ); ?></strong>
            </div>

            <div class="gui-block-content">
                <div class="gui-form equaul-fields">
                    <?php do_action( "woocommerce_before_edit_address_form_{$load_address}" ); ?>

                        <?php
                        foreach ( $address as $key => $field ) {
                            ?>
                            <div class="gui-field">

                                <?php woocommerce_form_field( $key, $field, wc_get_post_data_by_key( $key, $field['value'] ) ); ?>

                            </div>
                            <?php
                        }
                        ?>

                    <?php do_action( "woocommerce_after_edit_address_form_{$load_address}" ); ?>
                </div>
            </div>
        </div>
        <div class="gui-buttons">
            <div class="gui-right">
                <button type="submit" class="button" name="save_address" value="<?php esc_attr_e( 'Save address', 'woocommerce' ); ?>"><?php esc_html_e( 'Sauvegarder', 'woocommerce' ); ?></button>
                <?php wp_nonce_field( 'woocommerce-edit_address', 'woocommerce-edit-address-nonce' ); ?>
                <input type="hidden" name="action" value="edit_address" />
            </div>
            <div class="gui-clear"></div>
        </div>
	</form>

<?php endif; ?>

<?php do_action( 'woocommerce_after_edit_account_address_form' ); ?>
