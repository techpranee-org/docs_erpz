// components/Pagination.js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Box, Button, useTheme, alpha, Typography } from '@mui/material';
import Link from 'next/link';

const Pagination = ({ pages }) => {
    const router = useRouter();
    const [currentPageIndex, setCurrentPageIndex] = useState(-1);
    const theme = useTheme();


    useEffect(() => {
        // Find the current page index based on the path
        const pageIndex = pages.findIndex(page => page.path === router.pathname);
        console.log('Current page index:', pageIndex); // Debugging
        setCurrentPageIndex(pageIndex);
    }, [router.pathname, pages]);

    // If currentPageIndex is not valid, return null
    if (currentPageIndex === -1) return null;

    const prevPage = currentPageIndex > 0 ? pages[currentPageIndex - 1] : null;
    const nextPage = currentPageIndex < pages.length - 1 ? pages[currentPageIndex + 1] : null;

    console.log('Previous page:', prevPage); // Debugging
    console.log('Next page:', nextPage);

    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '10rem' }}>
            {prevPage ? (
                <Link href={prevPage.path} passHref>
                    <Button
                        variant="contained"
                        sx={{
                            minWidth: '300px',
                            textTransform: 'none',
                            backgroundColor: theme.palette.mode === 'light' ? '#000' : "#fff",
                            color: theme.palette.mode === 'light' ? theme.palette.primary.dark : theme.palette.primary.light,
                            border: '1px solid',
                            borderColor: (theme) =>
                                theme.palette.mode === 'light'
                                    ? alpha(theme.palette.primary.dark, .3)
                                    : alpha(theme.palette.primary.light, .4),
                            boxShadow: (theme) =>
                                theme.palette.mode === 'light'
                                    ? `0 0 12px 8px ${alpha('#9CCCFC', 0.2)}`
                                    : `0 0 24px 12px ${alpha('#033363', 0.2)}`,
                            '&:hover': {
                                border: '2px solid', // Increased width of the outline
                                borderColor: (theme) =>
                                    theme.palette.mode === 'light'
                                        ? alpha(theme.palette.primary.dark, 0.6) // Light mode hover outline color
                                        : alpha(theme.palette.primary.light, .8), // Dark mode hover outline color
                                boxShadow: (theme) =>
                                    theme.palette.mode === 'light'
                                        ? `0 0 12px 8px ${alpha('#9CCCFC', 0.4)}` // Increased shadow opacity on hover
                                        : `0 0 24px 12px ${alpha('#033363', 0.4)}`, // Increased shadow opacity on hover
                            },
                            paddingX: '2rem',
                            paddingY: '1rem',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            gap: .2,
                            borderRadius: '10px'
                        }}
                    >
                        <Typography fontSize={12}>Previous Page</Typography>
                        <Typography fontSize={16}>{prevPage.title}</Typography> 
                        
                    </Button>
                </Link>
            ) : <Box />}

            {nextPage ? (
                <Link href={nextPage.path} passHref>
                    <Button
                        variant="contained"
                        sx={{
                            minWidth: '300px',
                            textTransform: 'none',
                            backgroundColor: theme.palette.mode === 'light' ? '#000' : "#fff",
                            color: theme.palette.mode === 'light' ? theme.palette.primary.dark : theme.palette.primary.light,
                            border: '1px solid',
                            borderColor: (theme) =>
                                theme.palette.mode === 'light'
                                    ? alpha(theme.palette.primary.dark, .3)
                                    : alpha(theme.palette.primary.light, .4),
                            boxShadow: (theme) =>
                                theme.palette.mode === 'light'
                                    ? `0 0 12px 8px ${alpha('#9CCCFC', 0.2)}`
                                    : `0 0 24px 12px ${alpha('#033363', 0.2)}`,
                            '&:hover': {
                                border: '2px solid', // Increased width of the outline
                                borderColor: (theme) =>
                                    theme.palette.mode === 'light'
                                        ? alpha(theme.palette.primary.dark, 0.6) // Light mode hover outline color
                                        : alpha(theme.palette.primary.light, .8), // Dark mode hover outline color
                                boxShadow: (theme) =>
                                    theme.palette.mode === 'light'
                                        ? `0 0 12px 8px ${alpha('#9CCCFC', 0.4)}` // Increased shadow opacity on hover
                                        : `0 0 24px 12px ${alpha('#033363', 0.4)}`, // Increased shadow opacity on hover
                            },
                            paddingX: '2rem',
                            paddingY: '1rem',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-end',
                            alignItems: 'flex-end',
                            gap: .2,
                            borderRadius: '10px'
                        }}
                    >
                        <Typography fontSize={12}>Next Page</Typography>
                        <Typography fontSize={16}>{nextPage.title}</Typography>                        
                    </Button>
                </Link>
            ) : <Box />}
        </Box>
    );
};

export default Pagination;
