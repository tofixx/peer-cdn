// Middleware used for install and activate
export default function applyMiddleware(...middlewares) {
  return async event => {
    return await compose(...middlewares)(event);
  };
}

// Compose used for install and activate
export function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg;
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce((a, b) => async (...args) => await b(await a(...args)));
}
