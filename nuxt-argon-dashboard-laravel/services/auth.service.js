import Jsona from "jsona";

const runtimeConfig = useRuntimeConfig();
const apiBaseUrl = runtimeConfig.public.apiBaseUrl;
const dataFormatter = new Jsona();

const login = async (email, password) => {
  try {
    clearNuxtData();
    const body = dataFormatter.serialize({
      stuff: {
        type: "token",
        email,
        password,
      },
    });

    const response = await useFetch(`${apiBaseUrl}/login`, {
      method: "POST",
      body,
    });

    if (response?.data?.value?.access_token) {
      const access_token = response.data.value.access_token;

      if (process.client) {
        localStorage.setItem("authToken", access_token);
      }
    } else {
      throw new Error("Invalid credentials!");
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

const register = async (name, email, password, password_confirmation) => {
  try {
    clearNuxtData();
    const body = dataFormatter.serialize({
      stuff: {
        type: "users",
        name,
        email,
        password,
        password_confirmation,
      },
    });

    const { data, error } = await useFetch(`${apiBaseUrl}/register`, {
      method: "POST",
      body,
    });

    if (error.value) {
      const errorMessage = error.value.data.message;
      throw new Error(errorMessage);
    }

    const { access_token } = data.value;

    if (process.client) {
      localStorage.setItem("authToken", access_token);
    }

    return access_token;
  } catch (error) {
    throw new Error(error.message);
  }
};

const logout = async () => {
  try {
    const access_token = localStorage.getItem("authToken");
    await useFetch(`${apiBaseUrl}/logout`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    localStorage.removeItem("authToken");
  } catch (error) {
    throw new Error(error.message);
  }
};

const getProfile = async () => {
  const access_token = localStorage.getItem("authToken");
  const profileResponse = await useFetch(`${apiBaseUrl}/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  return dataFormatter.deserialize(profileResponse.data.value);
};

const updateProfile = async (userId, body) => {
  const access_token = localStorage.getItem("authToken");
  try {
    return await useFetch(`${apiBaseUrl}/users/${userId}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${access_token}`,
        Accept: "application/vnd.api+json",
        "Content-type": "application/vnd.api+json",
      },
      body,
    });
  } catch (error) {
    useToast("error", error.message);
  }
};

export default {
  login,
  register,
  logout,
  getProfile,
  updateProfile,
};
