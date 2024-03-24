'use client';
import React from 'react';

interface EmbedPlayerProps {
  url: string;
}

function EmbedPlayer(props: EmbedPlayerProps) {
  React.useEffect(() => {
    if (ref.current) {
      ref.current.src = props.url;
    }

    const iframe: HTMLIFrameElement | null = ref.current;
    iframe?.addEventListener('load', handleIframeLoaded);
    return () => {
      iframe?.removeEventListener('load', handleIframeLoaded);
    };
  }, []);

  const ref = React.useRef<HTMLIFrameElement>(null);

  const handleIframeLoaded = () => {
    if (!ref.current) {
      return;
    }
    const iframe: HTMLIFrameElement = ref.current;
    if (iframe) iframe.style.opacity = '1';
  };

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        backgroundColor: '#000',
      }}>
      <iframe
        ref={ref}
        width="100%"
        height="100%"
        allowFullScreen
        style={{ opacity: 0 }}
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

export default EmbedPlayer;
