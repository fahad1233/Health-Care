export function Postdata(userData){
   
    return new Promise((resolve , reject) => {

          fetch ('https://localhost:44302/api/token', {
              method : 'POST',
              body : JSON.stringify(userData)
          })
          .then((response) => response.json())
          .then((responseJson) => {
              resolve(responseJson);
          })
          .catch((error) => {
              reject(error);
          });
    });
}