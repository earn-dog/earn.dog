module.exports = (req, res) => {
  console.log(process.env.FIREBASE_AUTH_DOMAIN);
  console.log(
    Buffer.from(process.env.FIREBASE_AUTH_DOMAIN, "base64").toString()
  ); // define buffer
  return res.end("check /_logs");
};
