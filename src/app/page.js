"use client";

import React from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  CssBaseline, 
  Paper, 
  Avatar, 
  CircularProgress,
  Divider,
  useTheme,
  alpha,
  Button
} from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import GoogleSignIn from '../../components/GoogleSignIn';
import { useAuth } from '../../lib/authContext';

export default function Home() {
  const { user, loading, logout } = useAuth();
  const theme = useTheme();

  const handleLogout = async () => {
    await logout();
  };

  if (loading) {
    return (
      <Box 
        display="flex" 
        justifyContent="center" 
        alignItems="center" 
        height="100vh"
        sx={{
          background: `linear-gradient(45deg, ${alpha(theme.palette.primary.main, 0.1)}, ${alpha(theme.palette.primary.light, 0.2)})`,
        }}
      >
        <CircularProgress color="primary" size={60} thickness={4} />
      </Box>
    );
  }

  return (
    <>
      <CssBaseline />
      <Box 
        sx={{ 
          minHeight: '100vh',
          background: `linear-gradient(45deg, ${alpha(theme.palette.primary.main, 0.1)}, ${alpha(theme.palette.primary.light, 0.2)})`,
          py: 4
        }}
      >
        <Container maxWidth="sm">
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            minHeight="90vh"
          >
            {!user ? (
              <Paper 
                elevation={3} 
                sx={{ 
                  p: 5, 
                  borderRadius: 2,
                  width: '100%',
                  maxWidth: 500,
                  textAlign: 'center',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.1)'
                }}
              >
                <Typography 
                  variant="h4" 
                  gutterBottom
                  sx={{ 
                    fontWeight: 700,
                    mb: 3,
                    color: theme.palette.primary.main 
                  }}
                >
                  Welcome to Nexcis
                </Typography>
                <Typography 
                  variant="body1" 
                  color="text.secondary"
                  sx={{ mb: 4 }}
                >
                  Please sign in with your Google account to continue
                </Typography>
                <GoogleSignIn />
              </Paper>
            ) : (
              <Paper 
                elevation={3} 
                sx={{ 
                  p: 5, 
                  borderRadius: 2,
                  width: '100%',
                  maxWidth: 500,
                  boxShadow: '0 8px 24px rgba(0,0,0,0.1)'
                }}
              >
                <Box display="flex" flexDirection="column" alignItems="center" gap={3}>
                  {user.photoURL && (
                    <Avatar 
                      src={user.photoURL} 
                      alt={user.displayName || 'User'} 
                      sx={{ 
                        width: 100, 
                        height: 100,
                        border: `4px solid ${theme.palette.primary.main}`,
                        boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                      }}
                    />
                  )}
                  <Box textAlign="center">
                    <Typography 
                      variant="h4" 
                      gutterBottom
                      sx={{ 
                        fontWeight: 700,
                        color: theme.palette.primary.main 
                      }}
                    >
                      Welcome, {user.displayName || 'User'}!
                    </Typography>
                    <Divider sx={{ my: 2 }} />
                    <Typography 
                      variant="body1" 
                      color="text.secondary"
                      sx={{ 
                        fontSize: '1.1rem',
                        fontWeight: 500
                      }}
                    >
                      You have successfully logged in with:
                    </Typography>
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        mt: 1, 
                        fontWeight: 'bold',
                        color: theme.palette.info.main
                      }}
                    >
                      {user.email}
                    </Typography>
                  </Box>
                  
                  <Divider sx={{ width: '100%', mt: 2 }} />
                  
                  <Button
                    variant="outlined"
                    color="error"
                    startIcon={<LogoutIcon />}
                    onClick={handleLogout}
                    sx={{ 
                      mt: 2,
                      borderRadius: '20px',
                      px: 3,
                      py: 1,
                      fontWeight: 'medium',
                      '&:hover': {
                        backgroundColor: alpha(theme.palette.error.main, 0.1)
                      }
                    }}
                  >
                    Logout
                  </Button>
                </Box>
              </Paper>
            )}
          </Box>
        </Container>
      </Box>
    </>
  );
}
