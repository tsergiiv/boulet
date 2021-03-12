<?php

add_action('wp_enqueue_scripts', 'enqueue_styles');
add_action('wp_footer', 'enqueue_scripts');

function enqueue_styles()
{
//    wp_enqueue_style('child-style', get_stylesheet_uri(), array(), date("h:i:s"));
    wp_register_style('my', get_stylesheet_directory_uri() . '/assets/css/my.css', array(), date("h:i:s"));
    wp_enqueue_style('my');
}

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

    wp_register_script('form', get_stylesheet_directory_uri() . '/assets/js/form.js', array(), date("h:i:s"));
    wp_enqueue_script('form');

    //gui
//    wp_register_script('gui', get_stylesheet_directory_uri() . '/assets/js/gui.js', array(), date("h:i:s"));
//    wp_enqueue_script('gui');

    //gui-responsive
//    wp_register_script('gui-responsive', get_stylesheet_directory_uri() . '/assets/js/gui-responsive.js', array(), date("h:i:s"));
//    wp_enqueue_script('gui-responsive');

//    wp_register_script('app', get_template_directory_uri() . '/assets/js/app.js', array(), date("h:i:s"));
//    wp_enqueue_script('app');

    wp_dequeue_script('wc-add-to-cart-js-extra');
    wp_enqueue_script('wc-add-to-cart-js-extra', get_bloginfo( 'stylesheet_directory' ). '/assets/js/add-to-cart.js' , array( 'jquery' ), WC_VERSION, TRUE);
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

    register_post_type('Instagram', [
        'label' => null,
        'labels' => [
            'name' => 'Instagram', // основное название для типа записи
            'singular_name' => 'Instagram', // название для одной записи этого типа
            'add_new' => 'Add photo', // для добавления новой записи
            'add_new_item' => 'Add photo', // заголовка у вновь создаваемой записи в админ-панели.
            'edit_item' => 'Edit photo', // для редактирования типа записи
            'new_item' => 'New photo', // текст новой записи
            'view_item' => 'View photo', // для просмотра записи этого типа.
            'search_items' => 'Search photo', // для поиска по этим типам записи
            'not_found' => 'Not found', // если в результате поиска ничего не было найдено
            'not_found_in_trash' => 'Not found in trash', // если не было найдено в корзине
            'parent_item_colon' => '', // для родителей (у древовидных типов)
            'menu_name' => '4 - Instagram', // название меню
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

    register_post_type('Info', [
        'label' => null,
        'labels' => [
            'name' => 'Info', // основное название для типа записи
            'singular_name' => 'Info', // название для одной записи этого типа
            'add_new' => 'Add info', // для добавления новой записи
            'add_new_item' => 'Add info', // заголовка у вновь создаваемой записи в админ-панели.
            'edit_item' => 'Edit info', // для редактирования типа записи
            'new_item' => 'New info', // текст новой записи
            'view_item' => 'View info', // для просмотра записи этого типа.
            'search_items' => 'Search info', // для поиска по этим типам записи
            'not_found' => 'Not found', // если в результате поиска ничего не было найдено
            'not_found_in_trash' => 'Not found in trash', // если не было найдено в корзине
            'parent_item_colon' => '', // для родителей (у древовидных типов)
            'menu_name' => '5 - Main Info', // название меню
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

function my_custom_wc_theme_support() {
    add_theme_support( 'woocommerce' );
}

add_action( 'after_setup_theme', 'my_custom_wc_theme_support' );

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

function year_shortcode () {
    $year = date_i18n ('Y');
    return $year;
}
add_shortcode ('year', 'year_shortcode');

// Remove the product rating display on product loops
remove_action( 'woocommerce_after_shop_loop_item_title', 'woocommerce_template_loop_rating', 5 );

add_action( 'woocommerce_before_main_content', 'action_function_name_5655' );
function action_function_name_5655(){
   get_template_part('parts/title');
}

function storefront_cart_link() {
    ?>
    <a class="cart-contents">
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
    wp_dequeue_style( 'storefront-icons' );
    wp_dequeue_style( 'storefront-woocommerce-style' );
}

function send_mail()
{
    $headers = array(
        'From: Boulet website <root@takasho.work>',
        'content-type: text/html',
    );

    $to = get_option('letters_email'); // place wp admin email here
    $subject = "Form from Boulet website";

    $b = [];
    foreach ($_POST as $key => $value) {
        $b[] = "<b>{$key}</b>: {$value}";
    }

    $body = implode('<br>', $b);

    $attachments = [];

    $result = wp_mail($to, $subject, $body, $headers, $attachments);

    if ($result) {
        $data = [
            'error' => 0,
            'message' => 'Email success sent!'
        ];
    } else {
        $data = [
            'error' => 1,
            'message' => 'Sorry, email not sent'
        ];
    }

    echo wp_json_encode($data);
    die;
}

add_action('wp_ajax_send_mail', 'send_mail');
add_action('wp_ajax_nopriv_send_mail', 'send_mail');

function add_email_field_to_general_admin_page(){
    $option_name = 'letters_email';

    // регистрируем опцию
    register_setting( 'general', $option_name );

    // добавляем поле
    add_settings_field(
        'letters_email',
        'Email For Letters',
        'letters_email_setting_callback_function',
        'general',
        'default',
        array(
            'id' => 'letters_email',
            'option_name' => 'letters_email'
        )
    );
}

function letters_email_setting_callback_function( $val ){
    $id = $val['id'];
    $option_name = $val['option_name'];
    ?>
	<input
			type="email"
			name="<? echo $option_name ?>"
			id="<? echo $id ?>"
			size="40"
			value="<? echo esc_attr( get_option($option_name) ) ?>"
	/>
    <?
}

add_action('admin_menu', 'add_email_field_to_general_admin_page');

function add_description_field_to_general_admin_page(){
    $option_name = 'description';

    // регистрируем опцию
    register_setting( 'general', $option_name );

    // добавляем поле
    add_settings_field(
        'description',
        'Meta Description',
        'description_setting_callback_function',
        'general',
        'default',
        array(
            'id' => 'description',
            'option_name' => 'description'
        )
    );
}

function description_setting_callback_function( $val ){
    $id = $val['id'];
    $option_name = $val['option_name'];
    ?>
	<textarea
			rows="4" cols="40"
			name="<? echo $option_name ?>"
			id="<? echo $id ?>"
	/><? echo esc_attr( get_option($option_name) ) ?></textarea>
    <?
}

add_action('admin_menu', 'add_description_field_to_general_admin_page');

function add_keywords_field_to_general_admin_page(){
    $option_name = 'keywords';

    // регистрируем опцию
    register_setting( 'general', $option_name );

    // добавляем поле
    add_settings_field(
        'keywords',
        'Meta Keywords',
        'keywords_setting_callback_function',
        'general',
        'default',
        array(
            'id' => 'keywords',
            'option_name' => 'keywords'
        )
    );
}

function keywords_setting_callback_function( $val ){
    $id = $val['id'];
    $option_name = $val['option_name'];
    ?>
	<input
			type="text"
			name="<? echo $option_name ?>"
			id="<? echo $id ?>"
			size="40"
			value="<? echo esc_attr( get_option($option_name) ) ?>"
	/>
    <?
}

add_action('admin_menu', 'add_keywords_field_to_general_admin_page');

function mycustom_shop_display_stock() {

    global $product;

    if ( !$product->get_manage_stock() && $product->is_in_stock() ) {
        echo '<div class="flex flex-column gap-xs text-sm"><div class="in-stock"><p class="stock in-stock">En Stock</div></div>';
    }
}
add_action( 'woocommerce_single_product_summary', 'mycustom_shop_display_stock', 11 );

include_once( get_stylesheet_directory() .'/inc/woocommerce_form_field.php');

add_filter( 'woocommerce_my_account_my_address_formatted_address', 'filter_function_name_4500', 10, 3 );
function filter_function_name_4500( $address, $customer_id, $address_type ){
    // filter...

    return $address;
}

add_action('wp_logout','logout_redirect');

function logout_redirect(){

    wp_redirect( home_url() );

    exit;

}

add_filter('woocommerce_login_redirect', 'login_redirect');

function login_redirect($redirect_to) {

    return home_url() . '/my-account';

}