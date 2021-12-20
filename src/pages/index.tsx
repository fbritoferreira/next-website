import useSWR from 'swr'

import { Header } from '../components/header/header';
import { fetcher } from '../utils/fetcher';

export default function Index() {
  const { data, error } = useSWR('{ users { name } }', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  const { users } = data

  return (
    <div>
      <Header />
      {users.map((user, i) => (
        <div key={i}>{user.name}</div>
      ))}
    </div>
  )
}
