
import { ErrorBoundary } from 'react-error-boundary'

function ErrorFallback({ error }) {
  return (
    <div
      role="alert"
      css={{
        color: 'red',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <p>Uh oh... There's a problem. Try refreshing the app.</p>
      <pre>{error.message}</pre>
    </div>
  )
}

export default function ErrorBoundaryCustom({ children }) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      {children}
    </ErrorBoundary>
  )
}