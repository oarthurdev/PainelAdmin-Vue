<template>
  <div class="box box-primary" data-widget="box-widget">
    <div class="box-header">
      <h3 class="box-title">Latest users</h3>
        <div class="box-tools pull-right">
          <span class="label label-danger">{{usuariosNovos}} {{usuariosNovos == 1 ? 'New User' : 'New Users'}}</span>
          <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
          </button>
          <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
        </div>
    </div>
    <div class="box-body">
    <div class="table table-striped table-bordered table-hover">
     <div class="col-sm-3 col-xs-6" v-for="item in listaIds" :key="item.uid">
        <div class="description-block border-right">
          <font size="2px" style="font-weight: bold;">{{item.uid}}</font><br>
          <font size="2px" color="grey">{{moment(item.rday).calendar()}}</font>
        </div>
        <!-- /.description-block -->
      </div>
      <!-- <table id="players" class="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>Account Name</th>
            <th>Data de Cadastro</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in listaIds" :key="item.uid">
            <th style="font-weight: bold;">
              <font size="2px">{{item.uid}}</font>
            </th>
            <th style="font-weight: normal;">
              <font size="2px" color="grey">{{moment(item.rday).calendar()}}</font>
            </th>
          </tr>
        </tbody>
      </table> -->
    </div>
  </div>
</div>
</template>
<script>
import moment from 'moment'
moment.locale('pt-br')
moment.updateLocale('en', {
  calendar: {
    lastDay: '[Ontem]',
    sameDay: '[Hoje]',
    nextDay: '[Amanha]',
    lastWeek: 'DD MMM',
    nextWeek: '[Next] dddd',
    sameElse: 'DD MMM'
  }
})
export default {
  name: 'usuariosRegistrados',
  props: [
    'usuariosNovos',
    'listaIds'
  ],
  methods: {
    moment (...args) {
      return moment(...args)
    }
  }
}
</script>
