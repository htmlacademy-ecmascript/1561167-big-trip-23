const mockPoints = [
  {
    id: '0f458b5c-db98-49d4-a87b-0df701a7477c',
    basePrice: 6962,
    dateFrom: '2024-03-12T20:38:06.340Z',
    dateTo: '2024-03-13T11:23:06.340Z',
    destination: 'c1e101b5-f889-469f-99d1-08ed414f1cdb',
    isFavorite: true,
    offers: ['6c985491-6c4a-490b-8a03-a3998029d0cb'],
    type: 'restaurant',
  },
  {
    id: '133559ce-bc6f-4a9f-8342-e6e5378bbcf2',
    basePrice: 254,
    dateFrom: '2024-03-15T07:57:06.340Z',
    dateTo: '2024-03-17T04:28:06.340Z',
    destination: '779bea6d-a0c7-4906-83e8-07fe93e62da2',
    isFavorite: true,
    offers: [],
    type: 'train',
  },
  {
    id: '1ad4b34c-3ea8-4498-93d4-658beb228e4f',
    basePrice: 9713,
    dateFrom: '2024-03-18T04:53:06.340Z',
    dateTo: '2024-03-18T13:37:06.340Z',
    destination: 'e14ebfa1-4a32-464f-ae99-0a5bb3dd8894',
    isFavorite: true,
    offers: ['6c985491-6c4a-490b-8a03-a3998029d0cb'],
    type: 'restaurant',
  },
  {
    id: '79208705-532c-4c58-b063-bd7af94b6d4a',
    basePrice: 219,
    dateFrom: '2024-03-18T21:14:06.340Z',
    dateTo: '2024-03-19T05:22:06.340Z',
    destination: '7a700745-d482-42cd-b9cb-80fe30699695',
    isFavorite: false,
    offers: [
      'be15bcfb-21c5-45cb-9cca-fda80e89a99c',
      'a0fb76b9-28ee-4139-b665-e53a64945693',
      '4969fed3-931c-4248-9fa3-3f296b067bad',
    ],
    type: 'bus',
  },
  {
    id: 'a6f9a301-263b-46aa-9bce-1d71d571d00a',
    basePrice: 6122,
    dateFrom: '2024-03-19T11:41:06.340Z',
    dateTo: '2024-03-20T18:11:06.340Z',
    destination: '7a700745-d482-42cd-b9cb-80fe30699695',
    isFavorite: false,
    offers: [],
    type: 'check-in',
  },
  {
    id: '54e2d697-f51a-4fc8-bc09-51fea666a726',
    basePrice: 9608,
    dateFrom: '2024-03-21T17:15:06.340Z',
    dateTo: '2024-03-22T05:36:06.340Z',
    destination: '8c44aeea-ee66-40b0-a294-cab550d3e107',
    isFavorite: false,
    offers: [],
    type: 'sightseeing',
  },
  {
    id: '007ac159-0f5f-47d7-a1c1-e660f7c43c26',
    basePrice: 8737,
    dateFrom: '2024-03-24T02:55:06.340Z',
    dateTo: '2024-03-24T19:14:06.340Z',
    destination: '10e33a72-d1aa-4c24-9383-bd8f62d77959',
    isFavorite: false,
    offers: [],
    type: 'sightseeing',
  },
  {
    id: '2edcfeec-b60d-4a88-9356-54ec1322ae7a',
    basePrice: 4897,
    dateFrom: '2024-03-25T17:15:06.340Z',
    dateTo: '2024-03-27T12:11:06.340Z',
    destination: '87dbd064-ca3b-4290-a495-fc49fe6701a2',
    isFavorite: true,
    offers: ['8abe058f-ff28-41ac-861e-bab093006b57'],
    type: 'train',
  },
  {
    id: '65932dd0-1c0f-400f-8f63-4b492bc8efb2',
    basePrice: 1622,
    dateFrom: '2024-03-28T16:54:06.340Z',
    dateTo: '2024-03-29T20:19:06.340Z',
    destination: '7a700745-d482-42cd-b9cb-80fe30699695',
    isFavorite: false,
    offers: [],
    type: 'sightseeing',
  },
  {
    id: '992bc31c-0137-43f8-9bed-4b4dafac66f5',
    basePrice: 617,
    dateFrom: '2024-03-31T10:38:06.340Z',
    dateTo: '2024-04-02T04:09:06.340Z',
    destination: '7a700745-d482-42cd-b9cb-80fe30699695',
    isFavorite: false,
    offers: [],
    type: 'drive',
  },
  {
    id: '1cde59dd-4418-4974-a323-b62044ea36d6',
    basePrice: 612,
    dateFrom: '2024-04-03T01:06:06.340Z',
    dateTo: '2024-04-04T22:05:06.340Z',
    destination: '18cb12bc-bf84-46a7-a19b-d305bc3f9dec',
    isFavorite: false,
    offers: [
      '7cb52218-407a-4e3b-9ddb-3637dcbaaf0a',
      '6c985491-6c4a-490b-8a03-a3998029d0cb',
    ],
    type: 'restaurant',
  },
  {
    id: '04223ddd-8425-49b0-bcea-b1adb0b0c501',
    basePrice: 9015,
    dateFrom: '2024-04-05T22:17:06.340Z',
    dateTo: '2024-04-07T22:26:06.340Z',
    destination: 'c1e101b5-f889-469f-99d1-08ed414f1cdb',
    isFavorite: true,
    offers: [
      '7cb55a88-3969-40bf-8cca-98e533c522a4',
      '8a119495-ee5b-46c7-8d4e-2e32c961ff14',
      '998c19ba-598e-4eb3-9e55-b5b04bcb0cf2',
      'e96110b6-156b-4c04-a7e8-673867930b4b',
      '76692350-791e-4814-9c37-5b981feefc43',
    ],
    type: 'check-in',
  },
  {
    id: '0ed25479-c3f0-48dc-b955-ce96e720c3fd',
    basePrice: 2226,
    dateFrom: '2024-04-09T18:40:06.340Z',
    dateTo: '2024-04-10T09:11:06.340Z',
    destination: '8c44aeea-ee66-40b0-a294-cab550d3e107',
    isFavorite: false,
    offers: [
      '5fb2f767-55db-47c8-8654-b8658e934d1d',
      '8abe058f-ff28-41ac-861e-bab093006b57',
    ],
    type: 'train',
  },
  {
    id: '088d8969-2981-49fe-91e4-951373026b02',
    basePrice: 1544,
    dateFrom: '2024-04-11T23:14:06.340Z',
    dateTo: '2024-04-13T04:13:06.340Z',
    destination: '8c44aeea-ee66-40b0-a294-cab550d3e107',
    isFavorite: false,
    offers: ['01dcb2b9-8457-49fa-a876-1c06395f123b'],
    type: 'drive',
  },
  {
    id: '8d3ffb10-dbe6-433e-87ac-2e956a012fa1',
    basePrice: 853,
    dateFrom: '2024-04-14T09:18:06.340Z',
    dateTo: '2024-04-15T08:00:06.340Z',
    destination: '87dbd064-ca3b-4290-a495-fc49fe6701a2',
    isFavorite: false,
    offers: [],
    type: 'drive',
  },
  {
    id: '43673357-e56f-4f12-907b-dd2a8cb94e42',
    basePrice: 4637,
    dateFrom: '2024-04-16T21:35:06.340Z',
    dateTo: '2024-04-18T07:12:06.340Z',
    destination: '81ea82c6-c79b-4331-bcb2-e48db6a3d085',
    isFavorite: false,
    offers: [],
    type: 'sightseeing',
  },
  {
    id: 'cf55edd0-d6c2-466d-bf24-142fd012a42c',
    basePrice: 4823,
    dateFrom: '2024-04-19T04:42:06.340Z',
    dateTo: '2024-04-20T04:10:06.340Z',
    destination: '87dbd064-ca3b-4290-a495-fc49fe6701a2',
    isFavorite: false,
    offers: [],
    type: 'restaurant',
  },
  {
    id: '218d265b-9e9d-45f2-81b6-9130f75cadc5',
    basePrice: 8639,
    dateFrom: '2024-04-20T15:39:06.340Z',
    dateTo: '2024-04-21T04:44:06.340Z',
    destination: '18cb12bc-bf84-46a7-a19b-d305bc3f9dec',
    isFavorite: false,
    offers: [],
    type: 'flight',
  },
  {
    id: '2d1ed75d-4b45-4ad5-9600-19a8dab8f48f',
    basePrice: 6807,
    dateFrom: '2024-04-21T20:13:06.340Z',
    dateTo: '2024-04-23T10:29:06.340Z',
    destination: '10e33a72-d1aa-4c24-9383-bd8f62d77959',
    isFavorite: true,
    offers: [
      '651def8d-de4c-469c-8fb7-9c9b46b88e19',
      '09f26766-b9e0-4499-9b5f-336577a0fdb8',
    ],
    type: 'taxi',
  },
  {
    id: '57e2ffc7-a7ed-4762-a2ef-0be25d4fa64a',
    basePrice: 570,
    dateFrom: '2024-04-25T04:01:06.340Z',
    dateTo: '2024-04-27T02:54:06.340Z',
    destination: '87dbd064-ca3b-4290-a495-fc49fe6701a2',
    isFavorite: false,
    offers: [],
    type: 'sightseeing',
  },
  {
    id: '5a85d381-fe60-45f0-a5a2-520ae1715fd7',
    basePrice: 412,
    dateFrom: '2024-04-28T21:38:06.340Z',
    dateTo: '2024-04-29T13:31:06.340Z',
    destination: '7a700745-d482-42cd-b9cb-80fe30699695',
    isFavorite: false,
    offers: [
      '4c2042e2-3f7c-41c1-85b0-7e2ad3417929',
      '9b25991a-2610-4c90-8ebe-06dd58e84b51',
    ],
    type: 'ship',
  },
  {
    id: '6fd10d89-2e28-4f07-8dff-5c2c76c70d8e',
    basePrice: 3288,
    dateFrom: '2024-04-30T01:42:06.340Z',
    dateTo: '2024-05-01T03:55:06.340Z',
    destination: '81ea82c6-c79b-4331-bcb2-e48db6a3d085',
    isFavorite: false,
    offers: [
      '34c8591a-24de-4298-8cf9-bfaceb7496f9',
      '651def8d-de4c-469c-8fb7-9c9b46b88e19',
      '09f26766-b9e0-4499-9b5f-336577a0fdb8',
    ],
    type: 'taxi',
  },
  {
    id: 'ec981817-f1c9-4d48-906a-88023f206237',
    basePrice: 1284,
    dateFrom: '2024-05-01T23:02:06.340Z',
    dateTo: '2024-05-03T00:16:06.340Z',
    destination: '81ea82c6-c79b-4331-bcb2-e48db6a3d085',
    isFavorite: false,
    offers: [
      '37bad6f4-36ab-4705-9e36-5a93c3794741',
      '35b2c634-4fb5-4665-9bbb-8831c8d5449b',
      '9fa70007-1fbd-4537-801a-98755ae03092',
      'f6ef95d1-c38b-4ab7-b5d7-cdeb1e776e6d',
      '38ff562e-6e8b-4590-ae3a-2d8a7adc95e6',
      '985fef38-70a2-4e93-89bd-3c3a0d31d899',
    ],
    type: 'flight',
  },
  {
    id: '8f04ce9b-2134-4fbd-9b95-98e8941bcede',
    basePrice: 9705,
    dateFrom: '2024-05-05T00:31:06.340Z',
    dateTo: '2024-05-05T15:50:06.340Z',
    destination: '779bea6d-a0c7-4906-83e8-07fe93e62da2',
    isFavorite: true,
    offers: [
      '7cb52218-407a-4e3b-9ddb-3637dcbaaf0a',
      '6c985491-6c4a-490b-8a03-a3998029d0cb',
    ],
    type: 'restaurant',
  },
  {
    id: '8561f429-075e-4bb2-9671-a10a3fd88b99',
    basePrice: 6042,
    dateFrom: '2024-05-07T07:16:06.340Z',
    dateTo: '2024-05-08T10:13:06.340Z',
    destination: '81ea82c6-c79b-4331-bcb2-e48db6a3d085',
    isFavorite: false,
    offers: [],
    type: 'bus',
  },
];
const mockDestinations = [
  {
    id: '8c44aeea-ee66-40b0-a294-cab550d3e107',
    description: 'Barcelona - for those who value comfort and coziness',
    name: 'Barcelona',
    pictures: [
      {
        src: 'https://22.objects.htmlacademy.pro/static/destinations/18.jpg',
        description: 'Barcelona with a beautiful old town',
      },
      {
        src: 'https://22.objects.htmlacademy.pro/static/destinations/4.jpg',
        description:
          'Barcelona with an embankment of a mighty river as a centre of attraction',
      },
    ],
  },
  {
    id: 'e14ebfa1-4a32-464f-ae99-0a5bb3dd8894',
    description:
      'Monaco - full of of cozy canteens where you can try the best coffee in the Middle East',
    name: 'Monaco',
    pictures: [],
  },
  {
    id: '10e33a72-d1aa-4c24-9383-bd8f62d77959',
    description: 'Den Haag - a true asian pearl',
    name: 'Den Haag',
    pictures: [
      {
        src: 'https://22.objects.htmlacademy.pro/static/destinations/8.jpg',
        description:
          'Den Haag with an embankment of a mighty river as a centre of attraction',
      },
    ],
  },
  {
    id: '87dbd064-ca3b-4290-a495-fc49fe6701a2',
    description:
      'Geneva - famous for its crowded street markets with the best street food in Asia',
    name: 'Geneva',
    pictures: [],
  },
  {
    id: '7a700745-d482-42cd-b9cb-80fe30699695',
    description: 'Madrid - a true asian pearl',
    name: 'Madrid',
    pictures: [
      {
        src: 'https://22.objects.htmlacademy.pro/static/destinations/9.jpg',
        description: 'Madrid with crowded streets',
      },
      {
        src: 'https://22.objects.htmlacademy.pro/static/destinations/6.jpg',
        description:
          'Madrid with an embankment of a mighty river as a centre of attraction',
      },
    ],
  },
  {
    id: 'c1e101b5-f889-469f-99d1-08ed414f1cdb',
    description:
      'Venice - with an embankment of a mighty river as a centre of attraction',
    name: 'Venice',
    pictures: [
      {
        src: 'https://22.objects.htmlacademy.pro/static/destinations/14.jpg',
        description:
          'Venice with an embankment of a mighty river as a centre of attraction',
      },
    ],
  },
  {
    id: 'bb8ff0f6-1e4a-49ec-8fbe-243dfd2012e6',
    description:
      'Valencia - with an embankment of a mighty river as a centre of attraction',
    name: 'Valencia',
    pictures: [
      {
        src: 'https://22.objects.htmlacademy.pro/static/destinations/18.jpg',
        description:
          'Valencia with an embankment of a mighty river as a centre of attraction',
      },
      {
        src: 'https://22.objects.htmlacademy.pro/static/destinations/19.jpg',
        description: 'Valencia in a middle of Europe',
      },
      {
        src: 'https://22.objects.htmlacademy.pro/static/destinations/12.jpg',
        description: 'Valencia a true asian pearl',
      },
      {
        src: 'https://22.objects.htmlacademy.pro/static/destinations/17.jpg',
        description: 'Valencia with a beautiful old town',
      },
      {
        src: 'https://22.objects.htmlacademy.pro/static/destinations/5.jpg',
        description: 'Valencia is a beautiful city',
      },
    ],
  },
  {
    id: '18cb12bc-bf84-46a7-a19b-d305bc3f9dec',
    description: '',
    name: 'Frankfurt',
    pictures: [],
  },
  {
    id: '81ea82c6-c79b-4331-bcb2-e48db6a3d085',
    description: 'Amsterdam - a perfect place to stay with a family',
    name: 'Amsterdam',
    pictures: [
      {
        src: 'https://22.objects.htmlacademy.pro/static/destinations/10.jpg',
        description: 'Amsterdam with crowded streets',
      },
      {
        src: 'https://22.objects.htmlacademy.pro/static/destinations/17.jpg',
        description: 'Amsterdam a true asian pearl',
      },
      {
        src: 'https://22.objects.htmlacademy.pro/static/destinations/2.jpg',
        description:
          'Amsterdam with an embankment of a mighty river as a centre of attraction',
      },
      {
        src: 'https://22.objects.htmlacademy.pro/static/destinations/19.jpg',
        description:
          'Amsterdam with an embankment of a mighty river as a centre of attraction',
      },
      {
        src: 'https://22.objects.htmlacademy.pro/static/destinations/11.jpg',
        description: 'Amsterdam in a middle of Europe',
      },
    ],
  },
  {
    id: '779bea6d-a0c7-4906-83e8-07fe93e62da2',
    description:
      'Moscow - famous for its crowded street markets with the best street food in Asia',
    name: 'Moscow',
    pictures: [
      {
        src: 'https://22.objects.htmlacademy.pro/static/destinations/5.jpg',
        description:
          'Moscow with an embankment of a mighty river as a centre of attraction',
      },
      {
        src: 'https://22.objects.htmlacademy.pro/static/destinations/14.jpg',
        description:
          'Moscow full of of cozy canteens where you can try the best coffee in the Middle East',
      },
    ],
  },
];
const mockOffers = [
  {
    type: 'taxi',
    offers: [
      {
        id: '3416e9e7-c228-42d8-bd58-2ff3ff5b5ce9',
        title: 'Upgrade to a business class',
        price: 135,
      },
      {
        id: '790b741c-e4a1-4bb7-9d18-28a436f9eff1',
        title: 'Choose the radio station',
        price: 100,
      },
      {
        id: '34c8591a-24de-4298-8cf9-bfaceb7496f9',
        title: 'Choose temperature',
        price: 86,
      },
      {
        id: '651def8d-de4c-469c-8fb7-9c9b46b88e19',
        title: 'Drive quickly, Im in a hurry',
        price: 62,
      },
      {
        id: '09f26766-b9e0-4499-9b5f-336577a0fdb8',
        title: 'Drive slowly',
        price: 69,
      },
    ],
  },
  {
    type: 'bus',
    offers: [
      {
        id: 'be15bcfb-21c5-45cb-9cca-fda80e89a99c',
        title: 'Infotainment system',
        price: 106,
      },
      {
        id: 'a0fb76b9-28ee-4139-b665-e53a64945693',
        title: 'Order meal',
        price: 146,
      },
      {
        id: '4969fed3-931c-4248-9fa3-3f296b067bad',
        title: 'Choose seats',
        price: 83,
      },
    ],
  },
  {
    type: 'train',
    offers: [
      {
        id: '0806a267-c328-4328-bd9c-09972bfdd31a',
        title: 'Book a taxi at the arrival point',
        price: 127,
      },
      {
        id: '5fb2f767-55db-47c8-8654-b8658e934d1d',
        title: 'Order a breakfast',
        price: 82,
      },
      {
        id: '8abe058f-ff28-41ac-861e-bab093006b57',
        title: 'Wake up at a certain time',
        price: 148,
      },
    ],
  },
  {
    type: 'flight',
    offers: [
      {
        id: '37bad6f4-36ab-4705-9e36-5a93c3794741',
        title: 'Choose meal',
        price: 62,
      },
      {
        id: '35b2c634-4fb5-4665-9bbb-8831c8d5449b',
        title: 'Choose seats',
        price: 66,
      },
      {
        id: '9fa70007-1fbd-4537-801a-98755ae03092',
        title: 'Upgrade to comfort class',
        price: 108,
      },
      {
        id: 'f6ef95d1-c38b-4ab7-b5d7-cdeb1e776e6d',
        title: 'Upgrade to business class',
        price: 55,
      },
      {
        id: '38ff562e-6e8b-4590-ae3a-2d8a7adc95e6',
        title: 'Add luggage',
        price: 53,
      },
      {
        id: '985fef38-70a2-4e93-89bd-3c3a0d31d899',
        title: 'Business lounge',
        price: 79,
      },
    ],
  },
  {
    type: 'check-in',
    offers: [
      {
        id: '7cb55a88-3969-40bf-8cca-98e533c522a4',
        title: 'Choose the time of check-in',
        price: 58,
      },
      {
        id: '8a119495-ee5b-46c7-8d4e-2e32c961ff14',
        title: 'Choose the time of check-out',
        price: 43,
      },
      {
        id: '998c19ba-598e-4eb3-9e55-b5b04bcb0cf2',
        title: 'Add breakfast',
        price: 97,
      },
      {
        id: 'e96110b6-156b-4c04-a7e8-673867930b4b',
        title: 'Laundry',
        price: 164,
      },
      {
        id: '76692350-791e-4814-9c37-5b981feefc43',
        title: 'Order a meal from the restaurant',
        price: 163,
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
        id: '67c5b02e-a046-4182-b4de-b344b2ce5bf4',
        title: 'Choose meal',
        price: 101,
      },
      {
        id: '31238a31-99f8-4311-8a47-3321294ec2a3',
        title: 'Choose seats',
        price: 141,
      },
      {
        id: '3d9e8e3e-6f9d-4e46-b643-68a808fc8dce',
        title: 'Upgrade to comfort class',
        price: 98,
      },
      {
        id: '7143891a-39d4-4984-87a0-089bd3f278a7',
        title: 'Upgrade to business class',
        price: 177,
      },
      {
        id: '4c2042e2-3f7c-41c1-85b0-7e2ad3417929',
        title: 'Add luggage',
        price: 165,
      },
      {
        id: '9b25991a-2610-4c90-8ebe-06dd58e84b51',
        title: 'Business lounge',
        price: 151,
      },
    ],
  },
  {
    type: 'drive',
    offers: [
      {
        id: 'dda146b3-49f7-4ac3-8d79-32cc26054dca',
        title: 'With automatic transmission',
        price: 79,
      },
      {
        id: '01dcb2b9-8457-49fa-a876-1c06395f123b',
        title: 'With air conditioning',
        price: 125,
      },
    ],
  },
  {
    type: 'restaurant',
    offers: [
      {
        id: '7cb52218-407a-4e3b-9ddb-3637dcbaaf0a',
        title: 'Choose live music',
        price: 134,
      },
      {
        id: '6c985491-6c4a-490b-8a03-a3998029d0cb',
        title: 'Choose VIP area',
        price: 160,
      },
    ],
  },
];

const loadPoints = () => mockPoints;

const loadDestinations = () => mockDestinations;

const loadOffers = () => mockOffers;

export { loadPoints, loadDestinations, loadOffers };
