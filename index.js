import $ from 'jquery'
import summernote from './node_modules/summernote/dist/summernote-lite'
import './node_modules/summernote/dist/summernote-lite.css'
import './index.css'

export default {
  install (Vue, options) {
    Vue.component('vue-summernote-slim', {
      render (createElement) {
        return createElement('div')
      },
      computed: {
        summernote () {
          return $(this.$el)
        }
      },
      mounted () {
        $(this.$el).summernote()
      },
      created () {
        $(this.$el).summernote()
      },
      methods: {
        getVal () {
          var data  = $(this.$el).summernote('code')
          return data
        },
        run (code, value) {
          if (value == undefined) {
            $(this.$el).summernote(code)
          } else {
            $(this.$el).summernote(code, value)
          }
        }
      }
    })
  }
}