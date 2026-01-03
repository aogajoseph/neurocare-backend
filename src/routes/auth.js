import express from 'express';

const router = express.Router();

router.get('/profile', (req, res) => {
  const isAnonymous = true; // later from token

  res.json({
    user: {
      id: isAnonymous ? null : 'u_123',
      name: isAnonymous ? 'Guest User' : 'John Doe',
      email: isAnonymous ? null : 'john@doe.com',
      username: isAnonymous ? null : 'johndoe',
      isAnonymous,
    },

    menu: isAnonymous
      ? [] // 🔑 IMPORTANT: no menu for anonymous
      : [
          {
            id: 'profile',
            label: 'My Profile',
            icon: 'person-outline',
            action: {
              type: 'navigate',
              target: '(tabs)/profile',
            },
          },
          {
            id: 'settings',
            label: 'Settings',
            icon: 'settings-outline',
            action: {
              type: 'navigate',
              target: '(tabs)/settings',
            },
          },
          {
            id: 'help',
            label: 'Help & Support',
            icon: 'help-circle-outline',
            action: {
              type: 'navigate',
              target: '(tabs)/support',
            },
          },
          {
            id: 'logout',
            label: 'Sign Out',
            icon: 'log-out-outline',
            action: {
              type: 'auth',
              target: 'logout',
            },
          },
        ],
  });
});

export default router;
