import React from 'react'
import Link from 'next/link'
import plants from '../data/plants'

import { ColorExtractor } from 'react-color-extractor'

class Plant extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            plant: props.plant,
            bgFrom: '',
            bgTo: ''
        };
    }
    
    getColors = colors => {
        console.log('colors', colors[0], colors[1]);
        this.setState({ bgFrom: colors[0], bgTo: colors[1] })
    }

    render() {
        return (
            <div className="flex h-screen plant-wrapper">

                <ColorExtractor getColors={this.getColors} src={this.state.plant.images.main}></ColorExtractor>

                <Link href="/"><a className="absolute top-8 left-8 w-8 h-8 bg-white rounded-full shadow back">Home</a></Link>

                <div className="w-1/2 h-screen bg-green-100 bg-cover bg-center image-wrapper" style={{ 
                    backgroundImage: `url(${this.state.plant.images.main})`
                }}></div>

                <div className="w-1/2 h-screen data-wrapper p-4" style={{ 
                    background: `linear-gradient(${this.state.bgFrom}, ${this.state.bgTo})`
                }}>
                    <div className="mb-2 info-box">
                        <div className="inline-block py-2 px-4 bg-white">
                            <div className="font-light info-title">
                                <div className="text-5xl font-extrabold">{this.state.plant.name}</div>
                                ({this.state.plant.type}
                                {this.state.plant.origin
                                    ? (<em> {this.state.plant.origin}</em>)
                                    : ''
                                }
                            )
                            </div> 
                        </div>
                    </div>
                    {this.state.plant.arrrivalData.boughtFrom
                        ? (
                        <div className="mb-2 info-box">
                            <div className="inline-block py-2 px-4 bg-white">
                                <div className="font-light info-title">
                                    <span className="font-semibold">Arrivata da </span> {this.state.plant.arrrivalData.boughtFrom} il {this.state.plant.arrrivalData.date}
                                    {this.state.plant.repotted
                                        ? (
                                        <span> e <span className="font-semibold">rinvasato</span> il {this.state.plant.repotted}</span>
                                        )
                                        : ''
                                    }
                                </div> 
                            </div>
                        </div>
                        )
                        : ''
                    }
                    {this.state.plant.repotted
                        ? (
                        <div className="mb-2 info-box">
                            <div className="inline-block py-2 px-4 bg-white">
                                <div className="font-light info-title">
                                    <span className="font-semibold">Rinvasato:</span> {this.state.plant.repotted}
                                </div> 
                            </div>
                        </div>
                        )
                        : ''
                    }
                    { getProp(this.state.plant, 'cares.soil', 'Terreno') }
                    { getProp(this.state.plant, 'cares.water', 'Innaffiature') }
                    { getProp(this.state.plant, 'cares.light', 'Ambiente') }
                    { getProp(this.state.plant, 'cares.fertilization', 'Concimazione') }
                    { getProp(this.state.plant, 'cares.repotting', 'Rinvaso') }
                    { getProp(this.state.plant, 'cares.pruning', 'Potatura') }
                    { getProp(this.state.plant, 'curiosity', 'Curiosità') }
                </div>
            </div>
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
            plant
        }
    }
}