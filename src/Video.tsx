import {Composition} from 'remotion';
import { Hexagons } from './Main/Hexagons';

export const RemotionVideo: React.FC = () => {

	return (
		<>
			<Composition
				id="hexagons"
				component={Hexagons}
				durationInFrames={1440}
				fps={24}
				height={1920}
				width={1080}
			/>
			
		</>
	);
};
