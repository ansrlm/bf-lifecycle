# bf-lifecycle

> a class trigger callback functions by history traversal

[![NPM](https://img.shields.io/npm/v/bf-lifecycle.svg)](https://www.npmjs.com/package/bf-lifecycle) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

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

[Here](https://ansrlm.github.io/bf-lifecycle) is the demo of infinitescroll

```html
<a href="ansrlm.github.io/bf-lifecycle" />
```

## Upcoming

Soon be added time-expire function on bf-lifecycle v1.1.0

Then bf-lifecycle will support react framework as hook (expect in v2.1.0)

## License

MIT © [ansrlm](https://github.com/ansrlm)
