module.exports = [
  {
    type: 'item',
    isHeader: true,
    name: 'MAIN NAVIGATION'
  },
  {
    type: 'item',
    icon: 'fa fa-dashboard',
    name: 'Dashboard',
    router: {
      name: 'Dashboard'
    }
  },
  {
    type: 'tree',
    icon: 'fa fa-user',
    name: 'Manage Users',
    items: [
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'Search User',
        router: {
          name: 'ProcurarJogador'
        }
      },
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'Find ID',
        router: {
          name: 'DescobrirID'
        }
      },
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'Send Item',
        router: {
          name: 'EnviarItens'
        }
      },
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'Punish Player',
        router: {
          name: 'PunirJogador'
        }
      },
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'Punished Players',
        router: {
          name: 'JogadoresPunidos'
        }
      },
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'UP Character',
        router: {
          name: 'EditLevel'
        }
      }
      // {
      //   type: 'item',
      //   icon: 'fa fa-circle-o',
      //   name: 'Usuários Online',
      //   router: {
      //     name: 'UsersOnline'
      //   }
      // }
    ]
  },
  {
    type: 'tree',
    icon: 'fa fa-user',
    name: 'Manage Staff',
    items: [
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'Register Staff Member',
        router: {
          name: 'CadastrarGameMaster'
        }
      },
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'Registered Staff Members',
        router: {
          name: 'GMsCadastrados'
        }
      }
    ]
  },
  // {
  //   type: 'tree',
  //   icon: 'fa fa-gears',
  //   name: 'Manage Server',
  //   items: [
  //     {
  //       type: 'item',
  //       icon: 'fa fa-circle-o',
  //       name: 'Reboot Server',
  //       router: {
  //         name: 'RebootServer'
  //       }
  //     }
  //   ]
  // },
  {
    type: 'tree',
    icon: 'fa fa-cart-plus',
    name: 'Shop',
    items: [
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'Send Coins',
        router: {
          name: 'SendCoin'
        }
      }
    ]
  }
  // {
  //   type: 'tree',
  //   icon: 'fa fa-circle',
  //   name: 'Diversos',
  //   items: [
  //     {
  //       type: 'item',
  //       icon: 'fa fa-circle-o',
  //       name: 'Send message to users',
  //       router: {
  //         name: 'EnviarMensagem'
  //       }
  //     }
  //   ]
  // },
  // {
  //   type: 'item',
  //   icon: 'fa fa-book',
  //   name: 'Logs',
  //   router: {
  //     name: 'Logs'
  //   }
  // },
  // {
  //   type: 'item',
  //   icon: 'fa fa-wrench',
  //   name: 'Manutenção',
  //   router: {
  //     name: 'Maintenance'
  //   }
  // }
]
