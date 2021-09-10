<template>
  <div>
    <section class="content-header">
      <h1>
        Send Item
      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Dashboard</a></li>
        <li class="active">Send Item</li>
      </ol>
    </section>
    <section class="content">
      <div class="box box-primary" data-widget="box-widget">
        <div class="box-header">
          <h3 class="box-title">Send item to player</h3>
        </div>
        <form name="formEnviarItens" v-on:submit="clickBtn" method="POST" id="formEnviarItens">
          <div class="box-body">
            <div class="form-group">
                <label for="name_jogador">Player's Nickname</label>
                <input type="text" name="name_jogador" v-model="nameJogador" id="name_jogador" class="form-control" placeholder="Ex: Reaper" required />
            </div>
            <div class="form-group">
                <label for="item">Item</label>
                <input type="text" name="itemr" v-model="item" id="item" class="form-control" placeholder="Ex: wp119" required />
            </div>
            <div class="form-group">
                <label for="qtdItens">Quantity</label>
                <select class="form-control" v-model="qtdItens" id="qtdItens" required>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                </select>
            </div>
            <div class="form-group">
                <label for="classe">Class</label>
                <select class="form-control" v-model="classeItem" id="classe" required>
                <option value="0">Without Class</option>
                <option value="1">Fighter</option>
                <option value="2">Mechanician</option>
                <option value="3">Archer</option>                            
                <option value="4">Pikeman</option>
                <option value="5">Atalanta</option>
                <option value="6">Knight</option>
                <option value="7">Magician</option>
                <option value="8">Priestess</option>
                </select>
            </div>
            <div class="form-group">
                  <button type="submit" class="form-control btn-primary">Send</button>
            </div>
            <div class="callout callout-success uspass-wrong mgtp-5px" name="alert-success" id="alert-success" role="alert">
              <p class="color-black">Item <b>{{item}}</b> was sent successfully to <b>{{nameJogador}}</b>.</p>
            </div>
            <div class="callout callout-danger uspass-wrong mgtp-5px" name="alert-wrong" id="alert-wrong" role="alert">
              <p class="color-black">Item or Nickname not found.</p>
            </div>
            <div class="callout callout-warning alert-carregando mgtp-5px" name="alert-carregando" id="alert-carregando" role="alert">
              <p class="color-black">Loading, please wait a minute...</p>
            </div>
          </div>
        </form>
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
      qtdItens: '1',
      classeItem: '0',
      idGM: '',
      nameJogador: '',
      item: ''
    }
  },
  mounted () {
    this.idGM = localStorage.getItem('username')
  },
  methods: {
    clickBtn (e) {
      e.preventDefault()
      $('#alert-carregando').show()
      console.log('submit')
      this.$http
        .post('enviar-itens', { idGM: this.idGM, nomeJogador: this.nameJogador, item: this.item, quantidade: this.qtdItens, classe: this.classeItem })
        .then(function (result) {
          console.log(result)
          if (result.data) {
            $('#alert-carregando').hide()
            $('#alert-success').show()
            setTimeout(function () {
              $('#alert-success').hide()
            }, 3000)
          } else {
            $('#alert-carregando').hide()
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

#alert-wrong-jogador{
  display: none;
}
</style>
