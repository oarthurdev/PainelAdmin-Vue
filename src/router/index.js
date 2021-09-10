import Vue from 'vue'
import Router from 'vue-router'
import Login from 'components/Login.vue'
import ProcurarJogador from 'pages/gerenciar-player/ProcurarJogador.vue'
import DescobrirID from 'pages/gerenciar-player/DescobrirID.vue'
import JogadoresPunidos from 'pages/gerenciar-player/JogadoresPunidos.vue'
import PunirJogador from 'pages/gerenciar-player/PunirJogador.vue'
import EnviarItens from 'pages/gerenciar-player/EnviarItens.vue'
// import UsersOnline from 'pages/gerenciar-player/UsersOnline.vue'
import CadastrarGameMaster from 'pages/gerenciar-gm/CadastrarGm.vue'
import GMsCadastrados from 'pages/gerenciar-gm/GMsCadastrados.vue'
import ProfileGM from 'components/Profile.vue'
// import Logs from 'components/Logs.vue'
// import Maintenance from 'components/Maintenance.vue'
// import EnviarMensagem from 'pages/diversos/EnviarMensagem.vue'
import Dashboard from 'components/Dashboard.vue'
import EditLevel from 'components/EditLevel.vue'
// import RebootServer from 'components/RebootServer.vue'
import SendCoin from 'components/SendCoin.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/search-user',
      name: 'ProcurarJogador',
      component: ProcurarJogador
    },
    {
      path: '/send-coin',
      name: 'SendCoin',
      component: SendCoin
    },
    {
      path: '/up-character',
      name: 'EditLevel',
      component: EditLevel
    },
    {
      path: '/find-id',
      name: 'DescobrirID',
      component: DescobrirID
    },
    {
      path: '/punished-players',
      name: 'JogadoresPunidos',
      component: JogadoresPunidos
    },
    {
      path: '/send-item',
      name: 'EnviarItens',
      component: EnviarItens
    },
    // {
    //   path: '/usuarios-online',
    //   name: 'UsersOnline',
    //   component: UsersOnline
    // },
    // {
    //   path: '/send-message',
    //   name: newFunction(),
    //   component: EnviarMensagem
    // },
    // {
    //   path: '/logs',
    //   name: 'Logs',
    //   component: Logs
    // },
    // {
    //   path: '/maintenance',
    //   name: 'Maintenance',
    //   component: Maintenance
    // },
    {
      path: '/punish-player',
      name: 'PunirJogador',
      component: PunirJogador
    },
    {
      path: '/profile',
      name: 'ProfileGM',
      component: ProfileGM
    },
    {
      path: '/register-staff-member',
      name: 'CadastrarGameMaster',
      component: CadastrarGameMaster
    },
    {
      path: '/registered-staff-members',
      name: 'GMsCadastrados',
      component: GMsCadastrados
    },
    // {
    //   path: '/reboot-server',
    //   name: 'RebootServer',
    //   component: RebootServer
    // },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    }
  ],
  linkActiveClass: 'active'
})
// function newFunction () {
//   return 'EnviarMensagem'
// }
