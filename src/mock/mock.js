const mockPoints = [
  {
    id: '06716581-cf27-4801-8606-b620f45eba15',
    basePrice: 4205,
    dateFrom: '2024-07-05T00:11:06.489Z',
    dateTo: '2024-07-06T03:46:06.489Z',
    destination: '7418dd97-1526-4fb5-80b2-f926026dce35',
    isFavorite: true,
    offers: [],
    type: 'sightseeing',
  },
  {
    id: '477eb6c1-e2ec-4262-9b15-809259b686e9',
    basePrice: 2368,
    dateFrom: '2024-07-06T23:23:06.489Z',
    dateTo: '2024-07-08T23:46:06.489Z',
    destination: 'c9b61f46-90d8-4253-bdd3-18d49e747e15',
    isFavorite: false,
    offers: [
      '9ca45d65-7d70-4406-8637-b523fa425127',
      'b0ab37b9-bea9-484c-b186-aad70be5bcd7',
    ],
    type: 'train',
  },
  {
    id: '8298486e-2e95-4216-9606-c3681d03ba8a',
    basePrice: 9039,
    dateFrom: '2024-07-09T17:13:06.489Z',
    dateTo: '2024-07-09T23:14:06.489Z',
    destination: '7418dd97-1526-4fb5-80b2-f926026dce35',
    isFavorite: false,
    offers: ['9d9ff558-89a1-4b4b-b7b8-91616e507a19'],
    type: 'flight',
  },
  {
    id: 'a279ed11-ef05-4337-9450-c620bf76e6fe',
    basePrice: 3159,
    dateFrom: '2024-07-10T19:50:06.489Z',
    dateTo: '2024-07-12T19:38:06.489Z',
    destination: 'c9b61f46-90d8-4253-bdd3-18d49e747e15',
    isFavorite: false,
    offers: [],
    type: 'train',
  },
  {
    id: 'fc0363ef-8223-4b3a-a911-9a30cf1cd4d5',
    basePrice: 3202,
    dateFrom: '2024-07-13T13:43:06.489Z',
    dateTo: '2024-07-15T03:17:06.489Z',
    destination: 'f9bbfca6-635f-4a9b-a011-ab41797f27e7',
    isFavorite: false,
    offers: ['cb1e3d84-6e42-41fa-b7c3-79b702cc8e71'],
    type: 'restaurant',
  },
  {
    id: 'f34da05f-95b5-49cc-b4df-6642bf72204a',
    basePrice: 76,
    dateFrom: '2024-07-16T10:46:06.489Z',
    dateTo: '2024-07-18T02:27:06.489Z',
    destination: '9bffeb65-51a5-4a88-9adc-b3456e70c915',
    isFavorite: false,
    offers: [],
    type: 'ship',
  },
  {
    id: '29d278d2-6907-4faf-bada-311fb5be8570',
    basePrice: 3544,
    dateFrom: '2024-07-19T22:39:06.489Z',
    dateTo: '2024-07-20T16:41:06.489Z',
    destination: '59130629-c01b-44b5-a62d-98872120602e',
    isFavorite: true,
    offers: [
      'aba07a93-39f5-4bfe-b299-6496c684eda9',
      'ac8544b0-d752-429c-9536-33dd72890ded',
      '1ff108d1-873a-40f9-981c-2d4468300729',
      '76f330af-ba36-465f-a671-463290268ab4',
      '34fb0fae-bb15-40de-aeb3-e184bdace0de',
    ],
    type: 'taxi',
  },
  {
    id: '3bc84c4c-c51f-437a-8e14-33b647beb709',
    basePrice: 4573,
    dateFrom: '2024-07-22T15:45:06.489Z',
    dateTo: '2024-07-23T00:34:06.489Z',
    destination: 'dfdf3e7e-fe9b-4c66-b271-76b9156e00c7',
    isFavorite: true,
    offers: ['7a15c8a0-7c88-47aa-8c45-da12a14554e0'],
    type: 'drive',
  },
  {
    id: 'd345d547-49a3-4c6d-a47b-a54c130d9a17',
    basePrice: 9185,
    dateFrom: '2024-07-23T12:11:06.489Z',
    dateTo: '2024-07-23T23:43:06.489Z',
    destination: 'c9b61f46-90d8-4253-bdd3-18d49e747e15',
    isFavorite: false,
    offers: ['cb1e3d84-6e42-41fa-b7c3-79b702cc8e71'],
    type: 'restaurant',
  },
  {
    id: 'de0ae829-09ac-49e0-b7a9-fc97097d53d8',
    basePrice: 8208,
    dateFrom: '2024-07-24T06:03:06.489Z',
    dateTo: '2024-07-25T04:39:06.489Z',
    destination: '7418dd97-1526-4fb5-80b2-f926026dce35',
    isFavorite: false,
    offers: [
      'a653a824-5fb8-46b2-a9d9-226a8b67cb88',
      'd449f65f-9436-4125-a694-13ce0a7fd3c2',
      '9d9ff558-89a1-4b4b-b7b8-91616e507a19',
    ],
    type: 'flight',
  },
  {
    id: '2e3d9435-6493-4941-abd6-c6c1d02cde8a',
    basePrice: 2285,
    dateFrom: '2024-07-27T01:45:06.489Z',
    dateTo: '2024-07-29T02:24:06.489Z',
    destination: 'c9b61f46-90d8-4253-bdd3-18d49e747e15',
    isFavorite: false,
    offers: [
      '1ec38407-4138-410c-a88d-89e90ec794ea',
      '9afe3d2e-849d-42bd-ab8d-bbdce6071f3e',
    ],
    type: 'bus',
  },
  {
    id: '9be881a5-9229-4329-99fa-3340e4bedcad',
    basePrice: 8261,
    dateFrom: '2024-07-30T12:25:06.489Z',
    dateTo: '2024-08-01T01:28:06.489Z',
    destination: 'f9bbfca6-635f-4a9b-a011-ab41797f27e7',
    isFavorite: false,
    offers: [
      '76f330af-ba36-465f-a671-463290268ab4',
      '34fb0fae-bb15-40de-aeb3-e184bdace0de',
    ],
    type: 'taxi',
  },
  {
    id: '7ca16ce3-253a-4d34-b593-f93b07836bea',
    basePrice: 6091,
    dateFrom: '2024-08-02T23:37:06.489Z',
    dateTo: '2024-08-03T16:52:06.489Z',
    destination: 'c9b61f46-90d8-4253-bdd3-18d49e747e15',
    isFavorite: true,
    offers: [],
    type: 'ship',
  },
  {
    id: '33925402-78a6-425a-bf15-14c98433a9bf',
    basePrice: 2311,
    dateFrom: '2024-08-05T14:27:06.489Z',
    dateTo: '2024-08-06T19:42:06.489Z',
    destination: '59130629-c01b-44b5-a62d-98872120602e',
    isFavorite: true,
    offers: [],
    type: 'sightseeing',
  },
  {
    id: '10878f5b-e6e2-44e6-867f-e64be9cbe675',
    basePrice: 9047,
    dateFrom: '2024-08-07T11:01:06.489Z',
    dateTo: '2024-08-09T03:46:06.489Z',
    destination: '7418dd97-1526-4fb5-80b2-f926026dce35',
    isFavorite: true,
    offers: [],
    type: 'drive',
  },
  {
    id: 'e31c78b5-96aa-4e74-ae02-aa5b61fb72ed',
    basePrice: 9271,
    dateFrom: '2024-08-10T19:39:06.489Z',
    dateTo: '2024-08-12T01:02:06.489Z',
    destination: 'f9bbfca6-635f-4a9b-a011-ab41797f27e7',
    isFavorite: false,
    offers: [
      'f2e8c513-5482-4658-909b-8adbc74dbdb6',
      'cb1e3d84-6e42-41fa-b7c3-79b702cc8e71',
    ],
    type: 'restaurant',
  },
  {
    id: '8b2d8fb0-5ecd-4ecc-b46c-272a3b0d9113',
    basePrice: 5240,
    dateFrom: '2024-08-13T20:16:06.489Z',
    dateTo: '2024-08-15T07:14:06.489Z',
    destination: '9bffeb65-51a5-4a88-9adc-b3456e70c915',
    isFavorite: true,
    offers: [],
    type: 'sightseeing',
  },
  {
    id: 'd0911fc0-ac2c-453e-8b27-d8070053572e',
    basePrice: 9514,
    dateFrom: '2024-08-16T02:55:06.489Z',
    dateTo: '2024-08-16T20:13:06.489Z',
    destination: '59130629-c01b-44b5-a62d-98872120602e',
    isFavorite: false,
    offers: [
      'f2e8c513-5482-4658-909b-8adbc74dbdb6',
      'cb1e3d84-6e42-41fa-b7c3-79b702cc8e71',
    ],
    type: 'restaurant',
  },
  {
    id: 'a70fadb7-001b-4b44-8a9f-badfcab8c17a',
    basePrice: 3496,
    dateFrom: '2024-08-18T12:29:06.489Z',
    dateTo: '2024-08-20T05:42:06.489Z',
    destination: '60131858-6ba9-4548-8be8-b41f0c27e98a',
    isFavorite: false,
    offers: [
      'd449f65f-9436-4125-a694-13ce0a7fd3c2',
      '9d9ff558-89a1-4b4b-b7b8-91616e507a19',
    ],
    type: 'flight',
  },
  {
    id: '5d1e3632-155c-4377-a584-a4a566159186',
    basePrice: 48,
    dateFrom: '2024-08-20T22:33:06.489Z',
    dateTo: '2024-08-21T16:44:06.489Z',
    destination: '59130629-c01b-44b5-a62d-98872120602e',
    isFavorite: true,
    offers: [
      'ac8544b0-d752-429c-9536-33dd72890ded',
      '1ff108d1-873a-40f9-981c-2d4468300729',
      '76f330af-ba36-465f-a671-463290268ab4',
      '34fb0fae-bb15-40de-aeb3-e184bdace0de',
    ],
    type: 'taxi',
  },
  {
    id: 'f220cd47-b593-4426-b2ad-32a8ffea1058',
    basePrice: 1302,
    dateFrom: '2024-08-22T18:05:06.489Z',
    dateTo: '2024-08-23T23:56:06.489Z',
    destination: '60131858-6ba9-4548-8be8-b41f0c27e98a',
    isFavorite: false,
    offers: [],
    type: 'flight',
  },
  {
    id: 'f4ea03e7-a5c6-4842-bf96-5dbadfcea71b',
    basePrice: 6536,
    dateFrom: '2024-08-25T00:51:06.489Z',
    dateTo: '2024-08-25T11:31:06.489Z',
    destination: '45ce987c-2ad3-450c-8d67-9b9899f7f95b',
    isFavorite: false,
    offers: [
      '1ff108d1-873a-40f9-981c-2d4468300729',
      '76f330af-ba36-465f-a671-463290268ab4',
      '34fb0fae-bb15-40de-aeb3-e184bdace0de',
    ],
    type: 'taxi',
  },
  {
    id: 'a3fcdbce-7dfe-420e-abc2-9b58312bd1e6',
    basePrice: 1597,
    dateFrom: '2024-08-27T10:27:06.489Z',
    dateTo: '2024-08-28T07:22:06.489Z',
    destination: '60131858-6ba9-4548-8be8-b41f0c27e98a',
    isFavorite: false,
    offers: [
      'aba07a93-39f5-4bfe-b299-6496c684eda9',
      'ac8544b0-d752-429c-9536-33dd72890ded',
      '1ff108d1-873a-40f9-981c-2d4468300729',
      '76f330af-ba36-465f-a671-463290268ab4',
      '34fb0fae-bb15-40de-aeb3-e184bdace0de',
    ],
    type: 'taxi',
  },
  {
    id: '4eac94cf-56b5-4619-88d0-84c68dc92b11',
    basePrice: 8081,
    dateFrom: '2024-08-30T02:59:06.489Z',
    dateTo: '2024-08-30T13:28:06.489Z',
    destination: '60131858-6ba9-4548-8be8-b41f0c27e98a',
    isFavorite: true,
    offers: [],
    type: 'sightseeing',
  },
  {
    id: '5c783854-bd62-4f86-a32f-569b2cf2da17',
    basePrice: 6143,
    dateFrom: '2024-08-31T19:02:06.489Z',
    dateTo: '2024-09-01T10:32:06.489Z',
    destination: 'f7e441f7-4c71-496a-bb7e-b56ec362eeef',
    isFavorite: true,
    offers: [],
    type: 'train',
  },
];
const mockDestinations = [
  {
    id: '4fe42bcf-a733-48cd-85c3-b8a7332fd860',
    description: 'Geneva - a true asian pearl',
    name: 'Geneva',
    pictures: [
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/20.jpg',
        description: 'Geneva with a beautiful old town',
      },
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/4.jpg',
        description: 'Geneva with a beautiful old town',
      },
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/13.jpg',
        description: 'Geneva with crowded streets',
      },
    ],
  },
  {
    id: 'f9bbfca6-635f-4a9b-a011-ab41797f27e7',
    description: 'Kopenhagen - with crowded streets',
    name: 'Kopenhagen',
    pictures: [],
  },
  {
    id: '60131858-6ba9-4548-8be8-b41f0c27e98a',
    description: 'Valencia - for those who value comfort and coziness',
    name: 'Valencia',
    pictures: [
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/13.jpg',
        description:
          'Valencia full of of cozy canteens where you can try the best coffee in the Middle East',
      },
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/13.jpg',
        description:
          'Valencia with an embankment of a mighty river as a centre of attraction',
      },
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/19.jpg',
        description: 'Valencia is a beautiful city',
      },
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/19.jpg',
        description:
          'Valencia with an embankment of a mighty river as a centre of attraction',
      },
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/10.jpg',
        description: 'Valencia is a beautiful city',
      },
    ],
  },
  {
    id: 'dfdf3e7e-fe9b-4c66-b271-76b9156e00c7',
    description: 'Amsterdam - with crowded streets',
    name: 'Amsterdam',
    pictures: [
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/15.jpg',
        description: 'Amsterdam a true asian pearl',
      },
    ],
  },
  {
    id: '9bffeb65-51a5-4a88-9adc-b3456e70c915',
    description: 'Den Haag - a perfect place to stay with a family',
    name: 'Den Haag',
    pictures: [],
  },
  {
    id: '59130629-c01b-44b5-a62d-98872120602e',
    description: 'Barcelona - for those who value comfort and coziness',
    name: 'Barcelona',
    pictures: [
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/5.jpg',
        description: 'Barcelona is a beautiful city',
      },
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/4.jpg',
        description: 'Barcelona with a beautiful old town',
      },
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/13.jpg',
        description: 'Barcelona middle-eastern paradise',
      },
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/20.jpg',
        description: 'Barcelona for those who value comfort and coziness',
      },
    ],
  },
  {
    id: 'f7e441f7-4c71-496a-bb7e-b56ec362eeef',
    description: 'Paris - with crowded streets',
    name: 'Paris',
    pictures: [
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/14.jpg',
        description: 'Paris with a beautiful old town',
      },
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/8.jpg',
        description: 'Paris for those who value comfort and coziness',
      },
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/9.jpg',
        description: 'Paris in a middle of Europe',
      },
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/6.jpg',
        description:
          'Paris famous for its crowded street markets with the best street food in Asia',
      },
    ],
  },
  {
    id: 'c9b61f46-90d8-4253-bdd3-18d49e747e15',
    description: 'Moscow - is a beautiful city',
    name: 'Moscow',
    pictures: [
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/6.jpg',
        description: 'Moscow a true asian pearl',
      },
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/9.jpg',
        description: 'Moscow is a beautiful city',
      },
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/4.jpg',
        description: 'Moscow is a beautiful city',
      },
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/7.jpg',
        description: 'Moscow in a middle of Europe',
      },
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/10.jpg',
        description: 'Moscow for those who value comfort and coziness',
      },
    ],
  },
  {
    id: '7418dd97-1526-4fb5-80b2-f926026dce35',
    description: 'Munich - in a middle of Europe',
    name: 'Munich',
    pictures: [
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/3.jpg',
        description: 'Munich middle-eastern paradise',
      },
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/8.jpg',
        description:
          'Munich with an embankment of a mighty river as a centre of attraction',
      },
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/13.jpg',
        description:
          'Munich famous for its crowded street markets with the best street food in Asia',
      },
    ],
  },
  {
    id: '45ce987c-2ad3-450c-8d67-9b9899f7f95b',
    description: 'Helsinki - a perfect place to stay with a family',
    name: 'Helsinki',
    pictures: [
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/19.jpg',
        description: 'Helsinki a true asian pearl',
      },
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/13.jpg',
        description: 'Helsinki a true asian pearl',
      },
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/2.jpg',
        description: 'Helsinki a true asian pearl',
      },
    ],
  },
];
const mockOffers = [
  {
    type: 'taxi',
    offers: [
      {
        id: 'aba07a93-39f5-4bfe-b299-6496c684eda9',
        title: 'Upgrade to a business class',
        price: 47,
      },
      {
        id: 'ac8544b0-d752-429c-9536-33dd72890ded',
        title: 'Choose the radio station',
        price: 135,
      },
      {
        id: '1ff108d1-873a-40f9-981c-2d4468300729',
        title: 'Choose temperature',
        price: 102,
      },
      {
        id: '76f330af-ba36-465f-a671-463290268ab4',
        title: 'Drive quickly,  in a hurry',
        price: 45,
      },
      {
        id: '34fb0fae-bb15-40de-aeb3-e184bdace0de',
        title: 'Drive slowly',
        price: 182,
      },
    ],
  },
  {
    type: 'bus',
    offers: [
      {
        id: 'd349de03-b18a-48c2-91a0-6ccb47c1b1c0',
        title: 'Infotainment system',
        price: 169,
      },
      {
        id: '1ec38407-4138-410c-a88d-89e90ec794ea',
        title: 'Order meal',
        price: 123,
      },
      {
        id: '9afe3d2e-849d-42bd-ab8d-bbdce6071f3e',
        title: 'Choose seats',
        price: 178,
      },
    ],
  },
  {
    type: 'train',
    offers: [
      {
        id: 'bd11bb42-c1f3-4bfc-a52c-9acfde08261a',
        title: 'Book a taxi at the arrival point',
        price: 111,
      },
      {
        id: '9ca45d65-7d70-4406-8637-b523fa425127',
        title: 'Order a breakfast',
        price: 30,
      },
      {
        id: 'b0ab37b9-bea9-484c-b186-aad70be5bcd7',
        title: 'Wake up at a certain time',
        price: 188,
      },
    ],
  },
  {
    type: 'flight',
    offers: [
      {
        id: 'b1fff755-ff3f-4738-8d23-3b06430f6ca7',
        title: 'Choose meal',
        price: 34,
      },
      {
        id: '7911e14c-41b5-455c-9a5c-dc18d8eab2ff',
        title: 'Choose seats',
        price: 53,
      },
      {
        id: '2abde2e9-1f7a-412a-918a-2201dc21cccb',
        title: 'Upgrade to comfort class',
        price: 72,
      },
      {
        id: 'a653a824-5fb8-46b2-a9d9-226a8b67cb88',
        title: 'Upgrade to business class',
        price: 104,
      },
      {
        id: 'd449f65f-9436-4125-a694-13ce0a7fd3c2',
        title: 'Add luggage',
        price: 50,
      },
      {
        id: '9d9ff558-89a1-4b4b-b7b8-91616e507a19',
        title: 'Business lounge',
        price: 102,
      },
    ],
  },
  {
    type: 'check-in',
    offers: [
      {
        id: '2dc3e9ce-2fb3-4f79-9a03-4662ca11dc3c',
        title: 'Choose the time of check-in',
        price: 42,
      },
      {
        id: '22999139-a258-48b6-a961-a2d63b1a9bf8',
        title: 'Choose the time of check-out',
        price: 195,
      },
      {
        id: '727928d6-2ae2-4031-b136-526264eda09e',
        title: 'Add breakfast',
        price: 190,
      },
      {
        id: '858cf3dc-88a3-4fe9-819b-4c1c736eb547',
        title: 'Laundry',
        price: 113,
      },
      {
        id: '0aa17d21-c0f3-4b09-9d52-0ddbee59ad70',
        title: 'Order a meal from the restaurant',
        price: 58,
      },
    ],
  },
  {
    type: 'sightseeing',
    offers: [],
  },
  {
    type: 'ship',
    offers: [
      {
        id: 'd948ca37-9ce2-4f82-bc00-30f92877670a',
        title: 'Choose meal',
        price: 186,
      },
      {
        id: '9f4d8c41-8563-489a-8cc9-d23ee1547765',
        title: 'Choose seats',
        price: 133,
      },
      {
        id: '88200029-2f22-4028-a6df-23eb93662329',
        title: 'Upgrade to comfort class',
        price: 66,
      },
      {
        id: '77231908-bdc4-4507-81cf-4d3b75fe1297',
        title: 'Upgrade to business class',
        price: 147,
      },
      {
        id: '2ffd990d-f949-48c1-ba0b-552265c193e3',
        title: 'Add luggage',
        price: 195,
      },
      {
        id: '9dfbb716-120d-4134-9c0f-d8e893569a69',
        title: 'Business lounge',
        price: 194,
      },
    ],
  },
  {
    type: 'drive',
    offers: [
      {
        id: 'f346d370-36b6-42ba-b5f7-6fbd9ee04476',
        title: 'With automatic transmission',
        price: 42,
      },
      {
        id: '7a15c8a0-7c88-47aa-8c45-da12a14554e0',
        title: 'With air conditioning',
        price: 94,
      },
    ],
  },
  {
    type: 'restaurant',
    offers: [
      {
        id: 'f2e8c513-5482-4658-909b-8adbc74dbdb6',
        title: 'Choose live music',
        price: 143,
      },
      {
        id: 'cb1e3d84-6e42-41fa-b7c3-79b702cc8e71',
        title: 'Choose VIP area',
        price: 194,
      },
    ],
  },
];

const loadPoints = () => mockPoints;

const loadDestinations = () => mockDestinations;

const loadOffers = () => mockOffers;

export { loadPoints, loadDestinations, loadOffers };
