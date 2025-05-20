"use client";

import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, CssBaseline, Paper, Avatar } from '@mui/material';
import { useRouter } from 'next/navigation';
import { auth } from '../../../lib/firebase';

export default function Welcome() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        // Redirect to login if not authenticated
        router.push('/');
      }
    });

    return () => unsubscribe();
  }, [router]);

  if (!user) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          height="100vh"
        >
          <Paper elevation={3} sx={{ p: 4, width: '100%', maxWidth: 500 }}>
            <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
              {user.photoURL && (
                <Avatar 
                  src={user.photoURL} 
                  alt={user.displayName || 'User'} 
                  sx={{ width: 80, height: 80 }}
                />
              )}
              <Typography variant="h4" gutterBottom>
                Welcome, {user.displayName || 'User'}!
              </Typography>
              <Typography variant="body1" color="text.secondary">
                You have successfully logged in with {user.email}
              </Typography>
            </Box>
          </Paper>
        </Box>
      </Container>
    </>
  );
} 