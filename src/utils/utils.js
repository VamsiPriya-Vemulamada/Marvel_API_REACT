import MD5 from "crypto-js/md5";

const API_URL = process.env.REACT_APP_BASE_URL;

const getHash = (ts, secretKey, publicKey) => {
  return MD5(ts + secretKey + publicKey).toString();
};

const fetchHeroes = async (value) => {
  const ts = new Date().getTime(); // Generate timestamp
  const apiKey = process.env.REACT_APP_API_KEY;
  const privateKey = process.env.REACT_APP_PRIVATE_KEY;
  const hash = getHash(ts, privateKey, apiKey);
  const url = `${API_URL}/v1/public/characters?ts=${ts}&apikey=${apiKey}&hash=${hash}&nameStartsWith=${value}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export { fetchHeroes };