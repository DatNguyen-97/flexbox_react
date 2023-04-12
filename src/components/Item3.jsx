import Item31 from "./Item31"
import Item32 from "./Item32"
import Item33 from "./Item33"

const Item3 = () => {
    return (
        <div className="item3" style={styles.item3}>
            <Item31 />
            <Item32 />
            <Item33 />
        </div>
    )
}

const styles = {
    item3 : {
        width: '47%',
        height: '100%',
        display : 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
}

export default Item3