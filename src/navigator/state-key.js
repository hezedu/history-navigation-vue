import { nativeHistory } from './native';

export const KEY_NAME = '_h_n_key';
export function getCurrentStateKey () {
  const state = nativeHistory.state;
  if (state && typeof state[KEY_NAME] === 'number') {
    return state[KEY_NAME];
  }
  return 0;
}

export function genStateKey () {
  return getCurrentStateKey() + 1;
}

let _preKey = getCurrentStateKey();

export function getPreStateKey () {
  return _preKey;
}

export function setPreStateKey (key) {
  _preKey = key;
}

