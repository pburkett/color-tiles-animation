import {Composition} from 'remotion';
import { Hexagons } from './Main/Hexagons';

export const RemotionVideo: React.FC = () => {

	return (
		<>
			<Composition
				id="hexagons"
				component={Hexagons}
				durationInFrames={2400}
				fps={24}
				height={600}
				width={1080}
			/>
			
		</>
	);
};
