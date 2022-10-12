import "./SearchPage.css"
import {Button} from "@material-ui/core";
import SearchResult from "./SearchResult";


const SearchPage = () => {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <p>Elemeto 1</p>
                <h1>ELemento head</h1>
                <Button variant="outlined" >Cancellation Flexibility</Button>
                <Button variant="outlined" >Type of Place</Button>
                <Button variant="outlined" >Price</Button>
                <Button variant="outlined" >Rooms and beds</Button>
                <Button variant="outlined" >More filters</Button>
            </div>

            <SearchResult 
                img="https://a0.muscache.com/im/pictures/6599ea33-b2d8-43b8-a6cf-f9ddef7654b4.jpg?im_w=1200" 
                location="Chile"
                title="Minicasa - Anfitrión: Gabriel"
                description="Todas las reservaciones incluyen protección gratuita en caso de que el anfitrión cancele, de que haya imprecisiones en el anuncio o de que surjan otros inconvenientes, como problemas al momento de hacer el check-in."
                star="4.5"
                price="100.000"
                total="wefwe"
            />
            <SearchResult 
                img="https://a0.muscache.com/im/pictures/6599ea33-b2d8-43b8-a6cf-f9ddef7654b4.jpg?im_w=1200" 
                location="Chile"
                title="Minicasa - Anfitrión: Gabriel"
                description="Todas las reservaciones incluyen protección gratuita en caso de que el anfitrión cancele, de que haya imprecisiones en el anuncio o de que surjan otros inconvenientes, como problemas al momento de hacer el check-in."
                star="4.5"
                price="100.000"
                total="wefwe"
            />
            <SearchResult 
                img="https://a0.muscache.com/im/pictures/6599ea33-b2d8-43b8-a6cf-f9ddef7654b4.jpg?im_w=1200" 
                location="Chile"
                title="Minicasa - Anfitrión: Gabriel"
                description="Todas las reservaciones incluyen protección gratuita en caso de que el anfitrión cancele, de que haya imprecisiones en el anuncio o de que surjan otros inconvenientes, como problemas al momento de hacer el check-in."
                star="4.5"
                price="100.000"
                total="wefwe"
            />
            <SearchResult 
                img="https://a0.muscache.com/im/pictures/6599ea33-b2d8-43b8-a6cf-f9ddef7654b4.jpg?im_w=1200" 
                location="Chile"
                title="Minicasa - Anfitrión: Gabriel"
                description="Todas las reservaciones incluyen protección gratuita en caso de que el anfitrión cancele, de que haya imprecisiones en el anuncio o de que surjan otros inconvenientes, como problemas al momento de hacer el check-in."
                star="4.5"
                price="100.000"
                total="wefwe"
            />
            <SearchResult 
                img="https://a0.muscache.com/im/pictures/6599ea33-b2d8-43b8-a6cf-f9ddef7654b4.jpg?im_w=1200" 
                location="Chile"
                title="Minicasa - Anfitrión: Gabriel"
                description="Todas las reservaciones incluyen protección gratuita en caso de que el anfitrión cancele, de que haya imprecisiones en el anuncio o de que surjan otros inconvenientes, como problemas al momento de hacer el check-in."
                star="4.5"
                price="100.000"
                total="wefwe"
            />

        </div>
    )
}


export default SearchPage