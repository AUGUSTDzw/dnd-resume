import * as Sentry from '@sentry/react'

const dsn = import.meta.env.VITE_SENTRY_DSN
if (dsn) {
  Sentry.init({
    dsn,
    ignoreErrors: ['ResizeObserver loop limit exceeded'],
    integrations: [],
  })
}
