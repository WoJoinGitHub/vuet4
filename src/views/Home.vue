
<script>
// @ is an alias to /src
import test from '@/mixin/test.vue'

export default {
  name: 'home',
  // mixins: [test]
   extends: test,
}
</script>
