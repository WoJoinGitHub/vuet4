
import { myMixin } from '../mixin/test.js'
export default {
  data () {
    return {
      columns: [
        {
          title: 'Name',
          dataIndex: 'name.first',
          sorter: true,
          width: '20%',
          customRender: text => {
            return `${text} 元`
          },
        },
        {
          title: 'Gender',
          dataIndex: 'gender',
          filters: [
            { text: 'Male', value: 'male' },
            { text: 'Female', value: 'female' },
          ],
          width: '20%',
          customRender: (text, row, index) => {
            return <a href="javascript:;">{text}{index}</a>
          },
        },
        {
          title: 'Email',
          dataIndex: 'email',
        },
      ],
    }
  },
  mixins: [myMixin],
  methods: {
    updatedAtRender (text) {
      return <span> {text}123 </span>
    },
  }
}

