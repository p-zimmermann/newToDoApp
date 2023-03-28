import styled from 'styled-components'

const Heading  = styled.h1`
    font-size: 24px;
    color: "red";
    &:hover {
        scale: 1.2
    }
`

const TestHeading = () => {
    return (
    <Heading> Text </Heading>    
    )
}

export default TestHeading