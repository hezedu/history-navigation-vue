import { nativeHistory } from './native';


export function getCurrentStateKey () {
  const state = nativeHistory.state;
  if (state && typeof state._multi_key === 'number') {
    return state._multi_key;
  }
  return 1;
}

export function genStateKey () {
  return getCurrentStateKey() + 1;
}

let _key = getCurrentStateKey();

export function getStateKey () {
  return _key;
}

export function setStateKey (key) {
  _key = key;
}

