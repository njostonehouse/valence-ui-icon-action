**Looking for SASS-based `vui-image-action`?** It's [over here](https://github.com/Brightspace/valence-ui-image-action/tree/sass).

# vui-image-action
[![Bower version][bower-image]][bower-url]
[![Build status][ci-image]][ci-url]
[![Dependency Status][dependencies-image]][dependencies-url]

A Valence UI, [Polymer](https://www.polymer-project.org/1.0/)-based web component for image action styles.

An Image Action is a link associated with an image that performs an action when clicked.

![screenshot of image actions](/screenshots/multiple.png)


## Installation

`vui-image-action` can be installed from [Bower][bower-url]:
```shell
bower install vui-image-action
```

## Usage

Include the [webcomponents.js](http://webcomponents.org/polyfills/) "lite" polyfill (for browsers who don't natively support web components), and import `image-action.html`.

```html
<head>
	<script src="https://s.brightspace.com/lib/webcomponentsjs/0.7.21/webcomponents-lite.min.js"></script>
	<link rel="import" href="../vui-image-action/image-action.html">
</head>
```

Use the `vui-image-action` tag with the `image` attribute to specify the image to display. The child of `vui-image-action` will be used to determine the action to perform when clicked.

HTML:
```html
<vui-image-action image="img/help.svg">
	<a href="#">Help</a>
</vui-image-action>
```

Use the `vui-image-action-list` tag to group Image Actions in a list.

HTML:
```html
<vui-image-action-list>
	<vui-image-action image="img/print.svg">
		<a href="#">Print</a>
	</vui-image-action>
	<vui-image-action image="img/settings.svg">
		<a href="#">Settings</a>
	</vui-image-action>
</vui-image-action-list>

For further information on this component and other VUI components, see the docs at [ui.valence.d2l.com](http://ui.valence.d2l.com/).

#### Coding styles
See the [VUI Best Practices & Style Guide](https://github.com/Brightspace/valence-ui-docs/wiki/Best-Practices-&-Style-Guide) for information on VUI naming conventions, plus information about the [EditorConfig](http://editorconfig.org) rules used in this repo.

[bower-url]: http://bower.io/search/?q=vui-image-action
[bower-image]: https://img.shields.io/bower/v/vui-image-action.svg
[ci-url]: https://travis-ci.org/Brightspace/valence-ui-image-action
[ci-image]: https://travis-ci.org/Brightspace/valence-ui-image-action.svg?branch=master
[dependencies-url]: https://david-dm.org/brightspace/valence-ui-image-action
[dependencies-image]: https://img.shields.io/david/Brightspace/valence-ui-image-action.svg
