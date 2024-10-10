import axios from 'axios';

const http = axios.create({
  timeout: 2000,
});

/**
 * @param {string} url
 * @returns {Promise<boolean>}
 */
export const xui = async (url) => {
  try {
    const {
      data: { success },
    } = await http
      .post(url + '/login', 'username=admin&password=admin', {
        timeout: 3000,
      })
      .catch((e) => {
        return e.response || { data: {} };
      });
    if (success) {
      console.log('true', url);
      return true;
    }
    console.log('false', url);
    return false;
  } catch (error) {
    console.log('err', url);
    return false;
  }
};

// Remove the run function and its execution
