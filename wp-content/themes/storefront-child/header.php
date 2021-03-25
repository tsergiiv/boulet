<!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0">
	<meta name="description" content="<?= get_option('description'); ?>">
	<meta name="keywords" content="<?= get_option('keywords'); ?>">

    <link rel="profile" href="http://gmpg.org/xfn/11">
    <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

    <?php wp_head(); ?>
</head>

<body>

<?php wp_body_open(); ?>


<div>
	<?= get_template_part('parts/header') ?>

    <div id="content" class="site-content" tabindex="-1">
	    <div class="col-full">
