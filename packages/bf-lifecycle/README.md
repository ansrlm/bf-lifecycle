# bf-lifecycle

A class helps to trigger callback functions by history traversal

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

## License

MIT © [ansrlm](https://github.com/ansrlm)
