---
title: "useState: Lazy Initial State"
date: 2022-10-16
---

The `initialState` argument is the state used during the initial render. In subsequent renders, it is disregarded. **If the initial state is the result of an expensive computation, you may provide a function instead, which will be executed only on the initial render**:

```js
const [state, setState] = useState(() => {
  const initialState = someExpensiveComputation(props);
  return initialState;
});
```

[docs](https://reactjs.org/docs/hooks-reference.html#lazy-initial-state)
