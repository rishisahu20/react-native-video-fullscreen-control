import React from 'react';
import FullscreenOpen from './fullscreen-open.svg';
import FullscreenClose from './fullscreen-close.svg';
import ArrowDown from './arrow-down.svg';
import ArrowRight from './arrow-right.svg';

export const ArrowDownIcon = props => (
  <ArrowDown {...props} name="arrow-down" />
);
export const ArrowRightIcon = props => (
  <ArrowRight {...props} name="arrow-right" />
);

export const FullscreenOpenIcon = props => (
  <FullscreenOpen {...props} name="FullscreenOpen" />
);

export const FullscreenCloseIcon = props => (
  <FullscreenClose {...props} name="FullscreenClose" />
);

// export {default as FullscreenOpen} from './fullscreen-open.svg';
// export {default as FullscreenClose} from './fullscreen-close.svg';
// export {default as VideoPlay} from './video-play.svg';
// export {default as VideoPause} from './video-pause.svg';
// export {default as VideoSkipBack} from './video-backward.svg';
// export {default as VideoSkipForward} from './video-forward.svg';
// export {default as VideoPrevious} from './video-previous.svg';
// export {default as VideoNext} from './video-next.svg';
