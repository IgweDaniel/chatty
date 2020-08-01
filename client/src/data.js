export const ChatType = {
  group: 'GRP',
  user: 'USER'
}

export const John = {
  id: 1,
  name: 'John Doe',
  email: 'johnny@gmail.com',
  location: 'Kogi',
  phone: '+01-222-364522',
  website: 'johny.com',
  socials: [
    { name: 'twitter', handle: '@Johnny_Depp' },
    { name: 'instagram', handle: '@JDepp' },
    { name: 'facebook', handle: 'TheSureWoman' }
  ],
  avatar:
    'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
}
export const Jane = {
  id: 2,
  name: 'Jane Doe',
  email: 'janeDoe@gmail.com',
  location: 'Abuja',
  phone: '+01-222-364522',
  website: 'janeD.me',
  socials: [
    { name: 'twitter', handle: '@Cutie_Quexx' },
    { name: 'instagram', handle: '@Zomato' },
    { name: 'facebook', handle: 'TheSureWoman' }
  ],
  avatar:
    'https://images.pexels.com/photos/2101841/pexels-photo-2101841.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
}
export const Kudi = {
  id: 3,
  name: 'Kid Kudi',
  email: 'kudi@gmail.com',
  phone: '+01-222-364522',
  socials: [{ name: 'twitter', handle: '@Johnny_Depp' }],
  location: 'Lagos',
  avatar:
    'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
}

export const users = [John, Jane, Kudi]

export const chats = [
  // {
  //   //   Jane doe
  //   id: 1,
  //   name: 'Jane doe',
  //   type: ChatType.user,
  //   chatImg:
  //     'https://images.pexels.com/photos/2101841/pexels-photo-2101841.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  //   messages: [
  //     {
  //       id: 1,
  //       time: 1596113971879,
  //       message: 'Hello mother fucker',
  //       sender: John
  //     },
  //     {
  //       id: 2,
  //       time: 1596113971879,
  //       message: 'How are you now',
  //       sender: John
  //     },
  //     {
  //       id: 3,
  //       time: 1596114072333,
  //       message: 'I am good u',
  //       sender: Jane
  //     }
  //   ],
  //   users: [John, Jane]
  // },

  {
    //   KId kudi
    id: 3,
    name: 'Kid kudi',
    type: ChatType.user,
    chatImg:
      'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    messages: [
      {
        id: 1,
        time: 1595968036000,
        message:
          'Thank you for offering, Patrick. However, I will be worried and I will not be able to relax if you and your brother go by yourselves while I stay home. Let me ask Christine or Ian if one of them can go with both of you. Then I can stay home and relax. Christine! Ian!',
        sender: John
      },
      {
        id: 2,
        time: 1596113971879,
        message: 'Guy are dey',
        sender: Kudi
      },
      {
        id: 3,
        time: 1596114072333,
        message: 'How things na',
        sender: John
      },
      {
        id: 4,
        time: 1596114465772,
        message: 'We dey alright bro u',
        sender: Kudi
      },
      {
        id: 5,
        time: 1596114465772,
        message: 'Nice',
        sender: John
      },
      {
        id: 6,
        time: 1596114465772,
        message: 'Have you heard of forex',
        sender: Kudi
      }
    ],
    users: [John, Kudi]
  },
  {
    //   Group
    id: 2,
    name: 'Golang For Noobs',
    type: ChatType.group,
    chatImg:
      'https://res.cloudinary.com/practicaldev/image/fetch/s--ArkVTP_p--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://cl.ly/e01e310f132c/Image%25202019-09-30%2520at%25206.27.51%2520PM.png',
    messages: [
      {
        id: 1,
        time: 1596113971879,
        message: "Hello ALL I'm new Here",
        sender: John
      },
      {
        id: 2,
        time: 1596113971879,
        message: 'How does this shii work',
        sender: John
      },
      {
        id: 3,
        time: 1596114072333,
        message: 'You are a very vulgar somebody, and i hope you know that',
        sender: Jane
      },
      {
        id: 4,
        time: 1596122291051,
        message: 'Smiles',
        sender: Kudi
      }
    ],
    users
  }
]
