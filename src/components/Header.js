import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({ title }) => {
    return (
        <header className= 'header'>
            <h1 style={headingStyle}> {title}</h1>
            <Button color='green' text='Hello' /> {/*reusing components */}
            <Button color='blue' text='nice' />
            <Button color='red' text='to' />
            <Button color='yellow' text='have' />
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

const headingStyle = {
    color: 'red', backgroundColor: 'black'
}
export default Header
