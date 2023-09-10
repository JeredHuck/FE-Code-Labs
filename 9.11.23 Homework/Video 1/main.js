// This

const user = {
  firstName: 'Jered',
  lastName: 'Scott',
  hobbies: ['programming', 'guitar'],
  listHobbies: function () {
    this.hobbies.forEach(function(hobby) {
      console.log(this.firstName);
      console.log(hobby);
    }, this);
  }
}

user.listHobbies();