import { createFileRoute } from '@tanstack/react-router'
import Container from '@/components/container'

export const Route = createFileRoute('/templates')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <Container className="h-screen">
      <div className="p-4">
        <h1 className="text-4xl font-bold font-heading">Templates</h1>
        <p className="text-lg text-muted-foreground">COMING SOON</p>
      </div>
    </Container>
  )
}
