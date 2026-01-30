import { Composition, registerRoot } from 'remotion';
import { Intro } from './compositions/Intro';
import { MainContent } from './compositions/MainContent';
import { Outro } from './compositions/Outro';
import { FullVideo, TOTAL_FRAMES } from './compositions/FullVideo';
import { MainThumbnail } from './thumbnails/MainThumbnail';
import { ShortThumbnail } from './thumbnails/ShortThumbnail';
import './styles/global.css';

registerRoot(() => {
  return (
    <>
      <Composition
        id="Intro"
        component={Intro}
        durationInFrames={90}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="MainContent"
        component={MainContent}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Outro"
        component={Outro}
        durationInFrames={120}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="FullVideo"
        component={FullVideo}
        durationInFrames={TOTAL_FRAMES}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="MainThumbnail"
        component={MainThumbnail}
        durationInFrames={1}
        fps={1}
        width={1280}
        height={720}
      />
      <Composition
        id="ShortThumbnail"
        component={ShortThumbnail}
        durationInFrames={1}
        fps={1}
        width={1280}
        height={720}
      />
    </>
  );
});
