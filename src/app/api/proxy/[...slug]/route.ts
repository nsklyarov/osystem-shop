import { EXTERNAL_API } from '../../../lib/constants'

export async function GET (
  req: Request,
  context: { params: Promise<{ slug: string[] }> }
): Promise<Response> {
  const params = await context.params
  const [,query] = req.url.split('?')
  const target = `${EXTERNAL_API}/${params.slug.join('/')}${query.length > 0 ? `?${query}` : ''}`

  const res = await fetch(target)
  const data = await res.json()

  return Response.json(data)
}
