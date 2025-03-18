async function fetchUsers() {
    await new Promise((resolve) => {
        setTimeout(resolve, 1000);
    }
    );
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
        throw new Error('Failed to fetch users');
    }
    return response.json();
}

export default async function UsersPage() {
    const users = await fetchUsers();

    return (
        <div>
            <h1>Users List</h1>
            <ul>
                {users.map((user: any) => (
                    <li key={user.id}>
                        <strong>{user.name}</strong> - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
}