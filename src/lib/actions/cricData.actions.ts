
import axios from "axios";

export async  function fetchLiveMatches(){
    const options = {
        method: 'GET',
        url: 'https://cricbuzz-cricket.p.rapidapi.com/matches/v1/live',
        headers: {
          'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPID_API_KEY, // Move key to env variable
          'x-rapidapi-host': process.env.NEXT_PUBLIC_RAPID_API_ID,
        },
      };
   
    
      try {
        const response = await axios.request(options);
      
    
        return response.data.typeMatches
      } catch (error) {
        console.error('Error fetching data:', error);
        return {
          props: {
            recentMatches: [],
          },
        };
}
}

export async function fetchNews(){
  const options = {
    method: 'GET',
    url: 'https://cricbuzz-cricket.p.rapidapi.com/news/v1/index',
    headers: {
      'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPID_API_KEY, // Move key to env variable
          'x-rapidapi-host': process.env.NEXT_PUBLIC_RAPID_API_ID,
    }
  }
  try {
    const response = await axios.request(options);
  

    return response.data.storyList
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        recentMatches: [],
      },
    };
  }
}

export async function fetchMatchDetails(id : string){
  
  const options = {
    method: 'GET',
    url: `https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/${id}/scard`,
    headers: {
      'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPID_API_KEY, // Move key to env variable
          'x-rapidapi-host': process.env.NEXT_PUBLIC_RAPID_API_ID,
    }
  }
  try {
    const response = await axios.request(options);
  

    return response.data
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        recentMatches: [],
      },
    };
  }
}
export async function fetchMatchCommentry(id : string){
  
  const options = {
    method: 'GET',
    url:` https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/${id}/comm`,
    headers: {
      'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPID_API_KEY, // Move key to env variable
          'x-rapidapi-host': process.env.NEXT_PUBLIC_RAPID_API_ID,
    }
  }
  try {
    const response = await axios.request(options);
  

    return response.data
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        recentMatches: [],
      },
    };
  }
}
