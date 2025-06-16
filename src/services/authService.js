const API_URL = 'http://localhost:8000'; // Your FastAPI backend URL

export const loginUser = async (email, password) => {
  const response = await fetch(`${API_URL}/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      username: email, // FastAPI's OAuth2PasswordRequestForm expects 'username'
      password: password,
    }),
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.detail || 'Failed to login');
  }
  return response.json();
};

export const signupUser = async (email, password) => {
  const response = await fetch(`${API_URL}/users/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.detail || 'Failed to sign up');
  }
  return response.json();
};

export const fetchCurrentUser = async (token) => {
  const response = await fetch(`${API_URL}/users/me/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error('Failed to fetch user');
  }
  return response.json();
};
