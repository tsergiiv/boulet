<?php

add_action('wp_enqueue_scripts', 'enqueue_styles');
add_action('wp_footer', 'enqueue_scripts');

//function enqueue_styles()
//{
//    wp_enqueue_style('child-style', get_stylesheet_uri(), array(), date("h:i:s"));
//}

function enqueue_scripts()
{
    //jquery 1.9.1
    wp_register_script('jquery-v-191', get_stylesheet_directory_uri() . '/assets/js/jquery-1-9-1.js', array(), date("h:i:s"));
    wp_enqueue_script('jquery-v-191');

    //jquery ui
    wp_register_script('jquery-ui', get_stylesheet_directory_uri() . '/assets/js/jquery-ui-1-10-1.js', array(), date("h:i:s"));
    wp_enqueue_script('jquery-ui');

    //fontawesome
    wp_register_script('fontawesome', 'https://use.fontawesome.com/6ab54bd168.js');
    wp_enqueue_script('fontawesome');

    //product
    wp_register_script('product', get_stylesheet_directory_uri() . '/assets/js/product.js', array(), date("h:i:s"));
    wp_enqueue_script('product');

    //main scripts
    wp_register_script('scripts', get_stylesheet_directory_uri() . '/assets/js/scripts.js', array(), date("h:i:s"));
    wp_enqueue_script('scripts');

    //owl-carousel
    wp_register_script('owl-carousel', get_stylesheet_directory_uri() . '/assets/js/owl-carousel/owl-carousel.min.js', array(), date("h:i:s"));
    wp_enqueue_script('owl-carousel');

    //gui
    wp_register_script('gui', get_stylesheet_directory_uri() . '/assets/js/gui.js', array(), date("h:i:s"));
    wp_enqueue_script('gui');

    //gui-responsive
    wp_register_script('gui-responsive', get_stylesheet_directory_uri() . '/assets/js/gui-responsive.js', array(), date("h:i:s"));
    wp_enqueue_script('gui-responsive');

//    wp_register_script('app', get_template_directory_uri() . '/assets/js/app.js', array(), date("h:i:s"));
//    wp_enqueue_script('app');
}

add_theme_support( 'menus' );

add_action( 'init', 'register_post_types' );
function register_post_types()
{
    register_post_type('slide', [
        'label' => null,
        'labels' => [
            'name' => 'Slides', // основное название для типа записи
            'singular_name' => 'Slide', // название для одной записи этого типа
            'add_new' => 'Add slide', // для добавления новой записи
            'add_new_item' => 'Add slide', // заголовка у вновь создаваемой записи в админ-панели.
            'edit_item' => 'Edit slide', // для редактирования типа записи
            'new_item' => 'New slide', // текст новой записи
            'view_item' => 'View slide', // для просмотра записи этого типа.
            'search_items' => 'Search slide', // для поиска по этим типам записи
            'not_found' => 'Not found', // если в результате поиска ничего не было найдено
            'not_found_in_trash' => 'Not found in trash', // если не было найдено в корзине
            'parent_item_colon' => '', // для родителей (у древовидных типов)
            'menu_name' => '1 - Slides', // название меню
        ],
        'description' => '',
        'public' => true,
        'publicly_queryable' => true, // зависит от public
        'exclude_from_search' => true, // зависит от public
        'show_ui' => true, // зависит от public
        'show_in_nav_menus' => true, // зависит от public
        'show_in_menu' => true, // показывать ли в меню адмнки
        'show_in_admin_bar' => true, // зависит от show_in_menu
        'show_in_rest' => null, // добавить в REST API. C WP 4.7
        'rest_base' => null, // $post_type. C WP 4.7
        'menu_position' => 4,
        'menu_icon' => null,
        'hierarchical' => false,
        'supports' => ['title'], // 'title','editor','author','thumbnail','excerpt','trackbacks','custom-fields','comments','revisions','page-attributes','post-formats'
        'taxonomies' => [],
        'has_archive' => false,
        'rewrite' => true,
        'query_var' => true,
    ]);

    register_post_type('contacts', [
        'label' => null,
        'labels' => [
            'name' => 'Contacts', // основное название для типа записи
            'singular_name' => 'Contacts', // название для одной записи этого типа
            'add_new' => 'Add contacts', // для добавления новой записи
            'add_new_item' => 'Add contacts', // заголовка у вновь создаваемой записи в админ-панели.
            'edit_item' => 'Edit contacts', // для редактирования типа записи
            'new_item' => 'New contacts', // текст новой записи
            'view_item' => 'View contacts', // для просмотра записи этого типа.
            'search_items' => 'Search contacts', // для поиска по этим типам записи
            'not_found' => 'Not found', // если в результате поиска ничего не было найдено
            'not_found_in_trash' => 'Not found in trash', // если не было найдено в корзине
            'parent_item_colon' => '', // для родителей (у древовидных типов)
            'menu_name' => '2 - Contacts', // название меню
        ],
        'capability_type' => 'post',
        'capabilities' => [
            'create_posts' => false,
            'delete_posts' => false,
            'delete_published_posts' => false,
            'delete_private_posts' => false,
        ],
        'map_meta_cap' => true,
        'description' => '',
        'public' => true,
        'publicly_queryable' => true, // зависит от public
        'exclude_from_search' => true, // зависит от public
        'show_ui' => true, // зависит от public
        'show_in_nav_menus' => true, // зависит от public
        'show_in_menu' => true, // показывать ли в меню адмнки
        'show_in_admin_bar' => true, // зависит от show_in_menu
        'show_in_rest' => null, // добавить в REST API. C WP 4.7
        'rest_base' => null, // $post_type. C WP 4.7
        'menu_position' => 4,
        'menu_icon' => null,
        'hierarchical' => false,
        'supports' => ['title'], // 'title','editor','author','thumbnail','excerpt','trackbacks','custom-fields','comments','revisions','page-attributes','post-formats'
        'taxonomies' => [],
        'has_archive' => false,
        'rewrite' => true,
        'query_var' => true,
    ]);

    register_post_type('Socials', [
        'label' => null,
        'labels' => [
            'name' => 'Socials', // основное название для типа записи
            'singular_name' => 'Socials', // название для одной записи этого типа
            'add_new' => 'Add socials', // для добавления новой записи
            'add_new_item' => 'Add socials', // заголовка у вновь создаваемой записи в админ-панели.
            'edit_item' => 'Edit socials', // для редактирования типа записи
            'new_item' => 'New socials', // текст новой записи
            'view_item' => 'View socials', // для просмотра записи этого типа.
            'search_items' => 'Search socials', // для поиска по этим типам записи
            'not_found' => 'Not found', // если в результате поиска ничего не было найдено
            'not_found_in_trash' => 'Not found in trash', // если не было найдено в корзине
            'parent_item_colon' => '', // для родителей (у древовидных типов)
            'menu_name' => '3 - Socials', // название меню
        ],
        'capability_type' => 'post',
        'capabilities' => [
            'create_posts' => false,
            'delete_posts' => false,
            'delete_published_posts' => false,
            'delete_private_posts' => false,
        ],
        'map_meta_cap' => true,
        'description' => '',
        'public' => true,
        'publicly_queryable' => true, // зависит от public
        'exclude_from_search' => true, // зависит от public
        'show_ui' => true, // зависит от public
        'show_in_nav_menus' => true, // зависит от public
        'show_in_menu' => true, // показывать ли в меню адмнки
        'show_in_admin_bar' => true, // зависит от show_in_menu
        'show_in_rest' => null, // добавить в REST API. C WP 4.7
        'rest_base' => null, // $post_type. C WP 4.7
        'menu_position' => 4,
        'menu_icon' => null,
        'hierarchical' => false,
        'supports' => ['title'], // 'title','editor','author','thumbnail','excerpt','trackbacks','custom-fields','comments','revisions','page-attributes','post-formats'
        'taxonomies' => [],
        'has_archive' => false,
        'rewrite' => true,
        'query_var' => true,
    ]);
}

function mytheme_add_woocommerce_support() {
    add_theme_support( 'woocommerce' );
}


add_action( 'after_setup_theme', 'mytheme_add_woocommerce_support' );

remove_action( 'woocommerce_shop_loop_item_title','woocommerce_template_loop_product_title', 10 );
add_action('woocommerce_shop_loop_item_title', 'change_product_title', 10 );
function change_product_title() {
    echo '<h1 class="text-base"><a href="'.get_the_permalink().'" class="bold product-card__title">' . get_the_title() . '</a></h1>';
}

// Change the Number of WooCommerce Products Displayed Per Page
add_filter( 'loop_shop_per_page', 'lw_loop_shop_per_page', 30 );

function lw_loop_shop_per_page( $products ) {
    $products = 6;
    return $products;
}

// Remove the product rating display on product loops
remove_action( 'woocommerce_after_shop_loop_item_title', 'woocommerce_template_loop_rating', 5 );

add_action( 'woocommerce_before_main_content', 'action_function_name_5655' );
function action_function_name_5655(){
   get_template_part('parts/title');
}

function storefront_cart_link() {
    ?>
    <a class="cart-contents" href="<?php echo esc_url( WC()->cart->get_cart_url() ); ?>" title="<?php esc_attr_e( 'View your shopping cart', 'storefront' ); ?>">
        <span class="amount"><?php echo wp_kses_data( WC()->cart->get_cart_subtotal() ); ?></span> <span class="count"><?php echo wp_kses_data( sprintf( _n( '%d item', '%d items', WC()->cart->get_cart_contents_count(), 'storefront' ), WC()->cart->get_cart_contents_count() ) );?></span>
    </a>
    <?php
}

add_action( 'wp_enqueue_scripts', 'sf_child_theme_dequeue_style', 999 );

/**
 * Dequeue the Storefront Parent theme core CSS
 */
function sf_child_theme_dequeue_style() {
    wp_dequeue_style( 'storefront-style' );
    wp_dequeue_style( 'storefront-woocommerce-style' );
}