// import { User } from './models/User';
// import axios, { AxiosResponse } from 'axios';
// import { Collection } from './src/models/Collection';
// import { User, UserProps }  from './src/models/User';
import { UserEdit } from './src/views/UserEdit';
import { User } from './src/models/User';

const user = User.buildUser({ name: 'NAME', age: 20})
const root = document.getElementById('root');
if (root) {
  const userEdit = new UserEdit(root, user);

  userEdit.render();

  console.log(userEdit)
} else {
  throw new Error('Root element not found')
}


// const collection = new Collection<User, UserProps>(
//   'http://localhost:3000/users',
//   (json: UserProps) => User.buildUser(json)
// )

// collection.on('change', () => {
//   console.log(collection)
// });

// collection.fetch();

// axios.get('http://localhost:3000/users')
//   .then((response: AxiosResponse) => {
//     console.log(response.data)
//   })
// const user = User.buildUser({id: 1});

// user.events.on('cange', () => {
//   console.log('change')
// })
// user.sync.save(id);

// const on = user.on;

// on('change', () => {
//   console.log('user was changed!')
// });

// user.on('change', () => {
//   console.log(user)
// })

// user.fetch();

// user.isAdminUser()