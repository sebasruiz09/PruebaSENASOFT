import { Footer } from "../../Layout/Footer/Footer"
import { Header } from "../../Layout/Header/Header"
import { Main } from "../../Layout/Section/Main/Main"
import { Section } from "../../Layout/Section/Section"
import { CategoriesBar } from "../../UI/CategoriesBar/CategoriesBar"
import "./normalize.css"

export const Home = () =>{
    return(
        <div>
            <Header />
            <Section />
            <CategoriesBar />
            <Main />
            <Footer />
        </div>
    )
}