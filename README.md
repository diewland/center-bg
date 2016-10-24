# center-bg
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

<div class='box' bg='./1.png'></div>
<div class='box' bg='./2.png'></div>
<div class='box' bg='./3.png'></div>

<script src='./center-bg.js'></script>
<script> center_bg('box'); </script>
```
