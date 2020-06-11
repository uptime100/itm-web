import axios from 'axios'
export async function getPlaylist(){
  let url = `https://www.googleapis.com/youtube/v3/playlistItems?key=${process.env.YOUTUBE_KEY}&playlistId=${
    process.env.YOUTUBE_PLAYLIST
  }&part=snippet,contentDetails&maxResults=50`
  let {data} = await axios.get(url)
  return data
}