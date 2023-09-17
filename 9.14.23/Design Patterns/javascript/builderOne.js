class Address {
  constructor (zip, street) {
    this.zip = zip
    this.street = street
  }
}

class User {
  constructor(name, age, phone, address) {
    this.name = name
  }
}

class UserBuilder {
  constructor(name) {
    this.user = new User(name)
  }

  setAge (age) {
    this.user.age = age
    return this
  }
  setPhone (phone) {
    this.user.phone = phone
    return this
  }
  setAddress (address) {
    this.user.address = address
    return this
  }

  build () {
    return this.user
  }
}

let user = new UserBuilder('Jered').setAge(10).setPhone(1111111111).build()

console.log(user);