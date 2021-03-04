<?php get_header('other'); ?>

<section>
    <div class="breadcrumbs-bg-color">
        <div class="bredcrumb-items container-custom">
            <h1> À propos</h1>
            <nav class="breadcrumbs text-sm" aria-label="Breadcrumbs">
                <ol class="flex flex-wrap gap-xxs">
                    <li class="breadcrumbs__item">
                        <a href="" class="color-inherit text-underline-hover"><i class="fas fa-home"></i></a>
                        <span class="color-contrast-low margin-left-xxs" aria-hidden="true">/</span>
                    </li>
                    <li class="breadcrumbs__item" aria-current="page">
                        À propos
                    </li>
                </ol>
            </nav>
        </div>
    </div>

    <div class="about-us-title container">
        <?= the_content() ?>
    </div>

    <div class="container-custom contact-us-section">
        <h1>Vous avez des questions?</h1>
        <a href="service/" class="button btn-primary">Nous contacter</a>
    </div>
</section>

<?php get_footer(); ?>
