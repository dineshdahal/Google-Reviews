import axios from 'axios'

const url='http://127.0.0.1:8000/api'

export const getReviews = async () => {
    try {
      const res = await axios.get(`${url}/reviews`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  export const getSettings = async () => {
    try {
      const res = await axios.get(`${url}/settings`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }; 

  export const editPreviewID = async (id) => {
    try {
      const response = await axios.patch(`${url}/settings/previewid`, { previewid: id });
      // Check if the update was successful
      if (response.status === 200) {
        console.log('Preview ID updated successfully');
      } else {
        console.error('Failed to update Preview ID');
      }
    } catch (error) {
      console.error('An error occurred while updating Preview ID:', error);
    }
  };
  
 
  export const getPreviewid = async () => {
    try {
      const res = await axios.get(`${url}/settings/previewid`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }; 
