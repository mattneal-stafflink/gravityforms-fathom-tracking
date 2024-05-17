<?php
/*
Plugin Name: Track Gravityforms Submissions with Fathom Analytics
Plugin URI: https://realcoder.com.au/gravityforms-fathom-tracking/
Description: A filter that adds a data attribute to Gravity form submit buttons to track form submissions with Fathom Analytics.
Author: real_coder
Version: 1.0
Author URI: https://realcoder.com.au/
*/


/**
 * Add form name to button for Fathom Analytics
 * Allows us to track form submissions by form name.
 */
add_filter( 'gform_submit_button', 'add_form_name_to_button_for_fathom_analytics', 10, 2 );
function add_form_name_to_button_for_fathom_analytics( $button, $form ) {

    $find = "<input type='submit'";
    $replace = "<input type='submit' data-fathom='form-submit-{$form['title']}'";

    return str_replace( $find, $replace, $button );
}