const AmbientProgressBar = (props) => {
    const { /*bgcolor,*/ completed} = props;

    const containerStyles = {
        height: 20,
        width: '30em',
        backgroundColor: "#e0e0de",
        borderRadius: 50,
    }

    const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: "#444044",
        borderRadius: 'inherit',
        textAlign: 'right'
    }

    const labelStyles = {
        padding: 5,
        color: 'white',
        fontWeight: 'bold'
    }

    return (
        <div style={{margin: "5px"}}>
            <div style={{textAlign: "center", fontWeight: "700"}}>Benessere ambientale</div>
            <div style={containerStyles}>
                <div style={fillerStyles}>
                    <span style={labelStyles}>{`${completed}%`}</span>
                </div>
            </div>
        </div>

    );
};

export default AmbientProgressBar;