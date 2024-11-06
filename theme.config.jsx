// theme.config.js
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/router';






const logoStyle = {
    width: 'auto',
    height: '80px',
    cursor: 'pointer',
};





export default {

    logo: <Box
        sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            px: 0,
        }}
    >
        <Image
            height={100}
            width={80}
            src={'https://erptp.s3.ap-south-1.amazonaws.com/website-assets/erpz-logo.png'}
            style={logoStyle}
            alt="logo of sitemark"
        />
        <Typography>ERPZ</Typography>
    </Box>,
    // Project repository link (e.g., GitHub)
    project: {
        link: 'https://github.com/techpranee-org/docs_erpz', // Replace with your actual repository URL
        // icon: ""
    },

    // Base URL for the documentation repository (used for "Edit this page" links)
    docsRepositoryBase: 'https://github.com/techpranee-org/docs_erpz/blob/master/', // Replace with your docs repository URL

    // Suffix appended to the page title
    titleSuffix: ' – ERPZ Documentation',

    // Logo displayed in the documentation header
    // logo: (
    //     <>
    //         <img src="/path-to-your-logo.png" alt="ERPZ Logo" style={{ height: '2rem', marginRight: '0.5rem' }} />
    //         <span style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>ERPZ</span>
    //         <span style={{ marginLeft: '0.5rem', fontSize: '1rem', color: '#888' }}>Docs</span>
    //     </>
    // ),

    // Custom elements to be added to the HTML <head>
    head() {
        const { asPath, defaultLocale, locale } = useRouter()
        const url =
            'http://localhost:3000' +
            (defaultLocale === locale ? asPath : `/${locale}${asPath}`)

        return (
            <>

                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Comprehensive documentation for the ERPZ project." />
                <meta property="og:url" content={url} />
                <meta property="og:title" content='ERPZ Documentation' />
                <meta property="og:description" content="Comprehensive documentation for the ERPZ project." />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://yourdomain.com/og-image.png" /> {/* Replace with your image URL */}
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap" />
                <script async src="https://www.googletagmanager.com/gtag/js?id=UA-XXXXXXX-X"></script> {/* Replace with your GA tracking ID */}
                <script>
                    {`
          window.dataLayer = window.dataLayer || [];
          function gtag() { dataLayer.push(arguments); }
          gtag('js', new Date());
          gtag('config', 'UA-XXXXXXX-X'); // Replace with your GA tracking ID
        `}
                </script>
            </>
        )
    },

    //SEO

    useNextSeoProps() {
        return {
            "titleTemplate": "%s - ERPZ"
        };
    },

    // Footer configuration
    footer: {
        text: (
            <>
                © {new Date().getFullYear()} ERPZ Project. All rights reserved.
                <br />
                <a href="https://github.com/yourusername/erpz/issues" target="_blank" rel="noopener noreferrer">Report an issue</a>
                &nbsp;|&nbsp;
                <a href="https://yourdomain.com/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
                &nbsp;|&nbsp;
                <a href="https://yourdomain.com/terms-of-service" target="_blank" rel="noopener noreferrer">Terms of Service</a>
            </>
        ),
    },

    // Enable or disable search functionality
    search: {
        enabled: true,  // Ensure the search is enabled
        placeholder: 'Search for documentation',
        emptyResult: 'No results found',
    },

    // Enable dark mode toggle
    darkMode: true,

    // Navigation links
    navigation: {
        prev: true,
        next: true
    },


    // Internationalization (i18n) configuration
    i18n: [
        { locale: 'en', text: 'English' },
        { locale: 'es', text: 'Español' }, // Example for Spanish localization
    ],

    // Analytics (e.g., Google Analytics)
    analytics: {
        googleAnalytics: {
            id: 'UA-XXXXXXX-X', // Replace with your GA tracking ID
        },
        plausible: {
            domain: 'yourdomain.com', // Replace with your domain
        },
    },

    // Customization of the primary color and font
    primaryColor: '#0070f3',
    font: 'Roboto, sans-serif',

    // Sidebar customization
    sidebar: {
        defaultMenuCollapsed: true, // Whether to collapse the sidebar by default
        position: 'left', // Sidebar position: 'left' or 'right'
        collapsible: true, // Whether the sidebar is collapsible
    },

    // Banner configuration (e.g., for announcements or promotions)
    banner: {
        content: '🚀 New version 2.0 released! Check out the <a href="/changelog">changelog</a>.',
        backgroundColor: '#0070f3',
        textColor: '#fff',
        showOnHomePage: true,
    },

    // TOC (Table of Contents) configuration
    toc: {
        float: true, // Float the TOC to the right side of the page
        title: 'On This Page', // Title of the TOC section
        depth: 3,
        backToTop: true
    },

    // Theme switcher configuration
    themeSwitcher: {
        light: 'Light Mode',
        dark: 'Dark Mode',
        auto: 'Auto (System)',
    },

    


    // Additional configuration options can be added here
};
