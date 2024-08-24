import propTypes from 'prop-types'
import styles from './Banner.module.css'
const Banner = ({src, customClass}) => {
return (
    <div className={`${styles[customClass]} h-[15vw]`}>
            <img src={src} alt="Banner Image" className="w-full h-full object-cover rounded-sm" />
    </div>
)
}

Banner.propTypes = {
    src: propTypes.string.isRequired,
    customClass: propTypes.string.isRequired
}

export default Banner