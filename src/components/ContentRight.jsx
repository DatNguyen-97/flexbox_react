import SubItem3 from "./SubItem3"
import SubItem4 from "./SubItem4"

const ContentRight = () => {
    return (
        <div className="content" style={styles.content}>
            <SubItem3 />
            <SubItem4 />
        </div>
    )
}

const styles = {
    content: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
}

export default ContentRight