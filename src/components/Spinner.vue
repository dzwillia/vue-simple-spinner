<template>
  <div :style="root_style">
    <div class="vue-simple-spinner" :style="spinner_style"></div>
    <div class="vue-simple-spinner" :style="text_style" v-if="message.length > 0">{{message}}</div>
  </div>
</template>

<script>
  var isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
  }

  export default {
    name: 'vue-simple-spinner',
    props: {
      'size': {
        // either a number (pixel width/height) or 'tiny', 'small',
        // 'medium', 'large', 'huge', 'massive' for common sizes
        default: 32
      },
      'line-size': {
        type: Number,
        default: 3
      },
      'line-bg-color': {
        type: String,
        default: '#eee'
      },
      'line-fg-color': {
        type: String,
        default: '#2196f3' // match .blue color to Material Design's 'Blue 500' color
      },
      'speed': {
        type: Number,
        default: 0.8
      },
      'spacing': {
        type: Number,
        default: 4
      },
      'message': {
        type: String,
        default: ''
      },
      'font-size': {
        type: Number,
        default: 13
      },
      'text-fg-color': {
        type: String,
        default: '#555'
      },
      'inside-parent': {
        type: Boolean,
        default: false
      }
    },
    computed: {
      size_px() {
        switch (this.size)
        {
          case 'tiny':    return 12
          case 'small':   return 16
          case 'medium':  return 32
          case 'large':   return 48
          case 'big':     return 64
          case 'huge':    return 96
          case 'massive': return 128
        }

        return isNumber(this.size) ? this.size : 32
      },
      line_size_px() {
        switch (this.size)
        {
          case 'tiny':    return 1
          case 'small':   return 2
          case 'medium':  return 3
          case 'large':   return 3
          case 'big':     return 4
          case 'huge':    return 4
          case 'massive': return 5
        }

        return isNumber(this.lineSize) ? this.lineSize : 4
      },
      text_margin_top() {
        switch (this.size)
        {
          case 'tiny':
          case 'small':
          case 'medium':
          case 'large':
          case 'big':
          case 'huge':
          case 'massive':
            return Math.min(Math.max(Math.ceil(this.size_px/8), 3), 12)
        }

        return isNumber(this.spacing) ? this.spacing : 4
      },
      text_font_size() {
        switch (this.size)
        {
          case 'tiny':
          case 'small':
          case 'medium':
          case 'large':
          case 'big':
          case 'huge':
          case 'massive':
            return Math.min(Math.max(Math.ceil(this.size_px*0.4), 11), 32)
        }

        return isNumber(this.fontSize) ? this.fontSize : 13
      },
      default_style() {
        return {
          'margin': '0 auto',
          'border-radius': '100%',
          'border': this.line_size_px+'px solid '+this.lineBgColor,
          'border-top': this.line_size_px+'px solid '+this.lineFgColor,
          'width': this.size_px+'px',
          'height': this.size_px+'px',
          'animation': 'vue-simple-spinner-spin '+this.speed+'s linear infinite'
        }
      },
      inner_style() {
        let innerStyle = this.default_style
        innerStyle.position = 'absolute'
        innerStyle.left = '0'
        innerStyle.right = '0'
        innerStyle.top = '0'
        innerStyle.bottom = '0'
        innerStyle.margin = 'auto !important'
        return innerStyle
      },
      spinner_style() {
        return this.insideParent == true ? this.inner_style : this.default_style
      },
      root_style() {
        var innerRootStyle = {
          'text-align': 'right',
          'position': 'absolute',
          'width': '100%',
          'height': '100%',
          'z-index': '5',
          'background-color': 'rgba(220, 220, 220, 0.5)'
        }
        return this.insideParent == true ? innerRootStyle : {'text-align': 'right'}
      },
      text_style() {
        return {
          'margin-top': this.text_margin_top+'px',
          'color': this.textFgColor,
          'font-size': this.text_font_size+'px',
          'text-align': 'center'
        }
      }
    }
  }
</script>

<style>
  .vue-simple-spinner {
    transition: all 0.3s linear;
  }

  @keyframes vue-simple-spinner-spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
</style>
