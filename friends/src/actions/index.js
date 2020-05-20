import React from 'react';

import {axiosWithAuth} from "../utils/axiosWithAuth";





// export const addFriend = (data) => {
//       axiosWithAuth()
//         .post("/api/friends", data)
//         .then(res => {
//           console.log(res);
          
//         })
//         .catch(err => {
//            console.log(err)
//         })
//      axiosWithAuth()
//      .get('/api/friends')
//      .then((res) => {
//         console.log(res);
//         this.setState({
//           list: res.data,
//         });
//       })
//       .catch((err) => console.log(err.response));
// };