import React from 'react';
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs';
import { useRouter } from 'next/router';

const config: DocsThemeConfig = {
    useNextSeoProps() {
        return {
            titleTemplate: '%s – Juniper Nexus Discord Bot Documentation',
        };
    },
    head: () => {
        const { asPath, defaultLocale, locale } = useRouter();
        const { frontMatter } = useConfig();

        const baseUrl =
            process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://junipernexus.github.io/docs';
        const url = `${baseUrl}${defaultLocale === locale ? asPath : `/${locale}${asPath}`}`;

        return (
            <>
                <link rel="apple-touch-icon" sizes="180x180" href={`${baseUrl}/apple-touch-icon.png`}></link>
                <link rel="icon" type="image/png" sizes="32x32" href={`${baseUrl}/favicon-32x32.png`}></link>
                <link rel="icon" type="image/png" sizes="16x16" href={`${baseUrl}/favicon-16x16.png`}></link>
                <link rel="manifest" href={`${baseUrl}/site.webmanifest`}></link>
                <meta property="og:url" content={url} />
                <meta property="og:title" content={frontMatter.title} />
                <meta property="og:description" content={frontMatter.description} />
                <meta property="og:image" content={`${baseUrl}/og.webp`} />
            </>
        );
    },
    logo: <span>Juniper Nexus</span>,
    project: {
        link: 'https://github.com/JuniperNexus/docs',
    },
    chat: {
        link: 'https://discord.gg/juniper-nexus',
    },
    docsRepositoryBase: 'https://github.com/JuniperNexus/docs',
    footer: {
        text: <span>Copyright © {new Date().getFullYear()} Juniper Nexus. All rights reserved.</span>,
    },
};

export default config;
