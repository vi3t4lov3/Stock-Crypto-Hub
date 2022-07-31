import axios from 'axios';

const URL = 'https://api.github.com/users/vi3t4lov3/repos'

export const fetchGitHub = async () => {
    const {data} = await axios.get (URL)
    return data;
}