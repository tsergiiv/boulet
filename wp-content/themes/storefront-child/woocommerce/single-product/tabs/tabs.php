<?php
/**
 * Single Product tabs
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/single-product/tabs/tabs.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 3.8.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Filter tabs and allow third parties to add their own.
 *
 * Each tab is an array containing title, callback and priority.
 *
 * @see woocommerce_default_product_tabs()
 */
$product_tabs = apply_filters( 'woocommerce_product_tabs', array() );

if ( ! empty( $product_tabs ) ) : ?>

	<div class="container max-width-lg padding-y-xl tabs-wrapper">
        <div class="tabs js-tabs">
                <nav class="s-tabs">
                    <ul class="s-tabs__list js-tabs__controls" aria-label="Tabs Interface" role="tablist">
                        <?php foreach ( $product_tabs as $key => $product_tab ) : ?>
                            <li role="presentation">
                                <a href="#tab-<?php echo esc_attr( $key ); ?>" class="tabs__control s-tabs__link rating-link_block js-tabs__trigger" role="tab" aria-selected="true" aria-controls="<?php echo esc_attr( $key ); ?>" id="tab-<?php echo esc_attr( $key ); ?>">
                                    <?php echo wp_kses_post( apply_filters( 'woocommerce_product_' . $key . '_tab_title', $product_tab['title'], $key ) ); ?>
                                </a>
                            </li>
                        <?php endforeach; ?>
                    </ul>
                </nav>
                <div class="js-tabs__panels">
                <?php foreach ( $product_tabs as $key => $product_tab ) : ?>
                    <div class="padding-top-lg max-width-lg js-tabs__panel" id="tab-<?php echo esc_attr( $key ); ?>" role="tabpanel" aria-labelledby="tab-title-<?php echo esc_attr( $key ); ?>">
                        <?php
                        if ( isset( $product_tab['callback'] ) ) {
                            call_user_func( $product_tab['callback'], $key, $product_tab );
                        }
                        ?>
                    </div>
                <?php endforeach; ?>
                </div>
                <?php do_action( 'woocommerce_product_after_tabs' ); ?>
            </div>
        </div>
	</div>

<?php endif; ?>
