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