import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  Promise.allSettled([uploadPhoto(), createUser()])
    .then((results) => {
      const errors = results.filter((result) => result.status === 'rejected');
      if (errors.length > 0) {
        console.log('Signup system offline');
      } else {
        const photo = results[0].value.body;
        const user = results[1].value;
        console.log(`${photo} ${user.firstName} ${user.lastName}`);
      }
    });
}

export default handleProfileSignup;
