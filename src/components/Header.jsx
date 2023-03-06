import PropTypes from 'prop-types'

function Header({text, bgColor, textColor}) {
    //add styles inside a variable
    const headerStyles = {
        // color: 'green',
        color: textColor,
        backgroundColor: bgColor
    }
  return (
    //inline styles
    // <header style={{ backgroundColor: 'salmon'}}>
    <header style={headerStyles}>
        <div className='container'>
            <h2>{text}</h2>
        </div>
    </header>
  )
}

Header.defaultProps = {
    text: 'Feedback UI',
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: 'orange',
}

Header.propTypes = {
    text: PropTypes.string
}

export default Header