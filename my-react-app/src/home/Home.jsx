import { ListGroup, Navbar ,Button} from 'flowbite-react'
import { useEffect } from "react"
import  { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import Jumbotron from '../Component/Hero'
import Products from '../Component/Product'
import { getProducts } from '../state/action/ProductAction'

const Home = ()=> {

    const dispatch = useDispatch()
    const productstate = useSelector(state => state.products )
    const {isRequest, isSuccess, errorMessage, products:productData} = productstate


    useEffect(()=> {
       dispatch(getProducts())
       console.log(productData)
    }, [])

    return (
        <div>
    
    <div className="">
    <Navbar fluid rounded>
          <Navbar.Brand href="https://flowbite-react.com">
           
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
          </Navbar.Brand>
          <div className="flex md:order-2">
            <Button>Get started</Button>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <Navbar.Link href="#" active>
              Home
            </Navbar.Link>
            <Navbar.Link href="#">About</Navbar.Link>
            <Navbar.Link href="#">Services</Navbar.Link>
            <Navbar.Link href="#">Pricing</Navbar.Link>
            <Navbar.Link href="#">Contact</Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
    
        <Jumbotron/>
    
        <div className='container mx-auto mt-4'>
          <h2 className='font-bold text-4xl'>Latest Products</h2>
        </div>
    
        <Products products= {productData}/>
         
        </div>
    
        
        </div>
      )
    }
    
    export default Home 
   