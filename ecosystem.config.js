module.exports = {
  apps: [
    {
      name: 'dlist_gateway',
      script: 'authbind',
      args: 'node src/server.js',
      node_args: [], 
      exec_interpreter: 'none',
    },
  ],
};
  