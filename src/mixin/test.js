let myMixin = {
  data() {
    return {
      msg: 'test',
      data: [
        {
          gender: 'female',
          name: {
            title: 'mrs',
            first: 'celine',
            last: 'honningsvåg',
          },
          location: {
            street: 'kittel-nielsens vei 4116',
            city: 'langangen',
            state: 'nord-trøndelag',
            postcode: '0520',
            coordinates: {
              latitude: '47.7766',
              longitude: '97.4814',
            },
            timezone: {
              offset: '-1:00',
              description: 'Azores, Cape Verde Islands',
            },
          },
          email: 'celine.honningsvåg@example.com',
          login: {
            uuid: '35860767-c79a-4533-8bed-e80664273528',
            username: 'ticklishswan568',
            password: 'town',
            salt: 'CKPuoosU',
            md5: '788b853a0fa35d6629c76a9ed9867e31',
            sha1: '43a3da9a5f02177f005919c2393d0fee779c061e',
            sha256:
              '0696521fe6a7fdf736853c2063450951859a4bdb03b633c7a02d4d430cbf4d9b',
          },
          dob: {
            date: '1944-12-14T19:55:38Z',
            age: 74,
          },
          registered: {
            date: '2008-07-15T19:25:08Z',
            age: 10,
          },
          phone: '31423151',
          cell: '92012266',
          id: {
            name: 'FN',
            value: '14124415315',
          },
          picture: {
            large: 'https://randomuser.me/api/portraits/women/40.jpg',
            medium: 'https://randomuser.me/api/portraits/med/women/40.jpg',
            thumbnail: 'https://randomuser.me/api/portraits/thumb/women/40.jpg',
          },
          nat: 'NO',
        },
      ],
      pagination: {},
      loading: false,
    }
  },
  // render: function(h) {
  //   return (
  //     <div>
  //       <a-checkbox onChange={e => this.onChange(e)}>Checkbox</a-checkbox>
  //       <span onClick={() => this.test()}>123</span>
  //     </div>
  //   )
  // },
  render: function(h) {
    return (
      <a-table
        columns={this.columns}
        rowKey={(record) => record.login.uuid}
        dataSource={this.data}
        pagination={this.pagination}
        loading={this.loading}
        onChange={() => this.handleTableChange}
      />
    )
  },
  methods: {
    handleTableChange(pagination, filters, sorter) {
      console.log(pagination)
      const pager = { ...this.pagination }
      pager.current = pagination.current
      this.pagination = pager
      this.fetch({
        results: pagination.pageSize,
        page: pagination.current,
        sortField: sorter.field,
        sortOrder: sorter.order,
        ...filters,
      })
    },
    fetch(params = {}) {
      console.log('params:', params)
      this.loading = true
    },
    onChange(e) {
      console.log(e)
    },
    test() {
      console.log('dddd')
    }    
  },
  created() {
    console.log(this.msg)
  },
}
export { myMixin }
