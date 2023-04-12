import SubItem1 from "./SubItem1";
import SubItem2 from "./SubItem2";

const ContentLeft = () => {
    return (
        <div className="content" style={styles.content}>
            <SubItem1 />
            <SubItem2 />
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

export default ContentLeft