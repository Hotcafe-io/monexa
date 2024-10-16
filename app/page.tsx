import { SocketProvider } from '@/app/context/websocket'
import TokenTracker from '../components/Pages/TokenTracker'

export default function Home() {
  return (
    <SocketProvider>
      <TokenTracker />
    </SocketProvider>
  )
}
