const get = async () => {
  const response = await fetch('http://localhost:3333/students');
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data = await response.json();
  return data;
};

const getById = async (id) => {
  const response = await fetch(`http://localhost:3333/students/${id}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data = await response.json();
  return data;
};

const deleteItem = async (id) => {
  const response = await fetch(`http://localhost:3333/students/${id}`, {
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

  const response = await fetch(
    'http://localhost:3333/students',
    requestOptions
  );

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
    `http://localhost:3333/students/${payload.id}`,
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
