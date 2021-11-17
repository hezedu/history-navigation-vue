

let nativeWindow, nativeHistory, nativeLocation;
// , nativeRAF
if(typeof window !== 'undefined'){
  nativeWindow = window;
  nativeHistory = window.history;
  nativeLocation = window.location;
  // nativeRAF = window.requestAnimationFrame || setTimeout;
}
//  else {
//   // nativeRAF = function(cb){cb()};
//   // nativeRAF = setTimeout;
// }


export {nativeWindow, nativeHistory, nativeLocation}
