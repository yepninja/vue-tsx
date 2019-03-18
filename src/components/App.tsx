import tsx from 'vue-tsx-support'
import Vue, { VNode } from 'vue'
// import {Button} from 'iview'
import {Button} from 'element-ui'
// import {Button} from 'vuetify'

const App = tsx.component({
  data () {
    return {
      msg: 'Hello'
    }
  },
  methods: {
    // need annotation due to `this` in return type
    greet (): string {
      return this.msg + ' world'
    }
  },
  computed: {
    // need annotation
    greeting(): string {
      return this.greet() + '!'
    }
  },
  // `createElement` is inferred, but `render` needs return type
  render (createElement): VNode {
    return (
      <div>
        <div>{this.greeting}</div>
        <Button>hello</Button>
      </div>
    )
  }
})

export default App