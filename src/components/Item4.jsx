import Item41 from "./Item41"
import Item42 from "./Item42"
import Item43 from "./Item43"

const Item4 = () => {
    return (
        <div className="item4" style={styles.item4}>
            <Item41 />
            <Item42 />
            <Item43 />
        </div>
    )
}

const styles = {
    item4 : {
        width: '47%',
        height: '100%',
        display : 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
}

export default Item4