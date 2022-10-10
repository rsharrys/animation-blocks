<?php
/**
 * Plugin Name:       Wafelmedia Animations Blocks
 * Description:       Wafelmedia Animations Blocks
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           1.0
 * Author:            Rafał Siemiński
 * Author URI:        https://wafelmedia.pl
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       wafelmedia-animations-blocks
 *
 * @package           wafelmedia-animations-blocks
 */

if( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

function wafelmedia_animations_blocks_editor_scripts() {
    wp_enqueue_script(
		'animated-editor',
		plugins_url( 'build/index.js', __FILE__ ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'build/index.js'),
		true
	);
}
add_action( 'enqueue_block_editor_assets', 'wafelmedia_animations_blocks_editor_scripts' );

function wafelmedia_animations_blocks_scripts() {
	wp_enqueue_style(
		'animated',
		plugins_url( 'build/index.css', __FILE__ ),
		array(),
		filemtime( plugin_dir_path( __FILE__ ) . 'build/index.css')
	);
	wp_enqueue_script(
		'animated',
		plugins_url( 'animated.min.js', __FILE__ ),
		array(),
		filemtime( plugin_dir_path( __FILE__ ) . 'animated.min.js'),
		true
	);
}
add_action( 'enqueue_block_assets', 'wafelmedia_animations_blocks_scripts' );