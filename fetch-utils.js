const SUPABASE_URL = 'https://frbmbjirrybrfhgeciij.supabase.co';
const SUPABASE_KEY = 
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZyYm1iamlycnlicmZoZ2VjaWlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjAwNjI0MzQsImV4cCI6MTk3NTYzODQzNH0.yBcxYAIHsNPLt47MZKdzWfykIdTzjBPHOnskDd2lhos';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function createGame(game) {
    // create a single new game in the games table using the above object
    const response = await client.from('games').insert({ name1: game.name1, name2: game.name2, score1: game.score1, score2: game.score2 });

    return checkError(response);
}

export async function getGames() {
    // select all games from the games table
    const response = await client.from('games').select('*');

    return checkError(response);
}

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}