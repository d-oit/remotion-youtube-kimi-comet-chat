import { Composition, Still, registerRoot } from 'remotion';
import { Intro } from './compositions/Intro';
import { MainContent } from './compositions/MainContent';
import { Outro } from './compositions/Outro';
import { FullVideo, TOTAL_FRAMES } from './compositions/FullVideo';
import { MainThumbnail } from './thumbnails/MainThumbnail';
import { ShortThumbnail } from './thumbnails/ShortThumbnail';
import { MainThumbnailV2 } from './thumbnails/MainThumbnailV2';
import { ShortThumbnailV2 } from './thumbnails/ShortThumbnailV2';
import { MainThumbnailV3 } from './thumbnails/MainThumbnailV3';
import { ShortThumbnailV3 } from './thumbnails/ShortThumbnailV3';
import { MainThumbnailV4 } from './thumbnails/MainThumbnailV4';
import { ShortThumbnailV4 } from './thumbnails/ShortThumbnailV4';
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
      <Still
        id="MainThumbnail"
        component={MainThumbnail}
        width={1280}
        height={720}
      />
      <Still
        id="ShortThumbnail"
        component={ShortThumbnail}
        width={1280}
        height={720}
      />
      <Still
        id="MainThumbnailV2"
        component={MainThumbnailV2}
        width={1280}
        height={720}
      />
      <Still
        id="ShortThumbnailV2"
        component={ShortThumbnailV2}
        width={1280}
        height={720}
      />
      <Still
        id="MainThumbnailV3"
        component={MainThumbnailV3}
        width={1280}
        height={720}
      />
      <Still
        id="ShortThumbnailV3"
        component={ShortThumbnailV3}
        width={1280}
        height={720}
      />
      <Still
        id="MainThumbnailV4"
        component={MainThumbnailV4}
        width={1280}
        height={720}
      />
      <Still
        id="ShortThumbnailV4"
        component={ShortThumbnailV4}
        width={1280}
        height={720}
      />
    </>
  );
});
