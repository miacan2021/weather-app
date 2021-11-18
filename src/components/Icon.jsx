import React from 'react'
import {ReactComponent as D01} from '../icons/01d.svg'
import {ReactComponent as N01} from '../icons/01n.svg'
import {ReactComponent as D02} from '../icons/02d.svg'
import {ReactComponent as N02} from '../icons/02n.svg'
import {ReactComponent as D03} from '../icons/03d.svg'
import {ReactComponent as N03} from '../icons/03n.svg'
import {ReactComponent as D04} from '../icons/04d.svg'
import {ReactComponent as N04} from '../icons/04n.svg'
import {ReactComponent as D09} from '../icons/09d.svg'
import {ReactComponent as N09} from '../icons/09n.svg'
import {ReactComponent as D10} from '../icons/10d.svg'
import {ReactComponent as N10} from '../icons/10n.svg'
import {ReactComponent as D11} from '../icons/11d.svg'
import {ReactComponent as N11} from '../icons/11n.svg'
import {ReactComponent as D13} from '../icons/13d.svg'
import {ReactComponent as N13} from '../icons/13n.svg'
import {ReactComponent as D50} from '../icons/50d.svg'
import {ReactComponent as N50} from '../icons/50n.svg'

const Icon = (props) => {
    const switchIcon = () => {
        switch(props.num) {
            case '01d': return <D01 className="fill-current w-3/12 lg:w-6/12" />
            case '01n': return <N01 className="fill-current w-3/12 lg:w-6/12" />
            case '02d': return <D02 className="fill-current w-3/12 lg:w-6/12" />
            case '02n': return <N02 className="fill-current w-3/12 lg:w-6/12" />
            case '03d': return <D03 className="fill-current w-3/12 lg:w-6/12" />
            case '03n': return <N03 className="fill-current w-3/12 lg:w-6/12" />
            case '04d': return <D04 className="fill-current w-3/12 lg:w-6/12" />
            case '04n': return <N04 className="fill-current w-3/12 lg:w-6/12" />
            case '09d': return <D09 className="fill-current w-3/12 lg:w-6/12" />
            case '09n': return <N09 className="fill-current w-3/12 lg:w-6/12" />
            case '10d': return <D10 className="fill-current w-3/12 lg:w-6/12" />
            case '10n': return <N10 className="fill-current w-3/12 lg:w-6/12" />
            case '11d': return <D11 className="fill-current w-3/12 lg:w-6/12" />
            case '11n': return <N11 className="fill-current w-3/12 lg:w-6/12" />
            case '13d': return <D13 className="fill-current w-3/12 lg:w-6/12" />
            case '13n': return <N13 className="fill-current w-3/12 lg:w-6/12" />
            case '50d': return <D50 className="fill-current w-3/12 lg:w-6/12" />
            case '50n': return <N50 className="fill-current w-3/12 lg:w-6/12" />
            default : return <D01 className="fill-current w-3/12 lg:w-6/12" />
        }
    }

    return (
        <div className="flex flex-col items-center justify-center p-3 col-span-1 row-span-2
        bg-gray-50 rounded bg-opacity-30 backdrop-filter backdrop-blur-md shadow-md dark:bg-gray-800 dark:bg-opacity-40">
            {switchIcon()}
            <p className="text-md lg:text-2xl tracking-wider">{props.weather}</p>
        </div>
    )
}

export default Icon
