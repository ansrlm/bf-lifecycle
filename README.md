# bf-lifecycle

A class helps to trigger callback functions by history traversal

[![NPM](https://img.shields.io/npm/v/bf-lifecycle.svg)](https://www.npmjs.com/package/bf-lifecycle) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Applied examples

![example1](https://user-images.githubusercontent.com/28749913/204125500-3e74f3f5-1921-4b67-94ec-318b4044b0ba.gif)
![example2](https://user-images.githubusercontent.com/28749913/204125503-12373ed6-004c-48d0-8c24-eda260360770.gif)

## Install

```bash
npm install --save bf-lifecycle
```

## Usage

```ts
import BackForwardLifecycle from 'bf-lifecycle';

let data;

const bfLifecycle = new BackForwardLifecycle({
	callback: () => {
		data = 'bfcache';
	},
	storeState: () => {
		sessionStorage.setItem('data', 'nobfcache');
	},
	restoreState: () => sessionStorage.getItem('data'),
	options: {
		hasDependency: true,
		withClearScrollWillNotStoreBfCache: true,
	},
});

bfLifecycle.mount();

data = bfLifecycle.triggerRestoreState();
```

## Documentation

See [here](https://ansrlm.github.io/bf-lifecycle)

```html
<a href="ansrlm.github.io/bf-lifecycle">BF-LIFECYCLE</a>
```

## Upcoming

Soon be added time-expire function on bf-lifecycle v1.1.0

Then bf-lifecycle will support react framework as hook (expect in v2.1.0)

## License

MIT © [ansrlm](https://github.com/ansrlm)
