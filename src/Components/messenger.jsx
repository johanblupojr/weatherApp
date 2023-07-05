"use client";
import { FacebookProvider, CustomChat } from 'react-facebook';

const Messenger = () => {
    return (
      <FacebookProvider appId="277041771537219" chatSupport>
        <CustomChat pageId="108965818922829" minimized={false}/>
      </FacebookProvider>    
    );
  };

  export default Messenger;