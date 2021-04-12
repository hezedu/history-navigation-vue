export const nativeWindow = window;
export const nativeHistory = window.history;

if(!nativeHistory || !nativeHistory.pushState){
  throw new Error('multi required history.pushState API');
}

export const nativeLocation = window.location;