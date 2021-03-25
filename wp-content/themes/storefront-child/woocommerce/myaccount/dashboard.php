<?php
/**
 * My Account Dashboard
 *
 * Shows the first intro screen on the account dashboard.
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/myaccount/dashboard.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 4.4.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

$allowed_html = array(
	'a' => array(
		'href' => array(),
	),
);
?>
<p class="is-hidden">
	<?php
	printf(
		/* translators: 1: user display name 2: logout url */
		wp_kses( __( 'Hello %1$s (not %1$s? <a href="%2$s">Log out</a>)', 'woocommerce' ), $allowed_html ),
		'<strong>' . esc_html( $current_user->display_name ) . '</strong>',
		esc_url( wc_logout_url() )
	);
	?>
</p>

<p class="is-hidden">
	<?php
	/* translators: 1: Orders URL 2: Address URL 3: Account URL. */
	$dashboard_desc = __( 'From your account dashboard you can view your <a href="%1$s">recent orders</a>, manage your <a href="%2$s">billing address</a>, and <a href="%3$s">edit your password and account details</a>.', 'woocommerce' );
	if ( wc_shipping_enabled() ) {
		/* translators: 1: Orders URL 2: Addresses URL 3: Account URL. */
		$dashboard_desc = __( 'From your account dashboard you can view your <a href="%1$s">recent orders</a>, manage your <a href="%2$s">shipping and billing addresses</a>, and <a href="%3$s">edit your password and account details</a>.', 'woocommerce' );
	}
	printf(
		wp_kses( $dashboard_desc, $allowed_html ),
		esc_url( wc_get_endpoint_url( 'orders' ) ),
		esc_url( wc_get_endpoint_url( 'edit-address' ) ),
		esc_url( wc_get_endpoint_url( 'edit-account' ) )
	);
	?>
</p>

		<?php $current_user = wp_get_current_user(); ?>

        <div class="gui-page-title" aria-level="1" role="heading">Tableau de bord de compte</div>
        <p>
            <strong>Bonjour, <?= $current_user->user_firstname ?> <?= $current_user->user_lastname ?>!</strong><br>
            À partir de votre tableau de bord Mon compte, vous pouvez afficher un instantané de l'activité récente de votre compte et mettre à jour les informations de votre compte. Choisissez un lien ci-dessous pour afficher ou modifier les informations.
        </p>
        <div class="gui-block gui-margin" role="region" aria-labelledby="gui-account-information-block-title">
            <div class="gui-block-title">
                <strong aria-level="2" role="heading" id="gui-account-information-block-title">Information sur le compte</strong>
            </div>
            <div class="gui-block-content">
	            <div class="gui-col2-equal">
		            <div class="gui-col2-equal-col1" role="group" aria-label="Billing address">
			            <div class="gui-block-subtitle">Adresse de facturation
				            <a href="/my-account/edit-address/billing" title="Edit" aria-label="Edit billing address">Edit</a>
			            </div>
			            <div class="gui-block-subcontent">
                            <?= get_user_meta( $current_user->ID, 'billing_first_name', true ); ?>
                            <?= get_user_meta( $current_user->ID, 'billing_last_name', true ); ?><br>
                            <?= get_user_meta( $current_user->ID, 'billing_address_1', true ); ?><br>
                            <?= get_user_meta( $current_user->ID, 'billing_city', true ); ?> <?= get_user_meta( $current_user->ID, 'billing_postcode', true ); ?><br>
			            </div>
		            </div>
		            <div class="gui-col2-equal-col2" role="group" aria-label="Shipping address">
			            <div class="gui-block-subtitle">Adresse de livraison
				            <a href="/my-account/edit-address/shipping" title="Edit" aria-label="Edit shipping address">Edit</a>
			            </div>
			            <div class="gui-block-subcontent">
                            <?= get_user_meta( $current_user->ID, 'shipping_first_name', true ); ?>
                            <?= get_user_meta( $current_user->ID, 'shipping_last_name', true ); ?><br>
                            <?= get_user_meta( $current_user->ID, 'shipping_address_1', true ); ?><br>
                            <?= get_user_meta( $current_user->ID, 'shipping_city', true ); ?> <?= get_user_meta( $current_user->ID, 'shipping_postcode', true ); ?><br>
			            </div>
		            </div>
		            <div class="gui-clear"></div>
	            </div>

	            <div class="gui-spacer"></div>

                <div class="gui-col2-equal">
                    <div class="gui-col2-equal-col1" role="group" aria-label="Contact information">
                        <div class="gui-block-subtitle">Informations de contact
                            <a href="/my-account/edit-account" title="Edit" aria-label="Edit contact information">Edit</a>
                        </div>
                        <div class="gui-block-subcontent">
	                        <?php $current_user = wp_get_current_user(); ?>
                            <?= $current_user->user_firstname ?> <?= $current_user->user_lastname ?>
	                        <br><?= $current_user->user_email ?><br>
                            <br>
                            <a href="/my-account/edit-account" class="gui-small" title="Changement de mot de passe">Changement de mot de passe
                            </a>
                        </div>
                    </div>
                    <div class="gui-clear"></div>
                </div>
            </div>
        </div>


        <div class="gui-buttons" role="region" aria-label="Actions">
            <div class="gui-clear"></div>
        </div>

<?php
	/**
	 * My Account dashboard.
	 *
	 * @since 2.6.0
	 */
	do_action( 'woocommerce_account_dashboard' );

	/**
	 * Deprecated woocommerce_before_my_account action.
	 *
	 * @deprecated 2.6.0
	 */
	do_action( 'woocommerce_before_my_account' );

	/**
	 * Deprecated woocommerce_after_my_account action.
	 *
	 * @deprecated 2.6.0
	 */
	do_action( 'woocommerce_after_my_account' );

/* Omit closing PHP tag at the end of PHP files to avoid "headers already sent" issues. */
