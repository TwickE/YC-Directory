import { title } from "process";
import SearchForm from "../../components/SearchForm";
import StartupCard from "../../components/StartupCard";

export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
    const query = (await searchParams).query;

    const posts = [
        {
            _createdAt: new Date(),
            views: 55,
            author: { _id: 1, name: 'Frederico' },
            _id: 1,
            description: 'This is a description',
            image: 'https://images.unsplash.com/photo-1519074002996-a69e7ac46a42?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            category: 'Technology',
            title: 'Startup Name'
        }
    ];

    return (
        <>
            <section className="pink_container">
                <h1 className="heading">Pitch Your Startup, <br /> Connect With Entrepreneurs</h1>
                <p className="sub-heading !max-w-3xl">
                    Submite Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
                </p>

                <SearchForm query={query} />
            </section>

            <section className="section_container">
                <p className="text-30-semibold">
                    {query ? `Search Results for "${query}"` : 'All Startups'}
                </p>
                <ul className="mt-7 card_grid">
                    {posts?.length > 0 ?(
                        posts.map((post: StartupCardType) => (
                            <StartupCard key={post?._id} post={post} />
                        ))
                    ) : (
                        <p className="no-results">No startups found</p>
                    )}
                </ul>
            </section>
        </>
    );
}
