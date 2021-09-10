<template>
<div v-if="permissaoLocal >= 3">
  <section class="content-header">
    <h1>
      Register Staff Member
      <small>Enter the data below</small>
    </h1>
    <ol class="breadcrumb">
      <li><a href="#"><i class="fa fa-dashboard"></i> Dashboard</a></li>
      <li class="active">Register Staff Member</li>
    </ol>
  </section>
  <section class="content">
  <div class="box box-primary" data-widget="box-widget">
      <div class="box-body">
        <form id="form-cadastrar-gm" name="form-cadastrar-gm" v-on:submit="clickBtn">
        <div class="form-group">
          <label for="idGM">Account</label>
          <input type="text" class="form-control" id="idGM" v-model="idGM" aria-describedby="idGMHelp" placeholder="Enter a username" required>
        </div>
        <div class="form-group">
          <label for="passwordGM">Password</label>
          <input type="password" class="form-control" v-model="passwordGM" id="passwordGM" placeholder="Enter a password" required>
        </div>
        <div class="form-group">
          <label for="nickGM">Nick</label>
          <input type="text" class="form-control" v-model="nickGM" id="nickGM" placeholder="Enter a nickname" required>
        </div>
        <div class="form-group">
          <label for="nickGM">Name</label>
          <input type="text" class="form-control" v-model="nomeGM" id="nomeGM" placeholder="Enter a name" required>
        </div>
      <div class="form-group">
          <label for="cargoGM">Role</label>
          <select class="form-control" v-model="cargoGM" id="cargoGM" required>
            <option value="Manager">Manager</option>
            <option value="Administrator">Administrator</option>
            <option value="Programmer">Programmer</option>
            <option value="Supervisor">Supervisor</option>
            <option value="Game Master">Game Master</option>
            </select>
        </div>
        <div class="form-group" id="hidePermission">
          <label for="permissaoGM">Permission</label>
          <select class="form-control" v-model="permissaoGM" id="permissaoGM" required>
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="1">1</option>
            </select>
        </div>
        <div class="form-group">
          <label for="cargoGM">Enable account?</label>
          <select class="form-control" v-model="activated" id="activated" required>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <button type="submit" class="btn btn-primary">Register</button>
      </form>
    </div>
  </div>
  <div class="callout callout-danger uspass-wrong mgtp-5px" name="alert-wrong" id="alert-wrong" role="alert">
  <p class="color-black">Oops, something went wrong, try again later.</p>
  </div>
  <div class="callout callout-success alert-logando mgtp-5px" name="alert-success" id="alert-success" role="alert">
  <p class="color-black"><b>{{idGM}}</b> successfully registered.</p>
  </div>
  <div class="callout callout-warning alert-carregando mgtp-5px" name="alert-carregando" id="alert-carregando" role="alert">
  <p class="color-black">Loading, wait a minute...</p>
  </div>
  <div class="callout callout-danger alert-existe mgtp-5px" name="alert-existe" id="alert-existe" role="alert">
  <p class="color-black"><b>{{idGM}}</b> is already registered, please inform another.</p>
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
  name: 'login',
  data () {
    return {
      msgHello: 'Hello',
      msgBye: 'Bye',
      loading: false,
      cadastradoPor: '',
      permissaoGM: 2,
      cargoGM: 'Game Master',
      activated: true,
      permissaoLocal: 0,
      gmRegistrado: '',
      idGM: ''
    }
  },
  mounted () {
    this.cadastradoPor = localStorage.getItem('username')
    this.permissaoLocal = localStorage.getItem('permissao')
  },
  methods: {
    clickBtn (e) {
      e.preventDefault()
      $('#alert-carregando').show()
      console.log('submit')
      this.$http
        .post('register-gm-successfull', { idGM: this.idGM, passwordGM: this.passwordGM, nickGM: this.nickGM, nomeGM: this.nomeGM, cargoGM: this.cargoGM, permissaoGM: this.permissaoGM, activated: this.activated, cadastradoPor: this.cadastradoPor })
        .then(function (result) {
          if (result.data.gmRegistrado !== false) {
            $('#alert-existe').show()
            $('#alert-wrong').hide()
            $('#alert-carregando').hide()
            setTimeout(function () {
              $('#alert-existe').hide()
            }, 5000)
            return false
          }
          if (result.data) {
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
    }
  }
}
</script>
<style scoped>
#alert-existe{
  display: none;
}
</style>

