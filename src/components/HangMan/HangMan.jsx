import Frame1 from '../../assets/images/Frame1.svg'
import Frame2 from '../../assets/images/Frame2.svg'
import Frame3 from '../../assets/images/Frame3.svg'
import Frame4 from '../../assets/images/Frame4.svg'
import Frame5 from '../../assets/images/Frame5.svg'
import Frame6 from '../../assets/images/Frame6.svg'
import Frame7 from '../../assets/images/Frame7.svg'
import Frame8 from '../../assets/images/Frame8.svg'

export default function HangMan({step}){
    const images =[Frame1,Frame2,Frame3,Frame4,Frame5,Frame6,Frame7,Frame8];
    return (
        <div className='w-[300px] h-[300px]'>
            <img src={step >= images.length?images[images.length-1]: images[step]}/>
        </div>
    )
}
