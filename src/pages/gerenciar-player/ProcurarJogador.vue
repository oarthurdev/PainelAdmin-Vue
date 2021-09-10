<template>
  <div>
    <section class="content-header">
      <h1>
        Search User
        <small>Enter the data below</small>
      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Dashboard</a></li>
        <li class="active">Search User</li>
      </ol>
    </section>
    <section class="content">
      <div class="box box-primary" data-widget="box-widget">
        <div class="box-header">
          <h3 class="box-title">Search</h3>
        </div>
        <form name="formProcurarJogador" v-on:submit="clickBtn" method="POST" id="formProcurarJogador">
          <div class="box-body">
              <div class="form-group">
                  <input type="text" name="textSearchFor" v-model="textSearchFor" id="textSearchFor" class="form-control" placeholder="Search for Account Name, IP Address or Email" required />
            </div>
            <div class="form-group">
                  <button type="submit" class="form-control btn-primary"><font size="3px" style="padding-right: 3px;">Search</font>&nbsp;<i class="fa fa-search" style="font-size:20px"></i></button>
            </div>
            <div class="callout callout-danger uspass-wrong mgtp-5px" name="alert-wrong" id="alert-wrong" role="alert">
              <p class="color-black">No results, try another search term.</p>
            </div>
            <div class="callout callout-warning alert-carregando mgtp-5px" name="alert-carregando" id="alert-carregando" role="alert">
              <p class="color-black">Loading, please wait a minute...</p>
            </div>
          </div>
        </form>
      </div>
      <div class="box box-warning" data-widget="box-widget">
        <div class="box-header">
          <h3 class="box-title">Results</h3>
        </div>
        <div class="box-body">
          <div class="table-responsive">
            <table id="players" class="table table-striped table-bordered table-hover">
              <thead>
                <tr>
                    <th>Account Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>IP Address</th>
                    <th>Blocked</th>
                </tr>
              </thead>
              <tbody>
                  <tr v-for="item in players" :key="item.userid">
                    <th class="accountname">{{item.UserID}}</th>
                    <td class="email">{{item.Email}}</td>
                    <td class="passwd">{{item.PassWD}}</td>
                    <td class="ip">{{item.network_ip}}</td>
                    <td class="blocked">{{parseInt(item.BlockChk) ? 'True' : 'False'}}</td>
                  </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data () {
    return {
      msgHello: 'Hello',
      msgBye: 'Bye',
      loading: false,
      searchFor: 0,
      players: []
    }
  },
  methods: {
    clickBtn (e) {
      e.preventDefault()
      $('#alert-carregando').show()
      let vm = this
      console.log('submit')
      this.$http
        .post('procurar-jogador-success', { searchFor: this.searchFor, textSearchFor: this.textSearchFor })
        .then(function (result) {
          console.log(result)
          if (result.data && result.data.length > 0) {
            $('#alert-carregando').hide()
            vm.players = result.data
          } else {
            $('#alert-carregando').hide()
            vm.players = []
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
<style>
#alert-wrong {
  display: none;
}
#alert-success {
  display: none;
}
#alert-carregando {
  display: none;
}
</style>
