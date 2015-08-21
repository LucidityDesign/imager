
module.exports = {
  variants: {
    items: {
      // keepNames: true,
      resize: {
        mini: {
          resize: {
            '300x200'
          }
        },
        preview: {
          resize: {
            '800x600'
          }
        }
      },
      crop: {
        thumb: {
          resize: {
            '200x200'
          }
        }
      },
      resizeAndCrop: {
        large: {
          resize: '1000x1000',
          crop: '900x900'
        }
      }
    },

    gallery: {
      crop: {
        thumb: {
          resize: {
            '100x100'
          }
        }
      }
    }
  },

  storage: {
    Local: {
      path: '/tmp',
      mode: 0777
    },
    Rackspace: {
      username: 'USERNAME',
      apiKey: 'API_KEY',
      // authUrl: "https://lon.auth.api.rackspacecloud.com",
      container: 'CONTAINER'
    },
    S3: {
      key: 'KEY',
      secret: 'SECRET',
      bucket: 'BUCKET',
      cdn: 'http://CDN_URL', // (optional)
      storageClass: 'REDUCED_REDUNDANCY' // (optional)
      // set `secure: false` if you want to use buckets with characters like '.' (dot)
    }
  },

  debug: true
}
