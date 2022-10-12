import "./Home.css";
import Card from "./Card";

const Home = () => {
    return (
        <div className="home">
            <div className="home__section">
                <Card src="https://a0.muscache.com/im/pictures/c8a024a7-d83a-48ab-a13d-1563176d76b0.jpg?im_w=720" title="hola" description="hola" price="28.000" />
                <Card src="https://a0.muscache.com/im/pictures/082249cf-309a-4c1d-b82a-248de2eadb1d.jpg?im_w=720" title="hola" description="hola" price="28.000" />
                <Card src="https://a0.muscache.com/im/pictures/3811be32-63fc-435e-8359-d003c9d17bdd.jpg?im_w=720" title="hola" description="hola" price="28.000" />
                <Card src="https://a0.muscache.com/im/pictures/af9493ff-71c8-4281-be31-967c4b4d3afc.jpg?im_w=720" title="hola" description="hola" price="28.000" />
                <Card src="https://a0.muscache.com/im/pictures/caea1af0-a1ae-4d9f-a9f6-7c9a6a527155.jpg?im_w=720" title="hola" description="hola" price="28.000" />

            </div>
        </div>
    )
}


export default Home