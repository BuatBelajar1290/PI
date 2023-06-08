import axios from 'axios';
import { async } from 'regenerator-runtime';

async class getToken() {
  const token = await axios('http://localhost:3000/admin/list');
  console.log(token);

  let uuid = '';

  token.data.forEach((data) => {
    uuid += `${data.uuid}`;
  });

  return uuid;
}

console.log(getToken());