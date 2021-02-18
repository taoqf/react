import { PageSize } from './page';
import { NormalSizes } from '../utils/prop-types';
import { ThemesLayout } from '../themes/presets';

export const getPageSize = (size: PageSize, layout: ThemesLayout): string => {
	const presets: { [key in NormalSizes]: string } = {
		medium: layout.pageWidth,
		small: `calc(${layout.pageWidth} - 100pt)`,
		mini: `calc(${layout.pageWidth} - 180pt)`,
		large: `calc(${layout.pageWidth} + 100pt)`,
	};
	const presetValue = presets[size as NormalSizes];
	if (!presetValue) return size as string;
	return presetValue;
};
