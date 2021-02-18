import React, { useMemo } from 'react';
import useTheme from '../use-theme';
export interface FileFunctionFillProps extends React.SVGProps<SVGSVGElement> {
	color?: string;
	size?: number | string;
}

export default function FileFunctionFill({ color: clr, size = 24, ...props }: FileFunctionFillProps) {
	const theme = useTheme();
	const color = useMemo(() => {
		return clr || theme.palette.accents_8;
	}, [theme.palette.accents_8, clr]);
	return <svg stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color={color} shapeRendering="geometricPrecision" viewBox="0 0 24 24" {...props} height={size} width={size} style={{ color }}><path fill={color} stroke="none" d="M4.055 2.055A2.75 2.75 0 016 1.25h12A2.75 2.75 0 0120.75 4v16A2.75 2.75 0 0118 22.75H6A2.75 2.75 0 013.25 20V4c0-.73.29-1.429.805-1.945zM15.116 5.31c-1.237-.194-2.29.086-3.02.83-.709.722-.998 1.758-.998 2.844v1.502H9a.75.75 0 100 1.5h2.098v3.22c0 .78-.197 1.257-.48 1.543-.283.284-.773.501-1.618.501a.75.75 0 000 1.5c1.088 0 2.023-.281 2.681-.944.658-.662.918-1.582.918-2.6v-3.22h2.062a.75.75 0 000-1.5h-2.063V8.984c0-.851.229-1.447.567-1.792.315-.32.838-.538 1.719-.4a.75.75 0 00.232-1.482z" /></svg>;
}
