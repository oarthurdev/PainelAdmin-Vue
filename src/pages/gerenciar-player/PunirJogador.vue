<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/1.0.18/vue.min.js"></script>
<template>
  <div>
    <section class="content-header">
      <h1>
        Punish Player
        <small>Enter the data below</small>
      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Dashboard</a></li>
        <li class="active">Punish Player</li>
      </ol>
    </section>
    <section class="content">
   <div class="box box-primary" data-widget="box-widget">
       
    <div class="box-body">
      <form id="form-banir-jogador" name="form-banir-jogador" v-on:submit="clickBtn">
      <div class="form-group">
        <label for="idPlayer">ID</label>
        <input type="text" class="form-control" id="idPlayer" v-model="idPlayer" aria-describedby="idPlayerHelp" placeholder="Enter a username to ban" required>
      </div>
      <div class="form-group">
        <label for="motivoBanimento">Punishment Reason</label>
        <input type="text" class="form-control" v-model="motivo" id="motivoBanimento" placeholder="Enter a reason" required>
      </div>
      <div class="form-group">
        <label for="tipoPunicao">Type of Punishment</label>
        <select class="form-control" v-model="tipoPunicao" id="tipoPunicao" required>
          <option value="0">Alert</option>
          <option value="1">Ban</option>
          <option value="2">Desban</option>
          </select>
      </div>
      <div class="form-group">
        <label for="dataBanimento">Date of Desban</label>
        <input type="date" class="form-control" v-model="dataDesban" id="dataBanimento" required>
      </div>
      <button type="submit" class="btn btn-primary">Punish player</button>
    </form>
    </div>
    </div>
    <row>
      <div class="col-md-12">
        <div class="callout callout-warning alert-carregando mgtp-5px" name="alert-carregando" id="alert-carregando" role="alert">
            <p class="color-black">Loading, wait a minute...</p>
        </div>
        <div class="callout callout-danger uspass-wrong mgtp-5px" name="alert-wrong" id="alert-wrong" role="alert">
            <p class="color-black">Username <b>{{idPlayer}}</b> was not found, please enter the correct username.</p>
          </div>
          <div class="callout callout-success alert-logando mgtp-5px" name="alert-success" id="alert-success" role="alert">
          <p class="color-black">Punishment sent to <b>{{idPlayer}}.</b></p>
        </div>
        <div class="callout callout-danger alert-logando mgtp-5px alert" name="alert-success-banned" id="alert-success-banned" role="alert">
          <p class="color-black"><b>{{idPlayer}}</b> successfully banned.</p>
        </div>
        <div class="callout callout-success alert-logando mgtp-5px alert" name="alert-success-desbanned" id="alert-success-desbanned" role="alert">
          <p class="color-black"><b>{{idPlayer}}</b> successfully desbanned.</p>
        </div>
        <div class="callout callout-warning alert-logando mgtp-5px alert" name="alert-success-alerted" id="alert-success-alerted" role="alert">
          <p class="color-black"><b>{{idPlayer}}</b> successfully alerted.</p>
        </div>
      </div>
    </row>
  </section>
  </div>
</template>
<script>
/* eslint-disable no-unused-vars */
export default {
  name: 'login',
  data () {
    return {
      msgHello: 'Hello',
      msgBye: 'Bye',
      loading: false,
      banidoPor: '',
      tipoPunicao: 0,
      idPlayer: '',
      dataDesban: '',
      motivo: ''
    }
  },
  mounted () {
    this.banidoPor = localStorage.getItem('username')
  },
  methods: {
    clickBtn (e) {
      e.preventDefault()
      $('#alert-carregando').show()
      let vm = this
      console.log('submit')
      this.$http
        .post('banir-jogador-success', { idPlayer: this.idPlayer, motivo: this.motivo, tipoPunicao: this.tipoPunicao, dataDesban: this.dataDesban, banidoPor: this.banidoPor })
        .then(function (result) {
          console.log(result)
          if (result.data) {
            if (vm.tipoPunicao === 0) {
              $('#alert-carregando').hide()
              $('#alert-success').hide()
              $('#alert-success-alerted').show()
              setTimeout(function () {
                $('#alert-success-alerted').hide()
              }, 5000)
            } else if (vm.tipoPunicao === '1') {
              $('#alert-carregando').hide()
              $('#alert-success').hide()
              $('#alert-success-banned').show()
              setTimeout(function () {
                $('#alert-success-banned').hide()
              }, 5000)
            } else if (vm.tipoPunicao === '2') {
              $('#alert-carregando').hide()
              $('#alert-success').hide()
              $('#alert-success-desbanned').show()
              setTimeout(function () {
                $('#alert-success-desbanned').hide()
              }, 5000)
            }
          } else {
            $('#alert-carregando').hide()
            $('#alert-wrong').show()
            setTimeout(function () {
              $('#alert-wrong').hide()
            }, 5000)
            return false
          }
        })
    }
  }
}
</script>
