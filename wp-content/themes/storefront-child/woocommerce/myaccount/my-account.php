<section class="collection-page_top">
    <div class="breadcrumbs-bg-color">
        <div class="bredcrumb-items container-custom">
            <h1>Profil</h1>
            <nav class="breadcrumbs text-sm" aria-label="Breadcrumbs">
                <ol class="flex flex-wrap gap-xxs">
                    <li class="breadcrumbs__item">
                        <a href="" class="color-inherit text-underline-hover"><i class="fas fa-home"></i></a>
                        <span class="color-contrast-low margin-left-xxs" aria-hidden="true">/</span>
                    </li>
                    <li class="breadcrumbs__item" aria-current="page">
                        Profil
                    </li>
                </ol>
            </nav>
        </div>
    </div>
</section>
<div class="container max-width-lg">
    <div class="gui gui-account">
        <div class="gui-col2-left">
            <?php
            /**
             * My Account page
             *
             * This template can be overridden by copying it to yourtheme/woocommerce/myaccount/my-account.php.
             *
             * HOWEVER, on occasion WooCommerce will need to update template files and you
             * (the theme developer) will need to copy the new files to your theme to
             * maintain compatibility. We try to do this as little as possible, but it does
             * happen. When this occurs the version of the template file will be bumped and
             * the readme will list any important changes.
             *
             * @see     https://docs.woocommerce.com/document/template-structure/
             * @package WooCommerce\Templates
             * @version 3.5.0
             */

            defined( 'ABSPATH' ) || exit;

            /**
             * My Account navigation.
             *
             * @since 2.6.0
             */
            do_action( 'woocommerce_account_navigation' ); ?>

            <div class="gui-col2-left-col2">
                <?php
                    /**
                     * My Account content.
                     *
                     * @since 2.6.0
                     */
                    do_action( 'woocommerce_account_content' );
                ?>
            </div>
            <div class="gui-col2-left-col2">
                <div class="gui-buttons" role="region" aria-label="Actions">
                    <div class="gui-clear"></div>
                </div>
            </div>
            <div class="gui-clear"></div>
        </div>
    </div>
</div>
