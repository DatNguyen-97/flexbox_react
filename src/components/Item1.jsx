import Item11 from "./Item11"
import Item12 from "./Item12"

const Item1 = () => {
    return (
        <div className="item1" style={styles.item1}>
            <Item11 />
            <Item12 />
        </div>
    )
}

const styles = {
    item1 : {
        width: '47%',
        height: '100%',
        display : 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
}

export default Item1