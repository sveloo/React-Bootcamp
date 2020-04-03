<?php
add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_styles' );
function my_theme_enqueue_styles() {
 
  $parent_style = 'twentytwenty-style'; 
    
  wp_enqueue_style( $parent_style, get_template_directory_uri() . '/style.css' );
    
  wp_enqueue_style( 'child-style',
    get_stylesheet_directory_uri() . '/style.css',
    [ $parent_style ],
    // time() //For production use wp_get_theme()->get('Version')
    wp_get_theme()->get('Version')
  );

  wp_enqueue_script(
    'my-theme-frontend',
    get_stylesheet_directory_uri() . '/build/index.js',
    ['wp-element'],
    // time() //For production use wp_get_theme()->get('Version')        
    wp_get_theme()->get('Version')
  );
  
}

?>