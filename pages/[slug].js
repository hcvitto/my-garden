import plants from '../data/plants.json'

export default function Plant({ plant }) {
    console.log('Plant', plant);
    return (
        <div>Vi presento {plant.name}</div>
    )
}

export async function getStaticPaths() {
    const paths = plants.map(p => ({
        params: { slug: p.slug }
    }));
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const plant = plants.find(p => p.slug === params.slug);
    return {
        props: {
            plant
        }
    }
}