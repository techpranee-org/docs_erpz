// theme.config.js
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';


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
        link: 'https://github.com/yourusername/erpz', // Replace with your actual repository URL
        // icon: ""
    },

    // Base URL for the documentation repository (used for "Edit this page" links)
    docsRepositoryBase: 'https://github.com/yourusername/erpz/blob/main/docs/', // Replace with your docs repository URL

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
    head: (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="Comprehensive documentation for the ERPZ project." />
            <meta property="og:title" content="ERPZ Documentation" />
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
    ),

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
        searchIndexes: ['documentation','introduction', 'settings', 'stock' , 'manufacturing'],
    },

    // Enable dark mode toggle
    darkMode: true,

    // Navigation links
    navigation: [
        { title: 'Home', path: '/' },
        { title: 'Getting Started', path: '/getting-started' },
        { title: 'API Reference', path: '/api' },
        { title: 'FAQ', path: '/faq' },
        { title: 'Contact', path: '/contact' },
    ],

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
        title: 'On this page', // Title of the TOC section
    },

    // Theme switcher configuration
    themeSwitcher: {
        light: 'Light Mode',
        dark: 'Dark Mode',
        auto: 'Auto (System)',
    },

    docs: {
        sidebar: {
            title: 'Documentation',
            items: [
                //Home
                { title: 'Home', path: '/documentation' },

                //Introduction
                { title: 'Introduction', path: '/introduction/introduction' },
                { title: 'Do I Need An ERP', path: '/introduction/do-i-need-an-erp' },
                { title: 'Concepts And Terms', path: '/introduction/concepts-and-terms' },
                { title: 'Key Workflows', path: '/introduction/key-workflows' },
                { title: 'ERPZ Implementation Strategy', path: '/introduction/erpz-implementation-strategy' },
                { title: 'Getting Started With ERPZ', path: '/introduction/getting-started-with-erpz' },

                //Setings
                { title: 'Core Settings', path: '/settings/core-settings' },
                { title: 'Module Settings', path: '/settings/module-settings' },
                { title: 'Email Settings', path: '/settings/email-settings' },
                { title: 'Document Naming', path: '/settings/document-naming' },
                { title: 'Workflow', path: '/settings/workflow' },
                { title: 'Printing', path: '/settings/printing' },
                { title: 'Automation', path: '/settings/automation' },

                //Stock
                { title: 'Introduction Stock Module', path: '/stock/introduction-stock-module' },

                ///Nested of Stock Masters
                { title: 'Introduction Stock Masters', path: '/stock/stock-masters/stock-masters' },
                { title: 'Item', path: '/stock/stock-masters/item' },
                { title: 'Item Group', path: '/stock/stock-masters/item-group' },
                { title: 'Brand', path: '/stock/stock-masters/brand' },
                { title: 'Product Bundle', path: '/stock/stock-masters/product-bundle' },
                { title: 'Item Alternative', path: '/stock/stock-masters/item-alternative' },
                { title: 'Manufacturer', path: '/stock/stock-masters/manufacturer' },
                { title: 'Item Variants', path: '/stock/stock-masters/item-variants' },
                { title: 'Item Attribute', path: '/stock/stock-masters/item-attribute' },
                { title: 'UOM', path: '/stock/stock-masters/uom' },
                { title: 'Fractions UOM', path: '/stock/stock-masters/fractions-uom' },

                { title: 'Warehouse', path: '/stock/warehouse' },

                ///Nested of Pricing
                { title: 'Pricing', path: '/stock/pricing/pricing' },
                { title: 'Price Lists', path: '/stock/pricing/price-lists' },
                { title: 'Item Price', path: '/stock/pricing/item-price' },
                
                { title: 'Rules', path: '/stock/rules' },
                { title: 'Stock Transactions', path: '/stock/stock-transactions' },
                { title: 'Stock Inspection', path: '/stock/stock-inspection' },
                { title: 'Serial And Batch', path: '/stock/serial-and-batch' },
                { title: 'Disassembly Order', path: '/stock/disassembly-order' },
                { title: 'Stock Settings', path: '/stock/stock-settings' },
                { title: 'Stock Reposting Settings', path: '/stock/stock-reposting-settings' },
                { title: 'Stock Reports', path: '/stock/stock-reports' },
                { title: 'Stock Adjustment', path: '/stock/stock-adjustment' },

                //Manufacturing
                { title: 'Basics Of Manufacturing', path: '/manufacturing/basics-of-manufacturing' },
                { title: 'Introduction To Manufacturing', path: '/manufacturing/introduction-to-manufacturing' },
                { title: 'Manufacturing Settings', path: '/manufacturing/manufacturing-settings' },
                { title: 'Manufacturing Dashboard', path: '/manufacturing/manufacturing-dashboard' },
                { title: 'Manufacturing Reports', path: '/manufacturing/manufacturing-reports' },

                ///Nested of production and material planning
                { title: 'Production And Material Planning', path: '/manufacturing/production-and-material-planning/production-and-material-planning' },
                { title: 'Work Order', path: '/manufacturing/production-and-material-planning/work-order' },
                { title: 'Work Order Summary', path: '/manufacturing/production-and-material-planning/work-order-summary' },
                { title: 'Production Plan', path: '/manufacturing/production-and-material-planning/production-plan' },
                { title: 'Plant Floor', path: '/manufacturing/production-and-material-planning/plant-floor' },
                { title: 'Downtime Entry', path: '/manufacturing/production-and-material-planning/downtime-entry' },
                { title: 'Downtime Analysis', path: '/manufacturing/production-and-material-planning/downtime-analysis' },
                { title: 'Job Card', path: '/manufacturing/production-and-material-planning/job-card' },
                { title: 'Job Card Summary', path: '/manufacturing/production-and-material-planning/job-card-summary' },
                { title: 'Stock Entry', path: '/manufacturing/production-and-material-planning/stock-entry' },

                ///Nested of BOM
                { title: 'Basics of BOM', path: '/manufacturing/bill-of-materials/introduction' },
                { title: 'Work Station', path: '/manufacturing/bill-of-materials/work-station' },
                { title: 'Work Station Type', path: '/manufacturing/bill-of-materials/work-station-type' },
                { title: 'Bill Of Materials', path: '/manufacturing/bill-of-materials/bill-of-materials' },
                { title: 'Managing Multi Level Bom', path: '/manufacturing/bill-of-materials/managing-multi-level-bom' },
                { title: 'Multi Level BOM Creator', path: '/manufacturing/bill-of-materials/multi-level-bom-creator' },
                { title: 'BOM Update Tool', path: '/manufacturing/bill-of-materials/bom-update-tool' },
                { title: 'BOM Explorer', path: '/manufacturing/bill-of-materials/bom-explorer' },
                { title: 'BOM Comparison Tool', path: '/manufacturing/bill-of-materials/bom-comparison-tool' },
                { title: 'BOM Costing Different Currency', path: '/manufacturing/bill-of-materials/bom-costing-different-currency' },
                { title: 'BOM Search', path: '/manufacturing/bill-of-materials/bom-search' },
                { title: 'BOM Stock Report', path: '/manufacturing/bill-of-materials/bom-stock-report' },
                { title: 'Operation', path: '/manufacturing/bill-of-materials/operation' },
                { title: 'BOM Operations Time', path: '/manufacturing/bill-of-materials/bom-operations-time' },
                { title: 'Routing', path: '/manufacturing/bill-of-materials/routing' },

                { title: 'Track Semi-Finished Goods', path: '/manufacturing/track-semi-finished-goods' },
            ]
        }
    }

    // Additional configuration options can be added here
};
