import {Audio} from 'remotion'
import { Hexagon } from './Hexagon';
import { utils } from "./Utils"

export const Hexagons: React.FC = () => {
  const shrinkScalar = .15
  const height = 419.04
  const width = 362.16
  utils.tweakColors()
  const borderColor = utils.pickColor()
  const hexagons = Array.from({ length: 10 }, (_, rowIndex) => {
    const row = Array.from({ length: 10 }, (_, tileIndex) => {
    const color = utils.pickColor(rowIndex, tileIndex)
    return (
	<Hexagon
		key={tileIndex}
		shrinkScalar={shrinkScalar}
		color={color}
		height={height}
		width={width}
		borderColor={borderColor}
          />
        )
      })

    return (
	<div style={{
        display: 'flex',
        marginLeft: rowIndex % 2 ? width * shrinkScalar * .5 : '0px',
        marginTop: -110 * shrinkScalar + 'px'
	}}
	>
		{row}
	</div>
    )
  });

  return (
	<div style={{
      position: 'absolute',
      left: (-width * shrinkScalar * .5),
      width: 'fit-content', height: 'fit-content',
      display: 'grid',
	}}
	>
		{hexagons}
	</div>
  );
};
