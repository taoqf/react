import Head from 'next/head';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import React, { useEffect, useState } from 'react';
import { CssBaseline, MMProvider, useTheme, UIThemes } from 'components';
import Menu from 'lib/components/menu';
import ConfigContext from 'lib/config-provider';
import useDomClean from 'lib/use-dom-clean';
import 'inter-ui/inter.css';

const Application: NextPage<AppProps<{}>> = ({ Component, pageProps }) => {
	const theme = useTheme();
	const [themeType, setThemeType] = useState<string>();
	const [customTheme, setCustomTheme] = useState<UIThemes>(theme);
	const themeChangeHandle = (theme: UIThemes) => {
		setCustomTheme(theme);
		setThemeType(theme.type);
	};

	useEffect(() => {
		const theme = window.localStorage.getItem('theme');
		if (theme !== 'dark') return;
		setThemeType('dark');
	}, []);
	useDomClean();

	return (
		<>
			<Head>
				<title>React - MMStudio widgets</title>
				<meta name="google" content="notranslate" />
				<meta name="twitter:creator" content="@echo_witt" />
				<meta name="referrer" content="strict-origin" />
				<meta property="og:title" content="React - MMStudio widgets" />
				<meta property="og:site_name" content="React - MMStudio widgets" />
				<meta property="og:url" content="https://mmstudio.vercel.app" />
				<link rel="dns-prefetch" href="//mmstudio.vercel.app" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="generator" content="MMStudio widgets" />
				<meta
					name="description"
					content="An open-source design system for building modern websites and applications."
				/>
				<meta
					property="og:description"
					content="An open-source design system for building modern websites and applications."
				/>
				<meta
					itemProp="image"
					property="og:image"
					content="https://user-images.githubusercontent.com/11304944/91128466-dfc96c00-e6da-11ea-8b03-a96e6b98667d.png"
				/>
				<meta
					property="og:image"
					content="https://user-images.githubusercontent.com/11304944/91128466-dfc96c00-e6da-11ea-8b03-a96e6b98667d.png"
				/>
				<meta
					property="twitter:image"
					content="https://user-images.githubusercontent.com/11304944/91128466-dfc96c00-e6da-11ea-8b03-a96e6b98667d.png"
				/>
				<meta
					name="viewport"
					content="initial-scale=1, maximum-scale=1, minimum-scale=1, viewport-fit=cover"
				/>
			</Head>
			<MMProvider themeType={themeType} themes={[customTheme]}>
				<CssBaseline />
				<ConfigContext
					onThemeChange={themeChangeHandle}
					onThemeTypeChange={type => setThemeType(type)}>
					<Menu />
					<Component {...pageProps} />
				</ConfigContext>
				<style global jsx>{`
					.tag {
						color: ${theme.palette.accents_5};
					}

					.punctuation {
						color: ${theme.palette.accents_5};
					}

					.attr-name {
						color: ${theme.palette.accents_6};
					}

					.attr-value {
						color: ${theme.palette.accents_4};
					}

					.language-javascript {
						color: ${theme.palette.accents_4};
					}

					span.class-name {
						color: ${theme.palette.warning};
					}

					span.maybe-class-name {
						color: ${theme.palette.purple};
					}

					span.token.string {
						color: ${theme.palette.accents_5};
					}

					span.keyword {
						color: ${theme.palette.success};
					}

					span.plain-text {
						color: ${theme.palette.accents_3};
					}

					body::-webkit-scrollbar {
						width: 0;
						background-color: ${theme.palette.accents_1};
					}

					body::-webkit-scrollbar-thumb {
						background-color: ${theme.palette.accents_2};
						border-radius: ${theme.layout.radius};
					}
				`}</style>
			</MMProvider>
		</>
	);
};

export default Application;
