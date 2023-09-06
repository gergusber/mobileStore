import { json } from 'react-router-dom'


const URL_FETCH = 'https://itx-frontend-test.onrender.com/api/product'

export async function getMobiles() {
  const response = await fetch(URL_FETCH);
  if (!response.ok) {
    return json({ message: 'Could not fetch events' },
      { status: 500 })
  } else {
    return await response.json();
  }
}

export async function getMobileDetails(id) {
  const response = await fetch(`${URL_FETCH}/${id}`);
  if (!response.ok) {
    return json({ message: 'Could not fetch events' },
      { status: 500 })
  } else {
    return await response.json();
  }
} 