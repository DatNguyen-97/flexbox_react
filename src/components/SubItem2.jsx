import Item1 from "./Item1"
import Item2 from "./Item2"

const SubItem2 = () => {
    return (
        <div className="sub_item2" style={styles.sub_item2}>
            <Item1 />
            <Item2 />
        </div>
    )
}

const styles = {
    sub_item2 : {
        width : '100%',
        height : '72%',
        display: 'flex',
        justifyContent: 'space-between'
    },
}

export default SubItem2