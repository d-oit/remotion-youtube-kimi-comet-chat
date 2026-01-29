import { AbsoluteFill, Sequence, Composition } from 'remotion';
import { Intro } from './Intro';
import { Segment1 } from './Segment1';
import { Segment2 } from './Segment2';
import { Segment3 } from './Segment3';
import { Outro } from './Outro';

export const MainVideo: React.FC = () => {
  return (
    <>
      <Sequence from={0} duration={180}>
        <Intro />
      </Sequence>
      <Sequence from={180} duration={180}>
        <Segment1 />
      </Sequence>
      <Sequence from={360} duration={180}>
        <Segment2 />
      </Sequence>
      <Sequence from={540} duration={180}>
        <Segment3 />
      </Sequence>
      <Sequence from={720} duration={120}>
        <Outro />
      </Sequence>
    </>
  );
};
