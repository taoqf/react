import React, { useMemo } from 'react';
import useTheme from '../use-theme';
export interface DropletProps extends React.SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export default function Droplet({ color: clr, size=24, ...props }: DropletProps) {
	const theme = useTheme();
	const color = useMemo(() => {
		return clr || theme.palette.accents_8;
	}, [theme.palette.accents_8, clr]);
	return <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color={color} shapeRendering="geometricPrecision" viewBox="0 0 24 24" {...props} height={size} width={size} style={{color}}><path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"/></svg>;
}
