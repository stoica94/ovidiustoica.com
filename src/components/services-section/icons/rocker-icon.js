import * as React from 'react';

const style = {
  transform: `translate(-50px, -48px)`,
};

function SvgComponent(props) {
  return (
    <svg
      width={236}
      height={237}
      viewBox="0 0 236 237"
      fill="none"
      {...props}
      style={style}
    >
      <path d="M51.179 48.046l88 1v90l-88-1v-90z" fill="#FFDA27" />
      <mask
        id="prefix__a"
        maskUnits="userSpaceOnUse"
        x={38.586}
        y={39.586}
        width={197.28}
        height={197.266}
        fill="#000"
      >
        <path fill="#fff" d="M38.586 39.586h197.28v197.266H38.586z" />
        <path d="M124.846 54.433c4.288-4.205 8.872-6.318 13.621-6.28 19.057.156 33.564 35.462 33.029 80.394-.02 1.633-.163 3.249-.357 4.857.331.14.688.327 1.069.569 7.929 5.017 24.866 29.461 6.317 59.593a2.16 2.16 0 01-2.264.99 2.107 2.107 0 01-1.104-.596 2.13 2.13 0 01-.586-1.184c-2.064-14.195-6.138-23.213-12.71-28.129a67.2 67.2 0 00-.922 3.305 2.169 2.169 0 01-2.118 1.646l-4.759-.038-.105 8.907a2.156 2.156 0 01-.65 1.518 2.16 2.16 0 01-1.53.619l-29.814-.238a2.127 2.127 0 01-2.116-2.158l.107-8.921-4.773-.038a2.135 2.135 0 01-2.065-1.665 66.39 66.39 0 00-.775-3.088c-6.839 4.753-11.202 13.756-13.637 28.096a2.171 2.171 0 01-1.733 1.767 2.136 2.136 0 01-2.241-1.014c-17.783-30.351-.301-54.549 7.724-59.471.49-.3.923-.489 1.33-.632-.179-1.73-.299-3.468-.278-5.223.386-32.373 8.764-61.259 21.34-73.586zm38.504 105.966c7.112 4.722 11.776 13.002 14.413 25.676 6.947-14.315 5.167-26.241 2.186-34.044-2.236-5.849-5.396-10.071-7.737-12.459a17.74 17.74 0 00-1.671-1.521l-7.191 22.348zm-39.181 15.688l25.517.203.078-6.763-22.042-.178-3.471-.028-.082 6.766zM94.341 151.68c-3.2 7.773-5.292 19.701 1.336 34.173 2.942-12.614 7.797-20.813 15.021-25.427l-6.658-22.471c-2.285 1.718-6.69 6.417-9.699 13.725zm19.045 1.846c1.331 3.967 2.602 7.742 3.531 11.439l40.286.323c.817-2.95 1.877-5.977 2.992-9.084l5.721-17.78c.753-3.285 1.243-6.589 1.283-9.898.491-41.107-12.693-75.941-28.797-76.077-3.566-.029-7.119 1.668-10.559 5.04-11.618 11.39-19.672 39.743-20.041 70.551-.102 8.581 2.789 17.175 5.584 25.486z" />
      </mask>
      <path
        d="M124.846 54.433c4.288-4.205 8.872-6.318 13.621-6.28 19.057.156 33.564 35.462 33.029 80.394-.02 1.633-.163 3.249-.357 4.857.331.14.688.327 1.069.569 7.929 5.017 24.866 29.461 6.317 59.593a2.16 2.16 0 01-2.264.99 2.107 2.107 0 01-1.104-.596 2.13 2.13 0 01-.586-1.184c-2.064-14.195-6.138-23.213-12.71-28.129a67.2 67.2 0 00-.922 3.305 2.169 2.169 0 01-2.118 1.646l-4.759-.038-.105 8.907a2.156 2.156 0 01-.65 1.518 2.16 2.16 0 01-1.53.619l-29.814-.238a2.127 2.127 0 01-2.116-2.158l.107-8.921-4.773-.038a2.135 2.135 0 01-2.065-1.665 66.39 66.39 0 00-.775-3.088c-6.839 4.753-11.202 13.756-13.637 28.096a2.171 2.171 0 01-1.733 1.767 2.136 2.136 0 01-2.241-1.014c-17.783-30.351-.301-54.549 7.724-59.471.49-.3.923-.489 1.33-.632-.179-1.73-.299-3.468-.278-5.223.386-32.373 8.764-61.259 21.34-73.586zm38.504 105.966c7.112 4.722 11.776 13.002 14.413 25.676 6.947-14.315 5.167-26.241 2.186-34.044-2.236-5.849-5.396-10.071-7.737-12.459a17.74 17.74 0 00-1.671-1.521l-7.191 22.348zm-39.181 15.688l25.517.203.078-6.763-22.042-.178-3.471-.028-.082 6.766zM94.341 151.68c-3.2 7.773-5.292 19.701 1.336 34.173 2.942-12.614 7.797-20.813 15.021-25.427l-6.658-22.471c-2.285 1.718-6.69 6.417-9.699 13.725zm19.045 1.846c1.331 3.967 2.602 7.742 3.531 11.439l40.286.323c.817-2.95 1.877-5.977 2.992-9.084l5.721-17.78c.753-3.285 1.243-6.589 1.283-9.898.491-41.107-12.693-75.941-28.797-76.077-3.566-.029-7.119 1.668-10.559 5.04-11.618 11.39-19.672 39.743-20.041 70.551-.102 8.581 2.789 17.175 5.584 25.486z"
        fill="#011E41"
      />
      <path
        d="M124.846 54.433c4.288-4.205 8.872-6.318 13.621-6.28 19.057.156 33.564 35.462 33.029 80.394-.02 1.633-.163 3.249-.357 4.857.331.14.688.327 1.069.569 7.929 5.017 24.866 29.461 6.317 59.593a2.16 2.16 0 01-2.264.99 2.107 2.107 0 01-1.104-.596 2.13 2.13 0 01-.586-1.184c-2.064-14.195-6.138-23.213-12.71-28.129a67.2 67.2 0 00-.922 3.305 2.169 2.169 0 01-2.118 1.646l-4.759-.038-.105 8.907a2.156 2.156 0 01-.65 1.518 2.16 2.16 0 01-1.53.619l-29.814-.238a2.127 2.127 0 01-2.116-2.158l.107-8.921-4.773-.038a2.135 2.135 0 01-2.065-1.665 66.39 66.39 0 00-.775-3.088c-6.839 4.753-11.202 13.756-13.637 28.096a2.171 2.171 0 01-1.733 1.767 2.136 2.136 0 01-2.241-1.014c-17.783-30.351-.301-54.549 7.724-59.471.49-.3.923-.489 1.33-.632-.179-1.73-.299-3.468-.278-5.223.386-32.373 8.764-61.259 21.34-73.586zm38.504 105.966c7.112 4.722 11.776 13.002 14.413 25.676 6.947-14.315 5.167-26.241 2.186-34.044-2.236-5.849-5.396-10.071-7.737-12.459a17.74 17.74 0 00-1.671-1.521l-7.191 22.348zm-39.181 15.688l25.517.203.078-6.763-22.042-.178-3.471-.028-.082 6.766zM94.341 151.68c-3.2 7.773-5.292 19.701 1.336 34.173 2.942-12.614 7.797-20.813 15.021-25.427l-6.658-22.471c-2.285 1.718-6.69 6.417-9.699 13.725zm19.045 1.846c1.331 3.967 2.602 7.742 3.531 11.439l40.286.323c.817-2.95 1.877-5.977 2.992-9.084l5.721-17.78c.753-3.285 1.243-6.589 1.283-9.898.491-41.107-12.693-75.941-28.797-76.077-3.566-.029-7.119 1.668-10.559 5.04-11.618 11.39-19.672 39.743-20.041 70.551-.102 8.581 2.789 17.175 5.584 25.486z"
        stroke="#011E41"
        mask="url(#prefix__a)"
      />
      <path
        d="M150.638 92.924a12.887 12.887 0 01-3.893 9.114 12.887 12.887 0 01-9.191 3.712 12.85 12.85 0 01-9.086-3.866 12.837 12.837 0 01-3.682-9.16 12.884 12.884 0 013.895-9.114 12.881 12.881 0 019.189-3.711c7.118.06 12.847 5.904 12.768 13.025zm-21.556-.184c-.053 4.765 3.777 8.672 8.542 8.714a8.592 8.592 0 006.124-2.473 8.589 8.589 0 002.593-6.073 8.591 8.591 0 00-2.465-6.127 8.588 8.588 0 00-6.077-2.586 8.59 8.59 0 00-6.121 2.473 8.59 8.59 0 00-2.596 6.072z"
        fill="#011E41"
      />
      <mask
        id="prefix__b"
        maskUnits="userSpaceOnUse"
        x={116.988}
        y={182.295}
        width={39.596}
        height={39.596}
        fill="#000"
      >
        <path fill="#fff" d="M116.988 182.295h39.596v39.596h-39.596z" />
        <path d="M137.181 184.83a2.129 2.129 0 012.121 2.159l-.362 30.316a2.166 2.166 0 01-2.174 2.137 2.13 2.13 0 01-2.122-2.158l.362-30.316a2.167 2.167 0 012.175-2.138z" />
      </mask>
      <path
        d="M137.181 184.83a2.129 2.129 0 012.121 2.159l-.362 30.316a2.166 2.166 0 01-2.174 2.137 2.13 2.13 0 01-2.122-2.158l.362-30.316a2.167 2.167 0 012.175-2.138z"
        fill="#011E41"
      />
      <path
        d="M137.181 184.83a2.129 2.129 0 012.121 2.159l-.362 30.316a2.166 2.166 0 01-2.174 2.137 2.13 2.13 0 01-2.122-2.158l.362-30.316a2.167 2.167 0 012.175-2.138z"
        stroke="#011E41"
        mask="url(#prefix__b)"
      />
      <mask
        id="prefix__c"
        maskUnits="userSpaceOnUse"
        x={133.655}
        y={182.871}
        width={28.283}
        height={28.283}
        fill="#000"
      >
        <path fill="#fff" d="M133.655 182.871h28.283v28.283h-28.283z" />
        <path d="M145.843 208.533a2.132 2.132 0 01-.608-1.52l.239-19.964a2.169 2.169 0 012.175-2.137 2.126 2.126 0 012.121 2.158l-.239 19.965a2.167 2.167 0 01-2.174 2.137 2.12 2.12 0 01-1.514-.639z" />
      </mask>
      <path
        d="M145.843 208.533a2.132 2.132 0 01-.608-1.52l.239-19.964a2.169 2.169 0 012.175-2.137 2.126 2.126 0 012.121 2.158l-.239 19.965a2.167 2.167 0 01-2.174 2.137 2.12 2.12 0 01-1.514-.639z"
        fill="#011E41"
      />
      <path
        d="M145.843 208.533a2.132 2.132 0 01-.608-1.52l.239-19.964a2.169 2.169 0 012.175-2.137 2.126 2.126 0 012.121 2.158l-.239 19.965a2.167 2.167 0 01-2.174 2.137 2.12 2.12 0 01-1.514-.639z"
        stroke="#011E41"
        mask="url(#prefix__c)"
      />
      <mask
        id="prefix__d"
        maskUnits="userSpaceOnUse"
        x={112.721}
        y={182.704}
        width={28.283}
        height={28.283}
        fill="#000"
      >
        <path fill="#fff" d="M112.721 182.704h28.283v28.283h-28.283z" />
        <path d="M128.837 186.904l-.24 19.964a2.167 2.167 0 01-2.174 2.137 2.13 2.13 0 01-2.122-2.158l.239-19.965a2.168 2.168 0 012.174-2.137 2.128 2.128 0 012.123 2.159z" />
      </mask>
      <path
        d="M128.837 186.904l-.24 19.964a2.167 2.167 0 01-2.174 2.137 2.13 2.13 0 01-2.122-2.158l.239-19.965a2.168 2.168 0 012.174-2.137 2.128 2.128 0 012.123 2.159z"
        fill="#011E41"
      />
      <path
        d="M128.837 186.904l-.24 19.964a2.167 2.167 0 01-2.174 2.137 2.13 2.13 0 01-2.122-2.158l.239-19.965a2.168 2.168 0 012.174-2.137 2.128 2.128 0 012.123 2.159z"
        stroke="#011E41"
        mask="url(#prefix__d)"
      />
    </svg>
  );
}

export default SvgComponent;
