<template>
<div>
<section class="content-header">
    <h1>
    User Profile
    </h1>
    <ol class="breadcrumb">
    <li><a href="#"><i class="fa fa-dashboard"></i> Dashboard</a></li>
    <li class="active">User profile</li>
    </ol>
</section>
<section class="content">

      <div class="row">
        <div class="col-md-3">

          <!-- Profile Image -->
          <div class="box box-primary">
            <div class="box-body box-profile">
              <img class="profile-user-img img-responsive img-circle" v-bind:src="'https://api-admin.omniapk.com.br/Upload/User/ImagemPerfil/'+photo" alt="User profile picture">

              <h3 class="profile-username text-center">{{idGM}}</h3>

              <p class="text-muted text-center">{{cargoGM}}</p>

              <ul class="list-group list-group-unbordered">
                <li class="list-group-item">
                  <b>Permission</b> <a class="pull-right">{{permissaoGM}}</a>
                </li>
                <!-- <li class="list-group-item">
                  <b>Membro desde</b> <a class="pull-right">01/05/2018</a>
                </li> -->
              </ul>

              <a href="#" class="btn btn-primary btn-block"><b>Activated</b></a>
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->
        </div>
        <!-- /.col -->
        <div class="col-md-9">
          <div class="nav-tabs-custom">
            <ul class="nav nav-tabs">
              <li class="active"><a href="#settings" data-toggle="tab">Settings</a></li>
            </ul>
            <div class="tab-content">
              <div class="tab-pane active" id="settings">
                <form class="form-horizontal" v-on:submit="clickBtn" enctype="multipart/form-data">
                  <div class="form-group">
                    <label for="inputAccName" class="col-sm-2 control-label">Account Name</label>

                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="inputAccName" v-model="username" v-bind:placeholder="idGM" disabled>
                    </div>
                  </div>
                  <div class="form-group">
                  <label for="inputName" class="col-sm-2 control-label">Name</label>

                    <div class="col-sm-10">
                      <input type="text" class="form-control" v-model="name" id="inputName" v-bind:placeholder="nome" disabled>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="inputNick" class="col-sm-2 control-label">Nick</label>

                    <div class="col-sm-10">
                      <input type="text" class="form-control" v-model="nickNew" id="inputNick" v-bind:placeholder="nick" disabled>
                    </div>
                  </div>
                  <div class="form-group">
                        <label for="inputPw" class="col-sm-2 control-label">Password</label>
                        <div class="col-sm-10">
                          <input name="cpw" type="password" class="form-control" id="inputPw" v-model="senhaAtual" placeholder="Enter your current password">
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="inputExperience" class="col-sm-2 control-label">New Password</label>
                        <div class="col-sm-10">
                          <input name="pw" type="password" class="form-control" id="inputPw" v-model="novaSenha1" placeholder="Enter a new password">
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="inputSkills" class="col-sm-2 control-label">Repeat New Password</label>
                        <div class="col-sm-10">
                          <input name="rpw" type="password" class="form-control" id="inputSkills" v-model="novaSenha2" placeholder="Confirm password">
                        </div>
                      </div>
                    
                  <div class="form-group">
                    <label for="imagemPerfil" class="col-sm-2 control-label">Profile Picture</label>

                    <div class="col-sm-10">
                      <input type="file" id="file" ref="file" v-on:change="handleFileUpload()" accept="image/*">
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col-sm-offset-2 col-sm-10">
                      <button type="submit" v-on:click="submitFile()" class="btn btn-primary">Save</button>
                    </div>
                  </div>
                </form>
              </div>
              <!-- /.tab-pane -->
            </div>
            <!-- /.tab-content -->
          </div>
            <div class="callout callout-danger uspass-wrong mgtp-5px" name="alert-wrong" id="alert-wrong" role="alert">
                <p class="color-black">Oops, something went wrong, try again later.</p>
            </div>
            <div class="callout callout-danger uspass-wrong mgtp-5px alert" name="alert-wrong-current-pass" id="alert-wrong-current-pass" role="alert">
                <p class="color-black">The password field does not match your current password.</p>
            </div>
            <div class="callout callout-danger uspass-wrong mgtp-5px alert" name="alert-wrong-pass-dont-match" id="alert-wrong-pass-dont-match" role="alert">
                <p class="color-black">Passwords don't match.</p>
            </div>
            <div class="callout callout-success alert-logando mgtp-5px" name="alert-success" id="alert-success" role="alert">
                <p class="color-black">Successfully updated.</p>
            </div>
            <div class="callout callout-warning alert-carregando mgtp-5px" name="alert-carregando" id="alert-carregando" role="alert">
                <p class="color-black">Loading, wait a minute...</p>
            </div>
          <!-- /.nav-tabs-custom -->
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->
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
      idGM: '',
      cargoGM: '',
      permissaoGM: 0,
      selectedFile: null,
      file: '',
      token: '0',
      username: '',
      photo: '',
      nick: '',
      nome: '',
      senhaAtual: '',
      novaSenha1: '',
      novaSenha2: ''
    }
  },
  mounted () {
    this.idGM = localStorage.getItem('username')
    this.cargoGM = localStorage.getItem('cargo')
    this.permissaoGM = localStorage.getItem('permissao')
    this.nick = localStorage.getItem('nick')
    this.nome = localStorage.getItem('nome')

    let vm = this
    this.token = localStorage.getItem('token')
    this.username = localStorage.getItem('username')
    this.$http
        .post('get-photo', {username: this.username})
        .then(function (result) {
          if (result.data) {
            console.log(result.data)
            vm.photo = result.data.photo
          } else {
            console.log('Error')
          }
        })
  },
  methods: {
    handleFileUpload () {
      this.file = this.$refs.file.files[0]
    },
    submitFile () {
      let formData = new FormData()
      formData.append('username', this.idGM)
      formData.append('file', this.file)
      this.$http.post('/upload-image', formData
          ).then(function (result) {
            if (result.data) {
              console.log(result)
              console.log('SUCCESS!!')
            } else {
              $('#alert-success').hide()
              $('#alert-wrong').show()
              setTimeout(function () {
                $('#alert-wrong').hide()
              }, 5000)
              return false
            }
          })
    },
    clickBtn (e) {
      e.preventDefault()
      $('#alert-carregando').show()
      let vm = this
      console.log('submit')
      this.$http
        .post('profile', {username: this.idGM, senhaAtual: this.senhaAtual, novaSenha1: this.novaSenha1, novaSenha2: this.novaSenha2, name: this.name, nickNew: this.nickNew})
        .then(function (result) {
          console.log(result)
          if (result.data.samePassword === false) {
            $('#alert-carregando').hide()
            $('#alert-wrong').hide()
            $('#alert-wrong-current-pass').show()
            setTimeout(function () {
              $('#alert-wrong-current-pass').hide()
            }, 5000)
          } else if (result.data.diffPass === true) {
            $('#alert-carregando').hide()
            $('#alert-wrong').hide()
            $('#alert-wrong-pass-dont-match').show()
            setTimeout(function () {
              $('#alert-wrong-pass-dont-match').hide()
            }, 5000)
          } else {
            if (result.data) {
              $('#alert-carregando').hide()
              $('#alert-wrong').hide()
              $('#alert-success').show()
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
          }
        })
    },
    onFileChanged (event) {
      const file = event.target.files[0]
    },
    onUpload () {
      const formData = new FormData()
      formData.append('myFile', this.selectedFile, this.selectedFile.name)
      this.$http.post('uplolad-image', this.selectedFile)
    }
  }
}
</script>
<style>
.dropbox {
    outline: 2px dashed grey; /* the dash box */
    outline-offset: -10px;
    background: lightcyan;
    color: dimgray;
    padding: 10px 10px;
    min-height: 200px; /* minimum height */
    position: relative;
    cursor: pointer;
  }

.alert {
  display: none;
}
  .input-file {
    opacity: 0; /* invisible but it's there! */
    width: 100%;
    height: 200px;
    position: absolute;
    cursor: pointer;
  }

  .dropbox:hover {
    background: lightblue; /* when mouse over to the drop zone, change color */
  }

  .dropbox p {
    font-size: 1.2em;
    text-align: center;
    padding: 50px 0;
  }
</style>
