<template>
  <div id="app">
    <div class="fixed top-0 w-100 z-1 flex-none flex flex-row items-center pv3 ph4 bg-blue white">
      <div class="flex-fill">
        <a :href="'https://github.com/dzwillia/vue-simple-spinner/releases/tag/v'+version" class="white no-underline underline-hover">vue-simple-spinner {{version}}</a>
      </div>
      <div class="flex-none">
        <a href="https://github.com/dzwillia/vue-simple-spinner" rel="noopener" target="_blank" title="View on Github"><svg xmlns="http://www.w3.org/2000/svg" fill="white" width="32" height="32" viewBox="0 0 16 16"><path d="M8 .198c-4.418 0-8 3.582-8 8 0 3.535 2.292 6.533 5.47 7.59.4.075.548-.173.548-.384 0-.19-.008-.82-.01-1.49-2.227.485-2.696-.943-2.696-.943-.364-.924-.888-1.17-.888-1.17-.726-.497.055-.486.055-.486.802.056 1.225.824 1.225.824.714 1.223 1.872.87 2.328.665.072-.517.28-.87.508-1.07-1.776-.202-3.644-.888-3.644-3.954 0-.874.313-1.588.824-2.148-.083-.202-.357-1.015.077-2.117 0 0 .672-.215 2.2.82.64-.177 1.323-.266 2.003-.27.68.004 1.365.093 2.004.27 1.527-1.035 2.198-.82 2.198-.82.435 1.102.162 1.916.08 2.117.512.56.822 1.274.822 2.147 0 3.072-1.872 3.748-3.653 3.946.288.248.544.735.544 1.48 0 1.07-.01 1.933-.01 2.196 0 .213.145.462.55.384 3.178-1.06 5.467-4.057 5.467-7.59 0-4.418-3.58-8-8-8z"></path></svg></a>
      </div>
    </div>
    <div class="flex-fill" style="padding-bottom: 10rem">
      <!-- allow a 3rem padding when resizing browser horizontally and approaching Tachyon's large media breakpoint (60em) -->
      <div class="mb5 center" style="max-width: 57rem">

        <div class="pt5 nb5" id="default-spinners">
          <a href="#default-spinners" :class="header_cls">
            <h2 class="ma0 pb2 f2 fw4 lh-1">Default Spinners</h2>
            <p class="ma0 lh-copy f6">Spinners can be used with either no configuration or very little configuration.</p>
          </a>
          <div :class="box_cls" :style="box_style">
            <div :class="label_cls">Default spinner</div>
            <spinner></spinner>
          </div>
          <div :class="box_cls" :style="box_style">
            <div :class="label_cls">Default spinner with message</div>
            <spinner message="Loading..."></spinner>
          </div>
        </div>

        <div class="pt5 nb5" id="standard-sizes">
          <a href="#standard-sizes" :class="header_cls">
            <h2 class="ma0 pb2 f2 fw4 lh-1">Standard Sizes</h2>
            <p class="ma0 lh-copy f6">Spinners come with some standard sizes which size both the spinner element as well as the message text.</p>
          </a>
          <div :class="box_cls" :style="box_style">
            <div :class="label_cls">Tiny spinner</div>
            <spinner size="tiny" message="Loading..."></spinner>
          </div>
          <div :class="box_cls" :style="box_style">
            <div :class="label_cls">Small spinner</div>
            <spinner size="small" message="Loading..."></spinner>
          </div>
          <div :class="box_cls" :style="box_style">
            <div :class="label_cls">Medium spinner</div>
            <spinner size="medium" message="Loading..."></spinner>
          </div>
          <div :class="box_cls" :style="box_style">
            <div :class="label_cls">Large spinner</div>
            <spinner size="large" message="Loading..."></spinner>
          </div>
          <div :class="box_cls" :style="box_style">
            <div :class="label_cls">Big spinner</div>
            <spinner size="big" message="Loading..."></spinner>
          </div>
          <div :class="box_cls" :style="box_style">
            <div :class="label_cls">Huge spinner</div>
            <spinner size="huge" message="Loading..."></spinner>
          </div>
          <div :class="box_cls" :style="box_style">
            <div :class="label_cls">Massive spinner</div>
            <spinner size="massive" message="Loading..."></spinner>
          </div>
        </div>

        <div class="pt5 nb5" id="custom-sizes">
          <a href="#custom-sizes" :class="header_cls">
            <h2 class="ma0 pb2 f2 fw4 lh-1">Custom Sizes</h2>
            <p class="ma0 lh-copy f6">Spinners can also have any arbitrary size (both overall size as well as line size).</p>
          </a>
          <div :class="box_cls" :style="box_style">
            <div :class="label_cls">Custom size (55px)</div>
            <spinner :size="55"></spinner>
          </div>
          <div :class="box_cls" :style="box_style">
            <div :class="label_cls">Custom size (88px)</div>
            <spinner :size="88"></spinner>
          </div>
          <div :class="box_cls" :style="box_style">
            <div :class="label_cls">Custom line size (7px)</div>
            <spinner :line-size="7"></spinner>
          </div>
          <div :class="box_cls" :style="box_style">
            <div :class="label_cls">Custom line size (12px)</div>
            <spinner :line-size="12"></spinner>
          </div>
          <div :class="box_cls" :style="box_style">
            <div :class="label_cls">Both custom size and line size (55px and 7px respectively)</div>
            <spinner :size="55" :line-size="7"></spinner>
          </div>
          <div :class="box_cls" :style="box_style">
            <div :class="label_cls">Both custom size and line size (88px and 12px respectively)</div>
            <spinner :size="88" :line-size="12"></spinner>
          </div>
        </div>

        <div class="pt5 nb5" id="custom-colors">
          <a href="#custom-colors" :class="header_cls">
            <h2 class="ma0 pb2 f2 fw4 lh-1">Custom Colors</h2>
            <p class="ma0 lh-copy f6">Line foreground, line background and message text colors can all be changed.</p>
          </a>
          <div :class="box_cls" :style="box_style">
            <div :class="label_cls">Line foreground color</div>
            <spinner line-fg-color="#009900"></spinner>
          </div>
          <div :class="box_cls" :style="box_style">
            <div :class="label_cls">Line background color</div>
            <spinner line-bg-color="#555555"></spinner>
          </div>
          <div :class="box_cls" :style="box_style">
            <div :class="label_cls">Line foreground and background colors</div>
            <spinner line-fg-color="#009900" line-bg-color="#555555"></spinner>
          </div>
        </div>

        <div class="pt5 nb5" id="custom-speeds">
          <a href="#custom-speeds" :class="header_cls">
            <h2 class="ma0 pb2 f2 fw4 lh-1">Custom Speeds</h2>
            <p class="ma0 lh-copy f6">The speed of the spinner can be changed to any arbitrary speed.</p>
          </a>
          <div :class="box_cls" :style="box_style">
            <div :class="label_cls">Fast (0.4s)</div>
            <spinner :speed="0.4"></spinner>
          </div>
          <div :class="box_cls" :style="box_style">
            <div :class="label_cls">Slow (2s)</div>
            <spinner :speed="2"></spinner>
          </div>
          <div :class="box_cls" :style="box_style">
            <div :class="label_cls">Very slow (6s)</div>
            <spinner :speed="6"></spinner>
          </div>
        </div>

        <div class="pt5 nb5" id="custom-messages">
          <a href="#custom-messages" :class="header_cls">
            <h2 class="ma0 pb2 f2 fw4 lh-1">Custom Messages</h2>
            <p class="ma0 lh-copy f6">The spacing, font size and color of the message can be changed.</p>
          </a>
          <div :class="box_cls" :style="box_style">
            <div :class="label_cls">Spacing (55px)</div>
            <spinner :spacing="55" message="I'm 55px below the spinner"></spinner>
          </div>
          <div :class="box_cls" :style="box_style">
            <div :class="label_cls">Font size (20px)</div>
            <spinner :font-size="20" message="I'm a 20px font size"></spinner>
          </div>
          <div :class="box_cls" :style="box_style">
            <div :class="label_cls">Font color (#009900)</div>
            <spinner text-fg-color="#009900" message="I'm #009900 green!"></spinner>
          </div>
        </div>

        <div class="pt5 nb5" id="layout-inside-parent">
          <a href="#layout-inside-parent" :class="header_cls">
            <h2 class="ma0 pb2 f2 fw4 lh-1">Layout Inside Parent</h2>
            <p class="ma0 lh-copy f6">Easily change the location of the spinner inside its parent element. The spinner element's CSS is very unopinionated which allows for easy application of CSS or inline styles to position it. In general, most positioning can happen by changing styles on the parent element.</p>
          </a>
          <div :class="box_cls" :style="box_style">
            <div :class="label_cls">Center-aligned (default)</div>
            <spinner></spinner>
          </div>
          <div :class="box_cls" :style="box_style">
            <div :class="label_cls">Left-aligned</div>
            <div class="tl">
              <spinner class="dib"></spinner>
            </div>
          </div>
          <div :class="box_cls" :style="box_style">
            <div :class="label_cls">Right-aligned</div>
            <div class="tr">
              <spinner class="dib"></spinner>
            </div>
          </div>
          <div :class="box_cls" :style="box_style">
            <div :class="label_cls">Centered vertically and horizontally</div>
            <div class="flex flex-column items-center justify-center h4 bg-black-40">
              <spinner></spinner>
            </div>
          </div>
          <div :class="box_cls" :style="box_style">
            <div :class="label_cls">Bottom-left corner</div>
            <div class="flex flex-column items-start justify-end h4 bg-black-40">
              <spinner class="ma3"></spinner>
            </div>
          </div>
          <div :class="box_cls" :style="box_style">
            <div :class="label_cls">Centered at bottom</div>
            <div class="flex flex-column items-center justify-end h4 bg-black-40">
              <spinner class="ma3"></spinner>
            </div>
          </div>
          <div :class="box_cls" :style="box_style">
            <div :class="label_cls">Bottom-right corner</div>
            <div class="flex flex-column items-end justify-end h4 bg-black-40">
              <spinner class="ma3"></spinner>
            </div>
          </div>
        </div>

        <div class="pt5 nb5" id="full-power-of-vuejs">
          <a href="#full-power-of-vuejs" :class="header_cls">
            <h2 class="ma0 pb2 f2 fw4 lh-1">Full Power of Vue.js</h2>
            <p class="ma0 lh-copy f6">With the power of the Vue.js virtual DOM, properties can be updated without needing to re-render the entire component.</p>
          </a>
          <div :class="box_cls" :style="box_style">
            <div :class="label_cls">
              <span>Values change every 4 seconds</span>
              <div class="mv2" style="font-size: 12px">
                <table class="collapse">
                  <thead>
                    <tr>
                      <th class="tl bg-near-white" :class="cell_cls">Property</th>
                      <th class="tl bg-near-white" :class="cell_cls">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td :class="cell_cls">Size:</td>
                      <td :class="cell_cls">{{spinner_size}}px</td>
                    </tr>
                    <tr>
                      <td :class="cell_cls">Line Size:</td>
                      <td :class="cell_cls">{{spinner_line_size}}px</td>
                    </tr>
                    <tr>
                      <td :class="cell_cls">Line Foreground Color:</td>
                      <td :class="cell_cls">{{spinner_line_fg_color}}</td>
                    </tr>
                    <tr>
                      <td :class="cell_cls">Line Background Color:</td>
                      <td :class="cell_cls">{{spinner_line_bg_color}}</td>
                    </tr>
                    <tr>
                      <td :class="cell_cls">Speed:</td>
                      <td :class="cell_cls">{{spinner_speed}}s</td>
                    </tr>
                    <tr>
                      <td :class="cell_cls">Spacing:</td>
                      <td :class="cell_cls">{{spinner_spacing}}px</td>
                    </tr>
                    <tr>
                      <td :class="cell_cls">Message:</td>
                      <td :class="cell_cls">"{{spinner_message}}"</td>
                    </tr>
                    <tr>
                      <td :class="cell_cls">Font Size:</td>
                      <td :class="cell_cls">{{spinner_font_size}}px</td>
                    </tr>
                    <tr>
                      <td :class="cell_cls">Text Foreground Color:</td>
                      <td :class="cell_cls">{{spinner_text_fg_color}}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="mt2 mb4">
                <button type="button" class="pv2 ph3 bn br1 white bg-blue darken-10" @click="is_paused = !is_paused">
                  <span v-if="is_paused">Start</span>
                  <span v-else>Pause</span>
                </button>
              </div>
            </div>
            <spinner
              :size="spinner_size"
              :line-size="spinner_line_size"
              :line-fg-color="spinner_line_fg_color"
              :line-bg-color="spinner_line_bg_color"
              :speed="spinner_speed"
              :spacing="spinner_spacing"
              :message="spinner_message"
              :font-size="spinner_font_size"
              :text-fg-color="spinner_text_fg_color"
            ></spinner>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import Spinner from '../src/components/Spinner.vue'

  export default {
    name: 'app',
    components: {
      Spinner
    },
    data() {
      return {
        is_paused: false,
        spinner_line_fg_color: undefined,
        spinner_line_bg_color: undefined,
        spinner_size: 32,
        spinner_line_size: 3,
        spinner_speed: 0.6,
        spinner_spacing: 4,
        spinner_message: "I'll start changing in 4 seconds",
        spinner_text_fg_color: undefined,
        spinner_font_size: 13
      }
    },
    computed: {
      version() {
        return VERSION
      },
      header_cls() {
        return 'db mt5 pb3 dark-gray hover-blue lh-1 no-underline'
      },
      box_cls() {
        return 'db pt3 pb5 ph3 ph0-l bt b--black-10 relative'
      },
      box_style() {
        return 'min-height: 100px'
      },
      label_cls() {
        return 'mb4 f6 fw6 dark-gray'
      },
      cell_cls() {
        return 'ph1 pv1 ba b--moon-gray'
      }
    },
    mounted() {
      var seconds = 0

      setInterval(() => {
        if (this.is_paused)
          return

        seconds += 4

        this.spinner_line_fg_color = '#'+(Math.random()*0xFFFFFF<<0).toString(16)
        this.spinner_line_bg_color = '#'+(Math.random()*0xFFFFFF<<0).toString(16)
        this.spinner_size = Math.ceil(Math.random() * 100) + 10
        this.spinner_line_size = Math.ceil(Math.random() * 20) + 1
        this.spinner_speed = Math.round(Math.random() * 1000)/100

        this.spinner_spacing = Math.floor(Math.random() * 60)
        this.spinner_message = "I've been running for "+seconds+" seconds"
        this.spinner_text_fg_color = '#'+(Math.random()*0xFFFFFF<<0).toString(16)
        this.spinner_font_size = Math.ceil(Math.random() * 30) + 10
      }, 4000)
    }
  }
</script>

<style>
  html, body {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 100%;
  }

  html {
    height: 100%;
  }

  body {
    overflow: auto;
    position: relative;
  }

  .b--moon-gray {
    border-color: #ccc;
  }

  .flex-fill {
    flex: 1 1;
    min-width: 0; /* 1 */
    min-height: 0; /* 1 */
  }

  .darken-10:hover,
  .darken-10:focus {
    box-shadow: inset 9999px 9999px rgba(0,0,0,0.10)
  }

  .darken-10:active {
    box-shadow: inset 9999px 9999px rgba(0,0,0,0.20)
  }

  .lh-1 {
    line-height: 1;
  }
</style>
