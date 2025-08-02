var ImageKit = require("imagekit");

var imagekit = new ImageKit({
  publicKey: process.env.IMG_PUBLIC_KEY,
  privateKey: process.env.IMG_PRIVATE_KEY,
  urlEndpoint: process.env.IMG_URL_END_POINT,
});

function uploadToImageKit(file) {
  return new Promise((resolve, reject) => {
    imagekit.upload(
      {
        file: file.buffer,
        fileName: "Song",
      },
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      }
    );
  });
}

module.exports = uploadToImageKit;
