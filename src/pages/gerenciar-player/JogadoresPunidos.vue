<template>
<div>
  <section class="content-header">
    <h1>
      Punished Players
    </h1>
    <ol class="breadcrumb">
      <li><a href="#"><i class="fa fa-dashboard"></i> Dashboard</a></li>
      <li class="active">Punished Players</li>
    </ol>
  </section>
  <section class="content">
    <datatable v-bind="$data" />
    <div class="box box-danger" data-widget="box-widget">
        <div class="box-body">
          <div class="table-responsive">
            <table id="players" class="table table-striped table-bordered table-hover">
              <thead>
                <tr>
                    <th>Account Name</th>
                    <th>Punishment</th>
                    <th>Reason</th>
                    <th>Date of desban</th>
                    <th>Date of ban</th>
                    <th>Banned by</th>
                </tr>
              </thead>
              <tbody>
                  <tr v-for="item in banidos" :key="item.idplayer">
                    <th class="accountname">{{item.idplayer}}</th>
                    <td class="punicao">{{item.punicao}}</td>
                    <td class="motivo">{{item.motivo}}</td>
                    <td class="dataDesban">{{moment(item.dataDesban).format('DD/MM/YYYY')}}</td>
                    <td class="data">{{moment(item.created_at).format('DD/MM/YYYY HH:mm:ss')}}</td>
                    <td class="banidoPor">{{item.banidoPor}}</td>
                  </tr>
              </tbody>
            </table>
            <center>
            </center>
          </div>
        </div>
      </div>
    </section>
</div>
</template>
<script>
import moment from 'moment'
import Paginate from 'vuejs-paginate'
import Vue from 'vue'
import Datatable from 'vue2-datatable-component'
import mockData from 'mockData'
import VuePaginator from 'vuejs-paginator'

Vue.component('datatable', Datatable)
Vue.component('paginate', Paginate)

export default {
  data () {
    return {
      msgHello: 'Hello',
      msgBye: 'Bye',
      loading: false,
      banidos: [],
      total: 0,
      query: {},
      pageNumber: 0,
      resource_url: 'local.gothicpt.com/painelgm-api-atualizada/jogadores-punidos',
      options: {
        remote_data: 'nested.data',
        remote_current_page: 'nested.current_page',
        remote_last_page: 'nested.last_page',
        remote_next_page_url: 'nested.next_page_url',
        remote_prev_page_url: 'nested.prev_page_url',
        next_button_text: 'Go Next',
        previous_button_text: 'Go Back'
      }
    }
  },
  watch: {
    query: {
      handler (query) {
        mockData(query).then(({ rows, total }) => {
          this.banidos = rows
          this.total = total
        })
      },
      deep: true
    }
  },
  components: {
    VPaginator: VuePaginator
  },
  props: {
    listData: {
      type: Array,
      required: true
    },
    size: {
      type: Number,
      required: false,
      default: 10
    }
  },
  mounted () {
    let vm = this
    this.$http.get('jogadores-punidos')
      .then(function (result) {
        if (result.data) {
          vm.banidos = result.data
          console.log(result.data)
        } else {
          return false
        }
      })
  },
  methods: {
    updateResource (data) {
      this.banidos = data
    },
    moment (...args) {
      return moment(...args)
    },
    clickCallback (pageNum) {
      console.log(pageNum)
    },
    nextPage () {
      this.pageNumber++
    },
    prevPage () {
      this.pageNumber--
    },
    pageCount () {
      let l = this.listData.length
      let s = this.size
      return Math.floor(l / s)
    },
    paginatedData () {
      const start = this.pageNumber * this.size
      const end = start + this.size
      return this.listData.slice(start, end)
    }
  }
}
</script>
<style lang="css">
.pagination {
}
.page-item {
}
</style>
