function getRequest(url) {
  const data = fetch(url)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
}

module.exports = getRequest;
