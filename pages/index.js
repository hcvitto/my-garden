import Link from 'next/link'
import Head from 'next/head'
// import plants from '../data/plants.json'
import plants from '../data/plants'

export default function Home({ plants }) {
  return (
    <div>
      <Head>
        <title>My garden</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">My garden</h2>
          </div>

          <div className="mt-10">
            <ul className="space-y-10 md:space-y-0 md:grid md:grid-cols-4 md:gap-x-8 md:gap-y-10">

              {plants.map((plant) => (
              <li key={plant.id} className="flex flex-col justify-between h-56 bg-white bg-center text-gray-800 shadow-md overflow-hidden cursor-pointer">
                <div className="flex justify-between items-center ml-4 pr-8">
                </div>
                <Link href={plant.slug}>
                  <div className="bg-white bg-opacity-95 shadow-md rounded-r-xl p-4 flex flex-col mr-4 mb-8">
                      <h3 className="text-xl font-bold pb-1">{plant.name}</h3>
                      <p className="text-small">{plant.type}</p>
                  </div>
                </Link>
              </li>
              ))}

            </ul>
          </div>
        </div>
      </div>


    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      plants: plants
    }
  }
}
