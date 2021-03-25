<section class="collection-page_top">
    <div class="breadcrumbs-bg-color">
        <div class="bredcrumb-items container-custom">
            <h1><?= get_the_title(); ?></h1>
            <nav class="breadcrumbs text-sm" aria-label="Breadcrumbs">
                <ol class="flex flex-wrap gap-xxs">
                    <li class="breadcrumbs__item">
                        <a href="/" class="color-inherit text-underline-hover"><i class="fas fa-home"></i></a>
                        <span class="color-contrast-low margin-left-xxs" aria-hidden="true">/</span>
                    </li>
                    <li class="breadcrumbs__item" aria-current="page">
                        <?= get_the_title(); ?>
                    </li>
                </ol>
            </nav>
        </div>
    </div>
</section>