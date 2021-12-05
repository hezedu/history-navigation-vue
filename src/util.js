export function noop() {}

export function def(dest, src, key, defValue){
  let v = src[key];
  dest[key] = v === undefined ? defValue : v;
}

// export function defNew(defObj, src){
//   const dest = Object.create(null);
//   const keys = Object.keys(defObj);
//   const len = keys.length;
//   let i = 0, k;
//   for(; i < len; i++){
//     k = keys[i];
//     def(dest, src, k, defObj[k]);
//   }
//   return dest;
// }

export function throwErr(msg){
  throw new Error(`history-navigation-vue: ${msg}`);
}

export function getVueV(_Vue){
  let v = _Vue.version;
  v = v.substr(0, v.indexOf('.'));
  return Number(v);
}


export function _cutOffAndPush(arr, stateKey, modalCount){
  let i = 0;
  const len = arr.length;
  let v;
  for(; i < len; i++){
    v = arr[i];
    if(v[0] >= stateKey){
      break;
    }
  }
  arr.splice(i, arr.length);
  if(modalCount){
    arr.push([stateKey, modalCount]);
  }
}

export function _getModalSteps(arr, startState, endState){
  console.log('startState', startState, 'endState', endState);
  let i = _findCrumbsIndex(arr, startState.key);

  const endIndex = _findCrumbsIndex(arr, endState.key);
  let count = 0;
  const startCrumb = arr[i];
  if(startCrumb && startCrumb[0] === startState.key){
    count = arr[i][1] - startState.modalKey;
  }
  count = count + endState.modalKey;
  i = i + 1;
  for(; i < endIndex; i++){
    count = count + arr[i][1];
  }
  return count;
}

export function _getTotalSteps(arr, startState, endState){
  const modals = _getModalSteps(arr, startState, endState);
  return modals + (endState.key - startState.key);
}

export function _findCrumbsIndex(arr, stateKey){
  let i = 0;
  const len = arr.length;
  for(; i < len; i++){
    if(arr[i][0] >= stateKey){
      break;
    }
  }
  return i;
}