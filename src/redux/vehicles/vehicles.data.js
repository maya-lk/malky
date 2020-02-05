const VEHICLES = [
  {
    "pic": "http://cdn.malkey.lk/dist/images/577a44a2277bf85221b77d31-thumb_282.jpg",
    "name": "Suzuki Alto - Premium - Manual",
    "rate": 4285.7,
    "deposit": 25000,
    "passengers": {
      "maximum": 4,
      "comfortable": 3
    },
    "luggage": {
      "losses": 1,
      "heavy_luggage": 2
    },
    "vehicle_type": "CAR",
    "vehicle_model": "Suzuki Alto - Premium - Manual",
    "price_range": "",
    "color": [
      "White"
    ],
    "yard": "",
    "registration_no": "WPCBE4282",
    "per_day": 2142.85,
    "total": ""
  },
  {
    "pic": "http://cdn.malkey.lk/dist/images/577a4507277bf8e40ab77d4a-thumb_282.jpg",
    "name": "Suzuki Alto - K10 - Auto",
    "rate": 5285.72,
    "deposit": 25000,
    "passengers": {
      "maximum": 4,
      "comfortable": 3
    },
    "luggage": {
      "losses": 1,
      "heavy_luggage": 2
    },
    "vehicle_type": "CAR",
    "vehicle_model": "Suzuki Alto - K10 - Auto",
    "price_range": "",
    "color": [
      ""
    ],
    "yard": "",
    "registration_no": "WPCAI1292",
    "per_day": 2642.86,
    "total": ""
  },
  {
    "pic": "http://cdn.malkey.lk/dist/images/5b5701cb277bf81f2dd06ccc-thumb_282.jpg",
    "name": "Suzuki Celerio - Auto",
    "rate": 5714.28,
    "deposit": 25000,
    "passengers": {
      "maximum": 4,
      "comfortable": 3
    },
    "luggage": {
      "losses": 1,
      "heavy_luggage": 2
    },
    "vehicle_type": "CAR",
    "vehicle_model": "Suzuki Celerio - Auto",
    "price_range": "",
    "color": [],
    "yard": "",
    "registration_no": "WPCAF3295",
    "per_day": 2857.14,
    "total": ""
  },
  {
    "pic": "http://cdn.malkey.lk/dist/images/577a4450277bf8570ab77d39-thumb_282.jpg",
    "name": "Perodua(Daihatsu) Axia ",
    "rate": 6428.58,
    "deposit": 25000,
    "passengers": {
      "maximum": 4,
      "comfortable": 3
    },
    "luggage": {
      "losses": 1,
      "heavy_luggage": 2
    },
    "vehicle_type": "CAR",
    "vehicle_model": "Perodua(Daihatsu) Axia ",
    "price_range": "",
    "color": [
      "White"
    ],
    "yard": "",
    "registration_no": "WPCAJ9712",
    "per_day": 3214.29,
    "total": ""
  },
  {
    "pic": "http://cdn.malkey.lk/dist/images/5cf0d57e277bf8ba2b7b31da-thumb_282.jpg",
    "name": "Toyota Vitz ",
    "rate": 7142.84,
    "deposit": 25000,
    "passengers": {
      "maximum": 4,
      "comfortable": 3
    },
    "luggage": {
      "losses": 1,
      "heavy_luggage": 2
    },
    "vehicle_type": "CAR",
    "vehicle_model": "Toyota Vitz ",
    "price_range": "",
    "color": [
      "Silver",
      ""
    ],
    "yard": "",
    "registration_no": "WPCBG6811",
    "per_day": 3571.42,
    "total": ""
  },
  {
    "pic": "http://cdn.malkey.lk/dist/images/5469d990f2a4e37d3d8b456a-thumb_282.jpg",
    "name": "Toyota Corolla NZE 141",
    "rate": 7857.14,
    "deposit": 25000,
    "passengers": {
      "maximum": 4,
      "comfortable": 3
    },
    "luggage": {
      "losses": 1,
      "heavy_luggage": 2
    },
    "vehicle_type": "CAR",
    "vehicle_model": "Toyota Corolla NZE 141",
    "price_range": "",
    "color": [],
    "yard": "",
    "registration_no": "WPKH4017",
    "per_day": 3928.57,
    "total": ""
  },
  {
    "pic": "http://cdn.malkey.lk/dist/images/577a498a277bf83d27b77d93-thumb_282.jpg",
    "name": "Toyota Aqua - Hybrid Auto",
    "rate": 7857.14,
    "deposit": 25000,
    "passengers": {
      "maximum": 4,
      "comfortable": 3
    },
    "luggage": {
      "losses": 1,
      "heavy_luggage": 2
    },
    "vehicle_type": "CAR",
    "vehicle_model": "Toyota Aqua - Hybrid Auto",
    "price_range": "",
    "color": [],
    "yard": "",
    "registration_no": "WPCAK5724",
    "per_day": 3928.57,
    "total": ""
  },
  {
    "pic": "http://cdn.malkey.lk/dist/images/5ab0a228277bf8740d548ac5-thumb_282.jpg",
    "name": "Toyota Corolla Axio",
    "rate": 7857.14,
    "deposit": 25000,
    "passengers": {
      "maximum": 4,
      "comfortable": 3
    },
    "luggage": {
      "losses": 1,
      "heavy_luggage": 2
    },
    "vehicle_type": "CAR",
    "vehicle_model": "Toyota Corolla Axio",
    "price_range": "",
    "color": [],
    "yard": "",
    "registration_no": "WPKM8316",
    "per_day": 3928.57,
    "total": ""
  },
  {
    "pic": "http://cdn.malkey.lk/dist/images/no_image_28.jpg",
    "name": "Mazda Mazda 3",
    "rate": 7857.14,
    "deposit": 25000,
    "passengers": {
      "maximum": 4,
      "comfortable": 3
    },
    "luggage": {
      "losses": 0,
      "heavy_luggage": 0
    },
    "vehicle_type": "CAR",
    "vehicle_model": "Mazda Mazda 3",
    "price_range": "",
    "color": [],
    "yard": "",
    "registration_no": "WPKS1261",
    "per_day": 3928.57,
    "total": ""
  },
  {
    "pic": "http://cdn.malkey.lk/dist/images/599e9e5d277bf8d010a11963-thumb_282.jpg",
    "name": "Perodua Bezza",
    "rate": 7857.14,
    "deposit": 25000,
    "passengers": {
      "maximum": 4,
      "comfortable": 3
    },
    "luggage": {
      "losses": 1,
      "heavy_luggage": 2
    },
    "vehicle_type": "CAR",
    "vehicle_model": "Perodua Bezza",
    "price_range": "",
    "color": [
      "White",
    ],
    "yard": "",
    "registration_no": "WPCAU6856",
    "per_day": 3928.57,
    "total": ""
  },
  {
    "pic": "http://cdn.malkey.lk/dist/images/5b9f92e3277bf84205f67087-thumb_282.jpg",
    "name": "Daihatsu Terios",
    "rate": 11428.56,
    "deposit": 50000,
    "passengers": {
      "maximum": 4,
      "comfortable": 2
    },
    "luggage": {
      "losses": 1,
      "heavy_luggage": 2
    },
    "vehicle_type": "SUV",
    "vehicle_model": "Daihatsu Terios",
    "price_range": "",
    "color": [],
    "yard": "",
    "registration_no": "WPKP6208",
    "per_day": 5714.28,
    "total": ""
  },
  {
    "pic": "http://cdn.malkey.lk/dist/images/577a48fa277bf8f31bb77dea-thumb_282.jpg",
    "name": "Toyota Axio NKR 165 - Hybrid",
    "rate": 12857.14,
    "deposit": 25000,
    "passengers": {
      "maximum": 4,
      "comfortable": 3
    },
    "luggage": {
      "losses": 1,
      "heavy_luggage": 2
    },
    "vehicle_type": "CAR",
    "vehicle_model": "Toyota Axio NKR 165 - Hybrid",
    "price_range": "",
    "color": [
      "White"
    ],
    "yard": "",
    "registration_no": "WPCAK5812",
    "per_day": 6428.57,
    "total": ""
  },
  {
    "pic": "http://cdn.malkey.lk/dist/images/59eab41f277bf89018567afb-thumb_282.jpg",
    "name": "Toyota Premio",
    "rate": 17142,
    "deposit": 25000,
    "passengers": {
      "maximum": 4,
      "comfortable": 3
    },
    "luggage": {
      "losses": 1,
      "heavy_luggage": 2
    },
    "vehicle_type": "CAR",
    "vehicle_model": "Toyota Premio",
    "price_range": "",
    "color": [
      "Red",
      "White"
    ],
    "yard": "",
    "registration_no": "WPCAW1553",
    "per_day": 8571,
    "total": ""
  },
  {
    "pic": "http://cdn.malkey.lk/dist/images/5b2b1f2d277bf8e2339fc527-thumb_282.jpg",
    "name": "Nissan X-Trail Hybrid",
    "rate": 0,
    "deposit": 50000,
    "passengers": {
      "maximum": 5,
      "comfortable": 3
    },
    "luggage": {
      "losses": 4,
      "heavy_luggage": 3
    },
    "vehicle_type": "SUV",
    "vehicle_model": "Nissan X-Trail Hybrid",
    "price_range": "",
    "color": [
      ""
    ],
    "yard": "",
    "registration_no": "WPCAK5749",
    "per_day": 0,
    "total": ""
  },
  {
    "pic": "http://cdn.malkey.lk/dist/images/5b1e2eee277bf8a04dffafaa-thumb_282.jpg",
    "name": "Toyota Hilux Double Cab 4WD",
    "rate": 14285.7,
    "deposit": 50000,
    "passengers": {
      "maximum": 5,
      "comfortable": 3
    },
    "luggage": {
      "losses": 4,
      "heavy_luggage": 6
    },
    "vehicle_type": "SUV",
    "vehicle_model": "Toyota Hilux Double Cab 4WD",
    "price_range": "",
    "color": [
      "Green"
    ],
    "yard": "",
    "registration_no": "WPPE7513",
    "per_day": 7142.85,
    "total": ""
  },
  {
    "pic": "http://cdn.malkey.lk/dist/images/5cab1cab277bf8861cd93af9-thumb_282.jpg",
    "name": "Suzuki Vitara-2019",
    "rate": 17142.84,
    "deposit": 50000,
    "passengers": {
      "maximum": 5,
      "comfortable": 3
    },
    "luggage": {
      "losses": 4,
      "heavy_luggage": 3
    },
    "vehicle_type": "SUV",
    "vehicle_model": "Suzuki Vitara-2019",
    "price_range": "",
    "color": [
      "White",
      "Silver"
    ],
    "yard": "",
    "registration_no": "WPCBG4966",
    "per_day": 8571.42,
    "total": ""
  },
  {
    "pic": "http://cdn.malkey.lk/dist/images/5b77b9a6277bf8d23a21e93a-thumb_282.jpg",
    "name": "Toyota Rush 2018",
    "rate": 18571.42,
    "deposit": 100000,
    "passengers": {
      "maximum": 5,
      "comfortable": 3
    },
    "luggage": {
      "losses": 4,
      "heavy_luggage": 3
    },
    "vehicle_type": "SUV",
    "vehicle_model": "Toyota Rush 2018",
    "price_range": "",
    "color": [
      "Green",
      "Silver"
    ],
    "yard": "",
    "registration_no": "WPCBE4676",
    "per_day": 9285.71,
    "total": ""
  },
  {
    "pic": "http://cdn.malkey.lk/dist/images/546afe5af2a4e3e5138b4569-thumb_282.jpg",
    "name": "Toyota Land Cruiser Prado - TRJ-150",
    "rate": 32857.14,
    "deposit": 100000,
    "passengers": {
      "maximum": 5,
      "comfortable": 3
    },
    "luggage": {
      "losses": 3,
      "heavy_luggage": 4
    },
    "vehicle_type": "SUV",
    "vehicle_model": "Toyota Land Cruiser Prado - TRJ-150",
    "price_range": "",
    "color": [
      "White"
    ],
    "yard": "",
    "registration_no": "WPCAO6730",
    "per_day": 16428.57,
    "total": ""
  },
  {
    "pic": "http://cdn.malkey.lk/dist/images/5b31b40a277bf8e710b78821-thumb_282.jpg",
    "name": "Toyota Alphard",
    "rate": 32857.14,
    "deposit": 100000,
    "passengers": {
      "maximum": 5,
      "comfortable": 5
    },
    "luggage": {
      "losses": 3,
      "heavy_luggage": 6
    },
    "vehicle_type": "VAN",
    "vehicle_model": "Toyota Alphard",
    "price_range": "",
    "color": [
      "White"
    ],
    "yard": "",
    "registration_no": "WPCAW6992",
    "per_day": 16428.57,
    "total": ""
  },
  {
    "pic": "http://cdn.malkey.lk/dist/images/585b5729277bf8aa1103f763-thumb_282.jpg",
    "name": "Mercedes benz Vito",
    "rate": 32857.14,
    "deposit": 100000,
    "passengers": {
      "maximum": 5,
      "comfortable": 5
    },
    "luggage": {
      "losses": 4,
      "heavy_luggage": 6
    },
    "vehicle_type": "VAN",
    "vehicle_model": "Mercedes benz Vito",
    "price_range": "",
    "color": [
      "",
      "Silver"
    ],
    "yard": "",
    "registration_no": "WPPH4590",
    "per_day": 16428.57,
    "total": ""
  },
  {
    "pic": "http://cdn.malkey.lk/dist/images/546b1fe1f2a4e3a1128b4568-thumb_282.jpg",
    "name": "Toyota Land Cruiser Sahara 200 V8",
    "rate": 42857.16,
    "deposit": 100000,
    "passengers": {
      "maximum": 5,
      "comfortable": 3
    },
    "luggage": {
      "losses": 3,
      "heavy_luggage": 3
    },
    "vehicle_type": "SUV",
    "vehicle_model": "Toyota Land Cruiser Sahara 200 V8",
    "price_range": "",
    "color": [],
    "yard": "",
    "registration_no": "WPCAA6121",
    "per_day": 21428.58,
    "total": ""
  },
  {
    "pic": "http://cdn.malkey.lk/dist/images/no_image_28.jpg",
    "name": "Toyota Voxy",
    "rate": 0,
    "deposit": 100000,
    "passengers": {
      "maximum": 6,
      "comfortable": 4
    },
    "luggage": {
      "losses": 6,
      "heavy_luggage": 6
    },
    "vehicle_type": "VAN",
    "vehicle_model": "Toyota Voxy",
    "price_range": "",
    "color": [
      "White"
    ],
    "yard": "",
    "registration_no": "CAC6715",
    "per_day": 0,
    "total": ""
  },
  {
    "pic": "http://cdn.malkey.lk/dist/images/546a063af2a4e370458b4568-thumb_282.jpg",
    "name": "Mitsubishi L300 (6-9 PSGR) Dual A/C",
    "rate": 8571.42,
    "deposit": 30000,
    "passengers": {
      "maximum": 6,
      "comfortable": 3
    },
    "luggage": {
      "losses": 6,
      "heavy_luggage": 6
    },
    "vehicle_type": "VAN",
    "vehicle_model": "Mitsubishi L300 (6-9 PSGR) Dual A/C",
    "price_range": "",
    "color": [
      ""
    ],
    "yard": "",
    "registration_no": "WPPE1176",
    "per_day": 4285.71,
    "total": ""
  },
  {
    "pic": "http://cdn.malkey.lk/dist/images/546af4a0f2a4e336138b4568-thumb_282.jpg",
    "name": "Toyota Land Cruiser Prado - TRJ-120",
    "rate": 27143.44,
    "deposit": 100000,
    "passengers": {
      "maximum": 6,
      "comfortable": 4
    },
    "luggage": {
      "losses": 3,
      "heavy_luggage": 3
    },
    "vehicle_type": "SUV",
    "vehicle_model": "Toyota Land Cruiser Prado - TRJ-120",
    "price_range": "",
    "color": [],
    "yard": "",
    "registration_no": "WPKC9000",
    "per_day": 13571.72,
    "total": ""
  },
  {
    "pic": "http://cdn.malkey.lk/dist/images/5ab2289f277bf89e7f5aed21-thumb_282.jpg",
    "name": "Mitsubishi Montero (2015)",
    "rate": 32857.14,
    "deposit": 100000,
    "passengers": {
      "maximum": 6,
      "comfortable": 4
    },
    "luggage": {
      "losses": 2,
      "heavy_luggage": 2
    },
    "vehicle_type": "SUV",
    "vehicle_model": "Mitsubishi Montero (2015)",
    "price_range": "",
    "color": [],
    "yard": "",
    "registration_no": "CAJ7189",
    "per_day": 16428.57,
    "total": ""
  },
  {
    "pic": "http://cdn.malkey.lk/dist/images/5b1e35c5277bf83667ffafd2-thumb_282.jpg",
    "name": "Mitsubishi Montero Sport 2017",
    "rate": 32856714,
    "deposit": 100000,
    "passengers": {
      "maximum": 7,
      "comfortable": 5
    },
    "luggage": {
      "losses": 4,
      "heavy_luggage": 3
    },
    "vehicle_type": "SUV",
    "vehicle_model": "Mitsubishi Montero Sport 2017",
    "price_range": "",
    "color": [
      "Brown",
      "White"
    ],
    "yard": "",
    "registration_no": "WPCBA3438",
    "per_day": 16428357,
    "total": ""
  },
  {
    "pic": "http://cdn.malkey.lk/dist/images/5b1e4153277bf8d118ffafbc-thumb_282.jpg",
    "name": "Toyota Regius Diesel Auto (9 PAX) Dual A/C",
    "rate": 11428.56,
    "deposit": 30000,
    "passengers": {
      "maximum": 8,
      "comfortable": 6
    },
    "luggage": {
      "losses": 6,
      "heavy_luggage": 6
    },
    "vehicle_type": "VAN",
    "vehicle_model": "Toyota Regius Diesel Auto (9 PAX) Dual A/C",
    "price_range": "",
    "color": [
      "Silver"
    ],
    "yard": "",
    "registration_no": "WPPH0380",
    "per_day": 5714.28,
    "total": ""
  },
  {
    "pic": "http://cdn.malkey.lk/dist/images/546a081bf2a4e3114a8b4569-thumb_282.jpg",
    "name": "Toyota Regius Petrol Auto (9 PAX) Dual A/C",
    "rate": 10000,
    "deposit": 30000,
    "passengers": {
      "maximum": 9,
      "comfortable": 5
    },
    "luggage": {
      "losses": 6,
      "heavy_luggage": 6
    },
    "vehicle_type": "VAN",
    "vehicle_model": "Toyota Regius Petrol Auto (9 PAX) Dual A/C",
    "price_range": "",
    "color": [],
    "yard": "",
    "registration_no": "WPPC6683",
    "per_day": 5000,
    "total": ""
  },
  {
    "pic": "http://cdn.malkey.lk/dist/images/5b20ba62277bf85b413716ab-thumb_282.jpg",
    "name": "Toyota Regius (manual) heavy vehicle license",
    "rate": 12857,
    "deposit": 30000,
    "passengers": {
      "maximum": 9,
      "comfortable": 7
    },
    "luggage": {
      "losses": 6,
      "heavy_luggage": 6
    },
    "vehicle_type": "VAN",
    "vehicle_model": "Toyota Regius (manual) heavy vehicle license",
    "price_range": "",
    "color": [],
    "yard": "",
    "registration_no": "WPNC6597",
    "per_day": 6428.5,
    "total": ""
  },
  {
    "pic": "http://cdn.malkey.lk/dist/images/577a5246277bf8d27ab77d31-thumb_282.jpg",
    "name": "Toyota HIACE Commuter 10 PAX. MULTI A/C",
    "rate": 12857.14,
    "deposit": 30000,
    "passengers": {
      "maximum": 10,
      "comfortable": 8
    },
    "luggage": {
      "losses": 6,
      "heavy_luggage": 6
    },
    "vehicle_type": "VAN",
    "vehicle_model": "Toyota HIACE Commuter 10 PAX. MULTI A/C",
    "price_range": "",
    "color": [],
    "yard": "",
    "registration_no": "WPNC9761",
    "per_day": 6428.57,
    "total": ""
  },
  {
    "pic": "http://cdn.malkey.lk/dist/images/5858b3d4277bf84f33e16e74-thumb_282.jpg",
    "name": "Toyota Grand Cabin 12 + 1 PAX. MULTI A/C",
    "rate": 18571.42,
    "deposit": 30000,
    "passengers": {
      "maximum": 12,
      "comfortable": 10
    },
    "luggage": {
      "losses": 4,
      "heavy_luggage": 5
    },
    "vehicle_type": "VAN",
    "vehicle_model": "Toyota Grand Cabin 12 + 1 PAX. MULTI A/C",
    "price_range": "",
    "color": [],
    "yard": "",
    "registration_no": "WPND1489",
    "per_day": 9285.71,
    "total": ""
  },
  {
    "pic": "http://cdn.malkey.lk/dist/images/546a093af2a4e3534a8b456a-thumb_282.jpg",
    "name": "Toyota HIACE Commuter 15 PAX. MULTI A/C",
    "rate": 15714.28,
    "deposit": 30000,
    "passengers": {
      "maximum": 15,
      "comfortable": 10
    },
    "luggage": {
      "losses": 6,
      "heavy_luggage": 6
    },
    "vehicle_type": "VAN",
    "vehicle_model": "Toyota HIACE Commuter 15 PAX. MULTI A/C",
    "price_range": "",
    "color": [],
    "yard": "",
    "registration_no": "WPNC3497",
    "per_day": 7857.14,
    "total": ""
  },
  {
    "pic": "http://cdn.malkey.lk/dist/images/599eb303277bf85d62a11915-thumb_282.jpg",
    "name": "Toyota Coaster 29 Seater (2017)",
    "rate": 0,
    "deposit": 100000,
    "passengers": {
      "maximum": 29,
      "comfortable": 29
    },
    "luggage": {
      "losses": 2,
      "heavy_luggage": 2
    },
    "vehicle_type": "BUS",
    "vehicle_model": "Toyota Coaster 29 Seater (2017)",
    "price_range": "",
    "color": [
      "White"
    ],
    "yard": "",
    "registration_no": "WPND5344",
    "per_day": 0,
    "total": ""
  }
];

export default VEHICLES;

export const COLORS = [
  "Red",
  "Black",
  "White",
  "Silver"
];

export const TYPES = [
  "Car",
  "SUV",
  "Van",
  "Bus"
]

export const CATEGORIES = [
  {
    "Car": [
      "Luxuary",
      "Premium",
      "General Cars",
      "Classic and Vintage"
    ]
  },
  {
    "SUV": [
      "4WD"
    ]
  },
  {
    "Van": [
      "Classic and Vintage",
      "Vans and MPV"
    ]
  },
  {
    "Bus": [
      "Buses"
    ]
  }
];

export const MODELS = [
  "Toyota Voxy",
  "Mazda Mazda 6",
  "Toyota Coaster 29 Seater (2017)",
  "Perodua Bezza",
  "Mercedes benz E250-2017",
  "Toyota Hilux Double Cab 4WD",
  "Mitsubishi Montero Sport 2017",
  "Toyota Alphard Executive Lounge",
  "Nissan X-Trail Hybrid",
  "Mercedes benz S Class Long Wheel Base 2018",
  "Honda Vezel",
  "Toyota Rush 2018"
];