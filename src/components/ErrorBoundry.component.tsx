
import { ErrorBoundary } from 'react-error-boundary'

function ErrorFallback({ error }:any) {
  return (
    <div
      role="alert"
      style={{
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

export default function ErrorBoundaryCustom({ children }:any) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      {children}
    </ErrorBoundary>
  )
}