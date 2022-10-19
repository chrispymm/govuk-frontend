const config = {
  cacheDirectory: '<rootDir>/.cache/jest/',
  coveragePathIgnorePatterns: [
    '.test.(js|mjs)',
    '.eslintrc.js',
    'config/*',
    'vendor/*'
  ],
  transform: {
    '^.+\\.m?js$': ['babel-jest', { rootMode: 'upward' }]
  }
}

module.exports = {
  collectCoverageFrom: ['./src/**/*.{js,mjs}'],
  projects: [
    {
      ...config,
      displayName: 'Gulp tasks',
      testMatch: [
        '**/gulp/**/*.test.{js,mjs}'
      ]
    },
    {
      ...config,
      displayName: 'Nunjucks macro tests',
      setupFilesAfterEnv: ['./config/jest/matchers.js'],
      snapshotSerializers: [
        'jest-serializer-html'
      ],
      testMatch: [
        '**/(*.)?template.test.{js,mjs}'
      ]
    },
    {
      ...config,
      displayName: 'JavaScript unit tests',
      testMatch: [
        '**/*.unit.test.{js,mjs}'
      ]
    },
    {
      ...config,
      displayName: 'JavaScript behaviour tests',
      testMatch: [
        '**/*.test.js',

        // Exclude macro/unit tests
        '!**/(*.)?template.test.{js,mjs}',
        '!**/*.unit.test.{js,mjs}',

        // Exclude other tests
        '!**/all.test.{js,mjs}',
        '!**/components/*/**',
        '!**/gulp/**'
      ],

      // Web server required
      globalSetup: './config/jest/server/start.mjs',
      globalTeardown: './config/jest/server/stop.mjs'
    },
    {
      ...config,
      displayName: 'JavaScript component tests',
      setupFilesAfterEnv: [require.resolve('expect-puppeteer')],
      testMatch: [
        '**/all.test.{js,mjs}',
        '**/components/*/*.test.js',

        // Exclude macro/unit tests
        '!**/(*.)?template.test.{js,mjs}',
        '!**/*.unit.test.{js,mjs}'
      ],

      // Browser test increased timeout (5s to 15s)
      testTimeout: 15000,

      // Web server and browser required
      globalSetup: './config/jest/browser/open.mjs',
      globalTeardown: './config/jest/browser/close.mjs'
    }
  ]
}
