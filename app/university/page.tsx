import TableRowUniversity from "../components/TableRowUniversity";

export default async function University(){
   
    const request = await fetch("https://serverapi-kappa.vercel.app/api/universities")
    const listUniversity = await request.json();

    const universities = [];
    for (const university of listUniversity){
        universities.push(<TableRowUniversity key={university.id} university={university} />)
    }

    return (
        <div className="container mx-auto py-8 flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-3xl font-bold mb-6 text-center">Lista de Universidades</h1>
            <div className="rounded-lg border shadow-sm bg-background w-full max-w-3xl">
            <table className="w-full text-sm">
                <tbody className="text-center">
                {universities}
                </tbody>
            </table>
            </div>
        </div>
    )
}