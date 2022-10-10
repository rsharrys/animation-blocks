/**
 * Add attribute to group block, in Sidebar
 * https://wholesomecode.ltd/add-controls-to-the-core-and-third-party-block-sidebar-with-filters-and-higher-order-components
 * https://jschof.com/gutenberg-blocks/using-gutenberg-filters-to-extend-blocks/
 */

import { __ } from "@wordpress/i18n";

import { addFilter } from "@wordpress/hooks";
import { Fragment } from "@wordpress/element";
import { createHigherOrderComponent } from "@wordpress/compose";
import { InspectorControls } from "@wordpress/blockEditor";
import { PanelBody, SelectControl, ToggleControl } from "@wordpress/components";

import classnames from "classnames";
import "../vendor/animate/dist/style.min.css";

/**
 * Declare attribute
 */
const setSidebarSelectAttribute = (settings) => {
	return Object.assign({}, settings, {
		attributes: Object.assign({}, settings.attributes, {
			animation: { type: "string" },
			delay: { type: "string" },
			speed: { type: "string" },
			repeat: { type: "boolean", default: false },
		}),
	});
};

addFilter(
	"blocks.registerBlockType",
	"animation-blocks/set-sidebar-attribute",
	setSidebarSelectAttribute
);

/**
 * Add selects
 */
const withSidebarSelect = createHigherOrderComponent((BlockEdit) => {
	return (props) => {
		const { attributes, setAttributes } = props;
		const { animation, delay, speed, repeat } = attributes;

		return (
			<Fragment>
				<BlockEdit {...props} />
				<InspectorControls>
					<PanelBody
						title={__("Animation", "wafelmedia-animations-blocks")}
						initialOpen={true}
					>
						<SelectControl
							value={animation}
							resetValues={false}
							options={[
								{ label: __("None"), value: "" },

								/* Attention seekers */
								{ label: __("--Attention seekers"), value: "" },
								{ label: __("bounce"), value: "bounce" },
								{ label: __("flash"), value: "flash" },
								{ label: __("pulse"), value: "pulse" },
								//{ label: __("rubberBand"), value: "rubberBand" },
								{ label: __("shakeX"), value: "shakeX" },
								{ label: __("shakeY"), value: "shakeY" },
								{ label: __("headShake"), value: "headShake" },
								//{ label: __("swing"), value: "swing" },
								//{ label: __("tada"), value: "tada" },
								//{ label: __("wobble"), value: "wobble" },
								//{ label: __("jello"), value: "jello" },
								{ label: __("heartBeat"), value: "heartBeat" },

								/* Back entrances */
								//{ label: __("--Back entrances"), value: "" },
								//{ label: __("backInDown"), value: "backInDown" },
								//{ label: __("backInLeft"), value: "backInLeft" },
								//{ label: __("backInRight"), value: "backInRight" },
								//{ label: __("backInUp"), value: "backInUp" },

								/* Back exits */
								//{ label: __("--Back exits"), value: "" },
								//{ label: __("backOutDown"), value: "backOutDown" },
								//{ label: __("backOutLeft"), value: "backOutLeft" },
								//{ label: __("backOutRight"), value: "backOutRight" },
								//{ label: __("backOutUp"), value: "backOutUp" },

								/* Bouncing entrances */
								{ label: __("--Bouncing entrances"), value: "" },
								{ label: __("bounceIn"), value: "bounceIn" },
								{ label: __("bounceInDown"), value: "bounceInDown" },
								{ label: __("bounceInLeft"), value: "bounceInLeft" },
								{ label: __("bounceInRight"), value: "bounceInRight" },
								{ label: __("bounceInUp"), value: "bounceInUp" },

								/* Bouncing exits */
								//{ label: __("Bouncing exits"), value: "" },
								//{ label: __("bounceOut"), value: "bounceOut" },
								//{ label: __("bounceOutDown"), value: "bounceOutDown" },
								//{ label: __("bounceOutLeft"), value: "bounceOutLeft" },
								//{ label: __("bounceOutRight"), value: "bounceOutRight" },
								//{ label: __("bounceOutUp"), value: "bounceOutUp" },

								/* Fading entrances */
								{ label: __("--Fading entrances"), value: "" },
								{ label: __("fadeIn"), value: "fadeIn" },
								{ label: __("fadeInDown"), value: "fadeInDown" },
								{ label: __("fadeInDownBig"), value: "fadeInDownBig" },
								{ label: __("fadeInLeft"), value: "fadeInLeft" },
								{ label: __("fadeInLeftBig"), value: "fadeInLeftBig" },
								{ label: __("fadeInRight"), value: "fadeInRight" },
								{ label: __("fadeInRightBig"), value: "fadeInRightBig" },
								{ label: __("fadeInUp"), value: "fadeInUp" },
								{ label: __("fadeInUpBig"), value: "fadeInUpBig" },
								{ label: __("fadeInTopLeft"), value: "fadeInTopLeft" },
								{ label: __("fadeInTopRight"), value: "fadeInTopRight" },
								{ label: __("fadeInBottomLeft"), value: "fadeInBottomLeft" },
								{ label: __("fadeInBottomRight"), value: "fadeInBottomRight" },

								/* Fading exits */
								//{ label: __("--Fading exits"), value: "" },
								//{ label: __("fadeOut"), value: "fadeOut" },
								//{ label: __("fadeOutDown"), value: "fadeOutDown" },
								//{ label: __("fadeOutDownBig"), value: "fadeOutDownBig" },
								//{ label: __("fadeOutLeft"), value: "fadeOutLeft" },
								//{ label: __("fadeOutLeftBig"), value: "fadeOutLeftBig" },
								//{ label: __("fadeOutRight"), value: "fadeOutRight" },
								//{ label: __("fadeOutRightBig"), value: "fadeOutRightBig" },
								//{ label: __("fadeOutUp"), value: "fadeOutUp" },
								//{ label: __("fadeOutUpBig"), value: "fadeOutUpBig" },
								//{ label: __("fadeOutTopLeft"), value: "fadeOutTopLeft" },
								//{ label: __("fadeOutTopRight"), value: "fadeOutTopRight" },
								//{	label: __("fadeOutBottomRight"), value: "fadeOutBottomRight", },
								{ label: __("fadeOutBottomLeft"), value: "fadeOutBottomLeft" },

								/* Flippers */
								{ label: __("--Flippers"), value: "" },
								{ label: __("flip"), value: "flip" },
								{ label: __("flipInX"), value: "flipInX" },
								{ label: __("flipInY"), value: "flipInY" },
								{ label: __("flipOutX"), value: "flipOutX" },
								{ label: __("flipOutY"), value: "flipOutY" },

								/* Lightspeed */
								//{ label: __("--Lightspeed"), value: "" },
								//{ label: __("lightSpeedInRight"), value: "lightSpeedInRight" },
								//{ label: __("lightSpeedInLeft"), value: "lightSpeedInLeft" },
								//{	label: __("lightSpeedOutRight"), value: "lightSpeedOutRight", },
								//{ label: __("lightSpeedOutLeft"), value: "lightSpeedOutLeft" },

								/* Rotating entrances */
								//{ label: __("--Rotating entrances"), value: "" },
								//{ label: __("rotateIn"), value: "rotateIn" },
								//{ label: __("rotateInDownLeft"), value: "rotateInDownLeft" },
								//{ label: __("rotateInDownRight"), value: "rotateInDownRight" },
								//{ label: __("rotateInUpLeft"), value: "rotateInUpLeft" },
								//{ label: __("rotateInUpRight"), value: "rotateInUpRight" },

								/* Rotating exits */
								//{ label: __("--Rotating exits"), value: "" },
								//{ label: __("rotateOut"), value: "rotateOut" },
								//{ label: __("rotateOutDownLeft"), value: "rotateOutDownLeft" },
								//{	label: __("rotateOutDownRight"), value: "rotateOutDownRight", },
								//{ label: __("rotateOutUpLeft"), value: "rotateOutUpLeft" },
								//{ label: __("rotateOutUpRight"), value: "rotateOutUpRight" },

								/* Specials */
								//{ label: __("--Specials"), value: "" },
								//{ label: __("hinge"), value: "hinge" },
								//{ label: __("jackInTheBox"), value: "jackInTheBox" },
								//{ label: __("rollIn"), value: "rollIn" },
								//{ label: __("rollOut"), value: "rollOut" },

								/* Zooming entrances */
								{ label: __("--Zooming entrances"), value: "" },
								{ label: __("zoomIn"), value: "zoomIn" },
								{ label: __("zoomInDown"), value: "zoomInDown" },
								{ label: __("zoomInLeft"), value: "zoomInLeft" },
								{ label: __("zoomInRight"), value: "zoomInRight" },
								{ label: __("zoomInUp"), value: "zoomInUp" },

								/* Zooming exits */
								//{ label: __("--Zooming exits"), value: "" },
								//{ label: __("zoomOut"), value: "zoomOut" },
								//{ label: __("zoomOutDown"), value: "zoomOutDown" },
								//{ label: __("zoomOutLeft"), value: "zoomOutLeft" },
								//{ label: __("zoomOutRight"), value: "zoomOutRight" },
								//{ label: __("zoomOutUp"), value: "zoomOutUp" },

								/* Sliding entrances */
								{ label: __("--Sliding entrances"), value: "" },
								{ label: __("slideInDown"), value: "slideInDown" },
								{ label: __("slideInLeft"), value: "slideInLeft" },
								{ label: __("slideInRight"), value: "slideInRight" },
								{ label: __("slideInUp"), value: "slideInUp" },

								/* Sliding exits */
								//{ label: __("--Sliding exits"), value: "" },
								//{ label: __("slideOutDown"), value: "slideOutDown" },
								//{ label: __("slideOutLeft"), value: "slideOutLeft" },
								//{ label: __("slideOutRight"), value: "slideOutRight" },
								//{ label: __("slideOutUp"), value: "slideOutUp" },
							]}
							onChange={(value) => {
								setAttributes({
									animation: value,
								});
							}}
						/>

						<SelectControl
							label={__("Delay", "wafelmedia-animations-blocks")}
							value={delay}
							resetValues={false}
							options={[
								{
									label: __("None"),
									value: "",
								},
								{
									label: __("delay-100ms"),
									value: "delay-100ms",
								},
								{
									label: __("delay-200ms"),
									value: "delay-200ms",
								},
								{
									label: __("delay-300ms"),
									value: "delay-300ms",
								},
								{
									label: __("delay-400ms"),
									value: "delay-400ms",
								},
								{
									label: __("delay-500ms"),
									value: "delay-500ms",
								},
								{
									label: __("delay-1s"),
									value: "delay-1s",
								},
								{
									label: __("delay-2s"),
									value: "delay-2s",
								},
								{
									label: __("delay-3s"),
									value: "delay-3s",
								},
								{
									label: __("delay-4s"),
									value: "delay-4s",
								},
								{
									label: __("delay-5s"),
									value: "delay-5s",
								},
							]}
							onChange={(value) => {
								setAttributes({
									delay: value,
								});
							}}
						/>
						<SelectControl
							label={__("Speed", "wafelmedia-animations-blocks")}
							value={speed}
							resetValues={false}
							options={[
								{
									label: __("None"),
									value: "",
								},
								{
									label: __("slower"),
									value: "slower",
								},
								{
									label: __("slow"),
									value: "slow",
								},
								{
									label: __("fast"),
									value: "fast",
								},
								{
									label: __("faster"),
									value: "faster",
								},
								{
									label: __("fastest"),
									value: "fastest",
								},
							]}
							onChange={(value) => {
								setAttributes({
									speed: value,
								});
							}}
						/>
						<ToggleControl
							label={__("Repeat", "wafelmedia-animations-blocks")}
							checked={repeat}
							onChange={() => setAttributes({ repeat: !repeat })}
						/>
					</PanelBody>
				</InspectorControls>
			</Fragment>
		);
	};
}, "withInspectorControls");

addFilter(
	"editor.BlockEdit",
	"animation-blocks/with-sidebar-select",
	withSidebarSelect
);

/**
 * Add custom class to block in Edit
 */
const withSidebarSelectProp = createHigherOrderComponent((BlockListBlock) => {
	return (props) => {
		const { attributes } = props;
		const { animation, delay, speed } = attributes;

		var animationS = animation ? `animated ${animation}` : "";
		var delayS = delay ? ` ${delay}` : "";
		var speedS = speed ? ` ${speed}` : "";

		return (
			<BlockListBlock {...props} className={animationS + delayS + speedS} />
		);
	};
}, "withSidebarSelectProp");

addFilter(
	"editor.BlockListBlock",
	"animation-blocks/with-sidebar-select-prop",
	withSidebarSelectProp
);

/**
 * Save attribute
 * https://mariecomet.fr/en/2021/12/14/adding-options-controls-existing-gutenberg-block/
 */
const saveSidebarSelectAttribute = (extraProps, blockType, attributes) => {
	const { animation, delay, speed, repeat } = attributes;

	var repeatS = repeat === true ? "repeat" : "";

	if (repeat) {
		var animationS = animation ? `animate-${repeatS} ${animation} ` : "";
	} else {
		var animationS = animation ? `animate ${animation} ` : "";
	}
	var delayS = delay ? ` ${delay}` : "";
	var speedS = speed ? ` ${speed}` : "";

	extraProps.className = classnames(
		extraProps.className,
		animationS + delayS + speedS
	);

	return extraProps;
};

addFilter(
	"blocks.getSaveContent.extraProps",
	"animation-blocks/save-sidebar-select-attribute",
	saveSidebarSelectAttribute
);
