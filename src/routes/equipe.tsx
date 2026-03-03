import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/equipe')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/equipe"!</div>
}
