import React, { useMemo } from 'react';
import useTheme from '../use-theme';
export interface HeartFillProps extends React.SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export default function HeartFill({ color: clr, size = 24, ...props }: HeartFillProps) {
	const theme = useTheme();
	const color = useMemo(() => {
		return clr || theme.palette.accents_8;
	}, [theme.palette.accents_8, clr]);
	return <svg stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color={color} shapeRendering="geometricPrecision" viewBox="0 0 24 24" {...props} height={size} width={size} style={{ color }}><path fill={color} d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" /></svg>;
}
