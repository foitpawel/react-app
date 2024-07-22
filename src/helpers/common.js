const fetchApi = async (apiUrl) => {
  const response = await fetch(apiUrl);
  return await response.json();
};

export {
  fetchApi
};
