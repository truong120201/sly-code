import Header from '../components/Header/Header.js'
import LogIn from '../components/LogIn/LogIn.js'
import Search from '../components/Search/Search.js'
import Cart from '../components/Cart/Cart.js'
import Navigation from '../components/Navigation/Navigation.js'
import Footer from '../components/Footer/Footer.js'
import ProductDesc from '../components/ProductDesc/ProductDesc.js'

import { Routes, Route, HashRouter } from 'react-router-dom'

import ScrollToTop from '../components/ScrollToTop/ScrollToTop.js'

import ProductsPage from './ProductsPage.js';
import HomeProducts from './HomeProducts.js'

import { useState, useEffect } from 'react'
import SideBars from '../components/SideBars/SideBars.js'

function Home() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("https://sly-json.herokuapp.com/products")
            .then(res => res.json())
            .then(
                (result) => {
                    setProducts(result)
                }
            )
    }, []);

    const [isShowLogIn, setShowLogIn] = useState(false)

    const handleShowLogIn = (newValue) => {
        setShowLogIn(newValue)
    }

    const [isShowSearch, setShowSearch] = useState(false)

    const handleShowSearch = (newValue) => {
        setShowSearch(newValue)
    }

    const [isShowCart, setShowCart] = useState(false)

    const handleShowCart = (newValue) => {
        setShowCart(newValue)
    }

    const [isShowMobiSideBars, setShowMobiSideBars] = useState(false)

    const handleShowMobileSideBars = (newValue) => {
        setShowMobiSideBars(newValue)
    }

    if (isShowLogIn || isShowSearch || isShowCart || isShowMobiSideBars) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = 'unset'
    }


    return (
        <>
            <Header
                handleShowLogIn={handleShowLogIn}
                handleShowSearch={handleShowSearch}
                handleShowCart={handleShowCart}
                handleShowMobileSideBars={handleShowMobileSideBars}
            />
            {
                isShowMobiSideBars && <SideBars
                    handleShowMobileSideBars={handleShowMobileSideBars}
                    handleShowLogIn={handleShowLogIn}
                />
            }
            {
                isShowLogIn && <LogIn handleShowLogIn={handleShowLogIn} />
            }
            {
                isShowSearch && <Search handleShowSearch={handleShowSearch} />
            }
            {
                isShowCart && <Cart handleShowCart={handleShowCart} />
            }
            <Navigation />
            <>
                <ScrollToTop />
            </>
            <Routes>
                {<>
                    <Route path='/' element={<HomeProducts />}></Route>
                    <Route path='/all-products' element={<ProductsPage productGenres="all" header="ALL PRODUCTS" />}></Route>
                    <Route path='/hoodie' element={<ProductsPage productGenres="hoodie" header="ALL HOODIE" />}></Route>
                    <Route path='/sweater' element={<ProductsPage productGenres="sweater" header="ALL SWEATER" />}></Route>
                    <Route path='/t-shirt' element={<ProductsPage productGenres="tshirt" header="ALL T-SHIRT" />}></Route>
                    <Route path='/jacket' element={<ProductsPage productGenres="jacket" header="ALL JACKET" />}></Route>
                    <Route path='/bottoms' element={<ProductsPage productGenres="bottoms" header="ALL BOTTOMS" />}></Route>
                    <Route path='/accessories' element={<ProductsPage productGenres="accessories" header="ALL ACCEESSORIES" />}></Route>
                    {
                        products.map((product, index) => {
                            return (
                                <Route key={index} path={`/${product.id}`} element={<ProductDesc handleShowCart={handleShowCart} product={product} productID={product.id} />}></Route>
                            )
                        })
                    }
                </>
                }
            </Routes>
            <Footer />
        </>
    )
}

export default Home