import propTypes from 'prop-types'
const MainContainer = ({children}) => {
  return (
    <div className='flex flex-wrap w-[90%] ml-auto mr-auto mt-[1vw]'>
        {children}
    </div>
  )
}

MainContainer.propTypes = {
    children: propTypes.node.isRequired
}

export default MainContainer