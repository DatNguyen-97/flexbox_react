import Item3 from "./Item3"
import Item4 from "./Item4"

const SubItem3 = () => {
    return (
        <div className="sub_item3" style={styles.sub_item3}>
            <Item3 />
            <Item4 />
        </div>
    )
}

const styles = {
    sub_item3 : {
        width : '100%',
        height : '72%',
        display: 'flex',
        justifyContent: 'space-between'
    },
}

export default SubItem3