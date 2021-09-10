<template>
<div>
    <section class="content-header">
      <h1>
        Find ID
        <small>Enter the data below</small>
      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Dashboard</a></li>
        <li class="active">Find ID</li>
      </ol>
    </section>
    <section class="content">
      <div class="box box-primary" data-widget="box-widget">
        <div class="box-header">
          <h3 class="box-title">Search</h3>
        </div>
        <form name="formProcurarJogador" v-on:submit="clickBtn" method="POST" id="formDescobrirID">
          <div class="box-body">
              <div class="form-group">
                  <input type="text" name="nick" v-model="nick" id="nick" class="form-control" placeholder="Enter the player's nickname" required />
            </div>
            <div class="form-group">
                  <button type="submit" class="form-control btn-primary"><font size="3px" style="padding-right: 3px;">Search</font>&nbsp;<i class="fa fa-search" style="font-size:20px"></i></button>
            </div>
            <div class="callout callout-danger uspass-wrong mgtp-5px" name="alert-wrong" id="alert-wrong" role="alert">
              <p class="color-black">Nickname <b>{{nick}}</b> not found, try another.</p>
            </div>
            <div class="callout callout-warning alert-carregando mgtp-5px" name="alert-carregando" id="alert-carregando" role="alert">
              <p class="color-black">Loading, please wait a minute...</p>
            </div>
          </div>
        </form>
      </div>
    </section>
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
        <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel"><b><font color="red">{{nick}}'s</font> ID</b></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        </button>
        </div>
        <div class="modal-body">
        ID : <b>{{id}}</b>
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-dismiss="modal">OK</button>
        </div>
        </div>
    </div>
</div>
</div>
</template>
<script>
export default {
  data () {
    return {
      msgHello: 'Hello',
      msgBye: 'Bye',
      loading: false,
      nick: '',
      id: ''
    }
  },
  methods: {
    clickBtn (e) {
      e.preventDefault()
      $('#alert-carregando').show()
      let vm = this
      console.log('submit')
      this.$http
        .post('descobrir-id', { nick: this.nick })
        .then(function (result) {
          if (result.data) {
            $('#alert-carregando').hide()
            console.log(result.data)
            vm.id = result.data.id
            $('#exampleModal').modal('show')
          } else {
            $('#alert-carregando').hide()
            console.log(result.data)
            $('#alert-wrong').show()
            setTimeout(function () {
              $('#alert-wrong').hide()
            }, 3000)
            return false
          }
        })
    }
  }
}
</script>
