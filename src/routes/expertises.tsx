import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/expertises')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/expertises"!</div>
}
