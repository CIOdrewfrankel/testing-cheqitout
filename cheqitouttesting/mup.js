module.exports = {
  servers: {
    one: {
      host: '138.68.16.119',
      username: 'root',
      // pem:
      password: 'M0rg@nch3Q1t0ut',
      // or leave blank for authenticate from ssh-agent
      opts: {
          port: 22,
      },
    }
  },

  meteor: {
    name: 'cheqitouttesting',
    path: '../cheqitouttesting',
    volumes: { //optional, lets you add docker volumes
    },
    docker: {
      image:'kadirahq/meteord',//optional
      args:[ //optional, lets you add / overwrite any parameter on the docker run command
      ]
    },
    servers: {
      one: {}// list of servers to deploy, from the 'servers' list
    },
    buildOptions: {
      serverOnly: true,
      debug: true,
      cleanAfterBuild: true, // default
      //buildLocation: '/my/build/folder' // defaults to /tmp/<uuid>
      mobileSettings: {
        yourMobileSetting: "setting value"
      }
    },
    env: {
      ROOT_URL: 'http://testing.cheqitout.co'
    },
    log: { //optional
    },
    ssl: {
    },
    deployCheckWaitTime: 60 //default 10
  },

  mongo: { // optional
  },
};
