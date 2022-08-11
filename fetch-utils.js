const SUPABASE_URL = 'https://frbmbjirrybrfhgeciij.supabase.co';
const SUPABASE_KEY = 
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZyYm1iamlycnlicmZoZ2VjaWlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjAwNjI0MzQsImV4cCI6MTk3NTYzODQzNH0.yBcxYAIHsNPLt47MZKdzWfykIdTzjBPHOnskDd2lhos';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function createGame(game) {
    const response = await client
        .from('scorekeeper')
        .insert(data)
    console.log('response', response);
    if (response.error) {
        throw new Error(response.error.message);
    }
    return response.data;
}

export async function getPolls() {
    const response = await client
        .from('scorekeeper')
        .select('*');
    console.log('response', response);
    if (response.error) {
        throw new Error(response.error.message);
    }
    return response.data;
}
