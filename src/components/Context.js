import React, { Component } from 'react'

export const DataContext = React.createContext();

export class DataProvider extends Component {

    state = {
        products: [
            {
                "_id": "1",
                "title": "SERI HOT TERBARU",
                "src": "https://d2pa5gi5n2e1an.cloudfront.net/global/images/product/mobilephones/Infinix_HOT_10/Infinix_HOT_10_L_1.jpg",
                "content": "INFINIX HOT 10 hadir dengan layar TFT HD+ 6,78 inci, ditenagai oleh prosesor gaming MediaTek Helio G70 dengan RAM 4GB dan varian memori 64GB/128GB. Baterai 5200mAh, quad kamera belakang lensa utama 16MP, kamera selfie 8MP",
                "price": 1749000,
                "count": 1
            },
            {
                "_id": "2",
                "title": "SERI NOTE TERBARU",
                "src": "https://d2pa5gi5n2e1an.cloudfront.net/global/images/product/mobilephones/Infinix_Note_8_/Infinix_Note_8__L_1.jpg",
                "content": "INFINIX NOTE 8 hadir dengan layar sentuh lengkung 6,95 inci dengan dual hole-punch cutout yang memiliki kamera selfie 16MP + 2MP, kamera quad 64MP di bagian belakang, didukung oleh prosesor octa-core 2GHz, baterai 5.200 mAh dan 6GB RAM",
                "price": 2110000,
                "count": 1
            },
            {
                "_id": "3",
                "title": "SERI ZERO TERBARU",
                "src": "http://p.ipricegroup.com/uploaded_6cb4a9715f2f664bb26285046665ded7.jpg",
                "content": "INFINIX ZERO 8 perangkat Infinix pertama dengan chipset MediaTek Helio G90T dipadukan RAM 8GB. Zero 8 dibekali dual kamera selfie 48MP + 8MP dan quad kamera belakang sensor utama 64MP. Baterai 4500 mAh dengan Super Charge 33W",
                "price": 2999000,
                "count": 1
            }
        ],
        cart: [],
        total: 0
        
    };

    addCart = (id) =>{
        const {products, cart} = this.state;
        const check = cart.every(item =>{
            return item._id !== id
        })
        if(check){
            const data = products.filter(product =>{
                return product._id === id
            })
            this.setState({cart: [...cart,...data]})
        }else{
            alert("The product has been added to cart.")
        }
    };

    reduction = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count === 1 ? item.count = 1 : item.count -=1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    increase = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count += 1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    removeProduct = id =>{
        if(window.confirm("Do you want to delete this product?")){
            const {cart} = this.state;
            cart.forEach((item, index) =>{
                if(item._id === id){
                    cart.splice(index, 1)
                }
            })
            this.setState({cart: cart});
            this.getTotal();
        }
       
    };

    getTotal = ()=>{
        const{cart} = this.state;
        const res = cart.reduce((prev, item) => {
            return prev + (item.price * item.count);
        },0)
        this.setState({total: res})
    };
    
    componentDidUpdate(){
        localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
        localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
    };

    componentDidMount(){
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if(dataCart !== null){
            this.setState({cart: dataCart});
        }
        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
        if(dataTotal !== null){
            this.setState({total: dataTotal});
        }
    }
   

    render() {
        const {products, cart,total} = this.state;
        const {addCart,reduction,increase,removeProduct,getTotal} = this;
        return (
            <DataContext.Provider 
            value={{products, addCart, cart, reduction,increase,removeProduct,total,getTotal}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}


