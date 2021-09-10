<template>
<div>
  <section class="content-header">
    <h1>
      Registered Staff Members
    </h1>
    <ol class="breadcrumb">
      <li><a href="#"><i class="fa fa-dashboard"></i> Dashboard</a></li>
      <li class="active">Registered Staff Members</li>
    </ol>
  </section>
  <section class="content">
    <div class="box box-warning" data-widget="box-widget">
        <div class="box-body">
          <div class="table-responsive">
            <table id="players" class="table table-striped table-bordered table-hover">
              <thead>
                <tr>
                    <th></th>
                    <th>Account Name</th>
                    <th>Nick</th>
                    <th>Role</th>
                    <th>Permission</th>
                    <th>Registration date</th>
                    <th>Registered by</th>
                    <th>Account activated?</th>
                    <!-- <th class="text-center">Editar</th> -->
                    <th class="text-center" v-if="permissao >= 3">Action</th>
                </tr>
              </thead>
              <tbody>
                  <tr v-for="item in gmscadastrados" :key="item.username">
                    <th class="foto-perfil"><img class="profile-user-img img-responsive img-circle" style="max-width: 30%" v-bind:src="'https://api-admin.omniapk.com.br/Upload/User/ImagemPerfil/'+item.photo" alt="User profile picture"></th>
                    <th class="accountname">{{item.username}}</th>
                    <td class="nick">{{item.nick}}</td>
                    <td class="cargo">{{item.cargo}}</td>
                    <td class="permissao">{{item.permissao}}</td>
                    <td class="data">{{moment(item.data).format('DD/MM/YYYY')}}</td>
                    <td class="cadPor">{{item.cadPor}}</td>
                    <td class="activated">{{parseInt(item.activated) ? 'Yes' : 'No'}}</td>
                    <!-- <td class="edit text-center"><button type="submit" v-on:click="editGm(item.username)" data-toggle="modal" data-target="#editGm" class="btn btn-default">Editar</button></td> -->
                    <td class="delete text-center" v-if="permissao >= 3"><button type="submit" v-on:click="excluirGm(item.username)" data-toggle="modal" data-target="#exampleModal" class="btn btn-danger">Delete</button></td>
                  </tr>
              </tbody>
            </table>
            <center>
            </center>
            <excluir-gm v-bind:username="usernameSelected"></excluir-gm>
            <edit-gm></edit-gm>
          </div>
        </div>
      </div>
      <div class="callout callout-danger alert-success mgtp-5px" name="alert-success" id="alert-success" role="alert">
        <p class="color-black">Game-Master excluido com sucesso.</p>
      </div>
      <div class="callout callout-success alert-edit-success mgtp-5px" name="alert-edit-success" id="alert-edit-success" role="alert">
        <p class="color-black">Cadastro atualizado com sucesso.</p>
      </div>
    </section>
</div>
</template>
<script>
import moment from 'moment'
import axios from 'axios'
import EditGm from '../../components/EditGm.vue'
import ExcluirGm from '../../components/ExcluirGm.vue'

export default {
  name: 'gms-cadastrados',
  data () {
    return {
      msgHello: 'Hello',
      msgBye: 'Bye',
      loading: false,
      gmscadastrados: [],
      excluidoPor: '',
      permissao: '',
      photo: '',
      username: '',
      usernameSelected: ''
    }
  },
  mounted () {
    let vm = this
    vm.username = localStorage.getItem('username')
    vm.excluidoPor = localStorage.getItem('username')
    vm.permissao = localStorage.getItem('permissao')
    vm.carregarGm()
  },
  methods: {
    excluirGm (usernameExcluir) {
      let vm = this
      vm.usernameSelected = usernameExcluir
      $('#confirm').on('click', function () {
        event.preventDefault()
        axios.post('/delete-game-master', {username: usernameExcluir, excluidoPor: vm.excluidoPor}
        ).then(function (result) {
          $('#exampleModal').modal('hide')
          if (result.data) {
            $('#alert-success').show()
            vm.carregarGm()
            setTimeout(function () {
              $('#alert-success').hide()
            }, 5000)
          } else {
            $('#alert-success').hide()
          }
        })
      })
    },
    carregarGm () {
      let vm = this
      this.$http.get('gms-cadastrados')
        .then(function (result) {
          if (result.data) {
            vm.gmscadastrados = result.data
            console.log(result.data)
          } else {
            return false
          }
        })
    },
    editGm (usernameExcluir) {
      $('#confirm2').on('click', function () {
        event.preventDefault()
        axios.post('/edit-gm', {username: usernameExcluir}
          ).then(function (result) {
            $('#editGm').modal('hide')
            $('#alert-edit-success').show()
            setTimeout(function () {
              $('#alert-edit-success').hide()
                // location.reload()
            }, 5000)
            if (result.data) {
              console.log(result.data)
              $('#alert-edit-success').show()
              setTimeout(function () {
                $('#alert-carregando').hide()
                // location.reload()
              }, 5000)
            } else {
              $('#alert-carregando').hide()
              $('#alert-success').hide()
            }
          })
      })
    },
    moment (...args) {
      return moment(...args)
    }
  },
  components: {
    'edit-gm': EditGm,
    'excluir-gm': ExcluirGm
  }
}
</script>
<style>
.alert-edit-success{
  display: none;
}
</style>
