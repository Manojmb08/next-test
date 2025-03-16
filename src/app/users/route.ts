export const users = [
    {id:1,name:"John"},
    {id:2,name:"John"},
]

export async function GET() {
    return Response.json(users)
}

export async function POST(request: Request){
    const users = await request.json()
    console.log(users);
    return new Response(JSON.stringify(users),{status:201})
    
}