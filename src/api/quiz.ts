import axios from 'axios';

export const getNarrativeById = async (id: string) => {
  const res = await axios.get(`http://localhost:8000/api/narratives/${id}/`);
  return res.data;
};
