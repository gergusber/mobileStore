import { json } from 'react-router-dom'


const URL_FETCH='https://itx-frontend-test.onrender.com/api/product' 

export async function getMobiles() {
  const response = await fetch(URL_FETCH);
  console.log(response);
  if (!response.ok) {
    return json({ message: 'Could not fetch events' },
      { status: 500 })
  } else {
    const resData = await response.json();
    console.log("Res data = ", resData);
    return resData;
  }
} 


export async function getMobileDetails(id) {
  console.log('dATA!', id);

  const response = await fetch(`https://itx-frontend-test.onrender.com/api/product/${id}`);

  console.log(response);

  if (!response.ok) {
    return json({ message: 'Could not fetch events' },
      { status: 500 })
  } else {
    const resData = await response.json();
    console.log("Res data = ", resData);

    return resData;
  }
} 