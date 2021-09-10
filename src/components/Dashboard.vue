<template v-on:onload="onLoadGetData">
  <div class="dashboard">
    <row>
      <div class="col-md-4 col-sm-6 col-xs-12">
        <va-small-box
          color="yellow"
          icon="ion-person-add"
          v-bind:title="contasRegistradas"
          description="Registered Accounts"
          moreText="More Info"
          moreUrl="search-user">
        </va-small-box>
      </div>
      <div class="col-md-4 col-sm-6 col-xs-12">
        <va-small-box
          color="green"
          icon="ion-person-add"
          v-bind:title="gmsRegistrados"
          description="Registered Staff Members"
          moreText="More Info"
          moreUrl="registered-staff-members">
        </va-small-box>
      </div>
      <div class="col-md-4 col-sm-6 col-xs-12">
        <va-small-box
          color="red"
          icon="ion-person"
          v-bind:title="contasBanidas"
          description="Banned Users"
          moreText="More Info"
          moreUrl="punished-players">
        </va-small-box>
      </div>
    </row>

    <row>
      <div class="col-md-12 col-sm-12 col-xs-12">
        <section class="connectedSortable ui-sortable">
        <usuarios-registrados v-bind:usuariosNovos="ultimasContasRegistradas" v-bind:listaIds="listaIds"></usuarios-registrados>
        </section>
      </div>
    </row>
  </div>
</template>

<script>
import VASmallBox from '../widgets/VASmallBox.vue'
import UsuariosRegistrados from '../widgets/UsuariosRegistrados.vue'

export default {
  name: 'dashboard',
  data () {
    return {
      'contasRegistradas': 0,
      'gmsRegistrados': 0,
      'contasBanidas': 0,
      'ultimasContasRegistradas': 0,
      'players': [],
      'listaIds': []
    }
  },
  mounted () {
    let vm = this
    this.$http.get('home',
      {
        headers: {'Authorization': localStorage.getItem('token')}}
      )
      .then(function (result) {
        if (result.data) {
          vm.listaIds = result.data.dadosUltimasIdsRegistradas
          vm.contasRegistradas = result.data.contasRegistradas
          vm.gmsRegistrados = result.data.gmsRegistrados
          vm.contasBanidas = result.data.contasBanidas
          vm.ultimasContasRegistradas = result.data.ultimasContasRegistradas
        } else {
          return false
        }
      })
  },
  components: {
    'va-small-box': VASmallBox,
    'usuarios-registrados': UsuariosRegistrados
  }
}

</script>
