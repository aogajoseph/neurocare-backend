import express from 'express';

const router = express.Router();

router.get('/profile', (req, res) => {
  // 🔒 For now – later this will be derived from auth token
  const isAnonymous = true;

  res.json({
    user: {
      id: isAnonymous ? 'anon' : 'u_123',
      name: isAnonymous ? 'Anonymous User' : 'John Doe',
      email: isAnonymous ? null : 'john@doe.com',
      isAnonymous,
    },

    menu: isAnonymous
      ? [
          {
            id: 'signin',
            label: 'Sign In',
            icon: 'log-in-outline',
            action: {
              type: 'navigate',
              target: 'login', // 🔹 must exist in app routes
            },
          },
          {
            id: 'language',
            label: 'Change Language',
            icon: 'language-outline',
            action: {
              type: 'modal',
              target: 'language',
            },
          },
          {
            id: 'help',
            label: 'Help & Support',
            icon: 'help-circle-outline',
            action: {
              type: 'navigate',
              target: 'support',
            },
          },
          {
            id: 'about',
            label: 'About NeuroCare',
            icon: 'information-circle-outline',
            action: {
              type: 'navigate',
              target: 'about',
            },
          },
        ]
      : [
          {
            id: 'profile',
            label: 'My Profile',
            icon: 'person-outline',
            action: {
              type: 'navigate',
              target: 'profile',
            },
          },
          {
            id: 'settings',
            label: 'Settings',
            icon: 'settings-outline',
            action: {
              type: 'navigate',
              target: 'settings',
            },
          },
          {
            id: 'logout',
            label: 'Sign Out',
            icon: 'log-out-outline',
            action: {
              type: 'modal',
              target: 'logout',
            },
          },
        ],
  });
});

export default router;
