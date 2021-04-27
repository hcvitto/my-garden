import Link from 'next/link'
import Head from 'next/head'
import plants from '../data/plants'
import watering from '../data/watering'

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
                <li key={plant.id} className="flex flex-col justify-between h-56 bg-white bg-center text-gray-800 shadow-md overflow-hidden cursor-pointer bg-cover bg-center" style={!!plant.images && !!plant.images.main
                  ? { backgroundImage: `url(/img/${plant.images.main})` }
                  : { backgroundImage: "none" }
                }>
                  <div className="flex justify-end items-center mt-4 ml-4 pr-4">
                    <div className="rounded-l-lg bg-white -mr-1 px-2" onClick={(e) => setWatering(plant.id)}>{getTime(plant.id)}</div>
                    <div className="w-10 h-10 p-2 bg-white rounded-full shadow-xl"><img src="iconfinder_blood_drop_5554095.svg" alt="Set watering time" /></div>
                  </div>
                  <Link href={"/plants/" + plant.slug}>
                    <div className="bg-white bg-opacity-95 shadow-md rounded-r-xl px-4 py-2 flex flex-col mr-4 mb-8">
                        <h3 className="text-xl font-bold pb-1">{plant.name} <img src="iconfinder_external-link_1608686.svg" alt="Open page" className="inline w-4 mx-3" /></h3>
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

export function setWatering(id) {
  if (typeof window !== "undefined") {
    if (!!localStorage.watering) {
      let o = JSON.parse(localStorage.watering);
      console.log('o', o);
      let w = o.find(w => {
        console.log('find')
        console.log('w', w)
        console.log(Number(o.id) === Number(id))
        return Number(w.id) === Number(id)
      });
      if (!!w) {
        console.log('w', w);
      } else {
        o = [ ...o, { id: id, time: 'oggi' } ];
      }
      localStorage.setItem('watering', JSON.stringify(o))
    } else {
      localStorage.setItem('watering', JSON.stringify([{id: id, time: 'oggi'}]))
    }
  }
}

export function getTime(id) {
  if (typeof window !== "undefined") {
    // console.log('localStorage.watering', JSON.parse(localStorage.getItem('watering')))
    // let f = localStorage.watering.filter(t => Number(t.id) === Number(id))
    // return !!f && f.length ? f[0].time : ''
    return 'time'
  }
  return null
}

export async function getStaticProps() {
  return {
    props: {
      plants
    }
  }
}
