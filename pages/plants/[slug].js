import React from 'react'
import Link from 'next/link'
import plants from '../../data/plants'

import { ColorExtractor } from 'react-color-extractor'

class Plant extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            plant: props.plant,
            bgFrom: '#000000',
            bgTo: '#ffffff',
            menuIsOpen: false
        };
    }
    
    getColors = colors => {
        this.setState({ bgFrom: colors[0], bgTo: colors[1] })
    }

    toggleNav = _ => {
        this.setState({ menuIsOpen: !this.state.menuIsOpen })
    }

    render() {
        return (
            !!this.props.plant
            ? <div className="flex h-screen plant-wrapper">

                {!!this.props.plant && !!this.props.plant.images.main
                ? <ColorExtractor getColors={this.getColors} src={'/img/' + this.props.plant.images.main}></ColorExtractor>
                : null
                }
                

                <Link href="/">
                    <a className="absolute top-8 left-8 w-10 h-10 p-2 bg-white rounded-full shadow-xl back">
                        <img src="/iconfinder_home_1608930.svg" alt="Home" />
                    </a>
                </Link>
                <a className="absolute top-20 left-8 w-10 h-10 p-2 bg-white rounded-full shadow-xl plants" onClick={this.toggleNav}>
                    <img src="/iconfinder_flower_in_a_pot_1880386.svg" alt="All plants" />
                </a>
                {!!this.props.plants
                ? <div className="absolute top-20 left-20 p-2 rounded-md bg-white shadow-2xl" style={{'display': this.state.menuIsOpen ? 'block' : 'none'}}>
                        {this.props.plants.map(p => {
                            return (
                                <Link href={"/plants/" + p.slug} key={p.id}>
                                    <a className="block">{p.name}</a>
                                </Link>
                            )
                        })}
                    </div>
                : null
                }
                

                <div className="w-1/2 h-screen bg-green-100 bg-cover bg-center image-wrapper"
                style={!!this.props.plant && !!this.props.plant.images.main
                    ? { backgroundImage: `url("/img/${this.props.plant.images.main}")` }
                    : { backgroundImage: "none" }
                }></div>


                <div className="w-1/2 h-screen data-wrapper p-4" style={{ 
                    background: `linear-gradient(${this.state.bgFrom}, ${this.state.bgTo})`
                }}>
                    <div className="mb-2 info-box">
                        <div className="inline-block py-2 px-4 bg-white">
                            <div className="font-light info-title">
                                <div className="text-5xl font-extrabold">{this.props.plant.name}</div>
                                ({this.props.plant.type}
                                {this.props.plant.origin
                                    ? (<em> {this.props.plant.origin}</em>)
                                    : ''
                                }
                            )
                            </div> 
                        </div>
                    </div>
                    {this.props.plant.arrrivalData.boughtFrom
                        ? (
                        <div className="mb-2 info-box">
                            <div className="inline-block py-2 px-4 bg-white">
                                <div className="font-light info-title">
                                    <span className="font-semibold">Arrivata da </span> {this.props.plant.arrrivalData.boughtFrom} il {this.props.plant.arrrivalData.date}
                                    {this.props.plant.repotted
                                        ? (
                                        <span> e <span className="font-semibold">rinvasato</span> il {this.props.plant.repotted}</span>
                                        )
                                        : ''
                                    }
                                </div> 
                            </div>
                        </div>
                        )
                        : ''
                    }
                    { getProp(this.props.plant, 'cares.soil', 'Terreno') }
                    { getProp(this.props.plant, 'cares.water', 'Innaffiature') }
                    { getProp(this.props.plant, 'cares.light', 'Ambiente') }
                    { getProp(this.props.plant, 'cares.fertilization', 'Concimazione') }
                    { getProp(this.props.plant, 'cares.repotting', 'Rinvaso') }
                    { getProp(this.props.plant, 'cares.pruning', 'Potatura') }
                    { getProp(this.props.plant, 'curiosity', 'Curiosità') }
                </div>
            </div>
            : null
        )
    }
}
export default Plant;
export function getProp(obj, prop, title) {
    const props = prop.split('.');
    let o;
    if (props.length === 1) {
        o = obj[props[0]];
    }
    if (props.length === 2) {
        o = obj[props[0]][props[1]];
    }
    if (!!o) {
        return (
            <div className="mb-2 info-box">
                <div className="inline-block py-2 px-4 bg-white">
                    <div className="font-light info-title">
                        <span className="font-semibold">{title}</span>
                    </div> 
                    <div className="font-light">
                        {o}
                    </div> 
                </div>
            </div>
        )
    }
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
            plant,
            plants
        }
    }
}