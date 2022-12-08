import ItemProduct from "../ItemProduct/ItemProduct";


const ItemList = ({data=[]}) => {
    return(
        data.map(productos => <ItemProduct key ={productos.id} info={productos}/>)
    );
}

export default ItemList