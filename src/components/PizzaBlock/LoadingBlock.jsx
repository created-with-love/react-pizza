import React from 'react';
import ContentLoader from 'react-content-loader';

function LoadingBlock() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#fafafa"
      foregroundColor="#ecebeb"
    >
      <circle cx="138" cy="136" r="133" />
      <rect x="0" y="323" rx="6" ry="6" width="280" height="72" />
      <rect x="0" y="412" rx="6" ry="6" width="91" height="38" />
      <rect x="0" y="285" rx="6" ry="6" width="280" height="24" />
      <rect x="137" y="408" rx="18" ry="18" width="140" height="46" />
    </ContentLoader>
  );
}

export default LoadingBlock;
