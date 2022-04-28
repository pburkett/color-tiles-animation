
export const Hexagon: React.FC <{
  shrinkScalar: number;
  width: number;
  height: number;
  color: string;
  borderColor: string;
}> = ({ color, borderColor, shrinkScalar, height, width}) => {

  const scaledHeight = height * shrinkScalar 
  const scaledWidth = width * shrinkScalar 
  
  return (
	<>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={scaledWidth} 
      height={scaledHeight}
			viewBox={`0 0 ${width} ${height}`}
		>
			<path id="shape0" transform="matrix(0 0.72 -0.72 0 360.72 2.2111206642071)" fill={color} stroke={borderColor} strokeWidth="20" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="2" d="M575.929 249.385L431.947 498.769L143.982 498.769L0 249.385L143.982 0L431.947 0L575.929 249.385Z" />
		</svg>
	</>
  );
};

