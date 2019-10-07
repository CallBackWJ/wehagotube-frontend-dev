import React,{ createContext, useContext ,useState} from "react";

const VideoContext = createContext();
export default VideoContext;

export const useVideoContext = () => useContext(VideoContext);

export const VideoProvider = ({ children }) => {
  const [seek, setSeek] = useState(0);
  const [youtube, setYoutube] = useState({});
  return (
    <VideoContext.Provider
      value={{
        seek,
        setSeek,
        youtube,
        setYoutube,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};
