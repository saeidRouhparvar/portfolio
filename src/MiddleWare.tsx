const MiddleWare = ({element, ...props}) => {
    const El = element
    return (
        <>
            <El {...props}/>
        </>
    )
}
export default MiddleWare