import OptionItem from '../optionItem/optionItem'
import dashboardSvg from '../../assets/img/dashboard.svg'  
import userSvg from '../../assets/img/user.svg'

import './aside.css'

const Aside = () => {
    return (
        <>
            <div>
                <ul className="container-aside">
                    <OptionItem src={dashboardSvg} name="Dashboard" path="/dashboard"/>
                    <OptionItem src={userSvg} name="Alunos" path="/dashboard/alunos"/>
                </ul>
            </div>
        </>
    )
}

export default Aside