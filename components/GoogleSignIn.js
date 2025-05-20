import React, { useState } from 'react';
import { auth, provider } from '../lib/firebase'; 
import { signInWithPopup } from 'firebase/auth'; 
import { Button, CircularProgress } from '@mui/material';

const GoogleSignIn = () => {
  const [loading, setLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      await signInWithPopup(auth, provider);
      // Auth state will be handled by the AuthContext
    } catch (error) {
      console.error('Sign-in error:', error.message);
      setLoading(false);
    }
  };

  return (
    <Button 
      variant="contained" 
      color="primary" 
      onClick={handleGoogleSignIn}
      disabled={loading}
      startIcon={loading ? <CircularProgress size={20} color="inherit" /> : null}
    >
      {loading ? 'Signing in...' : 'Sign In with Google'}
    </Button>
  );
};

export default GoogleSignIn;
