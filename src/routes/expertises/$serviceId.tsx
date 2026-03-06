import { createFileRoute } from '@tanstack/react-router'
import { ServiceDetailPage } from '../../components/services/ServiceDetailPage'

export const Route = createFileRoute('/expertises/$serviceId')({
  component: RouteComponent,
})

function RouteComponent() {
  const { serviceId } = Route.useParams()
  return <ServiceDetailPage serviceId={serviceId} />
}
