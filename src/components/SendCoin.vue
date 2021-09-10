<template>
<div>
  <section class="content-header">
    <h1>
    Send coins to user
        <small>Enter the data below</small>
    </h1>
    <ol class="breadcrumb">
    <li><a href="#"><i class="fa fa-dashboard"></i> Dashboard</a></li>
    <li class="active">Send coin</li>
    </ol>
</section>
<section class="content">
  <div class="box box-primary" data-widget="box-widget">
      <div class="box-body">
        <form id="form-send-coin" name="form-send-coin" v-on:submit="sendCoin">
        <div class="form-group">
          <label for="username">Account</label>
          <input type="text" class="form-control" id="username" v-model="player.username" aria-describedby="usernameHelp" placeholder="Enter the username that will receive the coins" required>
        </div>
        <div class="form-group">
          <label for="coins">Coins</label>
          <input type="number" class="form-control" v-model="player.coins" id="coins" placeholder="Enter the amount of coins that the user will receive" required>
        </div>
        <button type="submit" class="btn btn-primary">Send</button>
      </form>
    </div>
  </div>
  <div class="callout callout-danger uspass-wrong mgtp-5px" name="alert-wrong" id="alert-wrong" role="alert">
  <p class="color-black">Oops, something went wrong, try again later.</p>
  </div>
  <div class="callout callout-success alert-logando mgtp-5px" name="alert-success" id="alert-success" role="alert">
  <p class="color-black">Coins successfully submitted to <b>{{player.username}}</b>.</p>
  </div>
  <div class="callout callout-warning alert-carregando mgtp-5px" name="alert-carregando" id="alert-carregando" role="alert">
  <p class="color-black">Loading, wait a minute...</p>
  </div>
  <div class="callout callout-danger alert-existe mgtp-5px alert" name="alert-user-n-exist" id="alert-user-n-exist" role="alert">
  <p class="color-black">Username <b>{{player.username}}</b> does not exist.</p>
  </div>
  </section>
</div>
</template>
<script>
export default {
  data () {
    return {
      player: {
        username: '',
        coins: 0
      }
    }
  },
  methods: {
    sendCoin (e) {
      e.preventDefault()
      $('#alert-carregando').show()
      this.$http.post('send-coins', {username: this.player.username, coins: this.player.coins})
      .then(function (result) {
        console.log(result)
        if (result.data.userExist === false) {
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
<style>
.alert{
  display: none;
}
