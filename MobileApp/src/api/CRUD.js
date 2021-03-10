export let BASE_URL =
  "http://ec2-3-21-159-81.us-east-2.compute.amazonaws.com:8080/";

export async function getDataAsync(path) {
  let url = BASE_URL + path;
  return await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    console.log(response);
    if (!response.ok) {
      let error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
    return response.json();
  });
}

export async function postDataAsync(path = "", data = {}) {
  let url = BASE_URL + path;
  return await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => {
    return response;
  });
}

// export async function putDataAsync(url, data){
//     console.log('fetching data')
//     let response = await fetch(url, {
//         method: 'PUT',
//         headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json'

//         },
//         body: JSON.stringify(data)
//     });
//     console.log(response)
//     let body = await response.json();
//     console.log(body)
//     console.log('fetched data')
//     return body;
// }
