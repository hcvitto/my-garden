import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import plants from '../data/plants'

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        plants: props.plant,
        watering: (typeof window !== 'undefined' && !!localStorage.watering) ? JSON.parse(localStorage.getItem('watering')) : null
    };
  }

  _getTimeString() {
    return new Date(Date.now()).toLocaleString()
  }

  _stringify(o) {
    return JSON.stringify(o)
  }

  setWatering(watering, id) {
    if (typeof window !== "undefined") {
      if (!!watering) {
        let w = watering.find(w => {
          return Number(w.id) === Number(id)
        });
        if (!!w) {
          watering = watering.map(w => {
            if (Number(w.id) !== Number(id)) { return w }
            return { ...w, time: this._getTimeString() }
          })
        } else {
          watering = [ ...watering, { id: id, time: this._getTimeString() } ];
        }
        localStorage.setItem('watering', this._stringify(watering))
        this.setState({ watering: watering })
      } else {
        localStorage.setItem('watering', this._stringify([{id: id, time: this._getTimeString()}]))
        this.setState({ watering: [{id: id, time: this._getTimeString()}] })
      }
    }
  }

  getTime(watering, id) {
    if (!!watering && watering.length) {
      let t = watering.find(w => Number(w.id) === Number(id));
      if (!!t) {
        return t.time
      } 
    }
    return 'Doh!'
  }

  render() {
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

                {this.props.plants.map((plant) => (
                  <li key={plant.id} className="flex flex-col justify-between h-56 bg-white bg-center text-gray-800 shadow-md overflow-hidden cursor-pointer bg-cover bg-center" style={!!plant.images && !!plant.images.main
                    ? { backgroundImage: `url(/img/${plant.images.main})` }
                    : { backgroundImage: "none" }
                  }>
                    <div className="flex justify-end items-center mt-4 ml-4 pr-4">
                      <div className="rounded-l-lg bg-white -mr-1 px-2" onClick={(e) => this.setWatering(this.state.watering, plant.id)}>{this.getTime(this.state.watering, plant.id)}</div>
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
}
export default Home;

export async function getStaticProps() {
  return {
    props: {
      plants
    }
  }
}
