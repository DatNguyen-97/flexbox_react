const FlexContent = () => {
    return (
        <div className="container" style={styles.container}>
            <div className="content" style={styles.content}>
                <div className="sub_item1" style={styles.sub_item1}></div>
                <div className="sub_item2" style={styles.sub_item2}>
                    <div className="item1" style={styles.item1}>
                        <div className="item1_1" style={styles.item1_1}></div>
                        <div className="item1_2" style={styles.item1_2}></div>
                    </div>
                    <div className="item2" style={styles.item2}></div>
                </div>
            </div>
        
            <div className="content" style={styles.content}>
                <div className="sub_item3" style={styles.sub_item3}>
                <div className="item3" style={styles.item3}>
                        <div className="item3_1" style={styles.item3_1}></div>
                        <div className="item3_2" style={styles.item3_2}></div>
                        <div className="item3_3" style={styles.item3_3}></div>
                </div>
                <div className="item4" style={styles.item4}>
                        <div className="item4_1" style={styles.item4_1}></div>
                        <div className="item4_2" style={styles.item4_2}></div>
                        <div className="item4_3" style={styles.item4_3}></div>
                </div>
                </div>
                <div className="sub-item4" style={styles.sub_item4}></div>
            </div>
        </div>
    )
}

const styles = {
    container: {
        width : 1200,
        height : 600,
        margin: '50px auto',
        display: 'flex',
        justifyContent: 'space-between',
        gap: 30,
    },
    content: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    sub_item1 : {
        width : '100%',
        height : '23%',
        backgroundColor: '#6b1313',
    },
    sub_item2 : {
        width : '100%',
        height : '72%',
        display: 'flex',
        justifyContent: 'space-between'
    },
    sub_item3 : {
        width : '100%',
        height : '72%',
        display: 'flex',
        justifyContent: 'space-between'
    },
    sub_item4 : {
        width: '100%',
        height: '23%',
        backgroundColor: '#626b13'
    },
    item1 : {
        width: '47%',
        height: '100%',
        display : 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    item2 : {
        width: '47%',
        height: '100%',
        backgroundColor: '#334e8e'
    },
    item3 : {
        width: '47%',
        height: '100%',
        display : 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    item4 : {
        width: '47%',
        height: '100%',
        display : 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    item1_1 : {
        width: '100%',
        height: '72%',
        backgroundColor: '#760778'
    },
    item1_2 : {
        width: "100%",
        height: "23%",
        backgroundColor: "#626b13",
    },

    item3_1 : {
        width: "100%",
        height: "35%",
        backgroundColor: "#334e8e",
    },

    item3_2 : {
        width: "100%",
        height: "20%",
        backgroundColor: "#338e86",
    },

    item3_3 : {
        width: "100%",
        height: "35%",
        backgroundColor: "#d4551f",
    },

    item4_1 : {
        width: "100%",
        height: "35%",
        backgroundColor: "#4d1962",
    },

    item4_2 : {
        width: "100%",
        height: "35%",
        backgroundColor: "#338e86",
    },

    item4_3 : {
        width: "100%",
        height: "20%",
        backgroundColor: "#d4551f",
    }
}

export default FlexContent