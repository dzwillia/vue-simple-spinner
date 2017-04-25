import VueSimpleSpinner from './components/Spinner.vue'

// expose component to global scope
if (typeof window !== 'undefined' && window.Vue) {
  Vue.component('vue-simple-spinner', VueSimpleSpinner)
}

export { VueSimpleSpinner }

export default VueSimpleSpinner
