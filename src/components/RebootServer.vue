<template>
  <div v-if="permission == 4">
    <div class="modal fade" id="rebootServerConfirmation" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
        <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel"><b>Are you sure?</b></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        </button>
        </div>
        <div class="modal-body">
            Do you really want to reboot the server?
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">No</button>
        <button type="button" class="btn btn-danger" id="confirm" name="confirm">Yes</button>
        </div>
        </div>
    </div>
</div>      
    <section class="content-header">
    <h1>
    Reboot Server
    <small>Click below to reboot the server</small>
    </h1>
    <ol class="breadcrumb">
    <li><a href="#"><i class="fa fa-dashboard"></i> Dashboard</a></li>
    <li class="active">Reboot Server</li>
    </ol>
</section>
<section class="content">
    <div class="box box-primary" data-widget="box-widget">
      <div class="box-header">
        <button type="submit" v-on:click="rebootServer" data-toggle="modal" data-target="#rebootServerConfirmation" class="btn btn-primary btn-large btn-block">Reboot Server</button>
      </div>
    </div>
    <div class="callout callout-danger uspass-wrong mgtp-5px" name="alert-wrong" id="alert-wrong" role="alert">
  <p class="color-black">Oops, something went wrong, try again later.</p>
  </div>
  <div class="callout callout-danger alert uspass-wrong mgtp-5px" name="alert-offline" id="alert-offline" role="alert">
  <p class="color-black">Server is offline, there is no way to reboot.</p>
  </div>
  <div class="callout callout-success alert-logando mgtp-5px" name="alert-success" id="alert-success" role="alert">
  <p class="color-black">Server rebooted successfully.</p>
  </div>
  <div class="callout callout-warning alert-carregando mgtp-5px" name="alert-carregando" id="alert-carregando" role="alert">
  <p class="color-black">Rebooting, wait a minute...</p>
  </div>
</section>
  </div>
  <div v-else>
  <section class="content-header">
    <h1>
      You do not have permission to access this page.
    </h1>
  </section>
</div>
</template>
<script>
export default {
  data () {
    return {
      permission: 0
    }
  },
  mounted () {
    let vm = this
    vm.permission = localStorage.getItem('permissao')
  },
  methods: {
    rebootServer (e) {
      let vm = this
      $('#confirm').on('click', function () {
        e.preventDefault()
        vm.$http.get('reboot-server')
        .then(function (result) {
          $('#rebootServerConfirmation').modal('hide')
          if (result.data.offline === true) {
            $('#alert-offline').show()
            $('#alert-success').hide()
            $('#alert-carregando').hide()
            setTimeout(function () {
              $('#alert-offline').hide()
            }, 5000)
            return false
          }
          if (result.data) {
            console.log(result)
            $('#alert-success').show()
            $('#alert-carregando').hide()
            setTimeout(function () {
              $('#alert-success').hide()
            }, 5000)
          } else {
            $('#alert-carregando').hide()
            $('#alert-wrong').show()
            setTimeout(function () {
              $('#alert-wrong').hide()
            }, 5000)
            return false
          }
        })
      })
    }
  }
}
</script>
