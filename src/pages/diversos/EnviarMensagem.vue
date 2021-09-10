<template>
<div v-if="permissaoLocal == 3">
  <section class="content-header">
    <h1>
      Send message to users
    </h1>
    <ol class="breadcrumb">
      <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
      <li class="active">Send message to users</li>
    </ol>
  </section>
  <section class="content">
  <div class="box box-primary" data-widget="box-widget">
      <div class="box-body">
        <form id="form-send-message" name="form-send-message" v-on:submit="clickBtn">
        <div class="form-group">
          <label for="message">Message</label>
          <textarea class="form-control" id="message" v-model="message" placeholder="Insert the message here." required style="height: 130px;"></textarea>
        </div>
        <div class="form-group">
          <label for="sSU">Send to a specific user?</label>
          <select class="form-control" v-model="sSU" id="sSU" required>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
         <div class="form-group" v-if="sSU == 'Yes'">
          <label for="username">Username</label>
          <input type="text" class="form-control" v-model="username" id="username" placeholder="Enter the user who will receive the message">
        </div>
        <button type="submit" class="btn btn-primary">Send message</button>
      </form>
    </div>
  </div>
  <div class="callout callout-danger uspass-wrong mgtp-5px" name="alert-wrong" id="alert-wrong" role="alert">
  <p class="color-black">Oops! Something went wrong, please try again later.</p>
  </div>
  <div class="callout callout-success alert-logando mgtp-5px" name="alert-success" id="alert-success" role="alert">
  <p class="color-black">Message sent successfully.</p>
  </div>
  <div class="callout callout-warning alert-carregando mgtp-5px" name="alert-carregando" id="alert-carregando" role="alert">
  <p class="color-black">Loading....</p>
  </div>
  </section>
</div>
<div v-else>
  <section class="content-header">
    <h1>
      Você não tem permissão para acessar essa página.
    </h1>
  </section>
</div>
</template>
<script>
export default {
  name: 'enviar-mensagem',
  data () {
    return {
      permissaoLocal: 0,
      sSU: 'No',
      username: '',
      message: ''
    }
  },
  mounted () {
    this.permissaoLocal = localStorage.getItem('permissao')
  }
}
</script>
