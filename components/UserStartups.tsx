import { STARTUPS_BY_AUTHOR_QUERY } from "@/lib/queries"
import { client } from "@/sanity/lib/client"
import StartupCard, { StartupCardType } from "./StartupCard"


const UserStartups = async ({ id }: { id: string }) => {
    const startusps = await client.fetch(STARTUPS_BY_AUTHOR_QUERY, { id })

    return (
        <>
            {startusps.length > 0 ? (startusps.map((startup: StartupCardType) => (
                <StartupCard key={startup._id} post={startup} />
            ))) : (
                <p className="no-result">No startups yet</p>
            )}
        </>
    )
}

export default UserStartups