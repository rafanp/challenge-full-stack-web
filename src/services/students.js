const serviceName = 'students';
const apiUrl = process.env.VUE_APP_API_URL;

const get = async () => {
  const response = await fetch(`${apiUrl}/${serviceName}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data = await response.json();
  return data;
};

const getById = async (id) => {
  const response = await fetch(`${apiUrl}/${serviceName}/${id}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data = await response.json();
  return data;
};

const deleteItem = async (id) => {
  const response = await fetch(`${apiUrl}/${serviceName}/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response;
};

const post = async (payload) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  };

  const response = await fetch(`${apiUrl}/${serviceName}`, requestOptions);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response;
};

const put = async (payload) => {
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  };

  const response = await fetch(
    `${apiUrl}/${serviceName}/${payload.id}`,
    requestOptions
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response;
};

export default {
  get,
  getById,
  delete: deleteItem,
  post,
  put,
};
