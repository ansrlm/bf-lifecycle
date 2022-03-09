# bf-lifecycle

A class helps to trigger callback functions by history traversal

[![NPM](https://img.shields.io/npm/v/bf-lifecycle.svg)](https://www.npmjs.com/package/bf-lifecycle) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Examples of technology application
<ul dir="auto">
<li>Google</li>
	
</br>![example1](https://user-images.githubusercontent.com/28749913/157390526-95f069e4-e7d0-4df8-86e5-2095e8d2f541.gif)
<li>Naver</li>

</br>![example2](https://user-images.githubusercontent.com/28749913/157390565-433da026-29da-4041-8d48-43ca4ddc2bdf.gif)
</ul>

## Install

```bash
npm install --save bf-lifecycle
```

## Usage

```ts
import BackForwardLifecycle from 'bf-lifecycle';

const bfLifecycle = new BackForwardLifecycle({
	callback: () => {
		// callback function after restoring from the cases - bfcache or session storage
	},
	storeStatus: () => {
		// hook to store
	},
	restoreStatus: () => {
		let data;
		// hook to restore
		return data;
	},
	options: {
		hasDependency: true, // strict checker: did session.getItem go well?
		withClearScrollWillNotStoreBfCache: true, // clear scroll: includes reloading page
	},
});

bfLifecycle.mount();
```

## Demo

[Here](https://ansrlm.github.io/bf-lifecycle) is the demo of bf-lifecycle

```html
<a href="ansrlm.github.io/bf-lifecycle" />
```

## Upcoming

Soon be added time-expire function on bf-lifecycle v1.1.0

Then bf-lifecycle will support react framework as hook (expect in v2.1.0)

## License

MIT © [ansrlm](https://github.com/ansrlm)
