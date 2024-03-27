const BASE_URL = "https://dwf-m7-desafio.onrender.com";

export const signIn = async ({ email, password }) => {
  try {
    const response = await fetch(`${BASE_URL}/api/auth/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error);
    }

    return data.token;
  } catch (error) {
    throw error;
  }
};

export const signUp = async ({ email, password }) => {
  try {
    const response = await fetch(`${BASE_URL}/api/auth`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error);
    }

    if (data.message) {
      throw new Error(data.message);
    }

    return data.token;
  } catch (error) {
    throw error;
  }
};

export const sendRecoveryPasswordEmail = async ({ email }) => {
  const response = await fetch(`${BASE_URL}/api/auth/recovery`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error);
  }

  return data;
};

export const resetPassword = async ({ password }) => {
  const response = await fetch(
    `${BASE_URL}/api/auth/password/${window.location.search}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error);
  }

  return data;
};

export const getProfile = async ({ token }) => {
  const response = await fetch(`${BASE_URL}/api/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error);
  }

  return data;
};

export const updateProfile = async ({ fullname, location, token }) => {
  const response = await fetch(`${BASE_URL}/api/users/me`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify({ fullname, location }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error);
  }

  return data;
};

export const changePassword = async ({ password, token }) => {
  const response = await fetch(`${BASE_URL}/api/users/me/password`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify({ password }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error);
  }

  return data;
};

export const getUserPets = async ({ token }) => {
  const response = await fetch(`${BASE_URL}/api/users/me/pets`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error);
  }

  return data;
};

export const newLostPet = async ({
  name,
  location,
  longitude,
  latitude,
  dataURL,
  token,
}) => {
  const response = await fetch(`${BASE_URL}/api/users/me/pets`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify({
      name,
      dataURL,
      location,
      longitude,
      latitude,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error);
  }
};

export const updateLostPet = async ({
  name,
  location,
  longitude,
  latitude,
  dataURL,
  petId,
  token,
}) => {
  const response = await fetch(`${BASE_URL}/api/users/me/pets/${petId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify({
      name,
      dataURL,
      location,
      longitude,
      latitude,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error);
  }
};

export const updatePetStatus = async ({ status, petId, token }) => {
  const response = await fetch(`${BASE_URL}/api/users/me/pets/${petId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify({ status }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error);
  }
};

export const deletePet = async ({ petId, token }) => {
  const response = await fetch(`${BASE_URL}/api/users/me/pets/${petId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error);
  }
};

export const getLostPets = async ({ token }) => {
  const response = await fetch(`${BASE_URL}/api/pets`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error);
  }

  return data;
};

export const getLostPetsAroundMe = async ({ latitude, longitude, token }) => {
  const response = await fetch(
    `${BASE_URL}/api/pets/around?lat=${latitude}&lng=${longitude}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error);
  }

  return data;
};

export const sendReport = async ({ name, phone, message, petName, userId }) => {
  const response = await fetch(`${BASE_URL}/api/report`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, phone, message, petName, userId }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error);
  }
};
