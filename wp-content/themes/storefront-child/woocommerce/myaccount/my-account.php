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
                <div class="gui-block gui-margin" role="region" aria-labelledby="gui-account-information-block-title">
                    <div class="gui-block-title">
                        <strong aria-level="2" role="heading" id="gui-account-information-block-title">Progression de la récompense</strong>
                    </div>
                    <div class="gui-block-content">
                        <div class="gui-col2-leftm">
                            <div class="gui-col2-leftm-col1" role="group" aria-label="Contact information">
                                <div class="gui-block-subtitle">Solde de points</div>
                                <div class="gui-block-subcontent points">
                                    10<span>pts</span>
                                </div>
                            </div>
                            <div class="gui-col2-leftm-col2" role="group" aria-label="Newsletters">
                                <div class="gui-block-subtitle">Récompense suivante</div>
                                <div class="gui-block-subcontent points-block">
                                    Beurre d'érable
                                    <div class="progress-bar-wrap"><div class="progress-bar" style="width: 67%"></div></div>10pts
                                </div>
                                <div class="gui-block-subcontent">
                                    Que diriez-vous d'un beurre d'érable sur nous!
                                </div>
                            </div>
                            <div class="gui-clear"></div>
                        </div>
                        <div class="gui-spacer"></div>
                    </div>
                </div>


                <div class="gui-buttons" role="region" aria-label="Actions">
                    <div class="gui-clear"></div>
                </div>
            </div>
            <div class="gui-clear"></div>
        </div>
    </div>
</div>
