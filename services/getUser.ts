import { User } from '../types/global'
export const getUser = ({ email, password }: User) => {

  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve({
        status: true,
        info: 'Login '
      })
    }, 2000);
  });


}