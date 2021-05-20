import OptionItem from '../optionItem/optionItem'
import dashboardSvg from '../../assets/img/dashboard.svg'  
import userSvg from '../../assets/img/user.svg'

import './aside.css'

const Aside = () => {
    return (
        <>
            <div className="container">
                <ul className="container-aside">
                    <OptionItem src={dashboardSvg} name="Dashboard"/>
                    <OptionItem src={userSvg} name="Alunos"/>
                </ul>
            </div>
        </>
    )
}

export default Aside