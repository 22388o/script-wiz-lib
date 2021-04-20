import CryptoJS from "crypto-js";

const ripemd160 = (data: string) => {
  return CryptoJS.RIPEMD160(data).toString();
};

const sha1 = (data: string) => {
  return CryptoJS.SHA1(data).toString();
};

const sha256 = (data: string) => {
  return CryptoJS.SHA256(data).toString();
};

const hash160 = (data: string) => {
  const dataWithSha256Hashed = CryptoJS.SHA256(data);
  const dataWithRipemd160Hashed = CryptoJS.RIPEMD160(dataWithSha256Hashed).toString();

  return dataWithRipemd160Hashed;
};

export { ripemd160, sha1, sha256, hash160 };