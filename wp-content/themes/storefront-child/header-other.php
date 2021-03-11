<!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="http://gmpg.org/xfn/11">
    <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

    <?php
    $posts = get_posts(array(
        'post_type' => 'Meta',
    ));

    foreach ($posts as $post) {
        setup_postdata($post);
        ?>

		<meta name="description" content="<?= the_field('description') ?>">
		<meta name="keywords" content="<?= the_field('keywords') ?>">

        <?php
    }

    wp_reset_postdata();
    ?>

    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

<?php wp_body_open(); ?>


<div>
    <?= get_template_part('parts/header') ?>
