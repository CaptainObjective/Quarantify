export const isAuthenticated = Math.random() > 0 ? true : false;

//return a promise that resolves with a File instance
export function urltoFile(url, filename, mimeType) {
  return fetch(url)
    .then(function(res) {
      return res.arrayBuffer();
    })
    .then(function(buf) {
      return new File([buf], filename, { type: mimeType });
    });
}
