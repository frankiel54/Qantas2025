import { http, HttpResponse } from 'msw'
 
export const handlers = [
  http.get('http://localhost:3000/user', ({ request }) => {
    return HttpResponse.json({ name: 'John' })
  }),
]
