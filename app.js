const appp = Vue.createApp({


    data() {
        return {

            firstName: 'John',
            lastName: 'Smith',
            profile: 'https://randomuser.me/api/portraits/men/60.jpg',
            gender: 'male',
            email: 'male',
        }
    },

    methods: {
        async getUserProfile() {
const res = await fetch('https://randomuser.me/api/')

const {results}= await res.json()
console.log(results);

this.firstName=results[0].name.first
this.lastName=results[0].name.last
this.email=results[0].email
this.profile=results[0].picture.large
this.gender=results[0].gender

console.log();
        } 
    }
})
appp.mount('#app')




[
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Konstanciya",
        "last": "Fesun"
      },
      "location": {
        "street": {
          "number": 8341,
          "name": "Akademika Lebedieva"
        },
        "city": "Inkerman",
        "state": "Hmelnicka",
        "country": "Ukraine",
        "postcode": 79149,
        "coordinates": {
          "latitude": "80.6599",
          "longitude": "19.8504"
        },
        "timezone": {
          "offset": "-8:00",
          "description": "Pacific Time (US & Canada)"
        }
      },
      "email": "konstanciya.fesun@example.com",
      "login": {
        "uuid": "6e22d75e-c97f-41f3-a9c8-a7caa3ce9e3a",
        "username": "lazyostrich546",
        "password": "shazam",
        "salt": "LC7e8n5K",
        "md5": "056bc5e455e6edd05568af5f0283e491",
        "sha1": "de6a9e0a72921171aaf9124513528cd6921d74ab",
        "sha256": "13aebabcd0e858947dadb64099fc7b8817bf5d2ceefad00f44c011405378c1a5"
      },
      "dob": {
        "date": "1987-05-19T13:21:36.337Z",
        "age": 36
      },
      "registered": {
        "date": "2015-07-25T19:18:02.579Z",
        "age": 8
      },
      "phone": "(067) U95-9169",
      "cell": "(099) E97-6545",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/64.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/64.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/64.jpg"
      },
      "nat": "UA"
    }
  ]