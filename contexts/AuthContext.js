// contexts/AuthContext.js
'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

const LOGIN_DURATION = 5 * 60 * 60 * 1000; // 5 hours in milliseconds
const VALID_CREDENTIALS = {
  username: 'admin',
  password: 'gmt@2025',
};

// Pages that don't require authentication
const PUBLIC_ROUTES = ['/login'];

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const router = useRouter();
  const pathname = usePathname();

  const checkAuthStatus = () => {
    try {
      const loginData = localStorage.getItem('userLogin');

      if (!loginData) {
        setIsAuthenticated(false);
        setUser(null);
        return false;
      }

      const { username, timestamp, isLoggedIn } = JSON.parse(loginData);
      const now = new Date().getTime();

      // Check if login has expired (more than 5 hours)
      if (now - timestamp > LOGIN_DURATION) {
        localStorage.removeItem('userLogin');
        setIsAuthenticated(false);
        setUser(null);
        return false;
      }

      if (isLoggedIn) {
        setIsAuthenticated(true);
        setUser({ username, loginTime: new Date(timestamp) });
        return true;
      }

      return false;
    } catch (error) {
      console.error('Error checking auth status:', error);
      localStorage.removeItem('userLogin');
      setIsAuthenticated(false);
      setUser(null);
      return false;
    }
  };

  const login = (username, password) => {
    if (username === VALID_CREDENTIALS.username && password === VALID_CREDENTIALS.password) {
      const loginData = {
        username,
        timestamp: new Date().getTime(),
        isLoggedIn: true,
      };

      localStorage.setItem('userLogin', JSON.stringify(loginData));
      setIsAuthenticated(true);
      setUser({ username, loginTime: new Date() });
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem('userLogin');
    setIsAuthenticated(false);
    setUser(null);
    router.push('/login');
  };

  const getRemainingTime = () => {
    try {
      const loginData = localStorage.getItem('userLogin');
      if (!loginData) return 0;

      const { timestamp } = JSON.parse(loginData);
      const now = new Date().getTime();
      const remaining = LOGIN_DURATION - (now - timestamp);

      return Math.max(0, remaining);
    } catch (error) {
      return 0;
    }
  };

  useEffect(() => {
    const isAuth = checkAuthStatus();
    setIsLoading(false);

    // Set up interval to check auth status every 30 seconds
    const authCheckInterval = setInterval(() => {
      const currentAuthStatus = checkAuthStatus();

      if (!currentAuthStatus && isAuthenticated && !PUBLIC_ROUTES.includes(pathname)) {
        router.push('/login');
      }
    }, 30000);

    return () => clearInterval(authCheckInterval);
  }, [pathname]);

  // Redirect logic
  useEffect(() => {
    if (!isLoading) {
      const isPublicRoute = PUBLIC_ROUTES.includes(pathname);

      if (!isAuthenticated && !isPublicRoute) {
        router.push('/login');
      } else if (isAuthenticated && pathname === '/login') {
        router.push('/');
      }
    }
  }, [isAuthenticated, isLoading, pathname]);

  const contextValue = {
    isAuthenticated,
    isLoading,
    user,
    login,
    logout,
    checkAuthStatus,
    getRemainingTime,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      <AuthWrapper>{children}</AuthWrapper>
    </AuthContext.Provider>
  );
};

// Auth wrapper component that handles the UI logic
const AuthWrapper = ({ children }) => {
  const { isAuthenticated, isLoading, user, logout, getRemainingTime } = useAuth();
  const pathname = usePathname();
  const isPublicRoute = PUBLIC_ROUTES.includes(pathname);

  // Show loading screen while checking authentication
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // Show login page or redirect message for unauthenticated users on protected routes
  if (!isAuthenticated && !isPublicRoute) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Redirecting to login...</p>
        </div>
      </div>
    );
  }

  // Show public pages (like login) without wrapper
  if (isPublicRoute) {
    return children;
  }

  // Show protected content with header for authenticated users
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Global Header for all protected pages */}
      {/* <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <h1 className="text-xl font-semibold text-gray-900">Secure App</h1>
              {user && <span className="text-sm text-gray-600">Welcome, {user.username}</span>}
            </div>

            <div className="flex items-center space-x-4">
              <SessionTimer getRemainingTime={getRemainingTime} />
              <button
                onClick={logout}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header> */}

      {/* Protected content */}
      <main className="flex-1">{children}</main>
    </div>
  );
};

// Session Timer Component
const SessionTimer = ({ getRemainingTime }) => {
  const [remainingTime, setRemainingTime] = useState(getRemainingTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime(getRemainingTime());
    }, 1000);

    return () => clearInterval(timer);
  }, [getRemainingTime]);

  const formatTime = milliseconds => {
    const hours = Math.floor(milliseconds / (1000 * 60 * 60));
    const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);

    return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return <div className="text-sm text-gray-500">Session: {formatTime(remainingTime)}</div>;
};
