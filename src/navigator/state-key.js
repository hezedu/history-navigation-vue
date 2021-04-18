import { nativeHistory } from './native';

export const KEY_NAME = '_h_n_key';
export function getCurrentStateKey () {
  const state = nativeHistory.state;
  if (state && typeof state[KEY_NAME] === 'number') {
    return state[KEY_NAME];
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

