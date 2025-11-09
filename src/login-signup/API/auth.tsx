interface LoginData{
    username:string;
    password:string;
}

export async function loginUser(data:LoginData) {
    const response = await fetch('http://127.0.0.1:4000/api/v1/auth/signin',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    
    if(!response.ok) throw new Error("Login failed");
    return response.json();    
    
    
}