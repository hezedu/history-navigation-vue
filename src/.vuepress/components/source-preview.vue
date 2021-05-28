<template>
<span class="index_diff">
  <a :href="'https://github.com/hezedu/history-navigation-vue/blob/gh-pages/docs/examples/' + name + '.html'" target="_blank" rel="noopener noreferrer" style="margin-right: 0.5em;">Source Code<span class="open_new_win_icon"></span></a>
  <a :href="'https://hezedu.github.io/history-navigation-vue/examples/' + name + '.html'" target="_blank" rel="noopener noreferrer">Preview<span class="open_new_win_icon"></span></a>
</span> 
</template>
<script>


export default {
  props: ['name']
}
</script>
<style>
.open_new_win_icon {
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  height: 15px;
  width: 15px;
  display: inline-block;
  vertical-align: middle;
  position: relative;
  top: -1px;
  color: #aaa;
background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGFyaWEtaGlkZGVuPSJ0cnVlIiBmb2N1c2FibGU9ImZhbHNlIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNSIgY2xhc3M9Imljb24gb3V0Ym91bmQiPjxwYXRoIGZpbGw9IiNhYWEiIGQ9Ik0xOC44LDg1LjFoNTZsMCwwYzIuMiwwLDQtMS44LDQtNHYtMzJoLTh2MjhoLTQ4di00OGgyOHYtOGgtMzJsMCwwYy0yLjIsMC00LDEuOC00LDR2NTZDMTQuOCw4My4zLDE2LjYsODUuMSwxOC44LDg1LjF6Ij48L3BhdGg+IDxwb2x5Z29uIGZpbGw9IiNhYWEiIHBvaW50cz0iNDUuNyw0OC43IDUxLjMsNTQuMyA3Ny4yLDI4LjUgNzcuMiwzNy4yIDg1LjIsMzcuMiA4NS4yLDE0LjkgNjIuOCwxNC45IDYyLjgsMjIuOSA3MS41LDIyLjkiPjwvcG9seWdvbj48L3N2Zz4=");
}
</style>