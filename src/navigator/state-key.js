import { nativeHistory } from './native';
import { KEY_NAME, MODAL_KEY_NAME } from '../constant';

export function getCurrentStateKey () {
  const state = nativeHistory.state;
  if (state && typeof state[KEY_NAME] === 'number') {
    return state[KEY_NAME];
  }
  return 1;
}

export function getCurrModaKey(){
  const state = nativeHistory.state;
  if(state && typeof state[MODAL_KEY_NAME] === 'number'){
    return state[MODAL_KEY_NAME];
  }
  return 0;
}

export function genStateKey () {
  return getCurrentStateKey() + 1;
}

export function getCurrState() {
  return {
    key: getCurrentStateKey(),
    modalKey: getCurrModaKey()
  };
}

let _preState = getCurrState();

export function getPreState() {
  return Object.assign({}, _preState);
}

function _setPreState(state) {
  _preState = Object.assign({}, state);
}

export function updatePreState() {
  _setPreState(getCurrState());
}

// let _preKey = getCurrentStateKey();
// export function get2PreStateKey () {
//   return _preKey;
// }

// export function set2PreStateKey (key) {
//   _preKey = key;
// }

