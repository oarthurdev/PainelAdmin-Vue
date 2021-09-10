<template>
<div>
  <section class="content-header">
    <h1>
      UP Player
    <small>Enter the data below</small>
    </h1>
    <ol class="breadcrumb">
    <li><a href="#"><i class="fa fa-dashboard"></i> Dashboard</a></li>
    <li class="active">UP Player</li>
    </ol>
</section>
<section class="content">
  <div class="box box-primary" data-widget="box-widget">
      <div class="box-body">
        <form id="form-send-coin" name="form-send-coin" v-on:submit="editLevel">
        <div class="form-group">
          <label for="nickname">Nickname</label>
          <input type="text" class="form-control" id="nickname" v-model="user.nickname" aria-describedby="usernameHelp" placeholder="Enter the nickname of the character that will be up." required>
        </div>
        <div class="form-group">
          <label for="coins">Level</label>
          <select class="form-control" v-model="levelTo">
            <option name="level" id="level" v-for="us in level" v-bind:key="us">{{us}}</option>
          </select>
        </div>
        <button type="submit" class="btn btn-primary btn-block">UP</button>
      </form>
    </div>
  </div>
  <div class="callout callout-danger uspass-wrong mgtp-5px" name="alert-wrong" id="alert-wrong" role="alert">
  <p class="color-black">Oops, something went wrong, try again later.</p>
  </div>
  <div class="callout callout-success alert-logando mgtp-5px" name="alert-success" id="alert-success" role="alert">
  <p class="color-black"><b>{{user.nickname}}</b> successfully upped to level <b>{{levelTo}}</b>.</p>
  </div>
  <div class="callout callout-warning alert-carregando mgtp-5px" name="alert-carregando" id="alert-carregando" role="alert">
  <p class="color-black">Loading, wait a minute...</p>
  </div>
  <div class="callout callout-danger alert-existe mgtp-5px alert" name="alert-user-n-exist" id="alert-user-n-exist" role="alert">
  <p class="color-black">Character <b>{{user.nickname}}</b> does not exist.</p>
  </div>
  <div class="callout callout-danger alert-existe alert mgtp-5px alert" name="alert-no-nick" id="alert-no-nick" role="alert">
  <p class="color-black">Enter the character's nick.</p>
  </div>
</section>
</div>
</template>
<script>
  export default {
    data () {
      return {
        level: 0,
        levelTo: 1,
        user: {
          nickname: ''
        },
        i: 0,
        uppedBy: ''
      }
    },
    mounted () {
      this.uppedBy = localStorage.getItem('username')
      for (this.i = 80; this.i <= 150; this.i++) {
        this.level = this.i
      }
    },
    methods: {
      editLevel (e) {
        $('#alert-carregando').show()
        e.preventDefault()
        this.$http.post('up-player', {nickname: this.user.nickname, level: this.levelTo, uppedBy: this.uppedBy})
        .then(function (result) {
          if (result.data.noNick === true) {
            $('#alert-no-nick').show()
            $('#alert-wrong').hide()
            $('#alert-carregando').hide()
            setTimeout(function () {
              $('#alert-no-nick').hide()
            }, 5000)
            return false
          }
          if (result.data.naoExiste === true) {
            $('#alert-user-n-exist').show()
            $('#alert-wrong').hide()
            $('#alert-carregando').hide()
            setTimeout(function () {
              $('#alert-user-n-exist').hide()
            }, 5000)
            return false
          }
          if (result.data) {
            $('#alert-success').show()
            $('#alert-user-n-exist').hide()
            $('#alert-carregando').hide()
            setTimeout(function () {
              $('#alert-success').hide()
            }, 5000)
          } else {
            $('#alert-user-n-exist').hide()
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
