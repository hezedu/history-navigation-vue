export function def(dest, src, key, defValue){
  let v = src[key];
  dest[key] = v === undefined ? defValue : v;
}

export function throwErr(msg){
  throw new Error(`history-navigation-vue: ${msg}`);
}

