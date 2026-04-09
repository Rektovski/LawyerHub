import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Navigation from "./main/components/Navigation";
import Body from "./main/components/Body";
import Footer from "./main/components/Footer";
import Header from "./main/components/navigationParts/Header";

export default function App() {
    return (
        <ChakraProvider>
            <div className="App">
                <Navigation/>
                <Header />
                <Body/>
                <Footer/>
            </div>
        </ChakraProvider>
    );
}
