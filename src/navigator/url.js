import {nativeLocation } from './native';
function URL({isHashMode = true, base = '/'}){
  this.isHashMode = isHashMode;
  this.base = base;
  this._location = nativeLocation;
  if(isHashMode){
    this.hashBase = this._location.pathname + this._location.search + '#';
  }
  
}

URL.prototype.getHashUrlByLocation = function(){
  let url = this._location.hash;
  if(url.length > 0){
    url = url.substr(1);
  }
  return url;
}

URL.prototype.getUrlByLocation = function(){
  if(this.isHashMode){
    return this.getHashUrlByLocation();
  }
  return this._location.pathname + this._location.search;
}

URL.prototype.getRouteByLocation = function(){
  return urlParse(this.getUrlByLocation());
}


URL.prototype.toLocationUrl = function(fullPath){
  return this.isHashMode ? (this.hashBase + fullPath) : fullPath;
}


export function urlParse(url){
  let i = url.indexOf('?');
  let obj = Object.create(null);
  let path, qsString;
  if(i !== -1){
    path = url.substr(0, i);
    qsString = url.substr(i + 1);
  } else {
    path = url;
    qsString = '';
  }
  obj.query = queryParse(url.qsString);
  return {
    path,
    query: queryParse(qsString)
  }
}

export function fullUrlParse(userUrl){
  let route, fullPath, trimedPath;
  if(typeof userUrl === 'string'){
    route = urlParse(userUrl);
    fullPath = userUrl;
  } else {
    route = trimRoute(userUrl);
    fullPath = _urlStringify(route);
  }
  trimedPath = trimSlash(route.path);
  return Object.assign({
    fullPath,
    trimedPath
  }, route);
}

function trimRoute(route){
  if(route.path.indexOf('?') === -1){
    return route;
  }
  let _route = urlParse(route.path);
  Object.assign(_route.query, route.query);
  return _route;
}

export function urlStringify(route){
  return _urlStringify(trimRoute(route));
}

function _urlStringify(route){
  let queryStr = queryStringify(route.query);
  if(queryStr) {
    queryStr = '?' + queryStr;
  }
  return route.path + queryStr;
}

function queryParse(qsString){
  const map = Object.create(null);
  if(!qsString || (typeof qsString === 'string' && qsString.length === 0)){
    return map;
  }
  const arr = qsString.split('&');
  let i = 0, len = arr.length, v;
  for(; i < len; i++){
    v = arr[i];
    v = v.split('=');
    map[v[0]] = decodeURIComponent(v[1]);
  }
  return map;
}

function queryStringify(obj){
  let arr = [];
  Object.keys(obj).forEach(k => {
    arr.push(k + '=' + encodeURIComponent(obj[k]));
  });
  return arr.join('&');
}

// function pathJoin(str1, str2){
//   return trimSlash(str1 + '/' + str2);
// }

export function trimSlash(pathStr){
  let arr = pathStr.split('/');
  arr = arr.filter(v => v !== '');
  return arr.join('/');
}

export default URL;