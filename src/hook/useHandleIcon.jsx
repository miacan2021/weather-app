import { useState, useEffect } from 'react'
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


function useHandleIcon(num) {
    const [icon, setIcon] = useState('')
    useEffect(() => {
    switch (num) {
            case '01d': setIcon( <D01 key={num} className="w-7/12 fill-current" />)
            break
            case '01n': setIcon( <N01 key={num} className="w-7/12 fill-current" />)
            break
            case '02d': setIcon( <D02 key={num} className="w-7/12 fill-current" />)
            break
            case '02n': setIcon( <N02 key={num} className="w-7/12 fill-current" />)
            break
            case '03d': setIcon( <D03 key={num} className="w-7/12 fill-current" />)
            break
            case '03n': setIcon( <N03 key={num} className="w-7/12 fill-current" />)
            break
            case '04d': setIcon( <D04 key={num} className="w-7/12 fill-current" />)
            break
            case '04n': setIcon( <N04 key={num} className="w-7/12 fill-current" />)
            break
            case '09d': setIcon( <D09 key={num} className="w-7/12 fill-current" />)
            break
            case '09n': setIcon( <N09 key={num} className="w-7/12 fill-current" />)
            break
            case '10d': setIcon( <D10 key={num} className="w-7/12 fill-current" />)
            break
            case '10n': setIcon( <N10 key={num} className="w-7/12 fill-current" />)
            break
            case '11d': setIcon( <D11 key={num} className="w-7/12 fill-current" />)
            break
            case '11n': setIcon( <N11 key={num} className="w-7/12 fill-current" />)
            break
            case '13d': setIcon( <D13 key={num} className="w-7/12 fill-current" />)
            break
            case '13n': setIcon( <N13 key={num} className="w-7/12 fill-current" />)
            break
            case '50d': setIcon( <D50 key={num} className="w-7/12 fill-current" />)
            break
            case '50n': setIcon( <N50 key={num} className="w-7/12 fill-current" />)
            break
            default: setIcon( <D01 key={num} className="w-7/12 fill-current" />)
            break
        }
    }, [num])
    return icon
}

export default useHandleIcon
