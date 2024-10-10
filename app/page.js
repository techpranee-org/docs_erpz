"use client"

import { Box, Button, Container, Stack, Typography, useTheme } from "@mui/material";
import { alpha } from '@mui/material';
import Link from "next/link";


export default function Home() {
  const theme = useTheme();




  return (
    <Box
      sx={(theme) => ({
        bgcolor: 'background.default',
        width: '100vw',
        minHeight: '100vh',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
            : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          width: '100%',
          height: '100%',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'center',
          alignItems: 'center',
          pt: { xs: 14, sm: 18 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '60%' } }}>
          <Typography
            variant={theme.typography.h2}
            fontSize={theme.typography.h2}
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignSelf: 'center',
              textAlign: 'center',
              color: (theme) =>
                theme.palette.mode === 'light' ? '#000' : '#fff',
            }}
          >
            Welcome to&nbsp;
            <Typography
              component="span"
              variant={theme.typography.h2}
              fontSize={theme.typography.h2}
              sx={{
                color: (theme) =>
                  theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
              }}
            >
              ERPZ Documentation
            </Typography>
          </Typography>
          <Typography
            textAlign="center"
            color="text.secondary"
            variant={theme.typography.subtitle2}
            fontSize={theme.typography.subtitle2}
            sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' } }}
          >
            Your comprehensive guide to mastering ERPZ, a powerful Enterprise Resource Planning (ERP) solution. This documentation will help you navigate its features, streamline your operations, enhance productivity, and drive business growth, no matter the size of your organization.
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            alignSelf="center"
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
          >
            <Link href="/documentation">
            <Button variant="contained" color="primary" >
              View Documentation
            </Button>
            </Link>
          </Stack>
        </Stack>
        <Box
          id="image"
          sx={(theme) => ({
            mt: { xs: 8, sm: 10 },
            alignSelf: 'center',
            height: { xs: 200, sm: 300 },
            width: { xs: '100%', sm: '40%' },
            backgroundImage:
              theme.palette.mode === 'light'
                ? 'url("/images/landing/landingImageLight.png")'
                : 'url("/images/landing/landingImageDark.png")',
            backgroundSize: 'cover',
            borderRadius: '10px',
            outline: '1px solid',
            outlineColor:
              theme.palette.mode === 'light'
                ? alpha('#BFCCD9', 0.5)
                : alpha('#9CCCFC', 0.1),
            boxShadow:
              theme.palette.mode === 'light'
                ? `0 0 12px 8px ${alpha('#9CCCFC', 0.2)}`
                : `0 0 24px 12px ${alpha('#033363', 0.2)}`,
          })}
        />
      </Container>
    </Box>
  );
}