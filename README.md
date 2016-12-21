# center-bg
[![npm](https://img.shields.io/npm/v/center-bg.svg)](https://www.npmjs.com/package/center-bg)
![license](https://img.shields.io/github/license/diewland/center-bg.svg)

Set any size image to div background with center alignment

### Install

```npm install center-bg```

### Example

```html
<style>
  .box {
    width: 200px; height: 200px; /* define box width, height */

    float: left;
    margin-right: 10px;
  }
</style>

<div class='box' src='./1.png'></div>
<div class='box' src='./2.png'></div>
<div class='box' src='./3.png'></div>

<script src='./center-bg.js'></script>
<script> center_bg('box'); </script>
```
