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


function chooseIcon(num) {
    switch (num) {
            case '01d': return <D01 key={num} className="w-7/12 fill-current" />
            case '01n': return <N01 key={num} className="w-7/12 fill-current" />
            case '02d': return <D02 key={num} className="w-7/12 fill-current" />
            case '02n': return <N02 key={num} className="w-7/12 fill-current" />
            case '03d': return <D03 key={num} className="w-7/12 fill-current" />
            case '03n': return <N03 key={num} className="w-7/12 fill-current" />
            case '04d': return <D04 key={num} className="w-7/12 fill-current" />
            case '04n': return <N04 key={num} className="w-7/12 fill-current" />
            case '09d': return <D09 key={num} className="w-7/12 fill-current" />
            case '09n': return <N09 key={num} className="w-7/12 fill-current" />
            case '10d': return <D10 key={num} className="w-7/12 fill-current" />
            case '10n': return <N10 key={num} className="w-7/12 fill-current" />
            case '11d': return <D11 key={num} className="w-7/12 fill-current" />
            case '11n': return <N11 key={num} className="w-7/12 fill-current" />
            case '13d': return <D13 key={num} className="w-7/12 fill-current" />
            case '13n': return <N13 key={num} className="w-7/12 fill-current" />
            case '50d': return <D50 key={num} className="w-7/12 fill-current" />
            case '50n': return <N50 key={num} className="w-7/12 fill-current" />
            default: return <D01 key={num} className="w-7/12 fill-current" />
        }
}

export default chooseIcon
