import ContentLeft from "./ContentLeft"
import ContentRight from "./ContentRight"

const FlexContent = () => {
    return (
        <div className="container" style={styles.container}>
            <ContentLeft />
            <ContentRight />
        </div>
    )
}

const styles = {
    container: {
        width : 1200,
        height : 600,
        // margin: '50px auto',
        display: 'flex',
        justifyContent: 'space-between',
        gap: 30,
        marginBottom: '50px',
    },
 
}

export default FlexContent