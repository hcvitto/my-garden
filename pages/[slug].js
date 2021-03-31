import Link from 'next/link'
import plants from '../data/plants'

export default function Plant({ plant }) {
    return (
        <div className="flex h-screen plant-wrapper">
            <Link href="/"><a className="absolute top-8 left-8 w-8 h-8 bg-white rounded-full shadow back">Home</a></Link>

            <div className="w-1/2 h-screen bg-green-100 image-wrapper"></div>

            <div className="w-1/2 h-screen bg-red-100 data-wrapper p-4">
                <div className="mb-2 info-box">
                    <div className="inline-block py-2 px-4 bg-white">
                        <div className="font-light info-title">
                            <span className="font-semibold">{plant.name}</span> ({plant.type})
                        </div> 
                    </div>
                </div>
                <div className="mb-2 info-box">
                    <div className="inline-block py-2 px-4 bg-white">
                        <div className="font-light info-title">
                            <span className="font-semibold">Arrivata da </span> {plant.arrrivalData.boughtFrom} <span className="font-semibold">il </span> {plant.arrrivalData.date}
                        </div> 
                    </div>
                </div>
            </div>
        </div>
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