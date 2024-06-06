import { ref } from 'vue';

export function useFetch() {
  const data = ref(null);
  const error = ref(null);
  const isLoading = ref(false);

  // get request
  const getRequest = async (url, params = {}) => {
    isLoading.value = true;
    error.value = null;
    try {
      const queryString = new URLSearchParams(params).toString();
      const response = await fetch(`${url}${queryString ? '?' + queryString : ''}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      data.value = await response.json();
    } catch (err) {
      error.value = err;
    } finally {
      isLoading.value = false;
    }
  };

  // post request
  const postRequest = async (url, payload = {}, config = {}) => {
    isLoading.value = true;
    error.value = null;
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...config.headers,
        },
        body: JSON.stringify(payload),
        ...config,
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      data.value = await response.json();
    } catch (err) {
      error.value = err;
    } finally {
      isLoading.value = false;
    }
  };

  return { data, error, isLoading, getRequest, postRequest };
}
