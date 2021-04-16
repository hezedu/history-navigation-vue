

let nativeWindow, nativeHistory, nativeLocation;

if(typeof window !== 'undefined'){
  nativeWindow = window;
  nativeHistory = window.history;
  nativeLocation = window.location;
}

export {nativeWindow, nativeHistory, nativeLocation}
