import { users } from "../route";

export async function GET(_request: Request, {params}: { params: { id: string } }) {
    const { id } = await params
    const user = users.find(user => String(user.id) === id)
    return Response.json(user)
}

export async function POST(request: Request) {
    const user = await request.json()
    users.push({ id: users.length + 1, ...user })
    return new Response(JSON.stringify(users), { status: 201 })
}