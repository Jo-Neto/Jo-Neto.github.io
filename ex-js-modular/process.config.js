module.exports = {
  apps: [
    {
      script: 'back/backapp.js',
      cwd: 'back',
      name: 'Backend',
      watch: true
    },
    {
      script: 'front/index.js',
      cwd: 'front',
      name: 'Frontend',
      watch: true
    }
  ]
};