// app.js
import Vue from 'vue'
import _createApp from '../../examples/create_app'
export function createApp () {

  const app = _createApp(Vue, {
    urlIsHashMode: true
  });

  // θΏε app ε router
  return { app }
}